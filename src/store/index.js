import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  user: {}, // 当前用户
  master: {}, // 主账号
  shopList: [], // 多店铺
  signatureList: [],
};

const debug = process.env.NODE_ENV === 'development'; // 线上环境关闭store检查

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug,
});
