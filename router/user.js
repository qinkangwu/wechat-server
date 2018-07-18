const User = require('../controllers/user');
const router = require('koa-router')({prefix:'user'});

router.get('/get',User.getUser);
router.get('/create',User.createSession);

module.exports = router;