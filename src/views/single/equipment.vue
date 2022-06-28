<template>
  <modMain title="Equipment liquidation">
    <div class="main asset purchase my-assets equipment">
      <!-- <div class="top-box">
        <div class="top">
          <p><span>Number of units: </span><span class="green">{{cumuRevenue}}</span></p>
          <p><span>In operation: </span><span class="green">{{dayRevenue}}</span></p>
        </div>
        <div class="bot col">
          <p> <span>2342342</span>Liquidation in progress</p>
        </div>
      </div> -->
      <div class="content ">
        <template v-if="orderData && orderData.length">
          <div class="mento-list" v-for="item in orderData">
            <div class="t-info">
              {{ $t('sa.txt167') }}:Rp {{ $utils.getkStr(item.amount) }}
            </div>
            <div class="top">
              <div class="left">
                <img class="sun" src="@/assets/image/xapp/sun.png" alt="" />
                <img
                  class="ban"
                  :src="
                    require('@/assets/image/xapp/ban' +
                      item.panelVolume +
                      '.png')
                  "
                  alt=""
                />
              </div>
              <div class="info">
                <div class="total">
                  <p class="t">Rp {{ $utils.getkStr(item.amount) }}</p>
                  <p>{{ $t('sa.txt19') }}</p>
                </div>
                <div class="rent" @click="onRent(item)">
                  {{ $t('sa.txt88') }}
                </div>
              </div>
            </div>
          </div>
        </template>
        <loadding v-else-if="isShowLoadding"></loadding>
        <no-data
          v-else-if="!isShowLoadding && (!orderData || orderData.length == 0)"
        ></no-data>
      </div>
    </div>
    <van-popup v-model="showOrder">
      <div class="pop-info" v-if="currentData">
        <div class="top">
          <img class="sun" src="@/assets/image/xapp/sun.png" alt="" />
          <img
            class="ban"
            :src="
              require('@/assets/image/xapp/ban' +
                currentData.panelVolume +
                '.png')
            "
            alt=""
          />
        </div>
        <div class="cell-box line05">
          <p>
            {{ $t('sa.txt155') }} {{ currentData.workDay }}
            {{ ispt ? 'hari' : 'days' }}
          </p>
        </div>
        <van-button
          class="submit-btn"
          @click="showOrder = false"
          loading-type="spinner"
          >{{ $t('sys.confirm') }}</van-button
        >
        <!-- <div class="submit-btn" @click="submit">Confirmed</div> -->
      </div>
    </van-popup>
  </modMain>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      isShowLoadding: false,
      cumuRevenue: 0,
      dayRevenue: 0,
      orderData: null,
      currentData: null,
      showOrder: false,
    }
  },
  computed: {
    ispt() {
      let locale = localStorage.getItem('locale') || 'en_US'
      return locale == 'en_US'
    },
  },
  created() {
    this.getData()
  },
  methods: {
    ...mapActions({
      orderqueryPage: 'order/orderqueryPage',
    }),
    getData() {
      this.isShowLoadding = true
      let params = {
        page: 1,
        size: 300,
      }
      this.orderqueryPage(params).then(res => {
        let data = res.data.records || []
        this.orderData = data
        this.isShowLoadding = false
      })
    },
    onRent(item) {
      this.currentData = item
      this.showOrder = true
    },
  },
}
</script>
