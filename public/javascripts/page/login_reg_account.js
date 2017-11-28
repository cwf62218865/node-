/**
 * Created by Administrator on 2017/9/18 0018.
 */

var telphone_reg=/^1[3|5|7|8][0-9]\d{8}$/;
var eamiltest=/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/;

function create_bind_account(){
    $(".forgetpsw_title").click(function(){
        $(".forgetpsw_title").removeClass("xuanzhong");
        $(this).addClass("xuanzhong");
    });
    $(".forgetpsw_title").eq(0).click(function(){
        $(".tel_con").show();
        $(".email_con").hide();
    })
    $(".forgetpsw_title").eq(1).click(function(){
        $(".tel_con").hide();
        $(".email_con").show();
    })


    $("#tel_number").on("input", function () {
        var tel=$("#tel_number").val();
        if(telphone_reg.test(tel)){
            $(".tel_con .code").addClass("click");
        }else{
            $(".tel_con .code").removeClass("click");
        }
    });
    $("body").on("click",".tel_con .click",function(){
        var time=60;
        $(".tel_con .code").html(time+"s后重新获取");
        $(".tel_con .click").removeClass("click");
        var timer=setInterval(function(){
            time--;
            $(".tel_con .code").html(time+"s后重新获取");
            if(time==0){
                clearInterval(timer);
                $(".tel_con .code").addClass("click").html("获取验证码");
            }
        },1000)
    });
}

function forget_password(){
    $(".forgetpsw_title").click(function(){
        $(".forgetpsw_title").removeClass("xuanzhong");
        $(this).addClass("xuanzhong");
    });
    $(".forgetpsw_title").eq(0).click(function(){
        $(".tel_con").show();
        $(".email_con").hide();
    })
    $(".forgetpsw_title").eq(1).click(function(){
        $(".tel_con").hide();
        $(".email_con").show();
    });

    $("#tel_number").on("input", function () {
        var tel=$("#tel_number").val();
        if(telphone_reg.test(tel)){
            $(".tel_con .code").addClass("click");
        }else{
            $(".tel_con .code").removeClass("click");
        }
    });
    //邮箱
    $("#email_number").on("input", function () {
        var email=$("#email_number").val();
        if(eamiltest.test(email)){
            $(".email_con .code").addClass("click");
        }else{
            $(".email_con .code").removeClass("click");
        }
    });

    $("body").on("click",".tel_con .click",function(){
        var time=60;
        $(".tel_con .code").html(time+"s后重新获取");
        $(".tel_con .click").removeClass("click");
        var timer=setInterval(function(){
            time--;
            $(".tel_con .code").html(time+"s后重新获取");
            if(time==0){
                clearInterval(timer);
                $(".tel_con .code").addClass("click").html("获取验证码");
            }
        },1000)
    });

    $("body").on("click",".email_con .click",function(){
        var time=60;
        $(".email_con .code").html(time+"s后重新获取");
        $(".email_con .click").removeClass("click");
        var timer=setInterval(function(){
            time--;
            $(".email_con .code").html(time+"s后重新获取");
            if(time==0){
                clearInterval(timer);
                $(".email_con .code").addClass("click").html("获取验证码");
            }
        },1000)
    });
}

