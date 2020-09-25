import API from './api-client';

/**
 * ajax接口: /api/*
 */
export default {
  /**
   * =========================================================================
   * 登陆 登出 注册 图片验证
   * =========================================================================
   */
  logout(param) {
    return API.fetch('/logout', param, 'get');
  },
  getUser(param) {
    return API.fetch('/getUser', param, 'get');
  },
  getUserById(param) {
    return API.fetch('/api/user/getUserById', param, 'get');
  },
  /**
   * @param {string} param.username
   */
  getUserByName(param) {
    return API.fetch('/api/user/getUserByName', param, 'get');
  },

  /**
   * 登录
   * @param param {code: string}
   */
  login(param) {
    return API.fetch('/login', param, 'post');
  },
  /**
   * 主子账号
   * @return {object} result
   * @return {object} result.master
   * @return {array} result.slaver
   *
   * @return {object} result.slaver[index]
   * @return {string} result.slaver[index].username
   * @return {string} result.slaver[index].delegator
   * @return {number} result.slaver[index].status
   * @return {number} result.slaver[index].shade
   */
  getShopList(param) {
    return API.fetch('/api/crm/managedShopList', param, 'get');
  },
  switchLoginMaster(param) {
    return API.fetch('/api/crm/masterLogin', param, 'get');
  },
  /**
   * @param {string} delegator
   */
  checkBeforeLogin(param) {
    return API.fetch('/api/crm/checkBeforeLogin', param, 'get');
  },

  /**
   * 签名管理
   */
  getSignatureList(param) {
    return API.fetch('/api/signature/getSignature', param, 'get');
  },
  applySignature(param) {
    return API.fetch('/api/signature/modifySignature', param, 'get');
  },
};
