<template>
  <div class="Swipe">
    <van-swipe :autoplay="3000" indicator-color="#fa6062" :width="392" :height="125">
      <van-swipe-item>
        <img src="../assets/swipe/swipe1.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/swipe/swipe2.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/swipe/swipe3.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/swipe/swipe4.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/swipe/swipe5.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/swipe/swipe6.jpg" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
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
.Swipe {
  height: vw(135);
  margin: 0 vw(12);
  background: pink;
  border-radius: vw(5);
  overflow: hidden;
  img {
    width: vw(421);
    height: vw(135);
    border-radius: vw(5) !important;
  }
  .van-swipe__indicator {
    width: vw(20) !important;
    height: vw(2) !important;
    border-radius: 0 !important;
    display: block !important;
    margin: 0 vw(4);
  }
}
.van-swipe {
  width: vw(421);
  height: vw(135);
  border-radius: vw(5);
}
</style>