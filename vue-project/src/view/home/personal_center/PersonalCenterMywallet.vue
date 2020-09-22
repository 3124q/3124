<template>
  <div id="PersonalCenterMywallet">
    <div class="Info-title">
      <div class="basic-info">
        我的钱包
      </div>
    </div>
    <div class="mywalletcontent">
      <div class="walletbalance">
        <div class="balance-title">
          <h3><span></span>账户余额  <router-link to="/recharge">充值</router-link></h3>
        </div>
        <div class="balance">
          <div class="mymoney">
            <strong class="amount">0</strong>
            <span class="fen">.00</span>
            元
          </div>
        </div>
      </div>
      <div class="walletbalance">
        <div class="balance-title">
          <h3><span></span>优惠券</h3>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PersonalCenterMywallet"
    }
</script>

<style scoped>
  a{
    text-decoration: none;
    font-size: 14px;
    color: #ec350bd1;
  }
  .mywalletcontent{
    margin-top: 10px;
    width: 100%;
    height: 300px;
    /*background-color: #2e9900;*/
  }
  .walletbalance{
    box-sizing: border-box;
    width: 100%;
    height: 115px;
    margin-bottom: 30px;
    padding: 16px 30px ;
    border: 1px solid #9093992e

    /*padding: 15%;*/
    /*background-color: #ff9419;*/
  }
  .walletbalance:hover{
    border: 1px solid rgb(31, 172, 171)
  }
  .walletbalance .balance-title{
    text-align: left;
  }
  .walletbalance .balance-title h3{
    /*height: 100%;*/
    margin: 0;
    height: 30px;
    line-height: 30px;
    /*border-left: 10px solid #0088a4;*/
  }
  .walletbalance .balance-title h3 span{
    display: inline-block;
    width: 5px;
    height: 100%;
    vertical-align: top;
    background-color: #0088a4;
    margin-right: 5px;
  }
  .balance{
    width: 100%;
    height: 50px;
    text-align: left;
    color: #ff9419;
    margin-top: 10px;
  }
  .balance .amount{
    font-size: 30px;
  }

</style>
