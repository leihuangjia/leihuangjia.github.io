<template>
  <div class="CountDown">
    <van-count-down :time="time">
      <template v-slot="timeData">
        <span class="miaosha">秒杀</span>
        <span class="item">{{ timeData.hours }}</span>
        <span class="shifenmaio">时</span>
        <span class="item">{{ timeData.minutes }}</span>
        <span class="shifenmaio">分</span>
        <span class="item">{{ timeData.seconds }}</span>
        <span class="shifenmaio">秒</span>
      </template>
    </van-count-down>
  </div>
</template>
<script>
import Vue from "vue";
import { CountDown } from "vant";
Vue.use(CountDown);
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000
    };
  }
};
</script>
<style lang="scss" scoped>
@function vw($px) {
  @return ($px / 445) * 100vw;
}
.item {
  display: inline-block;
  width: vw(26);
  height: vw(17);
  color: #fff;
  font-size: vw(12);
  line-height: vw(20);
  border-radius: vw(3);
  text-align: center;
  background-color: #000000;
}
.CountDown {
  height: vw(44);
  padding: vw(10) vw(12);
  border-bottom: vw(1) solid #efeff4;
  .miaosha {
    font-size: vw(19);
    font-weight: 700;
    color: #333333;
    margin-right: vw(8);
  }
  .shifenmaio {
    margin: 0 vw(5);
  }
}
</style>