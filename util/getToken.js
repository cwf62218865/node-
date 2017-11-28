/**
 * Created by liupengyan on 16/12/9.
 * 获取服务端token
 */
var request = require('request');
var remoteUrl = require('./RemoteUrl');
var staticValue = require('../util/staticValue');
var storage = require('../util/storage');

var timer=null;
/**
 * 请求系统使用的token
 */
var getToken=function(){

    var options = {
        form:{
            strSecret:staticValue.APPID,
            strAppId:staticValue.SECRET
        }
    };
    request.post(remoteUrl.getAccessToken,options, function (error, response, body) {

        if (!error) {

            try {
                var json_body = JSON.parse(body);

                var code=json_body.code;

                if(code==1){
                    var data=json_body.data;
                    var expire_time=data.expire_time;
                    var access_token=data.access_token;
                    console.log("expire_time:"+expire_time+"  access_token:"+access_token);
                    storage.set("access_token",access_token);
                    clearTimeout(timer);
                    timer=setInterval(getToken,(expire_time-60)*1000);
                }else{
                    console.error("error_code:"+code+"  error_message:"+json_body.msg);
                }

            }
            catch (err) {
                console.error("error_message:"+err);
                getToken();
            }

        }else{
            console.error("error_message:"+error);
            getToken();
        }

    })
};

module.exports=getToken;