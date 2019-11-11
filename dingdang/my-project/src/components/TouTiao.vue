<template>
  <ul class="toutiao">
    <li class="tt_img">
      <img src="../assets/toutiao50.png" alt />
    </li>
    <li class="ttCont">头晕、恶心、呕吐……问题可能在耳朵里！</li>
    <li>
      <span>|</span>
      <span>更多</span>
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
.toutiao {
  display: flex;
  margin: vw(12);
  font-size: vw(18);
  height: vw(48);
  align-items: center;
  background-color: #f8e9e9;
  border-radius: vw(5);
  .tt_img {
    margin: vw(12);
    img {
      width: vw(84);
      height: vw(22);
    }
  }
  .ttCont {
    width: vw(253);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>

