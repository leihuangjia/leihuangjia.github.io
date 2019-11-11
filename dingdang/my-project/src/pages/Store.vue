<template>
  <main>
    <div style="height:56px;"></div>
    <StoreHead />
    <GongGao2red />
    <Swipe />
    <AdviceBox />
    <Grid2 />
    <GongGao2 />
    <CountDown />
    <CountDownItem />
    <BrandSaleList />
    <PinPai />
    <GoodsList2 />
    <ICP />
  </main>
</template>
<script>
import StoreHead from "../components/StoreHead.vue";
import GongGao2red from "../components/GongGao2red.vue";
import Swipe from "../components/Swipe.vue";
import AdviceBox from "../components/AdviceBox.vue";
import Grid2 from "../components/Grid2.vue";
import GongGao2 from "../components/GongGao2.vue";
import CountDown from "../components/CountDown.vue";
import CountDownItem from "../components/CountDownItem.vue";
import BrandSaleList from "../components/BrandSaleList.vue";
import PinPai from "../components/PinPai.vue";
import GoodsList2 from "../components/GoodsList2.vue";
import ICP from "../components/ICP.vue";
export default {
  components: {
    StoreHead,
    GongGao2red,
    Swipe,
    AdviceBox,
    Grid2,
    GongGao2,
    CountDown,
    CountDownItem,
    BrandSaleList,
    PinPai,
    GoodsList2,
    ICP
  }
};
</script>
<style lang="scss" scoped>
@function vw($px) {
  @return ($px / 445) * 100vw;
}
main {
  width: 100%;
  margin-bottom: vw(59);
}
</style>