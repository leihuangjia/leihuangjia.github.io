<template>
  <div class="MyHead">
    <div class="top">
      <p class="login_reg">
        <img src="../assets/head.png" alt />
        <router-link style="color:#fff;" to="/login">注册&nbsp;/&nbsp;登陆</router-link>
      </p>
      <p class="consult">药师咨询&gt;</p>
    </div>
    <div class="VIP">
      <img src="../assets/vip.png" alt />
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
.MyHead {
  height: vw(185);
  background: linear-gradient(90deg, #ed7a7a, #e94544);
  .top {
    height: vw(132);
    display: flex;
    align-items: center;
    justify-content: space-between;
    .login_reg {
      display: flex;
      align-items: center;
      img {
        width: vw(70);
        height: vw(70);
        margin: 0 vw(18);
      }
      span {
        color: #fff;
        font-size: vw(20);
      }
    }
    .consult {
      width: vw(109);
      height: vw(36);
      line-height: vw(36);
      font-size: vw(14);
      text-align: center;
      background-color: rgba(0, 0, 0, 0.08);
      color: #fff;
      border-radius: vw(50) 0 0 vw(50);
    }
  }
  .VIP {
    border-radius: vw(8) vw(8) 0 0;
    height: vw(53);
    background: linear-gradient(90deg, #5b5655, #251f1f);
    margin: 0 vw(18);
    img {
      width: vw(87);
      height: vw(16);
      margin: vw(18);
    }
  }
}
</style>