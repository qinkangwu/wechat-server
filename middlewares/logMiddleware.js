const logUtil = require('../lib/log4jsUtil');
function log(ctx){
    logUtil.debug(ctx.method,ctx.header.host + ctx.url);
}

module.exports = ()=>{
    return async (ctx,next)=>{
        log(ctx);
        await next();
    }
}