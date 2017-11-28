/**
 * Created by liupengyan on 16/12/13.
 * 请求地址路径对象
 */
var staticValue=require("./staticValue");
var RemoteUrl={

       //登录
       getAccessToken:staticValue.API_BASE_PATH+'/token/getToken',//获取token
       userLogin:staticValue.API_BASE_PATH+'/city/admin/login', //登录地址
       strImg:staticValue.API_BASE_PATH+'/admin/getImageVerifyCode',//获取图形验证地址


};






module.exports=RemoteUrl;