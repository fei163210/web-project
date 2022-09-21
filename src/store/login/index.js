import { ReqLogin } from '@/api';
const state = {
  user: {},
};
const mutations = {
  GoLogin(state, value) {
    state.user = value;
  },
};
const actions = {
  async goLogin({ commit }, user) {
    try {
      let result = await ReqLogin(user);
      if (result.code == 200) {
        commit('GoLogin', user);
        console.log(result);

        return result;
      }
    } catch (error) {
      console.log(error);
    }
  },
};
const getters = {};

export default { state, mutations, actions, getters };
