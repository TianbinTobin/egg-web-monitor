'use strict';

const Service = require('egg').Service;

/**
 * 用户服务
 * @class UserService
 * @extends {Service}
 */
class UserService extends Service {
  /**
   * 用户注册
   * @param {*} account 账号
   * @param {*} password 密码
   */
  async register(account, password) {
    const user = this.ctx.model.User();
    user.account = account;
    user.password = password;
    user.level = 1;

    const result = await user.save();
    return result;
  }
}

module.exports = UserService;
