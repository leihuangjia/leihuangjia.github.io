<template>
  <div class="BrandSaleList">
    <div class="SaleListItem">
      <img src="https://img.ddky.com/c/cms/temp/20191101/1572575026213_540_504.jpg" alt />
    </div>
    <div class="SaleListItem SaleListItem2">
      <img src="https://img.ddky.com/c/cms/temp/20191101/1572575865201_540_252.jpg" alt />
      <img src="https://img.ddky.com/c/cms/temp/20191101/1572575252554_540_252.jpg" alt />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@function vw($px) {
  @return ($px / 445) * 100vw;
}
.BrandSaleList {
  width: 100%;
  height: vw(208);
  display: flex;
  border-bottom: vw(11) solid #efeff4;
  .SaleListItem {
    width: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .SaleListItem2 {
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
      height: 50%;
    }
  }
}
</style>