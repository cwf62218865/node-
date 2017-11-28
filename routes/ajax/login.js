var express = require('express');
var router = express.Router();
router.caseSensitive = true;
var request = require('request');
var remoteUrl = require('../../util/RemoteUrl');
var storage = require('../../util/storage');
var codeEnum = require('../../util/codeEnum');

//登录请求
router.post("/login",function(req, res, next){

    var session=req.session;//session
    var user_name=req.body.name;//用户名
    var strOrgStructCode = 1003;//业务编码
    var user_password =req.body.pwd;//密码
    var user_strImg=req.body.str;//验证码
    var strImgVerifyCodeId = req.body.strImgVerifyCodeId;//验证码ID
    var options = {
        form:{
            strUserLoginName:user_name,
            strUserPassword:user_password,
            strOrgStructCode:strOrgStructCode,
            strAuthCode:user_strImg,
            strImgVerifyCodeId:strImgVerifyCodeId
        },
        headers:{
            "access_token": storage.get("access_token")
        }
    };
    request.post(remoteUrl.userLogin,options, function (error, response, body) {

        if (!error) {
            console.log(body);
            try {
                var json_body = JSON.parse(body);
                var code = json_body.code;//获取返回码
                if(code==codeEnum.Ok){
                    var data=json_body.data;
                    session.api_session_id=data.session_id;//设置api_session_id
                    //session.admin=data.admin;//设置用户信息
                   session.menuList = data.menuList;//发送菜单信息
                   //console.log(data.menuList);
                    res.send(json_body);
                }
            }
            catch (err) {
                res.send({"error":err.message});
            }

        }else{
            res.send({"error":error});
        }
    });


});




//获取图形验证码
router.post("/verificationImg",function(req, res, next){
    var options = {
        headers:{
            "access_token": storage.get("access_token")
        }
    };
    request.post(remoteUrl.strImg,options, function (error, response, body) {

        if (!error) {
            console.log(body);
            try {
                var json_body = JSON.parse(body);
                res.send(json_body);
            }
            catch (err) {
                res.send({"error":err.message});
            }
        }else{
            res.send({"error":error});
        }
    });
});

module.exports = router;