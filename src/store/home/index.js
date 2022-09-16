import { ReqCategoryList, ReqBannerList, ReqFloorList } from '@/api';
const state = {
  CateList: [],
  BannerList: [],
  FloorList: [],
};
const mutations = {
  GetCateList(state, value) {
    state.CateList = value.slice(0, value.length - 2);
  },
  GetBannerList(state, value) {
    state.BannerList = value;
  },
  GetFloorist(state, value) {
    state.FloorList = value;
  },
};
const actions = {
  async getCateList({ commit }) {
    let result = await ReqCategoryList();
    if (result.code == 200) {
      commit('GetCateList', result.data);
    }
  },
  async getBannerList({ commit }) {
    let result = await ReqBannerList();

    if (result.code == 200) {
      commit('GetBannerList', result.data);
    }
  },
  async getFloorList({ commit }) {
    let result = await ReqFloorList();

    if (result.code == 200) {
      commit('GetFloorist', result.data);
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
