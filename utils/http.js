//引入
const request = require('request');

var http = {
    get(url) {
        return new Promise(function(resolve,reject) {
            request({
                url: url,
                method: "GET",
                'proxy':'http://localhost:7890',
                json: true,
                headers: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                    "content-type": "application/json",
                },
            }, function (error, response, body) {
                if (!error) {
                    resolve(body)
                }else {
                    reject(body)
                }
            });
        })
    },
    post(url,params) {
        return new Promise(function(resolve, reject) {
            var requestData = params
            request({
                url: url,
                method: "POST",
                'proxy':'http://localhost:7890',
                json: true,
                headers: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                    "content-type": "application/json",
                },
                body:requestData
            }, function (error, response, body) {
                if (!error) {
                    resolve(body)
                }else {
                    reject(body)
                }
            });
        })
        
    }

};
module.exports = http;