<template>
  <ul class="grid2">
    <li v-for="(g,index) in grids2" :key="index">
      <img :src="`${g.imgUrl}`" alt />
    </li>
  </ul>
</template>
<script>
import Vue from "vue";
import { Grid, GridItem } from "vant";
import axios from "axios";
Vue.use(Grid).use(GridItem);
export default {
  data() {
    return {
      grids2: []
    };
  },
  created() {
    this.loadMore();
  },
  methods: {
    loadMore() {
      axios.get("http://localhost:3000/grids2").then(({ data }) => {
        window.console.log(data);
        this.grids2 = data;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.grid2 {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  li {
    width: 20%;
    img {
      width: 100%;
    }
  }
}
</style>