<template>
  <div class="OrderForm">
    <div class="OrderList">
      <p class="myOrder">我的订单</p>
      <p class="lookOrder">查看全部订单&nbsp;&gt;</p>
    </div>
    <ul class="OrderItem">
      <li>
        <van-icon class="icons" color="#6f6f6f" size="28px" name="pending-payment" />
        <span>待付款</span>
      </li>
      <li>
        <van-icon class="icons" color="#6f6f6f" size="28px" name="tosend" />
        <span>待发货</span>
      </li>
      <li>
        <van-icon class="icons" color="#6f6f6f" size="28px" name="logistics" />
        <span>待收货</span>
      </li>
      <li>
        <van-icon class="icons" color="#6f6f6f" size="28px" name="flower-o" />
        <span>待评价</span>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";
Vue.use(Icon);
export default {};
</script>
<style lang="scss" scoped>
@function vw($px) {
  @return ($px / 445) * 100vw;
}
.OrderForm {
  border-bottom: vw(13) solid #efeff4;
  .OrderList {
    padding-left: vw(18);
    padding-right: vw(13);
    display: flex;
    height: vw(52);
    align-items: center;
    justify-content: space-between;
    border-bottom: vw(1) solid #efeff4;
    .myOrder {
      font-size: vw(18);
      font-weight: 700;
    }
    .lookOrder {
      font-size: vw(12);
      color: #8e8e93;
    }
  }
  .OrderItem {
    height: vw(96);
    display: flex;
    li {
      width: 25%;
      text-align: center;
      display: flex;
      flex-direction: column;
      span {
        font-size: vw(12);
        margin-top: vw(18);
        display: inline-block;
      }
      .icons {
        display: inline-block;
        margin-top: vw(21);
      }
    }
  }
}
</style>