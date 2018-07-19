const config = require('../config');
const result = require('../lib/result');
const sha1 = require('js-sha1');
const xml = require('../lib/xmlTool.js');
const xmlModel = require('../models/wxModel.js');
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
    let promise = new Promise(function (resolve, reject) {
        let buf = ''
        ctx.req.setEncoding('utf8')
        ctx.req.on('data', (chunk) => {
            buf += chunk
        })
        ctx.req.on('end', () => {
            xml.xmlToJson(buf)
                .then(resolve)
                .catch(reject)
        })
    })
    await promise.then((result)=>{
        let json = new xmlModel(result).send();
        ctx.res.setHeader('Content-Type', 'application/xml')
        ctx.body = json;
    }).catch((err)=>{
        console.log(err);
    })
}