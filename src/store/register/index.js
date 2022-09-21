import { ReqCode, ReqRegister } from '@/api';
const state = {
  code: '',
};
const mutations = {
  GetCode(state, value) {
    state.code = value;
  },
};
const actions = {
  async getCode({ commit }, value) {
    let result = await ReqCode(value);
    if (result.code === 200) {
      commit('GetCode', result.data);
    }
  },
  async goRegister({ commit }, value) {
    let result = await ReqRegister(value);
    if (result.code == 200) {
      return true;
    }
    return false;
  },
};
const getters = {};

export default { state, mutations, actions, getters };
