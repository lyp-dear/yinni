<template>
  <div class="qa-main">
    <div class="qa">{{ $t('faq.txt7') }}</div>
    <div class="content">
      <div class="list-box" v-for="(item, idx) in problemData">
        <div class="title" @click="openProblem(item)">
          <p class="ell">
            {{ item.titleEn }}
          </p>
          <i class="right-arrow" :class="{ down: item.isOpen }"></i>
        </div>
        <div class="info" v-show="item.isOpen">
          {{ item.contentEn }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { problemData } from './qaData.js'
export default {
  data() {
    return {
      problemData,
      params: {
        page: 1,
        size: 200,
      },
      lang: localStorage.getItem('locale') || 'en_US',
    }
  },
  methods: {
    getData() {
      // this.helpProblemPage(this.params).then(res => {
      //   console.log('常见问答', res)
      //   if (res && res.code == 0) {
      //     let data = res.data ? res.data.records : []
      //     data.forEach(d => d.isOpen = false)
      //     this.problemData = data
      //   }
      // })
    },
    openProblem(item) {
      item.isOpen = !item.isOpen
    },
  },
}
</script>
<style lang="less">
.qa-main .right-arrow {
  border-color: #1e2e3b;
  width: 6px;
  height: 6px;
  margin-left: 5px;
  &.down {
    transform: rotate(45deg);
  }
}
</style>
