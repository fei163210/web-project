// 入口文件  在这里可以配置一些全局属性

import Vue from 'vue';

import App from './App.vue';
// 引入路由
import router from '@/router';
// 引入仓库
import store from '@/store/index.js';
// 引入三级联动全局组件
import TypeNav from '@/components/TypeNav';
import Carsouel from '@/components/Carsouel';
// 引入mock
import '@/mock/mockJson';
// 引入swiper样式
import 'swiper/css/swiper.css';
// 注册全局组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carsouel.name, Carsouel);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  // 注册路由，这时候组件身上就会有$router和 $route属性
  router,
  // 注册仓库,这时候实例身上就会多一个属性 $store属性
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
}).$mount('#app');
