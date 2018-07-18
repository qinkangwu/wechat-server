const http = require('../lib/http');
const apiPath = require('../apiPath/index');
const User = require('../models/user');

exports.getUser = async ctx =>{
    //let userInfo = await http.get(apiPath.getUserInfo);
    let user = await User.findAll();
    ctx.body = user;
}

exports.createSession = async ctx =>{
    let sessionInfo = await http.post(apiPath.createSession);
    ctx.body = sessionInfo.data;
}