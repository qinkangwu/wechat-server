const Koa = require('koa');
const app = new Koa();
const router = require('./router');
const logMiddleware = require('./middlewares/logMiddleware.js');
const wxMiddle = require('./middlewares/wxDataMiddleware');
const bodyParser = require('koa-bodyparser');
const WxAccessToken = require('./lib/wxAccessToken');
let token = WxAccessToken.getAccessToken();
!token && WxAccessToken.getAccessTokenByHttp();
setInterval(()=>{
    WxAccessToken.getAccessTokenByHttp();
},7200000)
app.use(logMiddleware());
app.use(wxMiddle());
app.use(bodyParser())
app.use(router.routes());

app.listen(28778);
console.log('程序监听28778端口');