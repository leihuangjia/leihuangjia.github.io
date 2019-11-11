<template>
  <div class="promotion">
    <h2>促销专区</h2>
    <div class="promotion_img">
      <img class="gapjianju" src="../assets/promotion/promotion1.jpg" alt />
      <img src="../assets/promotion/promotion2.jpg" alt />
    </div>
    <h2>促销专区</h2>
    <div class="promotion_img">
      <img class="gapjianju" src="../assets/promotion/promotion3.jpg" alt />
      <img src="../assets/promotion/promotion4.jpg" alt />
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
.promotion {
  padding: 0 vw(12);
  h2 {
    line-height: vw(48);
    font-size: vw(26);
    font-weight: 700;
    color: #333;
  }
  .promotion_img {
    display: flex;
    img {
      width: vw(205);
      height: vw(91);
    }
    .gapjianju {
      margin-right: vw(12);
    }
  }
}
</style>