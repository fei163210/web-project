// 配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
// 使用插件
Vue.use(VueRouter);
// 引入路由组件
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Search from '@/pages/Search';
import Register from '@/pages/Register';
export default new VueRouter({
  // 配置路由
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        show: true,
      },
    },
    {
      path: '/login',
      component: Login,
      meta: {
        show: false,
      },
    },
    {
      path: '/search/:message',
      component: Search,
      meta: {
        show: true,
      },
      name: 'search',
    },
    {
      path: '/register',
      component: Register,
      meta: {
        show: false,
      },
    },
    {
      path: '*',
      redirect: '/home',
      meta: {
        show: true,
      },
    },
  ],
});
