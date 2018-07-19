const xml = require('../lib/xmlTool');

class wxModel {
    constructor(xmlData){
        if(!xmlData ) throw Error('xml数据为空');
        this.me = xmlData.xml.ToUserName[0];
        this.user = xmlData.xml.FromUserName[0];
        this.type = xmlData.xml.MsgType[0];
        this.createTime = xmlData.xml.CreateTime[0];
        this.content = xmlData.xml.Content[0];
        this.id = xmlData.xml.MsgId[0];
    }
    send(){
        if(this.type === 'text'){
            return xml.jsonToXml({ 
                xml: { 
                  ToUserName: [ this.user ],
                  FromUserName: [ this.me ],
                  CreateTime: [ +new Date ],
                  MsgType: [ 'text' ],
                  Content: [ this.content ]
                } 
            })
        }
    }
}

module.exports = wxModel;