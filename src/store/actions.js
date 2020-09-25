import API from '@/assets/js/api';
import * as types from './types';

export const getUserInfo = ({ commit }, config) => {
  let cookies;
  if (config && config.cookies) {
    cookies = config.cookies;
    delete config.cookies;
  }

  return new Promise((resolve, reject) => {
    API.getUserById(config, cookies)
      .then((response) => {
        commit(types.USER_INFO, response);
        resolve();
      })
      .catch((error) => {
        console.log('actions getUserById error :', error);
        reject(error);
      });
  });
};

// config.subTaoBaoUserNick parentUserId
export const loginUser = ({ commit }, config) => {
  let cookies;
  if (config && config.cookies) {
    cookies = config.cookies;
    delete config.cookies;
  }

  return new Promise((resolve, reject) => {
    API.loginUser(config, cookies)
      .then((response) => {
        const data = {
          subTaoBaoUserNick: response.subTaoBaoUserNick,
          loginUserId: response.id,
          accountType: response.type,
        };
        commit(types.USER_INFO, data);
        resolve();
      })
      .catch((error) => {
        console.log('actions loginUser error :', error);
        reject(error);
      });
  });
};

export const getShopList = ({ commit }, config) => {
  let cookies;
  if (config && config.cookies) {
    cookies = config.cookies;
    delete config.cookies;
  }

  return new Promise((resolve, reject) => {
    API.getShopList(config, cookies)
      .then((response) => {
        commit(types.MASTER, response.master);
        commit(types.SHOP_LIST, response.slaver);
        resolve();
      })
      .catch((error) => {
        console.log('actions getShopList error :', error);
        reject(error);
      });
  });
};

export const getSignatureList = ({ commit }) =>
  API.getSignatureList({ type: 1, status: 1 })
    .then((response) => {
      commit(types.SIGNATURE_LIST, response);
    })
    .catch((error) => {
      this.$catchError(error);
    });
