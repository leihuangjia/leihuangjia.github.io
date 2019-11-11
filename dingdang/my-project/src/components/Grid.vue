<template>
  <van-grid :column-num="4" :icon-size="32">
    <van-grid-item v-for="(g,index) in grids" :key="index" :icon="g.imgUrl" :text="g.text" />
  </van-grid>
</template>
<script>
import Vue from "vue";
import { Grid, GridItem } from "vant";
import axios from "axios";
Vue.use(Grid).use(GridItem);
export default {
  data() {
    return {
      grids: []
    };
  },
  created() {
    this.loadMore();
  },
  methods: {
    loadMore() {
      axios.get("http://localhost:3000/grids").then(({ data }) => {
        this.grids = data;
      });
    }
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 445) * 100vw;
}
.van-grid {
  margin-top: vw(10);
  .van-grid-item__content {
    padding-top: vw(17);
    padding-bottom: vw(17);
    .van-grid-item__text {
      color: #2c3e50;
    }
  }
}
</style>