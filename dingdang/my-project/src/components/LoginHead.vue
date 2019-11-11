<template>
  <div>
    <div class="LoginHead">
      <ul class="LoginHeadList">
        <router-link
          :to="i.aa"
          tag="li"
          :class="{active :active == i.name}"
          @click.native="underline(index,i.name)"
          v-for="(i,index) in arr"
          :key="i.name"
          v-text="i.name"
        ></router-link>
      </ul>
      <p class="redline" :style="[{'left': arr2[data]}]"></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        { name: "密码登陆", aa: "loginInput" },
        { name: "注册", aa: "regInput" }
      ],
      arr2: ["14px", "110px"],
      data: "",
      color: "#ff5a5f",
      active: "密码登陆"
    };
  },
  methods: {
    underline(index, name) {
      this.data = index;
      this.active = name;
    }
  }
};
</script>
<style lang="scss" scoped>
@function vw($px) {
  @return ($px / 445) * 100vw;
}
.active {
  color: #ff5a5f !important;
}
.LoginHead {
  height: vw(74);
  position: relative;
  .LoginHeadList {
    height: vw(74);
    display: flex;
    li {
      width: vw(112);
      text-align: center;
      height: vw(74);
      line-height: vw(90);
      color: #666666;
    }
  }
  .redline {
    width: vw(77);
    height: vw(3);
    line-height: vw(3);
    border-bottom: vw(3) solid #ff5a5f;
    position: absolute;
    bottom: 0;
    left: 14px;
  }
}
</style>