const api = require('koa-router')();
const wx = require('./wx.js');

api.use(wx.routes());

module.exports = api.use('/',api.routes(),api.allowedMethods());