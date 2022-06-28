<template>
  <modMain title="About SunPower" class="about-otc">
    <div class="otc-txt">
      <p>
        After completing the SunPower merchant redemption work, you can obtain
        stable additional income at any time, any place, and any device.
        <br /><br />
        SunPower is a personal digital currency arbitrage investment launched by
        SunPower based on customer needs. It specifically provides individual
        investors with financial and investment management services that meet
        their needs, helping you to make more wise investment decisions on the
        road to greater responsibilities in life. <br />
      </p>
    </div>
    <div class="otc-banner">
      <div><img src="@/assets/image/otc/otc1.jpg" alt="" /></div>
      <div><img src="@/assets/image/otc/otc2.jpg" alt="" /></div>
      <div><img src="@/assets/image/otc/otc3.jpg" alt="" /></div>
      <div><img src="@/assets/image/otc/otc4.jpg" alt="" /></div>
    </div>
    <div class="otc-txt">
      <p>
        SunPower cooperates with well-known digital currency exchanges (Binance,
        Coinbase, SunPower, Wazirx, AAX), with an average daily exchange volume
        of 10M+USDT. As a professional team, SunPower provides reliable, safe
        and fast exchange transactions for every customer service. <br /><br />
        SunPower provides users with different levels of merchant choices,
        namely SunPower junior merchants and SunPower ☆One-star merchants,
        SunPower OTC ☆☆Two-star merchants, SunPower ☆☆☆Samsung merchants,
        SunPower ☆☆☆☆Four-star merchants, SunPower ☆☆☆☆☆Five-star merchants.
        <br /><br />
        Different levels of OTC merchants have different pledge deposit amount,
        single exchange limit, and single exchange income. The higher the level,
        the higher the pledge deposit required, and the higher the exchange
        income obtained. As a professional team, SunPower is sure to be SunPower
        merchants provide stable and safe exchange income.
      </p>
    </div>
    <div class="img-box"><img src="@/assets/image/otc/otc5.jpg" alt="" /></div>

    <div class="otc-txt">
      <p>
        For example: pledge ₹100,000 to become SunPower ☆☆☆☆Four-star merchants
        can get 3 redemption opportunities a day, with a minimum income of
        ₹3,000 for a single redemption, and a minimum daily income of ₹9,000.
        Each user can pledge multiple times to obtain more exchange
        opportunities and earn more exchange income. <br /><br />
        As a trading team, SunPower cooperates with well-known exchanges
        (Binance, Coinbase, SunPower, Wazirx), and will guarantee to provide
        every customer with stable, safe and fast exchange transaction services
        and income.
      </p>
    </div>
  </modMain>
</template>

<style lang="less" scoped>
.about-otc {
  .otc-banner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 10px;
    & > div {
      flex: 0 0 49%;
      height: 60px;
      border: 0.6px solid #0094f6;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 6px;
      &:nth-of-type(2n) {
        margin-left: 1%;
      }

      img {
        width: 100%;
        height: 60px;
        object-fit: cover;
      }
    }
  }
  .img-box {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .otc-txt {
    margin-top: 10px;
    p {
      font-size: 14px;
      line-height: 18px;
      color: #1e2e3b;
    }
  }
}
</style>
