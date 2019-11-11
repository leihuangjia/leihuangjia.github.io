<template>
  <p class="hotSearch">
    <span>感冒</span>
    <span>咳嗽</span>
    <span>避孕</span>
    <span>发烧</span>
    <span>口置</span>
    <span>眼药水</span>
    <span>便秘</span>
  </p>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@function vw($px) {
  @return ($px / 445) * 100vw;
}
.hotSearch {
  width: 100%;
  padding-top: vw(16);
  padding-bottom: vw(16);
  line-height: vw(14);
  margin-left: vw(12);
  span {
    display: inline-block;
    color: #fff;
    font-size: vw(14);
    line-height: vw(14);
    margin-right: vw(26);
  }
}
</style>