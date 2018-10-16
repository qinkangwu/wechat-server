const config = require('../config');
const result = require('../lib/result');
const sha1 = require('js-sha1');
const XmlDataModel = require('../models/wxDataModel');
var hash = sha1.create();
exports.checkTokenUrl = async ctx=>{
    let signature = ctx.query.signature || '';
    let echostr = ctx.query.echostr || '';
    let timestamp = ctx.query.timestamp || '';
    let nonce = ctx.query.nonce || '';
    let token = config.wxCheckUrlToken;

    if(!signature || !echostr || !timestamp || !nonce){
        ctx.body = result.fail('bad request~',403);
    }

    let arr = [token,timestamp,nonce].sort();
    arr.map((res,index)=>{
        hash.update(res);
    })
    let hashcode = hash.hex();
    if(hashcode == signature){
        ctx.body = echostr;
    }else{
        ctx.body = result.fail('bad request~',403);
    }
}

exports.getXmlDataFronWxServer = async ctx=>{
    let msg = ctx.req.body ? ctx.req.body.xml : ''
    let msgType = msg.MsgType[0] || '';
    let result;
    switch(msgType){
        case 'text':
            result = new XmlDataModel(msg).sendText(); 
            break;
        case 'image':
            result = new XmlDataModel(msg).sendImg();
            break;
        case 'event':
            msg.Event[0] === 'subscribe' && (result = new XmlDataModel(msg).sendSubscribe());
            msg.Event[0] === 'unsubscribe' && (result = new XmlDataModel(msg).sendUnsubscribe());
            msg.Event[0] === 'CLICK' && msg.EventKey[0] === 'QKW' && (msg.Content = ['点击测试按钮']);
            msg.Event[0] === 'CLICK' && msg.EventKey[0] === 'QKW' && (result = new XmlDataModel(msg).sendText());
            break;
        default :
            result = 'success';
    }
    ctx.res.setHeader('Content-Type','application/xml');
    ctx.body = result;
}