import * as types from './types';

const mutations = {
  [types.LOGIN](state, user) {
    state.user = user;
  },
  [types.LOGOUT](state) {
    state.user = {};
  },
  [types.USER_INFO](state, userInfo) {
    state.user = { ...state.user, ...userInfo };
  },
  [types.SHOP_LIST](state, shopList) {
    state.shopList = shopList;
  },
  [types.MASTER](state, master) {
    state.master = master || {};
  },
  [types.SIGNATURE_LIST](state, signatureList) {
    state.signatureList = signatureList;
  },
};

export default mutations;
