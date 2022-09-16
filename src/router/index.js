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

let OPush = VueRouter.prototype.push;
let OReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    OPush.call(this, location, resolve, reject);
  } else {
    OPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    OReplace.call(this, location, resolve, reject);
  } else {
    OReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
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
      path: '/search/:message?',
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
