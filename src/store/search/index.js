import { ReqSearchList } from '@/api';
const state = {
  SearchList: {},
};
const mutations = {
  GetSearchList(state, value) {
    state.SearchList = value;
  },
};
const actions = {
  async getSearchList({ commit }, value) {
    let result = await ReqSearchList(value);
    if (result.code == 200) {
      commit('GetSearchList', result.data);
    }
  },
};
const getters = {
  // getters用来简化数据，方便数据调取，这里的state为小仓库
  goodsList(state) {
    return state.SearchList.goodsList;
  },
  attrsList(state) {
    return state.SearchList.attrsList;
  },
  trademarkList(state) {
    return state.SearchList.trademarkList;
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
