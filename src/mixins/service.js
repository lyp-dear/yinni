import { mapActions, mapGetters } from 'vuex'
const myValidMixins = {
  data() {
    return {
      wathsrls: [],
      tgUrls: [],
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
    }),
  },
  created() {
    this.getLink()
  },
  methods: {
    ...mapActions({
      linkquery: 'user/linkquery',
    }),
    isLogin() {
      if (!this.userInfo || !this.userInfo.username) {
        this.$router.push('/login')
        return false
      }
      return true
    },
    getLink() {
      this.linkquery().then(res => {
        let data = res.data || []
        if (data.length > 0) {
          let tgs = data.filter(d => d.type == 'Telegram')
          let waths = data.filter(d => d.type == 'WhatsApp')
          this.tgUrls = tgs.map(d => d.link)
          this.wathsrls = waths.map(d => d.link)
        }
      })
    },
    toService(type = 'whats') {
      let _url = 'https://chat.whatsapp.com/IClOFljRgJVKPFfXuYbYO6'
      let idx = 0
      if (type == 'tggroup') {
        _url = 'https://t.me/+ERDI2kVhvXJkYjFl'
      } else if (type == 'tgSiaran') {
        _url = 'https://t.me/+ZNP1PAxkGIM0ZWRl'
      } else if (type == 'whats') {
        idx = parseInt(Math.random() * this.wathsrls.length, 10)
        _url = this.wathsrls[idx]
      } else if (type == 'whatsgroup') {
        _url = 'https://chat.whatsapp.com/IClOFljRgJVKPFfXuYbYO6' //tgGroup群
      }
      if (type == 'tgtask') {
        if (this.isLogin()) {
          _url = 'https://t.me/OKegroup'
        } else {
          return
        }
      }
      if (window.webkit) {
        window.webkit.messageHandlers.openBrowser.postMessage(_url)
      } else if (window.appInterface) {
        if (typeof window.appInterface.openBrowser === 'function') {
          window.appInterface.openBrowser(_url)
        } else if (typeof window.appInterface.goToBrowser === 'function') {
          window.appInterface.goToBrowser(_url)
        } else {
          window.location.href = _url
        }
      } else {
        window.location.href = _url
      }
    },
  },
}

export default myValidMixins
