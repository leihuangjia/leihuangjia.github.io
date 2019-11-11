<template>
  <div class="dhead">
    <div class="LoginHead">
      <ul class="LoginHeadList">
        <router-link
          :to="i.aa"
          tag="li"
          :class="{active :active == i.name}"
          @click.native="underline(index,i.name)"
          v-for="(i,index) in arr"
          :key="i.name"
          v-text="i.name"
        ></router-link>
      </ul>
      <p class="redline" :style="[{'left': arr2[data]}]"></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        { name: "商品", aa: "detailShop" },
        { name: "详情", aa: "detailShow" },
        { name: "评价", aa: "detailEvaluate" }
      ],
      arr2: ["64px", "160px", "252px"],
      data: "",
      color: "#ff5a5f",
      active: "商品"
    };
  },
  methods: {
    underline(index, name) {
      this.data = index;
      this.active = name;
    }
  }
};
</script>
<style lang="scss" scoped>
@function vw($px) {
  @return ($px / 445) * 100vw;
}
.active {
  color: #ff5a5f !important;
}
.dhead {
  position: fixed;
  top: 0;
  z-index: 9999;
  background: #fff;
}
.LoginHead {
  width: 100%;
  height: vw(53);
  position: relative;
  .LoginHeadList {
    height: vw(53);
    display: flex;
    padding-left: vw(60);
    li {
      width: vw(112);
      text-align: center;
      height: vw(53);
      line-height: vw(53);
      color: #666666;
    }
  }
  .redline {
    width: vw(77);
    height: vw(3);
    line-height: vw(3);
    border-bottom: vw(3) solid #ff5a5f;
    position: absolute;
    bottom: 0;
    left: 64px;
  }
}
</style>