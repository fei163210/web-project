import { ReqCategoryList } from '@/api';
const state = {
  CateList: [],
};
const mutations = {
  GetCateList(state, value) {
    state.CateList = value;
  },
};
const actions = {
  async getCateList({ commit }) {
    let result = await ReqCategoryList();
    if (result.code == 200) {
      commit('GetCateList', result.data);
    }
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
