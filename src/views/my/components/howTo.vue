<template>
  <div class="help-top">
    <div class="title">
      {{ $t('faq.txt1') }}
    </div>
    <div class="help-top-main">
      <div class="help-info" @click="goDetail(1)">
        <div class="icon">
          <img src="@/assets/image/home/help2.png" alt="" />
        </div>
        <p>{{ $t('faq.txt2') }}</p>
      </div>
      <div class="help-info" @click="goDetail(3)">
        <div class="icon">
          <img src="@/assets/image/home/help1.png" alt="" />
        </div>
        <p>{{ $t('faq.txt3') }}</p>
      </div>
      <router-link
        tag="div"
        :to="{
          path: '/feedback',
          query: {
            type: 'feedback',
          },
        }"
        class="help-info"
      >
        <div class="icon">
          <img src="@/assets/image/home/help4.png" alt="" />
        </div>
        <p>{{ $t('faq.txt4') }}</p>
      </router-link>
    </div>
    <div class="help-top-main">
      <router-link
        tag="div"
        :to="{
          path: '/feedback',
          query: {
            type: 'bug',
          },
        }"
        class="help-info"
      >
        <div class="icon">
          <img src="@/assets/image/home/help5.png" alt="" />
        </div>
        <p>{{ $t('faq.txt5') }}</p>
      </router-link>
      <div class="help-info" @click="toService('whats')">
        <div class="icon">
          <img src="@/assets/image/home/help6.png" alt="" />
        </div>
        <p>{{ $t('faq.txt6') }}</p>
      </div>
      <div class="help-info" @click="toService('whats')"></div>
    </div>
  </div>
</template>
<script>
import mixinsSerivce from '@/mixins/service'

export default {
  mixins: [mixinsSerivce],
  methods: {
    goDetail(type) {
      this.$router.push({
        path: '/help',
        query: { type },
      })
    },
  },
}
</script>
<style lang="less" scoped>
.help-top {
  margin-bottom: 50px;
  .title {
    font-size: #131313;
    font-weight: 500;
    font-size: 20px;
    padding-top: 24px;
  }
  .help-top-main {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    .help-info {
      flex: 1;
      .icon {
        width: 24px;
        margin: 0 auto;
        img {
          width: 100%;
        }
      }
      p {
        margin-top: 10px;
        text-align: center;
        color: #666;
        font-size: 12px;
      }
    }
  }
}
</style>
