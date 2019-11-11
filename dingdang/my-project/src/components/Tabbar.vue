<template>
  <van-tabbar active-color="#ff5a5f" v-model="active">
    <van-tabbar-item to="/main/home" icon="wap-home-o">叮当快药</van-tabbar-item>
    <van-tabbar-item to="/main/store" icon="goods-collect-o">叮当商城</van-tabbar-item>
    <van-tabbar-item to="/main/car" icon="description">清单列表</van-tabbar-item>
    <van-tabbar-item to="/main/mine" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 445) * 100vw;
}
.van-tabbar {
  height: vw(59);
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  .van-tabbar-item {
    flex: 1;
  }
}
</style>