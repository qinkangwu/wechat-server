const http = require('../lib/http');
const config = require('../config.js');
const tokenPath = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={{APPID}}&secret={{APPSECRET}}';
let accessToken = null;
const getAccessTokenByHttp = ()=>{
    http.get(tokenPath.replace('{{APPID}}',config.wxAppId).replace('{{APPSECRET}}',config.wxAppSecret))
    .then((res)=>{
        accessToken = res.data.access_token;
    })
}

const getAccessToken = ()=>{
    return accessToken;
} 

module.exports = {
    getAccessTokenByHttp,
    getAccessToken
};