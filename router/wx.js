const router = require('koa-router')();
const wx = require('../controllers/wx.js');

router.get('wx',wx.checkTokenUrl);
router.post('/',wx.getXmlDataFronWxServer);
module.exports = router;