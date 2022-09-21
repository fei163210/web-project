// vuex 状态管理库
// 引入vue 和 vuex 并使用
import Vue from 'vue';
import Vuex from 'vuex';
// 引入vuex持久化方法createPersistedState
import createPersistedState from 'vuex-persistedstate';
// 引入模块化的home小模块
import home from './home';
import search from './search';
import register from './register';
import login from './login';
Vue.use(Vuex);

// 对外暴露Store类的一个实例
export default new Vuex.Store({
  modules: { home, search, register, login },
  plugins: [
    // veux持久化配置
    createPersistedState({
      key: 'ha',
      path: ['login.user'],
    }),
  ],
});
