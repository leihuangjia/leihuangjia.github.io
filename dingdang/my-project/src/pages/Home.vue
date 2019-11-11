<template>
  <div>
    <div style="height:130px;"></div>
    <header>
      <HeadTop />
      <Search />
      <HotSearch />
    </header>
    <priceBox2 />
    <main>
      <Grid />
      <priceBox />
      <Swipe />
      <TouTiao />
      <Promotion />
      <GongGao />
      <GoodsList />
      <ICP />
    </main>
  </div>
</template>
<script>
import HeadTop from "../components/HeadTop.vue";
import Search from "../components/Search.vue";
import HotSearch from "../components/HotSearch.vue";
import priceBox2 from "../components/priceBox2.vue";
import Grid from "../components/Grid.vue";
import priceBox from "../components/priceBox.vue";
import Swipe from "../components/Swipe.vue";
import TouTiao from "../components/TouTiao.vue";
import Promotion from "../components/Promotion.vue";
import GongGao from "../components/GongGao.vue";
import GoodsList from "../components/GoodsList.vue";
import ICP from "../components/ICP.vue";
export default {
  components: {
    HeadTop,
    Search,
    HotSearch,
    priceBox2,
    Grid,
    priceBox,
    Swipe,
    TouTiao,
    Promotion,
    GongGao,
    GoodsList,
    ICP
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 445) * 100vw;
}
header {
  background-color: #e94544;
  background: -webkit-gradient(linear, 0 0, 0 100%, from(#f77062), to(#fe5164));
  width: 100%;
  height: vw(154);
  position: fixed;
  top: 0;
  z-index: 999;
  padding: 0 vw(12);
  box-shadow: 0 vw(2) vw(4) 0 rgba(250, 69, 69, 0.5);
}
main {
  width: 100%;
  margin-bottom: vw(59);
}
</style>