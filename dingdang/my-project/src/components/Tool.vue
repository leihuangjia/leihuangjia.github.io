<template>
  <div class="tool">
    <p>常用工具</p>
    <ul class="toolItem">
      <li>
        <van-icon class="icons" color="#fb9389" size="28px" name="location-o" />
        <span>地址管理</span>
      </li>
      <li>
        <van-icon class="icons" color="#fb9389" size="28px" name="coupon-o" />
        <span>优惠券</span>
      </li>
      <li>
        <van-icon class="icons" color="#fb9389" size="28px" name="records" />
        <span>问诊记录</span>
      </li>
      <li>
        <van-icon class="icons" color="#fb9389" size="28px" name="star-o" />
        <span>文章收藏</span>
      </li>
      <li>
        <van-icon class="icons" color="#1890e4" size="28px" name="service-o" />
        <span>客户服务</span>
      </li>
      <li>
        <van-icon class="icons" color="#1890e4" size="28px" name="exchange" />
        <span>免流量</span>
      </li>
      <li>
        <van-icon class="icons" color="#1890e4" size="28px" name="envelop-o" />
        <span>邀友有奖</span>
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
.tool {
  border-bottom: vw(137) solid #efeff4;
  p {
    height: vw(52);
    line-height: vw(52);
    padding-left: vw(18);
    border-bottom: vw(1) solid #efeff4;
    font-size: vw(18);
    font-weight: 700;
  }
  .toolItem {
    height: vw(194);
    display: flex;
    flex-wrap: wrap;
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