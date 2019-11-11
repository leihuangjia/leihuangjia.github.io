<template>
  <div class="StoreHead">
    <p style>
      <img src="../assets/site.png" alt />
      <span>元岗路200号</span>
      <img class="right" src="../assets/right.png" alt />
    </p>
    <van-search class="storeSearch" placeholder="搜索" v-model="value" shape="round" />
  </div>
</template>
<script>
import Vue from "vue";
import { Search } from "vant";
Vue.use(Search);
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>
<style lang="scss" scoped>
@function vw($px) {
  @return ($px / 445) * 100vw;
}
.StoreHead {
  width: 100%;
  height: vw(66);
  background-color: #e94544;
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  padding-left: vw(18);
  padding-right: vw(12);
  justify-content: space-between;
  img {
    width: vw(14);
    height: vw(18);
  }
  .right {
    width: vw(8);
    height: vw(13);
  }
  span {
    color: #fff;
    font-size: vw(18);
    display: inline-block;
    margin-left: vw(10);
  }
  .storeSearch {
    display: inline-block;
    width: vw(237);
    height: vw(32);
    padding: 0;
    border-radius: 50%;
    text-align: right;
    .van-search__content {
      width: vw(237);
      height: vw(32);
      margin-bottom: vw(5);
      .van-cell {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>