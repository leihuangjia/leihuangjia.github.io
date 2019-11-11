<template>
  <div class="LoginMain">
    <p>
      <input v-model="username" class="text" type="text" placeholder="请输入手机号" />
    </p>
    <p>
      <input v-model="password" class="text" type="password" placeholder="请输入登录密码" />
    </p>
    <p style="margin-top:14px;">
      <input type="checkbox" class="checkbox" name id />
      <label class="checkboxtext" for>
        我已认真阅读，理解并同意
        <span class="redcolor">《叮当快药用户协议》</span> 及
        <span class="redcolor">《叮当快药隐私协议》</span>
      </label>
    </p>
    <button class="btn" @click="find()">登陆</button>
    <p class="wjmm">忘记密码？</p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      meg: []
    };
  },
  methods: {
    find() {
      axios
        .get("http://localhost:3000/loginmeg", {
          params: {
            username: this.username,
            password: this.password
          }
        })
        .then(({ data }) => {
          if (data.length) {
            window.alert("登陆成功!");
            window.location.href = "http://localhost:8080";
          } else {
            window.alert("账号或者密码错误，请重新输入！");
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
@function vw($px) {
  @return ($px / 445) * 100vw;
}
.LoginMain {
  width: 100%;
  padding: vw(24);
  p {
    width: 100%;
    .text {
      font-size: vw(18);
      line-height: vw(62);
      border-left: none;
      border-top: none;
      border-right: none;
      width: 100%;
    }
    .checkbox {
      vertical-align: middle;
    }
    .checkboxtext {
      font-size: vw(14);
      line-height: vw(20);
      vertical-align: middle;
      color: #a7a7a7;
    }
    .redcolor {
      color: #fd5763;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .btn {
    width: 100%;
    height: vw(53);
    border: none;
    border-radius: vw(5);
    background: #fd5763;
    color: #fff;
    margin-top: vw(16);
  }
  .wjmm {
    text-align: right;
    color: #a7a7a7;
    margin-top: vw(21);
    font-size: vw(16);
  }
}
</style>