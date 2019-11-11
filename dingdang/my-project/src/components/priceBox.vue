<template>
  <ul class="priceBox">
    <li class="priceBox_item">
      <img src="../assets/priceBox_item.png" alt />
      <span>附近药店</span>
    </li>
    <li class="priceBox_item">
      <img src="../assets/priceBox_item.png" alt />
      <span>28分钟快送</span>
    </li>
    <li class="priceBox_item">
      <img src="../assets/priceBox_item.png" alt />
      <span>24小时服务</span>
    </li>
    <li class="priceBox_item">
      <img src="../assets/priceBox_item.png" alt />
      <span>满28免运费</span>
    </li>
  </ul>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@function vw($px) {
  @return ($px / 445) * 100vw;
}
.priceBox {
  display: flex;
  padding: 0px vw(12);
  margin: vw(12);
  height: vw(51);
  background-color: #fff8ee;
  align-items: center;
  border-radius: vw(5);
  .priceBox_item {
    flex: 1;
    img {
      width: vw(15);
      height: vw(15);
      vertical-align: middle;
    }
    span {
      font-size: vw(13);
      color: #e94544;
      vertical-align: middle;
      display: inline-block;
      padding-left: vw(6);
    }
  }
}
</style>