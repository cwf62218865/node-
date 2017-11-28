var express = require('express');
var request = require('request');
var router = express.Router();

//管理员信息  全国管理员界面
router.get('/areamanager', function(req, res, next) {
    res.render('manager/areaManager',
        {
            title:	'猫阿姨城市平台',
            manager:"selected",
            managerdisplay:"block",
            areamanager:"current",
            citymanager:"",

            roles:"",
            roledisplay:"",
            rolemanager:"",

            departments:"",
            departmentdisplay:"",
            departmentmanager:""
        }
    );

});

//管理员信息  全国管理员界面
router.get('/test', function(req, res, next) {
    res.render('test',
        {
            title:	'猫阿姨城市平台',
            manager:"selected",
            managerdisplay:"block",
            areamanager:"current",
            citymanager:"",

            roles:"",
            roledisplay:"",
            rolemanager:"",

            departments:"",
            departmentdisplay:"",
            departmentmanager:""
        }
    );

});


//管理员信息 城市组管理员界面
router.get('/citymanager', function(req, res, next) {
    res.render('manager/cityManager',
        {
            title:	'猫阿姨城市平台',
            manager:"selected",
            managerdisplay:"block",
            areamanager:"",
            citymanager:"current",

            roles:"",
            roledisplay:"",
            rolemanager:"",

            departments:"",
            departmentdisplay:"",
            departmentmanager:""
        }
    );

});

//管理员信息  新增城市组管理员界面
router.get('/addcitymanagerloding', function(req, res, next) {
    res.render('manager/addCityManager',
        {

        }
    );

});




module.exports = router;

