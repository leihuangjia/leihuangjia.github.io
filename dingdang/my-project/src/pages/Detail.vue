<template>
  <div>
    <DetailHead />
    <div style="height:45px;"></div>
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
    <div style="height:59px;"></div>
    <DetailFoot />
  </div>
</template>
<script>
import DetailHead from "../components/DetailHead.vue";
import DetailFoot from "../components/DetailFoot.vue";
export default {
  components: {
    DetailHead,
    DetailFoot
  }
};
</script>