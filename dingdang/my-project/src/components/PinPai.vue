<template>
  <div class="PinPai">
    <h2>品牌专区</h2>
    <van-swipe class="PinPaiSwipe" :autoplay="5000" indicator-color="white" :height="125">
      <van-swipe-item class="PinPaiItem">
        <img
          class="PinPaiItemImg"
          src="https://img.ddky.com/c/cms/temp/20191108/1573185216268_1080_345.jpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item class="PinPaiItem">
        <img
          class="PinPaiItemImg"
          src="https://img.ddky.com/c/cms/temp/20191025/1571941981110_1080_345.jpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item class="PinPaiItem">
        <img
          class="PinPaiItemImg"
          src="https://img.ddky.com/c/cms/temp/20191025/1571939379056_1080_345.jpg"
          alt
        />
      </van-swipe-item>
    </van-swipe>
    <ul class="PinPaiList">
      <li>
        <img
          src="https://imgq.ddky.com/c/product/534075/big/z_1.jpg?t=1520820112491&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
          alt
        />
        <p class="til">[同仁堂]西洋参</p>
        <p class="qian1">
          <span>￥</span>
          <span>1249.00</span>
        </p>
      </li>
      <li>
        <img
          src="https://imgq.ddky.com/c/product/500900/big/z_1.jpg?t=999999&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
          alt
        />
        <p class="til">[同仁堂]羚羊角粉</p>
        <p class="qian1">
          <span>￥</span>
          <span>278.00</span>
        </p>
      </li>
      <li>
        <img
          src="https://imgq.ddky.com/c/product/542822/big/z_1.jpg?t=1563516066991&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
          alt
        />
        <p class="til">[同仁堂]羚羊角粉</p>
        <p class="qian1">
          <span>￥</span>
          <span>16.80</span>
        </p>
      </li>
      <li>
        <img
          src="https://imgq.ddky.com/c/product/543988/big/z_1.jpg?t=1562230448286&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
          alt
        />
        <p class="til">[同仁堂]天麻</p>
        <p class="qian1">
          <span>￥</span>
          <span>39.00</span>
        </p>
      </li>
      <li>
        <img
          src="https://imgq.ddky.com/c/product/538173/big/z_1.jpg?t=1536656475638&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
          alt
        />
        <p class="til">[同仁堂]艾绒</p>
        <p class="qian1">
          <span>￥</span>
          <span>42.00</span>
        </p>
      </li>
      <li class="more">
        <p class="lookmore">查看更多&gt;</p>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
export default {};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 445) * 100vw;
}
.PinPai {
  width: 100%;
  border-bottom: vw(11) solid #efeff4;
  h2 {
    height: vw(46);
    font-size: vw(20);
    line-height: vw(46);
    color: #333333;
    text-align: center;
  }
  .van-swipe__indicator {
    width: vw(12);
    height: vw(12);
  }
  .PinPaiSwipe {
    width: 100%;
    height: vw(144);
    .PinPaiItem {
      width: 100%;
      height: vw(144);
      .PinPaiItemImg {
        width: 100%;
        height: vw(144);
      }
    }
  }
  .PinPaiList {
    display: flex;
    height: vw(223) !important;
    overflow: auto;
    border-bottom: vw(11) solid #efeff4;
    .more {
      width: vw(123);
      height: 100%;
      text-align: center;
      padding: 0;
      .lookmore {
        width: vw(123);
        height: 100%;
        line-height: vw(223);
        font-size: vw(18);
        color: #e94544;
      }
    }
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
}
</style>