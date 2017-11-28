var express = require('express');
var request = require('request');
var storage = require('../../util/storage');
var remoteUrl = require('../../util/RemoteUrl');
var underscore = require('underscore');
var router = express.Router();

//登录界面
router.get('/', function(req, res, next) {
    //用户跳转到登陆页面前的url
    var url=req.query.url;
    if(!url){
        url="/";
    }
    res.render('login',
        {

            url:url
        }
    );

});


router.get('/logout', function(req, res, next) {
    //用户跳转到登陆页面前的url
    req.session.api_session_id=undefined;

    res.redirect("/")

});






module.exports = router;
