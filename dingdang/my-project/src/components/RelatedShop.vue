<template>
  <div class="RelatedShop">
    <ul class="RelatedShopList">
      <li @click="underline(index)" v-for="(i,index) in arr" :key="index">{{arr[index]}}</li>
    </ul>
    <p class="redline" :style="[{'left': arr2[data]}]"></p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: ["精选", "清热解毒", "头痛发烧", "止咳化痰", "便秘"],
      arr2: ["10px", "82px", "158px", "236px", "312px"],
      data: ""
    };
  },
  methods: {
    underline(index) {
      this.data = index;
    }
  }
};
</script>
<style lang="scss" scoped>
@function vw($px) {
  @return ($px / 445) * 100vw;
}
.RelatedShop {
  height: vw(54);
  position: relative;
  .RelatedShopList {
    height: vw(54);
    display: flex;
    li {
      width: 20%;
      text-align: center;
      height: vw(54);
      line-height: vw(54);
    }
  }
  .redline {
    width: vw(66);
    height: vw(3);
    line-height: vw(3);
    border-bottom: vw(3) solid #e94948;
    position: absolute;
    bottom: 0;
  }
}
</style>