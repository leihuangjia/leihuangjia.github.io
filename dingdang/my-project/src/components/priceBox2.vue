<template>
  <ul class="priceBox2">
    <li class="priceBox2_item">
      <img src="../assets/priceBox2_item.png" alt />
      <span>附近药店</span>
    </li>
    <li class="priceBox2_item">
      <img src="../assets/priceBox2_item.png" alt />
      <span>28分钟快送</span>
    </li>
    <li class="priceBox2_item">
      <img src="../assets/priceBox2_item.png" alt />
      <span>24小时服务</span>
    </li>
    <li class="priceBox2_item">
      <img src="../assets/priceBox2_item.png" alt />
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
.priceBox2 {
  display: flex;
  padding: 0px vw(12);
  width: vw(445);
  height: vw(50);
  background-color: #fe5164;
  align-items: center;
  display: none;
  .priceBox2_item {
    flex: 1;
    img {
      width: vw(15);
      height: vw(15);
      vertical-align: middle;
    }
    span {
      font-size: vw(13);
      vertical-align: middle;
      display: inline-block;
      padding-left: vw(6);
      color: #fff;
    }
  }
}
</style>