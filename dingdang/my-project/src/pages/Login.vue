<template>
  <div>
    <LoginHead />
    <router-view></router-view>
  </div>
</template>
<script>
import LoginHead from "../components/LoginHead.vue";
export default {
  components: {
    LoginHead
  }
};
</script>