<template>
  <van-swipe
    class="GongGao2"
    style="height: 30px;"
    :autoplay="2000"
    :show-indicators="false"
    vertical
  >
    <van-swipe-item class="item2">叮当币上线了，消费1元获得1叮当币，可兑换优惠券，详戳</van-swipe-item>
    <van-swipe-item class="item2">
      <span class="til">服务</span>自营店铺单店满79免运费,全国配送
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
export default {};
</script>
<style lang="scss" scoped>
@function vw($px) {
  @return ($px / 445) * 100vw;
}
.GongGao2 {
  width: 100%;
  padding: 0 vw(12);
  margin-bottom: vw(11);
  border-top: vw(1) solid #efeff4;
  border-bottom: vw(11) solid #efeff4;
  margin: 0;
  .item2 {
    font-size: vw(12);
    color: #e94544;
    .til {
      border: 1px solid #e94544;
      border-radius: 3px;
      padding: vw(1);
      display: inline-block;
      margin-right: vw(3);
    }
  }
}
</style>