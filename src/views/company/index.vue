<template>
  <modMain title="About SunPower" class="about noPadding">
    <p>我们是谁?</p>
    <p>特斯拉的使命是加速世界向可持续能源的过渡。</p>
    <p>特斯拉于 2003 年由一群工程师创立，他们想证明电动汽车比汽油</p>
    <p>
      车更好、更快、更有趣。<br />它还生产可无限扩展的清洁能源收集和存储产品。
    </p>
    <img src="@/assets/image/tsl/about1.png" alt="" />
    <p>
      Tesla Powerwall，一个无论走到哪里都能产生能量的太阳能平台！<br />我们为您提供实时访问权限以监控您的太阳能投资。<br />太阳产生的每一种能量
      <br />可以满足世界一年四季的能源需求。<br />与需要精炼和燃烧化石燃料的传统能源不同，后者占用空间并需要很长时间。<br />任何人都可以购买和安装太阳能组件并享受许多可用的太阳能电源。<br />从长远来看，使用太阳能可以节省很多电费。<br />用太阳能发电既方便又容易。<br />不排放有害污染物
      <br />并且是环保、低污染的环保产业。<br />增值太阳能发电特许经营权是一种创新的投资选择。<br />和可靠的渠道
    </p>
    <img src="@/assets/image/tsl/about2.jpeg" alt="" />
    <p>什么是Powerwall？</p>
    <p>
      2015 年 4 月 30 日，特斯拉 CEO 埃隆·马斯克宣布，其子公司 Tesla Energy
      将使用为电动汽车开发的电池技术，并配备名为 Powerwall 的家用储能系统。<br />Powerwall
      是一种内置可充电锂电池组的储能设备。<br />液冷模块
      <br />逆变器等。在低功率需求（例如早上）和高峰功率消耗期间充电发挥作用。<br />在停电的情况下也能起到应急的作用，Powerwall针对的是家庭。<br />内置100kWh电池的大型机型，主要用于学校、医院等公共场所--Storable
      Energy--24/7
      <br />不间断电源-家用电源--停电时使用储存的能量为房屋供电--使用太阳能时可以为清洁能源充电--让电器连续使用的安心。并且作为存储能量的电池，检测停电并在停电时为房屋供电。<br />与发电机不同，Powerwall
      不需要维护。<br />无油耗 <br />并且没有噪音 <br />保持你的灯亮着
      <br />结合太阳能，可以通过阳光充电，可以连续为家用电器供电数天。Powerwall通过储存太阳能增加系统的电力自主性。<br />因此，您可以在晚上在家中享受清洁能源。单独使用
      Powerwall 或与其他特斯拉产品组合使用以节省资金。<br />减少碳排放
      <br />并帮助您应对停电。
    </p>
    <img src="@/assets/image/tsl/about3.png" alt="" />
    <p>你怎么赚钱？</p>
    <p>
      Tesla Powerwall 是一个为每个人带来太阳能的服务项目。<br />在太阳能租赁中，公司从客户那里收取固定费用，用于使用安装在其场所的太阳能系统。<br />在购电协议中
      <br />每次用电都会收到固定付款<br />（千瓦时）系统在合同期间产生的。<br />您可以免费申请我们的项目并获得丰厚的回报。
    </p>
    <p>
      1：租太阳能板，收入稳定，性价比高，比如我们租了1号太阳能板，只需要Rp100000就可以租45天，一天收入Rp5000，总收入Rp225000租约到期后会返还。<br />租用太阳能电池板产生的收入大部分适合大量用户使用。<br />灵活用钱
      <br />而且利率相当高
    </p>
    <img src="@/assets/image/tsl/about4.jpeg" alt="" />
    <p>7*24小时稳定工作</p>
    <p>Powerwall 通过在没有阳光的情况下储存太阳能来减少您对电网的依赖</p>
  </modMain>
</template>
<script>
export default {
  data() {
    return {
      showNews: false,
      news: [
        {
          path: '/new1',
          title: 'Afternoon review: the index opened high and went low in...',
        },
        {
          path: '/new2',
          title: 'China Daily News market broke out 19 shares, net profit...',
        },
        {
          path: '/new3',
          title: 'Boiling! A news from Energy Bureau, BIPV goes against the...',
        },
        {
          path: '/new4',
          title:
            'Full screen limit! The state enlarges and recruits the photov...',
        },
      ],
    }
  },
}
</script>
<style lang="less" scoped>
.about {
  padding: 50px 10px 0 10px;
  img {
    width: 100%;
    margin-bottom: 20px;
  }
  p {
    font-size: 14px;
    color: #fff;
    line-height: 20px;
    margin-bottom: 16px;
  }
}
</style>
