// vuex 状态管理库
// 引入vue 和 vuex 并使用
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// 引入模块化的home小模块
import Home from './home';
import Search from './search';

// 对外暴露Store类的一个实例
export default new Vuex.Store({
  modules: { Home, Search },
});
