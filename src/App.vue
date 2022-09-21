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
// import { ReqLogin } from "@/api";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  // 页面挂载时只执行一次
  mounted() {
    this.$store.dispatch("getCateList");
    this.$store.dispatch("getFloorList");
    this.$store.dispatch("getBannerList");
    // 测试一下请求数据
    // console.log(ReqLogin({ phone: "510402381", password: "123456" }));
  },
};
</script>

<style>
</style>
