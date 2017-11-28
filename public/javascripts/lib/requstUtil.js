(function(factory){
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as anonymous module.

        define(['lib/jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node / CommonJS
        factory(require('lib/jquery'));
    } else {
        // Browser globals.
        factory(jQuery);
    }

})(function($) {
    'use strict';
    var requstUtil={

        btnRequire:function(object){

            var url=object.url;
            var data=object.data;
            var _this_btn=object._this_btn;

            var callback=object.callback;


            var is_busy_ing=_this_btn.hasClass("disabled");
            if(is_busy_ing){
                return;
            }


            var _thisbtn_txt=_this_btn.text();
            _this_btn.addClass("disabled");


            $.ajax({
                url:url,
                method:"post",
                dataType:"json",
                data:data,
                success:function(result){
                    var result_code = result.code;


                    if(result_code==-1){

                        $.tips.toast("未登录",function(){
                            var search=window.location.search;
                            var path=window.location.pathname+search;
                            window.location.href="/?url="+path;
                        });
                    }else if(result_code==-2){
                        _this_btn.text(_thisbtn_txt).removeClass("disabled")
                        $.Huimodalalert('必填字段未填写',2000);

                    }else if(result_code==-3){
                        _this_btn.text(_thisbtn_txt).removeClass("disabled")

                        $.Huimodalalert('参数类型错误',2000);
                    }else if(result_code==-4){
                        _this_btn.text(_thisbtn_txt).removeClass("disabled")

                        $.Huimodalalert('未知错误',2000);
                    }else if(result_code==-5){
                        _this_btn.text(_thisbtn_txt).removeClass("disabled")

                        $.Huimodalalert('系统错误',2000);
                    }else if(result_code==-6){
                        _this_btn.text(_thisbtn_txt).removeClass("disabled")

                        $.Huimodalalert('token错误',2000);
                    }else if(result_code==-7){
                        _this_btn.text(_thisbtn_txt).removeClass("disabled")

                        $.Huimodalalert('参数超长',2000);
                    }else if(result_code==-8){
                        _this_btn.text(_thisbtn_txt).removeClass("disabled")

                        $.Huimodalalert('没有数据',2000);

                    }else{
                        if(callback&&typeof callback==='function'){
                            callback(result);
                        }

                    }


                },
                error:function(xhr,errorText,errorType){

                    _this_btn.text(_thisbtn_txt).removeClass("disabled");

                    $.Huimodalalert('网络请求错误',2000);

                }
            });

        },
        request:function(object){

            var url=object.url;
            var data=object.data;
            var callback=object.callback;

            $.ajax({
                url:url,
                method:"post",
                dataType:"json",
                data:data,
                success:function(result){
                    var result_code = result.code;

                    if(result_code==-1){
                        $.tips.toast("未登录",function(){
                            var search=window.location.search;
                            var path=window.location.pathname+search;
                            window.location.href="/user/sign-in-web?url="+path;
                        });
                    }else if(result_code==-2){

                        $.Huimodalalert('必填字段未填写',2000);

                    }else if(result_code==-3){


                        $.Huimodalalert('参数类型错误',2000);
                    }else if(result_code==-4){


                        $.Huimodalalert('未知错误',2000);
                    }else if(result_code==-5){

                        $.Huimodalalert('系统错误',2000);
                    }else if(result_code==-6){


                        $.Huimodalalert('token错误',2000);
                    }else if(result_code==-7){


                        $.Huimodalalert('参数超长',2000);
                    }else if(result_code==-8){


                        $.Huimodalalert('没有数据',2000);

                    }else{
                        if(callback&&typeof callback==='function'){
                            callback(result);
                        }

                    }

                },
                error:function(xhr,errorText,errorType){

                    $.tips.toast("网络请求错误");

                }
            });

        }


    };

    window.requstUtil=requstUtil;

    return requstUtil;

});
