<template>
  <van-search class="search" placeholder="搜索药品、症状、品牌" shape="round" v-model="searchText" />
</template>
<script>
import Vue from "vue";
import { Search } from "vant";
import store from "../stores";
Vue.use(Search);
export default {
  data() {
    return {
      searchText: ""
    };
  },
  watch: {
    searchText(newValue) {
      store.setsearchText(newValue);
    } 
  }
};
</script>
<style lang="scss" scoped>
@function vw($px) {
  @return ($px / 445) * 100vw;
}
.search {
  border-radius: 5px;
  width: vw(422);
  height: vw(40);
  padding: 0;
  .van-search__content {
    height: vw(40);
  }
}
</style>