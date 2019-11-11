<template>
  <van-divider class="icp" :style="{  borderColor: '#e2e2e4', padding: '0 16px' }">京ICP备 14046980号</van-divider>
</template>
<script>
import Vue from "vue";
import { Divider } from "vant";
Vue.use(Divider);
export default {};
</script>
<style lang="scss" scoped>
@function vw($px) {
  @return ($px / 445) * 100vw;
}
.icp {
  background: #efeff4;
  margin: 0;
  width: 100%;
  height: vw(42);
}
</style>