const api = require('koa-router')();
const user = require('./user');
const info = require('./info');
const user_feedback = require('./user_feedback');

api.use(user.routes());
api.use(info.routes());
api.use(user_feedback.routes());

module.exports = api.use('/api-node/',api.routes(),api.allowedMethods());