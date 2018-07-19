const router = require('koa-router')();

router.get('wx',async (ctx)=>{
    console.log(ctx.query);
    ctx.body = {
        status : 'OK',
        info : 'hello world'
    }
});

module.exports = router;