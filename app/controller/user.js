'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async register() {
    const { ctx, service } = this;
    const data = ctx.query;
    const result = await service.user.register(data.account, data.password);
    ctx.body = result;
  }
}

module.exports = UserController;
