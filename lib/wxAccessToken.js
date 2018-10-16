const http = require('../lib/http');
const config = require('../config.js');
const tokenPath = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={{APPID}}&secret={{APPSECRET}}';
let accessToken = null;
let setMenuLock = false;
const getAccessTokenByHttp = ()=>{
    http.get(tokenPath.replace('{{APPID}}',config.wxAppId).replace('{{APPSECRET}}',config.wxAppSecret))
    .then((res)=>{
        res.data.access_token && (accessToken = res.data.access_token);
        res.data.access_token && !setMenuLock && setMenu();
    })
}

const setMenu = ()=>{
    setMenuLock = true;
    let menuObj = config.wechatMenuConfig;
    http.post(`https://api.weixin.qq.com/cgi-bin/menu/create?access_token=${accessToken}`,menuObj)
    .then((res)=>{
        //  console.log(res.data);
    })
}

const getAccessToken = ()=>{
    return accessToken;
} 

module.exports = {
    getAccessTokenByHttp,
    getAccessToken,
    setMenu
};