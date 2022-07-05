import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'

// 为了首屏加载快，所以首页不使用懒加载
import Layout from '../views/layout'
import i18n from '../i18n'
// meta: {
//   title: i18n.tc('user.trade'),
// },

Vue.use(VueRouter)
NProgress.configure({
  ease: 'ease',
  speed: '500',
  showSpinner: false,
})
const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: {
      title: i18n.tc('sa.txt2'),
    },
    children: [
      {
        path: '/contract',
        name: 'contract',
        component: () => import('@/views/asset'),
        meta: {
          title: i18n.tc('sa.txt7'),
        },
      },

      {
        path: '/notice',
        name: 'notice',
        component: () => import('@/views/order'),
        meta: {
          title: i18n.tc('sa.txt8'),
          keepAlive: false,
        },
      },

      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/profit'),
        meta: {
          title: i18n.tc('sa.txt10'),
          keepAlive: true,
        },
      },
      {
        path: '/technique',
        name: 'Technique',
        component: () => import('@/views/technique'),
        meta: {
          title: i18n.tc('sa.txt4'),
          keepAlive: true,
          scrollToTop: true,
        },
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/quotation'),
        meta: {
          title: i18n.tc('sa.txt2'),
          keepAlive: false,
          scrollToTop: true,
        },
      },
      // {
      //   path: '/solar',
      //   name: 'Solar',
      //   component: () => import('@/views/solar'),
      //   meta: {
      //     title: 'Solar energy',
      //     keepAlive: true,
      //     scrollToTop: true,
      //   },
      // },
      // {
      //   path: '/operation',
      //   name: 'operation',
      //   component: () => import('@/views/operation'),
      //   meta: {
      //     title: 'Operation',
      //     keepAlive: true,
      //     scrollToTop: true,
      //   },
      // },
    ],
  },
  // {
  //   path: '/drawLucky',
  //   name: 'drawLucky',
  //   component: () => import('@/views/activity'),
  //   meta: {
  //     title: i18n.tc('sa.txt8'),
  //     keepAlive: true,
  //   },
  // },
  {
    path: '/welfare',
    name: 'welfare',
    component: () => import('@/views/team'),
    meta: {
      title: i18n.tc('sa.txt9'),
    },
  },
  {
    path: '/myTeam',
    name: 'myTeam',
    component: () => import('@/views/team/team'),
    meta: {
      title: i18n.tc('sa.txt9'),
      keepAlive: false,
    },
  },
  {
    path: '/investimento',
    name: 'investimento',
    component: () => import('@/views/asset/detail'),
    meta: {
      title: '债权转让书',
    },
  },
  {
    path: '/youtube',
    name: 'youtube',
    component: () => import('@/views/single/youtube'),
    meta: {
      title: '债权转让书',
    },
  },
  {
    path: '/gift',
    name: 'gift',
    component: () => import('@/views/gift'),
    meta: {
      title: 'VIP权益',
    },
  },
  {
    path: '/more',
    name: 'more',
    component: () => import('@/views/team/more'),
    meta: {
      title: i18n.tc('user.more'),
      keepAlive: true,
    },
  },
  // {
  //   path: '/announDetail',
  //   name: 'announDetail',
  //   component: () => import('@/views/activity/detail'),
  //   meta: {
  //     title: '',
  //     keepAlive: false,
  //   },
  // },
  {
    path: '/acvityDetail',
    name: '登录',
    component: () => import('@/views/single/acvityDetail'),
    meta: {
      title: i18n.tc('user.login'),
      pathName: 'login',
    },
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('@/views/single/register-login'),
    meta: {
      title: i18n.tc('user.login'),
      pathName: 'login',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/company'),
    meta: {
      title: i18n.tc('sa.txt3'),
      keepAlive: true,
      scrollToTop: true,
    },
  },
  {
    path: '/aboutOtc',
    name: 'aboutOtc',
    component: () => import('@/views/company/aboutOtc'),
    meta: {
      keepAlive: true,
      scrollToTop: true,
    },
  },
  {
    path: '/otcLevel',
    name: 'otcLevel',
    component: () => import('@/views/company/otcLevel'),
    meta: {
      keepAlive: true,
      scrollToTop: true,
    },
  },
  // {
  //   path: '/videodetail',
  //   name: 'videodetail',
  //   component: () => import('@/views/company/videodetail'),
  //   meta: {
  //     keepAlive: true,
  //     scrollToTop: true,
  //   },
  // },
  {
    path: '/guidance',
    name: 'guidance',
    component: () => import('@/views/company/guidance'),
    meta: {
      keepAlive: true,
      scrollToTop: true,
    },
  },
  {
    path: '/dynamic',
    name: 'dynamic',
    component: () => import('@/views/dynamic'),
    meta: {
      keepAlive: true,
      scrollToTop: true,
    },
  },
  {
    path: '/recruitment',
    name: 'recruitment',
    component: () => import('@/views/single/recruitment'),
    meta: {
      keepAlive: true,
      scrollToTop: true,
    },
  },
  {
    path: '/contractDetail',
    name: 'contractDetail',
    component: () => import('@/views/ingold/contract'),
    meta: {
      keepAlive: true,
      scrollToTop: true,
    },
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: () => import('@/views/single/feedback'),
    meta: {
      keepAlive: true,
      scrollToTop: true,
    },
  },

  {
    path: '/register',
    name: '注册',
    component: () => import('@/views/single/register-login'),
    meta: {
      title: i18n.tc('user.register'),
      pathName: 'register',
    },
  },
  {
    path: '/invite',
    name: '分享注册',
    component: () => import('@/views/single/signin'),
    meta: {
      title: i18n.tc('user.register'),
      pathName: 'register',
    },
  },
  {
    path: '/signin-success',
    name: '分享注册成功',
    component: () => import('@/views/single/signin-success'),
    meta: {
      title: i18n.tc('user.register'),
      pathName: 'register',
    },
  },
  {
    path: '/verification',
    name: 'verification',
    component: () => import('@/views/single/verification'),
    meta: {
      title: 'Verification',
    },
  },
  {
    path: '/updateLoginPwd',
    name: '修改登录密码',
    component: () => import('@/views/single/updateLoginPwd'),
    meta: {
      title: 'Change password', //i18n.tc('user.updateLoginPwd')
    },
  },
  {
    path: '/personal',
    name: '个人资料',
    component: () => import('@/views/my'),
    meta: {
      title: i18n.tc('user.profile'),
    },
  },
  {
    path: '/areacode',
    name: 'areacode',
    component: () => import('@/views/areacode'),
    meta: {
      title: 'Personal data',
    },
  },
  {
    path: '/reset',
    name: 'reset',
    component: () => import('@/views/single/reset'),
    meta: {
      title: 'Retset Password',
    },
  },
  {
    path: '/language',
    name: 'language',
    component: () => import('@/views/single/language'),
    meta: {
      title: 'Language',
    },
  },
  {
    path: '/misUpload',
    name: 'misUpload',
    component: () => import('@/views/single/upload'),
    meta: {
      title: 'Compartilhe os benefícios',
    },
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import('@/views/single/uploadShare'),
    meta: {
      title: 'Compartilhe os benefícios',
    },
  },
  {
    path: '/shareGroup',
    name: 'shareGroup',
    component: () => import('@/views/single/shareGroup'),
    meta: {
      title: 'shareGroup',
    },
  },
  {
    path: '/shareStep',
    name: 'shareUpshareStepload',
    component: () => import('@/views/single/shareStep'),
    meta: {
      title: 'Compartilhe os benefícios',
    },
  },
  {
    path: '/income',
    name: 'income',
    component: () => import('@/views/single/incomeDetail'),
    meta: {
      title: 'Income details',
    },
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('@/views/single/product'),
    meta: {
      title: 'product',
    },
  },
  {
    path: '/equipment',
    name: 'equipment',
    component: () => import('@/views/single/equipment'),
    meta: {
      title: 'Equipment liquidation',
    },
  },
  //下面有用的就提上去
  // {
  //   path: '/ingold',
  //   name: '出入金',
  //   component: () => import('@/views/ingold'),
  //   redirect: '/paymethods',
  //   meta: {
  //     title: '出入金',
  //   },
  //   children: [
  //     {
  //       path: '/paymethods',
  //       name: 'paymethods',
  //       component: () => import('@/views/ingold/methods'),
  //       meta: {
  //         // title: i18n.tc('deposit.chooseMethod'),
  //         toPath: 'paymethods',
  //       },
  //     },
  //   ],
  // },
  {
    path: '/paymethods',
    name: 'paymethods',
    component: () => import('@/views/ingold/methods'),
    meta: {
      title: i18n.tc('deposit.chooseMethod'),
    },
  },
  {
    path: '/deposit',
    name: 'deposit',
    component: () => import('@/views/ingold/inMoney'),
    meta: {
      // title: i18n.tc('bill.deposit'),
      toPath: 'InMoney',
      keepAlive: true,
    },
  },

  {
    path: '/withdrawal',
    name: 'withdrawal',
    component: () => import('@/views/ingold/withdrawal'),
    meta: {
      // title: i18n.tc('bill.deposit'),
      toPath: 'withdrawal',
      // keepAlive: true,
    },
  },
  {
    path: '/inOutList',
    name: '出入金记录',
    component: () => import('@/views/ingold/inOutList'),
    meta: {
      title: '',
    },
  },
  {
    path: '/inoutDetail',
    name: '充提币详情',
    component: () => import('@/views/ingold/details'),
    meta: {
      title: '充提币详情',
    },
  },
  {
    path: '/result-success',
    name: '结果详情',
    component: () => import('@/views/ingold/result-success'),
    meta: {
      title: '结果详情',
    },
  },
  {
    path: '/xieyi',
    name: '注册协议',
    component: () => import('@/views/single/xieyi'),
    meta: {
      title: i18n.tc('user.serviceAgreement'),
    },
  },
  {
    path: '/cpf',
    name: 'cpf',
    component: () => import('@/views/ingold/cpf'),
    meta: {
      title: '',
    },
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('@/views/ingold/form'),
    meta: {
      title: '',
    },
  },
  {
    path: '/share',
    name: '注册分享',
    component: () => import('@/views/single/share'),
    meta: {
      title: 'Invite',
    },
  },
  {
    path: '/sharePage',
    name: '落地页分享',
    component: () => import('@/views/share'),
    meta: {
      title: i18n.tc('sa.txt131'),
    },
  },
  {
    path: '/share-a',
    name: 'sharea',
    component: () => import('@/views/single/signin'),
    meta: {
      title: '',
    },
  },
  {
    path: '/share-b',
    name: 'shareb',
    component: () => import('@/views/single/signin'),

    meta: {
      title: '',
    },
  },
  {
    path: '/share-c',
    name: 'shareac',
    component: () => import('@/views/single/signin'),

    meta: {
      title: '',
    },
  },
  {
    path: '/share-d',
    name: 'shared',
    component: () => import('@/views/single/signin'),

    meta: {
      title: '',
    },
  },
  {
    path: '/sharePage',
    name: '落地页分享',
    component: () => import('@/views/single/signin'),

    meta: {
      title: i18n.tc('sa.txt131'),
    },
  },
  {
    path: '/payDetail',
    name: '卡片信息支付',
    component: () => import('@/views/ingold/payDetail'),
    meta: {
      title: '支付',
    },
  },
  {
    path: '/payiframe',
    name: '跳转支付页面',
    component: () => import('@/views/ingold/pay'),
    meta: {
      title: '支付',
    },
  },
  {
    path: '/problem',
    name: 'howToPlay',
    component: () => import('@/views/my/howToPlay'),
    meta: {
      title: 'How To Play',
    },
  },
  {
    path: '/membership',
    name: 'membership',
    component: () => import('@/views/single/membership'),
    meta: {
      title: 'Membership system',
    },
  },
  {
    path: '/help',
    name: 'help',
    component: () => import('@/views/my/help'),
    meta: {
      title: '',
    },
  },
  {
    path: '/setting',
    name: '设置',
    component: () => import('@/views/setting'),
    meta: {
      title: i18n.tc('user.setting'),
    },
  },
  {
    path: '/language',
    name: 'language',
    component: () => import('@/views/setting/language'),
    meta: {
      title: 'Language',
    },
  },
  {
    path: '/addcard',
    name: 'addcard',
    component: () => import('@/views/setting/addBCard'),
    meta: {
      title: 'addBCard',
    },
  },
  {
    path: '/choiseBank',
    name: 'choiseBank',
    component: () => import('@/views/setting/choiseBank'),
    meta: {
      title: 'Pilih Bank',
    },
  },
  {
    path: '/bankcard',
    name: 'bankCards',
    component: () => import('@/views/setting/bankCards'),
    meta: {
      title: 'bankCards',
    },
  },
  {
    path: '/merchantdetail',
    name: 'merchantdetail',
    component: () => import('@/views/order/detail'),
    meta: {
      title: 'bankCards',
    },
  },
  // 无权限页面
  {
    path: '/no-permission',
    name: 'NoPermission',
    component: () => import('@/views/error-page/no-permission'),
    meta: {
      title: '访问无权限',
    },
  },
  // 404 页面路由
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/views/error-page/404'),
    meta: {
      title: '页面走丢了',
    },
  },
  {
    path: '/captcha',
    name: 'captcha',
    component: () => import('@/views/single/captcha'),
    meta: {
      title: '滑块验证',
    },
  },
  {
    path: '/testregister',
    name: 'testregister',
    component: () => import('@/views/single/testregister'),
    meta: {
      title: '测试注册',
    },
  },
  // {
  //   path: '/fan',
  //   name: 'fans',
  //   component: () => import('@/views/fan'),
  //   meta: {
  //     title: '粉丝见面会',
  //   },
  // },
  {
    path: '/helpfile',
    name: 'helpfile',
    component: () => import('@/views/single/helpfile'),
    meta: {
      title: 'helpfile',
    },
  },
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const env = process.env.NODE_ENV
const router = new VueRouter({
  // mode: env == 'production' || env == 'uat' ? 'history' : '',
  base: env == 'production' || env == 'uat' ? '/' : '',
  routes,
  // 页面滚动行为
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0,
    }
  },
})
router.beforeEach((to, from, next) => {
  document.title = 'Tslenergy' // to.meta.title
  // 没有token时候,无法跳转其他页面.
  const Token = localStorage.getItem('token')
  // let loginUrls = ['/deposit', '/withdrawal']
  // if (loginUrls.includes(to.path) && !Token) {
  //   next('/login')
  // }
  NProgress.start()
  next()
})
router.afterEach(transition => {
  NProgress.done()
})
export default router
