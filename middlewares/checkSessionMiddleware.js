const http = require('../lib/http');
const apiPath = require('../apiPath/index');
const logUtil = require('../lib/log4jsUtil');
module.exports = ()=>{
    return async (ctx,next)=>{
        try{
            let user = await http.get(apiPath.getUserInfo+'?device=web&version=1.0.0&sessionId='+ctx.query.sessionId);
            if(user.data.status != 'OK'){
                logUtil.error('checkSessionMiddleware:',user.data.message);
                ctx.body = user.data;
            }else{
                await next();
            }
        }catch(e){
            ctx.body = {
                result : '服务器正忙'
            }
        }
    }
}