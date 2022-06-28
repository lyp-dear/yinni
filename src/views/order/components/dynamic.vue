<template>
  <div class="dynamic">
    <van-list
      v-if="orderData && orderData.length > 0"
      v-model="isUpLoading"
      :finished="upFinished"
      :immediate-check="false"
      offset="20"
      @load="onLoadList"
      :loading-text="$t('load.txt1')"
      :finished-text="$t('load.txt2')"
    >
      <div class="dynamic-info" v-for="(item, index) in orderData" :key="index">
        <div class="exchange-label-value">
          <p>
            <span>{{ $t('exchange.txt28') }}</span>
            <span class="size-max"> {{ item.uid }}</span>
          </p>
          <p>
            <span>{{ $t('exchange.txt29') }}</span>
            <span class="size-max"> {{ $t('index.txt8') }} </span>
            <img
              v-for="(info, oIndex) in item.starLevel"
              :key="oIndex"
              src="@/assets/image/otc/start.png"
              alt=""
            />
          </p>
          <p>
            <span>{{ $t('exchange.txt14') }}</span>
            <span class="size-max"> {{ item.merchantName }} </span>
          </p>
          <p>
            <span>{{ $t('exchange.txt13') }}</span>
            <span>
              {{ $utils.currencyType
              }}{{ $utils.getkStr(item.amount * item.runPoint) }}
            </span>
          </p>
          <p>
            <span>{{ $t('exchange.txt30') }}</span>
            <span> {{ item.runTime }}</span>
          </p>
        </div>
        <div class="dynamic-btn">
          {{
            item.status == 'PROCESSING'
              ? $t('exchange.txt31')
              : $t('exchange.txt41')
          }}
        </div>
      </div>
    </van-list>

    <loadding v-if="isShowLoadding"></loadding>

    <no-data
      v-else-if="!isShowLoadding && (!orderData || orderData.length == 0)"
    ></no-data>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      params: {
        page: 1,
        size: 20,
      },
      orderData: [],
      isUpLoading: false, // 上拉加载更多
      upFinished: false, //上拉加载完毕
      isDownLoading: false, // 下拉刷新
      isShowLoadding: false,
      pullingText: this.$t('sys.pullingText'),
      loosingText: this.$t('sys.loosingText'),
      loadingText: this.$t('sys.uploadding'),
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.scrollTo(0, 0)
    })
  },
  created() {
    this.getList()
  },
  methods: {
    ...mapActions({
      dynamicOrder: 'order/dynamicOrder',
    }),
    getList() {
      this.dynamicOrder(this.params)
        .then(res => {
          if (res.code == 0) {
            // this.incomeData = res.data.records || []
            this.total = Number(res.data.total || 0)
            this.loadFinished(res.data.records)
          } else {
            this.errDialog(res.msg)
          }
        })
        .catch(res => {})
    },

    loadFinished(rows) {
      this.upFinished = false
      // this.isLoading = true
      if (rows == null || rows.length === 0) {
        // 加载结束
        this.upFinished = true
        this.isDownLoading = false
        this.isUpLoading = false
        this.isLoading = false
        return
      }
      if (rows.length < this.params.size) {
        // 最后一页不足size条的情况
        this.upFinished = true
      }
      // 处理数据
      if (this.params.page === 1) {
        this.orderData = rows
      } else {
        this.orderData = this.orderData.concat(rows)
      }
      //如果列表数据条数>=总条数，不再触发滚动加载
      if (this.orderData.length >= this.total) {
        this.upFinished = true
      }
      this.isDownLoading = false
      this.isUpLoading = false
      this.isLoading = false
      console.log(this.orderData)
    },
    // 下拉刷新
    onDownRefresh() {
      this.params.page = 1
      this.isShowLoadding = true
      setTimeout(() => {
        this.orderData = []
        this.upFinished = false // 不写这句会导致你上拉到底过后在下拉刷新将不能触发下拉加载事件
        this.isDownLoading = true
        this.isUpLoading = true
        this.getList()
      }, 1000)
    },
    // 上拉加载请求方法
    onLoadList() {
      this.params.page += 1
      this.isShowLoadding = true
      setTimeout(() => {
        this.isUpLoading = true
        this.getList()
      }, 1000)
    },
  },
}
</script>
<style lang="less" scoped>
.dynamic {
  margin-top: 20px;
  padding-bottom: 40px;
}
</style>
