const xml = require('../lib/xmlTool');
const getAccessToken = require('../lib/wxAccessToken');
let instance = null;
class WxModel {
    constructor(xmlData){
        if(!instance) instance = this;
        if(!xmlData ) throw Error('xml数据为空');
        instance.xmlObj = xmlData;
        return instance;
    }
    sendText(){
        //console.log(this.xmlObj);   
        return xml.jsonToXml({ 
            xml: { 
                ToUserName: [ instance.xmlObj.FromUserName[0] ],
                FromUserName: [ instance.xmlObj.ToUserName[0] ],
                CreateTime: [ +new Date ],
                MsgType: [ 'text' ],
                Content: [ instance.xmlObj.Content[0] ]
            } 
        })
    }
    sendImg(){
        return xml.jsonToXml({
            xml : {
                ToUserName : [ instance.xmlObj.FromUserName[0] ],
                FromUserName : [ instance.xmlObj.ToUserName[0] ],
                CreateTime: [ +new Date ],
                MsgType: [ 'image' ],
                Image : {
                    MediaId : [ instance.xmlObj.MediaId[0] ]
                }
            }
        })
    }
    sendSubscribe(){
        //关注事件推送
        return xml.jsonToXml({
            xml: { 
                ToUserName: [ instance.xmlObj.FromUserName[0] ],
                FromUserName: [ instance.xmlObj.ToUserName[0] ],
                CreateTime: [ +new Date ],
                MsgType: [ 'text' ],
                Content: [ '欢迎关注~' ]
            }
        })
    }
    sendUnsubscribe(){
        //取关事件推送
        console.log('用户取消关注,openId='+instance.xmlObj.FromUserName[0]);
        return '';
    }

}

module.exports = WxModel;