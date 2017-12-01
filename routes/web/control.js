var express = require('express');
var request = require('request');
var router = express.Router();

//第一次进入欢迎页面
router.get('/', function(req, res, next) {
    res.render('control',
        {
            title:	'个人组件',
        }
    );

});

module.exports = router;

