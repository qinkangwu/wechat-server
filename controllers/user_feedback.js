const User_feedback = require('../models/user_feedback');
const uuidV4 = require('uuid/v4');
const result = require('../lib/result');
const logUtil = require('../lib/log4jsUtil');

exports.saveUserFeedback = async ctx=>{
    let postData = ctx.request.body;
    let saveData = {
        id : uuidV4(),
        message : postData.message || '',
        connection : postData.connection || ''
    }
    if(!saveData.message){
        logUtil.error('saveUserFeedback','反馈信息为空');
        ctx.body = await result.fail('反馈信息为空');
        return;
    }
    try{
        const project = User_feedback.build(saveData);
        let res = await project.save();
        ctx.body = await result.ok({id:res.dataValues.id})
    }catch(e){
        console.log(e);
        ctx.body = await result.fail('保存数据失败');
    }
}