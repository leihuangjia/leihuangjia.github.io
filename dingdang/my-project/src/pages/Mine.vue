<template>
  <main>
    <MyHead />
    <OrderForm />
    <Tool />
  </main>
</template>
<script>
import MyHead from "../components/MyHead.vue";
import OrderForm from "../components/OrderForm.vue";
import Tool from "../components/Tool.vue";
export default {
  components: {
    MyHead,
    OrderForm,
    Tool
  }
};
</script>
<style lang="scss" scoped>
@function vw($px) {
  @return ($px / 445) * 100vw;
}
main {
  width: 100%;
  margin-bottom: vw(59);
}
</style>