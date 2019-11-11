<template>
  <div class="gongGao">
    <img src="../assets/gg.png" alt />
    <van-swipe
      class="gongGaoSwip"
      :autoplay="2000"
      indicator-color="white"
      :show-indicators="false"
      :width="381"
      :height="22"
    >
      <van-swipe-item>店为您提供24小时快速配送服务。</van-swipe-item>
      <van-swipe-item>合作药店叮当智慧药房（广州）有限公司广州白云京溪</van-swipe-item>
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
.gongGao .van-swipe[data-v-425e9e74] {
  height: vw(22);
}
.gongGao {
  padding: vw(24) vw(22) 0 vw(12);
  margin-bottom: vw(12);
  display: flex;
  height: vw(44);
  overflow: hidden;
  img {
    width: 31px;
    height: 13px;
    margin: 4px 11px 6px 6px;
  }
  .van-swipe {
    margin-top: 3px;
    height: vw(44);
    .van-swipe-item {
      font-size: 12px;
    }
  }
}
</style>