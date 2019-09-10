'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    account: { type: String }, // 用户名称
    password: { type: String }, // 用户密码
    level: { type: Number, default: 1 }, // 用户等级（0：管理员，1：普通用户）
    token: { type: String }, // 用户登录态秘钥
    system_ids: { type: Array }, // 用户所拥有的系统Id
    is_disabled: { type: Number, default: 0 }, // 是否禁用 0：正常  1：禁用
    create_time: { type: Date, default: Date.now }, // 用户注册时间
    update_time: { type: Date, default: Date.now }, // 用户访问时间
  });

  return mongoose.model('User', UserSchema);
};
