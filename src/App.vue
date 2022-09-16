<!-- 页面的根目录 -->
<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  // 页面挂载时只执行一次
  mounted() {
    console.log("放在APP.vue 根目录可以避免重复请求数据");

    this.$store.dispatch("getCateList");
    this.$store.dispatch("getFloorList");
    this.$store.dispatch("getBannerList");
  },
};
</script>

<style>
</style>
