const xml = require('../lib/xmlTool');

module.exports = ()=>{
    return async (ctx, next) => {
        if (ctx.method == 'POST' && ctx.is('text/xml')) {
            let promise = new Promise(function (resolve, reject) {
                let buf = ''
                ctx.req.setEncoding('utf8')
                ctx.req.on('data', (chunk) => {
                    buf += chunk
                })
                ctx.req.on('end', () => {
                    console.log(buf);
                    xml.xmlToJson(buf)
                        .then(resolve)
                        .catch(reject)
                })
            })

            await promise.then((result) => {
                    ctx.req.body = result
                })
                .catch((e) => {
                    e.status = 400
                })

            next()
        } else {
            await next()
        }
    }
}