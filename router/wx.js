const router = require('koa-router')();

router.get('wx',async (ctx)=>{
    ctx.body = {
        status : 'OK',
        info : 'hello world'
    }
});

module.exports = router;