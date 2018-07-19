const Koa = require('koa');
const app = new Koa();
const router = require('./router');
const logMiddleware = require('./middlewares/logMiddleware.js');
const checkSession = require('./middlewares/checkSessionMiddleware');
const bodyParser = require('koa-bodyparser');

app.use(logMiddleware());
//app.use(checkSession());
app.use(bodyParser())
app.use(router.routes());

app.listen(28778);
console.log('程序监听28778端口');