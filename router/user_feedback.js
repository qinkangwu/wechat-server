const UserFeedBack = require('../controllers/user_feedback');
const router = require('koa-router')({prefix:'user'});

router.post('/feedback/add',UserFeedBack.saveUserFeedback);

module.exports = router;