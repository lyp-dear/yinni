// import { mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  // computed: {
  //   ...mapGetters({
  //     userInfo: 'user/userInfo',
  //   }),
  // },
  methods: {
    toSignIn() {
      let link =
        window.config.domain +
        's.html?c=S' +
        localStorage.getItem('u_symbolCode')
      window.location.href = link
    },
  },
}
