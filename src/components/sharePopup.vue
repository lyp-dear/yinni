<template>
  <van-popup
    v-model="currentShow"
    @open="open"
    @close="close"
    @click-overlay="close"
    safe-area-inset-bottom
  >
    <div class="popup-box">
      <div class="popup-content" slot="content">
        <div class="share-content">
          <div class="copylink">
            <p>{{ link }}</p>
            <!-- <div
              class="copy-btn"
              v-clipboard:copy="coypLink"
              v-clipboard:success="copy"
            >
              <img src="@/assets/image/otc/copy.png" alt="" />
              <span> {{ $t('task.txt68') }}</span>
            </div> -->
          </div>
          <van-button
            class="copy-btn"
            v-clipboard:copy="coypLink"
            v-clipboard:success="copy"
            >复制链接</van-button
          >
          <div class="copy-txt">
            <p>现在推广</p>
            <p>
              复制邀请链接。 选择您要推广的平台。 粘贴并转发到您的所有社交网络。
              当有人通过您的邀请链接成功注册时。
              您可以在该部分查看您的促销活动的收入。 应用的“推荐收入”
            </p>
          </div>
          <div class="share-logo">
            <div class="logos-share" ref="logoShare">
              <div
                class="s-logo"
                data-sharer="whatsapp"
                :data-title="shareTitle"
                :data-url="link"
              >
                <img src="@/assets/image/xapp/logo-wa.png" alt="" />
              </div>

              <!-- <div class="s-logo">
                <img src="@/assets/image/home/ShareChat.png" alt="" />

                <p>ShareChat</p>
              </div>
              <div class="s-logo">
                <img src="@/assets/image/home/Moj.png" alt="" />
                <p>Moj</p>
              </div>
              <div class="s-logo">
                <img src="@/assets/image/home/Discord.png" alt="" />

                <p>Discord</p>
              </div> -->
              <div
                class="s-logo"
                data-sharer="facebook"
                :data-hashtag="hashtag"
                :data-title="shareTitle"
                :data-url="link"
              >
                <img src="@/assets/image/xapp/logo-fb.png" alt="" />
              </div>
              <div
                class="s-logo"
                data-sharer="telegram"
                :data-title="shareTitle"
                :data-url="link"
              >
                <img src="@/assets/image/xapp/logo-tg.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </van-popup>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    showheader: {
      type: Boolean,
      default: true,
    },
    closeable: {
      type: Boolean,
      default: false,
    },
    height: {
      type: String,
      default: '70%',
    },
    iconName: {
      type: String,
      default: 'zhutu',
    },
    title: {
      type: String,
      default: 'link kode nefrens',
    },
    link: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      active: 0,
      showPopup: false,
      currentShow: false,
      shareTitle: this.$t('task.txt66'),
      hashtag: window.config.domain,
      coypLink: '',
    }
  },
  watch: {
    show() {
      this.currentShow = this.show
    },
    link(val) {
      this.coypLink = this.shareTitle + val
    },
  },

  methods: {
    copy(val) {
      this.showDialog('Success')
    },
    open() {
      this.$nextTick(() => {
        console.log(1111)
        window.Sharer.init()
      })
    },
    close() {
      this.$emit('close')
    },
  },
}
</script>
