<template>
  <div class="headTop">
    <img class="site" src="../assets/site.png" alt />
    <span>元岗路200号</span>
    <img class="down" src="../assets/down.png" alt />
    <img class="zoom" src="../assets/zoom.png" alt />
  </div>
</template>
<script>
export default {};
</script>
<style lang='scss' scoped>
@function vw($px) {
  @return ($px / 445) * 100vw;
}
.headTop {
  width: 100%;
  height: vw(65);
  position: relative;
  padding-top: vw(24);
  padding-bottom: vw(14);
  .site {
    width: vw(14);
    height: vw(18);
    margin-right: vw(10);
  }
  .down {
    width: vw(6);
    height: vw(6);
    margin-left: vw(6);
  }
  img,
  span {
    vertical-align: middle;
  }
  span {
    font-size: vw(24);
    line-height: vw(24);
    color: #fff;
    display: inline-block;
  }
  .zoom {
    width: vw(27);
    height: vw(27);
    text-align: right;
    position: absolute;
    right: vw(6);
    bottom: vw(14);
    display: none;
  }
}
</style>