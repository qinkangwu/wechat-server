exports.ok = async (result={})=>{
    return {
        status : 'OK',
        time : new Date().getTime(),
        result : result
    }
}

exports.fail = async (message,code = 4)=>{
    return {
        status : 'ERROR',
        errorCode : code,
        message : message,
        time : new Date().getTime()
    }
}