var express = require('express');
var router = express.Router();
router.caseSensitive = true;
var request = require('request');
var remoteUrl = require('../../util/RemoteUrl');
var storage = require('../../util/storage');
var codeEnum = require('../../util/codeEnum');


//加载区域管理员
router.post("/area",function(req, res, next){
    var pageNum=req.body.pageNum;//当前页
    var pageSize =req.body.pageSize;//每页显示条数
    var options = {
        form:{
            pageNum:pageNum,
            pageSize:pageSize
        },
        headers:{
            "access_token": storage.get("access_token")
        }
    };
    request.get(remoteUrl.pagesearcharea,options, function (error, response, body) {

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

//加载城市组管理员
router.post("/citys",function(req, res, next){
    var pageNum=req.body.pageNum;//当前页
    var pageSize =req.body.pageSize;//每页显示条数
    var options = {
        form:{
            pageNum:pageNum,
            pageSize:pageSize,
        },
        headers:{
            "access_token": storage.get("access_token")
        }
    };
    request.get(remoteUrl.pagesearchcitys,options, function (error, response, body) {

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

//添加区域管理员
router.post("/addareamanager",function(req, res, next){
    var strOrgStructCode = req.body.strOrgStructCode;//管辖区域组织机构业务编码
    var strUserAddr =req.body.strUserAddr;//地址
    var strUserDistrict=req.body.strUserDistrict;//行政区域
    var strUserIdCard =req.body.strUserIdCard;//身份证号码
    var strUserLoginName =req.body.strUserLoginName;//管理员账号
    var strUserName=req.body.strUserName;//管理员姓名
    var strUserPassword =req.body.strUserPassword;//登录密码
    var options = {
        form:{
            strOrgStructCode:strOrgStructCode,
            strUserAddr:strUserAddr,
            strUserDistrict:strUserDistrict,
            strUserIdCard:strUserIdCard,
            strUserLoginName:strUserLoginName,
            strUserName:strUserName,
            strUserPassword:strUserPassword,
        },
        headers:{
            "access_token": storage.get("access_token")
        }
    };
    request.post(remoteUrl.addareamanager,options, function (error, response, body) {

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

//添加城市组管理员
router.post("/addcitymanager",function(req, res, next){
    var strUserAddr =req.body.strUserAddr;//地址
    var strUserDistrict=req.body.strUserDistrict;//行政区域
    var strUserIdCard =req.body.strUserIdCard;//身份证号码
    var strUserLoginName =req.body.strUserLoginName;//管理员账号
    var strUserName=req.body.strUserName;//管理员姓名
    var strUserPassword =req.body.strUserPassword;//登录密码
    var options = {
        form:{
            strUserAddr:strUserAddr,
            strUserDistrict:strUserDistrict,
            strUserIdCard:strUserIdCard,
            strUserLoginName:strUserLoginName,
            strUserName:strUserName,
            strUserPassword:strUserPassword
        },
        headers:{
            "access_token": storage.get("access_token")
        }
    };
    request.post(remoteUrl.addcitysmanager,options, function (error, response, body) {

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

//加载新增区域管理员界面
router.get("/addareamanagerloding",function(req, res, next){
    var options = {
        form:{

        },
        headers:{
            "access_token": storage.get("access_token")
        }
    };
    request.post(remoteUrl.orgstructure,options, function (error, response, body) {

        if (!error) {
            console.log(body);
            try {
                var json_body = JSON.parse(body);
                res.render('manager/addAreaManager',
                    {
                        data:json_body.data
                    }
                );
            }
            catch (err) {
                res.send({"error":err.message});
            }

        }else{
            res.send({"error":error});
        }
    });
});


//查看城市组管理员
router.get("/seemanager",function(req, res, next){
    var strId=req.body.strId;//城市组织机构ID
    var options = {
        form:{
            strAdminId:strId,
        },
        headers:{
            "access_token": storage.get("access_token")
        }
    };
    request.post(remoteUrl.seachmanager,options, function (error, response, body) {

        if (!error) {
            console.log(body);
            try {
                var json_body = JSON.parse(body);
                res.render('manager/seeManaager',
                    {
                        strAdminId:json_body.data.strAdminId,
                        strCreateTime:json_body.data.strCreateTime,
                        strOrgStructCode:json_body.data.strOrgStructCode,
                        strType:json_body.data.strType,
                        strUpdateTime:json_body.data.strUpdateTime,
                        strUserAddr:json_body.data.strUserAddr,
                        strUserDistrict:json_body.data.strUserDistrict,
                        strUserIdCard:json_body.data.strUserIdCard,
                        strUserLoginName:json_body.data.strUserLoginName,
                        strUserName:json_body.data.strUserName
                    }
                );
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
