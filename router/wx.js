const router = require('koa-router')();
const wx = require('../controllers/wx.js');

router.get('wx',wx.checkTokenUrl);

module.exports = router;