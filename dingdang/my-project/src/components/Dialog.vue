<template>
  <div class="Dialog">
    <div class="tan">
      <div class="cuang">
        <p class="p1">去登陆</p>
        <p class="p2">登录后才能查看清单列表</p>
        <hr />
        <p @click="istrue()" class="p3">确定</p>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Dialog } from "vant";
Vue.use(Dialog);
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    istrue() {
      window.location.href = "http://localhost:8080/#/login/loginInput";
    }
  }
};
</script>
<style lang="scss" scoped>
@function vw($px) {
  @return ($px / 445) * 100vw;
}
.Dialog {
  width: 100%;
  height: vw(9000);
  background: rgba(0, 0, 0, 0.5);
  .tan {
    width: 80%;
    height: vw(200);
    // background: rgba(0, 0, 0, 0.5);
    margin: auto;
    padding-top: vw(200);
    .cuang {
      width: 100%;
      height: vw(200);
      background: #fff;
      border-radius: 10px;
      p {
        text-align: center;
      }
      .p1 {
        font-size: vw(20);
        font-weight: 700;
        padding-top: vw(20);
      }
      .p2 {
        font-size: vw(20);
        padding-top: vw(20);
        margin-bottom: vw(60);
      }
      .p3 {
        color: #007aff;
        line-height: vw(40);
      }
    }
  }
}
</style>