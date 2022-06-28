<template>
  <div class="share-land share-c">
    <div class="boxs box1" @click="toSignIn">
      <img src="@/assets/image/xapp/land/ld3.png" alt="">
      <div class="learn-more" @click="toSignIn">Limited time today</div>
    </div>
    <div class="boxs box2" @click="toSignIn">
      <img src="@/assets/image/xapp/land/ld4.png" alt="">
    </div>
    <comments />
    <div class="free-reg" @click="toSignIn">
      Free registration
    </div>
  </div>
</template>
<script>
import comments from './components/comments'
import comMixins from './comMixins'
export default {
  mixins: [comMixins],
  components: {
    comments
  },
}
</script>
