const router = require('koa-router')();

router.get('info',async (ctx)=>{
    ctx.body = {
        status : 'OK',
        info : 'hello world'
    }
});

module.exports = router;