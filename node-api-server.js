const Koa = require('koa');
const app = new Koa();
const router = require('./router');
const logMiddleware = require('./middlewares/logMiddleware.js');
const checkSession = require('./middlewares/checkSessionMiddleware');
const bodyParser = require('koa-bodyparser');
const Eureka = require('eureka-js-client').Eureka;

app.use(logMiddleware());
//app.use(checkSession());
app.use(bodyParser())
app.use(router.routes());

app.listen(3000);
console.log('starting at port 3000');