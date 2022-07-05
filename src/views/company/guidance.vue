<template>
  <modMain :title="$t('index.txt5')" class="about-otc">
    <div class="otc-txt">
      <h2>1: How to become an Tslenergy merchant</h2>

      <div class="otc-banner">
        <div><img src="@/assets/image/otc/otc1.jpg" alt="" /></div>
        <div><img src="@/assets/image/otc/otc2.jpg" alt="" /></div>
        <div><img src="@/assets/image/otc/otc3.jpg" alt="" /></div>
        <div><img src="@/assets/image/otc/otc4.jpg" alt="" /></div>
      </div>
      <p>
        Tslenergy cooperates with well-known digital currency exchanges
        (Binance, Coinbase, Tslenergy, Wazirx, AAX), with an average daily
        exchange volume of 10M+USDT. As a professional team, Tslenergy provides
        reliable, safe and fast exchange transactions for every customer
        service. <br /><br />
      </p>
      <div class="otc-banner merchat-banner">
        <div><img src="@/assets/image/otc/merchant1.jpg" alt="" /></div>
        <div><img src="@/assets/image/otc/merchant2.jpg" alt="" /></div>
        <div><img src="@/assets/image/otc/merchant3.jpg" alt="" /></div>
        <div><img src="@/assets/image/otc/merchant4.jpg" alt="" /></div>
        <div><img src="@/assets/image/otc/merchant5.jpg" alt="" /></div>
      </div>
      <p>
        Tslenergy provides users with different levels of merchant choices,
        namely Tslenergy junior merchants and Tslenergy ☆One-star merchants,
        Tslenergy OTC ☆☆Two-star merchants, Tslenergy ☆☆☆Samsung merchants,
        Tslenergy ☆☆☆☆Four-star merchants, Tslenergy ☆☆☆☆☆Five-star merchants.
        <br /><br />
        Users register Tslenergy to become Tslenergy junior merchants. The
        pledge deposit is presented by Tslenergy. After the shortest pledge time
        is reached, the user can choose to release the pledge, and the pledge
        deposit will be returned to the user account. <br /><br />
        Tslenergy junior merchants can obtain redemption opportunities through
        U-Task. <br /><br />
        Every U-Task task is reviewed by the system. After the review is passed,
        you can get a redemption opportunity, Tslenergy junior merchants can get
        the exchange income after completing the exchange.
        <br /><br />
        Tslenergy star-rated merchants are one-star merchants, two-star
        merchants, three-star merchants, four-star merchants, and Tslenergy
        five-star merchants. <br />
        After Tslenergy users complete the corresponding pledge, they can become
        Tslenergy For OTC star-rated merchants, each level of merchants has 3
        redemption opportunities per day. Merchants of different levels have
        different pledge deposits, different single redemption limits, and
        different single redemption benefits. The higher the level of the
        merchant, the higher the amount of pledge deposit required, and the
        higher the corresponding income. The shortest pledge time is 60 days.
        After the shortest pledge time is reached, merchants of all levels can
        choose to release the pledge or continue the pledge. The pledge will be
        released, and the pledge deposit amount will be returned to the user
        account.
        <br />
        Every Tslenergy user can pledge Tslenergy multiple times For OTC
        star-rated merchants, the more pledges, the more exchange opportunities
        they get every day, and the higher the income. All Tslenergy Every time
        OTC star-rated merchants redeem the income, they reach the user account
        in real time, and Tslenergy supports users to withdraw cash at any time.
      </p>
    </div>

    <div class="otc-txt">
      <h2>2: How to exchange for arbitrage to earn income</h2>
      <div class="otc-banner merchat-banner">
        <div><img src="@/assets/image/otc/otc10.jpg" alt="" /></div>
        <div><img src="@/assets/image/otc/otc11.jpg" alt="" /></div>
      </div>
      <p>
        All Tslenergy merchants can view all pledges and daily redemption
        opportunities on the redemption interface. <br />
        Click on the opportunity order you want to redeem, Tslenergy system will
        automatically allocate the corresponding income exchange merchant to
        complete the redemption, Tslenergy merchants can also choose the
        redemption merchants they want to redeem for. <br />
        Tslenergy All OTC merchants' opportunity orders to be redeemed will be
        displayed in the redemption merchant's redemption order, and the
        Tslenergy system will complete the redemption based on factors such as
        merchant level. <br /><br />
        Tslenergy cooperates with well-known digital currency exchanges, and the
        average daily exchange volume is 10M+USDT. As a professional team,
        Tslenergy provides reliable, safe and fast exchange transaction services
        for every customer.
      </p>
    </div>

    <div class="otc-txt">
      <h2>3: How to use U-Task</h2>

      <img src="@/assets/image/otc/otc12.jpg" alt="" />
      <p>
        Users register Tslenergy to become Tslenergy junior merchants. Tslenergy
        provides U-Task services to merchants of all levels. <br />
        U-Task provides WhatsApp sharing, Telegram sharing, FaceBook sharing,
        and YouTube sharing. <br />
        Every Tslenergy user can complete all sharing tasks provided by U-Task
        every day, and each sharing will be audited by the Tslenergy system.
        After passing the audit, you can get Tslenergy Redemption opportunities
        for OTC junior merchants. <br />
        Get Tslenergy After the OTC primary merchants exchange the opportunity,
        you can see the corresponding exchange opportunity on the OTC interface,
        and you can get the exchange income after completing the exchange.
        <br />
        Tslenergy sets corresponding rules for U-Task tasks. Using U-Task with
        high quality can get exchange opportunities faster.
      </p>
    </div>
    <div class="otc-txt">
      <h2>4: Invite friends and use Tslenergy together to earn money</h2>
      <img src="@/assets/image/otc/power5.jpg" alt="" />
      <p>
        Together with your friends, use Tslenergy to exchange for income. As a
        global exchange arbitrage platform, Tslenergy encourages more users to
        join, improves the efficiency of capital utilization, and earns more
        income. Send your own invitation link to share with your friends. For
        every real and effective invitation, Tslenergy will give generous
        rewards.
        <br /><br />
        Reward 4INR for every friend invited<br />
        Give the inviter a bonus of 2% of the pledge deposit amount<br />
        Give the inviter a 5% single redemption income reward
      </p>
    </div>
  </modMain>
</template>

<style lang="less" scoped>
.about-otc {
  img {
    width: 100%;
    border: 0.6px solid #0094f6;
    border-radius: 4px;
    margin-bottom: 6px;
  }
  .otc-banner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 10px;
    &.merchat-banner {
      & > div {
        height: auto;
        img {
          height: auto;
        }
      }
    }
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
    h2 {
      font-size: 18px;
      margin-bottom: 10px;
      font-weight: 500;
      color: #000;
    }
    p {
      font-size: 14px;
      line-height: 18px;
      color: #1e2e3b;
    }
  }
}
</style>
