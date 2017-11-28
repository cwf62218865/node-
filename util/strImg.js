/*获取登录验证码 */
var express = require('express');
var request = require('request');
var router = express.Router();
router.caseSensitive = true;
var remoteUrl = require('./RemoteUrl');
var storage = require('./storage');

var strImg = function(){
        var options = {
            headers:{
                "access_token": storage.get("access_token")
            }
        };
        request.post(remoteUrl.strImg,options, function (error, response, body) {
            console.log("asdasd");
            if (!error) {
                console.log(body);

                try {
                    var json_body = JSON.parse(body);

                    var code = json_body.code;//获取返回码
                    if(code==codeEnum.Ok){
                        var src=json_body.data.strImgVerifyCode;
                        res.send(src);
                    }
                }
                catch (err) {
                    res.send({"error":err.message});
                }
            }else{
                res.send({"error":error});
            }
        });

}

module.exports = strImg;