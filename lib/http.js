const axios = require('axios');

function get(url){
    return axios.get(url);
}

function post(url,data = {}){
    return axios.post(url,data)
}

let http = {
    get : get,
    post : post
};
module.exports = http;