<template>
  <ul class="CountDownItem">
    <li v-for="(i,index) in 9" :key="index">
      <img
        src="https://imgq.ddky.com/c/product/530235/big/z_1.jpg?t=1572263283478&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
        alt
      />
      <p class="til">让爱更持久</p>
      <p class="qian1">
        <span>￥</span>
        <span>99.80</span>
      </p>
      <p class="qian2">
        <span>￥</span>
        <span>448.00</span>
      </p>
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
.CountDownItem {
  display: flex;
  height: vw(223) !important;
  overflow: auto;
  border-bottom: vw(11) solid #efeff4;
  li {
    width: vw(123);
    height: 100%;
    padding: 0 vw(12);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: vw(123);
    border-right: vw(1) solid #efeff4;
    img {
      width: vw(100);
      height: vw(100);
      margin-bottom: vw(10);
    }
    .til {
      font-size: vw(14);
      line-height: vw(17);
    }
    .qian1 {
      width: 100%;
      font-size: vw(18);
      color: #e94544;
      text-align: center;
      margin-top: vw(15);
    }

    .qian2 {
      width: 100%;
      font-size: vw(14);
      color: #888;
      text-align: center;
      text-decoration: line-through;
    }
  }
}
</style>