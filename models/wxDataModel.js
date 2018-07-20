const xml = require('../lib/xmlTool');
const accessToken = require('../lib/wxAccessToken').accessToken;

class WxModel {
    constructor(xmlData){
        if(!xmlData ) throw Error('xml数据为空');
        this.xmlObj = xmlData;
    }
    sendText(){
        console.log(accessToken);
        return xml.jsonToXml({ 
            xml: { 
                ToUserName: [ this.xmlObj.FromUserName[0] ],
                FromUserName: [ this.xmlObj.ToUserName[0] ],
                CreateTime: [ +new Date ],
                MsgType: [ 'text' ],
                Content: [ this.xmlObj.Content[0] ]
            } 
        })
    }
    sendImg(){
        return xml.jsonToXml({
            xml : {
                ToUserName : [ this.xmlObj.FromUserName[0] ],
                FromUserName : [ this.xmlObj.ToUserName[0] ],
                CreateTime: [ +new Date ],
                MsgType: [ 'image' ],
                Image : {
                    MediaId : [ this.xmlObj.MediaId[0] ]
                }
            }
        })
    }
}

module.exports = WxModel;