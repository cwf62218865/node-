var express = require('express');
var request = require('request');
var router = express.Router();

//第一次进入欢迎页面
router.get('/', function(req, res, next) {
    res.render('resume/first_index',
        {
            title:	'欢迎来到秒猎',
        }
    );

});

module.exports = router;

