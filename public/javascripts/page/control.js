/**
 * Created by zheng on 2017-09-01.
 */
function tipmsg(pic,tip){
    var html="";
    html+="<div class='tips'><img class='tip_ico' src='../images/ico_"+pic+".png'> <span class='tip_msg'>"+tip+"</span></div> ";
    return html;
}

//手机正则
var telphonetest=/^1[3|5|7|8][0-9]\d{8}$/;
var inttest=/^[1-9]\d*$/;
var eamiltest=/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/;

//聚焦时红色提示消失，呈输入状态。
$(".general-input input").on("focus",function(){
    var _this=$(this);
    if(_this.closest(".general-input").css("borderColor")=="rgb(226, 61, 70)"){
        _this.closest(".general-input").nextAll(".chec_tip").eq(0).html("");
        _this.closest(".general-input").nextAll(".chec_tip1").eq(0).find(".left_align").html("");
        _this.closest(".general-input").nextAll(".chec_tip1").eq(0).find(".right_align").html("");
    }
});

$("body").on("focus",".general-input input",function(){
    var _this=$(this);
    if(_this.closest(".general-input").css("borderColor")=="rgb(226, 61, 70)"){
        _this.closest(".general-input").nextAll(".chec_tip").eq(0).html("");
        _this.closest(".general-input").nextAll(".chec_tip1").eq(0).find(".left_align").html("");
        _this.closest(".general-input").nextAll(".chec_tip1").eq(0).find(".right_align").html("");
    }
});

//设置普通输入框的聚焦样式
$(".general-input input").on("focus",function(){
    var _this=$(this);
    $(this).closest(".general-input").css("border-color","#1aa9d2");
});

$(".general-input input").on("blur",function(){
    var _this=$(this);
    $(this).closest(".general-input").css("border-color","#f5f5f5");
});

$("body").on("focus",".general-input input",function(){
    var _this=$(this);
    $(this).closest(".general-input").css("border-color","#1aa9d2");
});

$("body").on("blur",".general-input input",function(){
    var _this=$(this);
    $(this).closest(".general-input").css("border-color","#f5f5f5");
});


$(document).ready(function(){










    //设置下拉选择框
    //$(".general-select input").on("click",function(){
    //    var _this=$(this);
    //    if(_this.closest(".general-select").next().height()=="0"){
    //        _this.closest(".general-select").next().css("height","auto");
    //    }else {
    //        _this.closest(".general-select").next().css("height","0px");
    //    }
    //
    //}).blur(function(){
    //    var _this=$(this);
    //    _this.closest(".general-select").next().css("height","0");
    //});
    //
    //$(".select-option").on("mousedown",function(){
    //
    //    var _this=$(this);
    //    var optionhtml=_this.find("span").eq(0).html();
    //    _this.closest(".options").prev().find("input").val(optionhtml);
    //    //_this.closest(".options").css("height","0");
    //    $("body").click();
    //
    //});



    //设置搜索框图标样式
    $(".general-input input").focus(function(){
        var _this=$(this);
        $(this).next().find("use").attr("class","color1aa");
    }).blur(function(){
        var _this=$(this);
        $(this).next().find("use").attr("class","colorbbb");
    });



    //单选
    $(".radio input[type=radio]").on("click",function(){
        var _this=$(this);
        var radiobox=_this.closest(".radio");
        radiobox.find(".radiobox").removeClass("radiochecked");
        _this.next().addClass("radiochecked");
    })


    //多选
    $(".checkbox input[type=checkbox]").on("click",function(){
        var _this=$(this);
        if(_this.attr("checked")){
            _this.next().find(".iconfont use").attr("xlink:href","#icon-zhengque1");
        }else{
            _this.next().find(".iconfont use").attr("xlink:href","");
        }
    })



    //提示信息弹窗
    var hint=function(state,msg){
        var promptbox="<div class='promptbox'><div class='padding25'>";
        if(state==""||state=="success"){
            promptbox+="<svg class='icon font24 ' style='float:left;color: #36cfb3' aria-hidden='true'><use xlink:href='#icon-zhengque'></use></svg>"
            promptbox+="<span class='prompttitle'>提交成功！</span>"
        }else if(state=="error"){
            promptbox+="<svg class='icon font24 ' style='float:left;color: #ea5941' aria-hidden='true'><use xlink:href='#icon-cuowu'></use></svg>"
            promptbox+="<span class='prompttitle'>错误！</span>"
        }else if(state=="warning"){
            promptbox+="<svg class='icon font24 ' style='float:left;color: #f7ba2a' aria-hidden='true'><use xlink:href='#icon-jinggao'></use></svg>"
            promptbox+="<span class='prompttitle'>警告！</span>"
        }else if(state=="ordinary"){
            promptbox+="<svg class='icon font24 ' style='float:left;color: #289fd1' aria-hidden='true'><use xlink:href='#icon-tishi'></use></svg>"
            promptbox+="<span class='prompttitle'>一般提醒！</span>"
        };
        promptbox+="<div class='promptmsg'>"+msg+"</div>";
        promptbox+="</div></div>";
        $("body").append(promptbox);

    }

    $(".success").on("click",function(){
        hint("success","您的信息已提交成功。");
        setTimeout(function(){$(".promptbox").remove()},2000);
    });
    $(".error").on("click",function(){
        hint("error","您的信息已提交成功。");
        setTimeout(function(){$(".promptbox").remove()},2000);
    });
    $(".warning").on("click",function(){
        hint("warning","您的信息已提交成功。");
        setTimeout(function(){$(".promptbox").remove()},2000);
    });
    $(".ordinary").on("click",function(){
        hint("ordinary","您的信息已提交成功。");
        setTimeout(function(){$(".promptbox").remove()},2000);
    });




    //评分星星
    var xing=function(num,xings){
        var xingnum=num;//应该有多少半颗星，2颗半星算益客实星
        if(xingnum%2==0){
            for(var i=0;i<xingnum/2;i++){
                $(xings[i]).find("use").attr("xlink:href","#icon-huisepinglun");
                $(xings[i]).css("color","#fcac00")
            }
            for(var i=4;i>=xingnum/2;i--){
                $(xings[i]).find("use").attr("xlink:href","#icon-huisepinglun");
                $(xings[i]).css("color","#bbb");
            }
        }else if((xingnum%2==1)){
            for(var i=0;i<Math.ceil(xingnum/2-1);i++){
                $(xings[i]).find("use").attr("xlink:href","#icon-huisepinglun");
                $(xings[i]).css("color","#fcac00");
            };
            $(xings[xingnum/2-0.5]).find("use").attr("xlink:href","#icon-banxinpinglun");
            $(xings[xingnum/2-0.5]).css("color","#fcac00");
            for(var i=4;i>=Math.ceil(xingnum/2);i--){
                $(xings[i]).find("use").attr("xlink:href","#icon-huisepinglun");
                $(xings[i]).css("color","#bbb");
            }
        }
    }

    $(".pinglun").mouseover(function(e){
        var movex=e.pageX;//鼠标移动的X坐标

        var left=$(this).offset().left;//容器左坐标
        var xings=$(this).find(".pinglunfont");

        var movedistance=movex-left;//鼠标移动距离
        var move=0;//计算星星颗数的容器
        if(movedistance%32<7){
            move=Math.floor(movedistance/32)*2;
        }else if(movedistance%32<20){
            move=Math.floor(movedistance/32)*2+1;
        }else{
            move=Math.floor(movedistance/32)*2+2;
        }
        xing(move,xings);
    });

    $(".pinglun").mouseout(function(e){
        var xings=$(this).find(".pinglunfont");
        var nums=$(this).find(".pinglunnum").eq(0).val();
        xing(nums,xings);
    });

    $(".pinglun").on("click",function(e){
        var movex=e.pageX;//鼠标移动的X坐标
        var left=$(this).offset().left;//容器左坐标
        var xings=$(this).find(".pinglunfont");

        var movedistance=movex-left;//鼠标移动距离
        var move=0;//计算星星颗数的容器
        if(movedistance%32<7){
            move=Math.floor(movedistance/32)*2;
        }else if(movedistance%32<20){
            move=Math.floor(movedistance/32)*2+1;
        }else{
            move=Math.floor(movedistance/32)*2+2;
        }
        $(this).find(".pinglunnum").val(move);
        xing(move,xings);
    })




    //模态输入框
    var modal=function(title,option,btnname,url){
        var modalbox="<div class='modalbox' id='modalbox'>";
        modalbox+="<div class='modal'>";
        modalbox+="<h3>"+title+"</h3>";
        modalbox+="<span class='modalclose'>X</span>";
        modalbox+="<div class='modalcontent'>"
        for(var i=0 ; i<option.length;i++){
            if(option[i].select){
                modalbox+="<div class='modalinput'>";
                modalbox+="<div class='modalinput-title'><span>"+option[i].title+"</span></div>";
                modalbox+="<div class='general-input  general-select' style='width: 278px;position: absolute;right: 30px'>";
                modalbox+="<label class=' general-select bgfff' style='z-index: 10'>" +
                    "<input type='text' id='selectinput' style='height: 30px' name='"+option[i].name+"' value='"+option[i].option[0]+"' readonly>" ;
                modalbox+="<svg class='icon inputicon' aria-hidden='true' style='top: auto;right: auto;z-index: 0'>"+
                    "<use xlink:href='#icon-xiala'></use>"+
                    "</svg>"+
                    "</label>";
                modalbox+="<div class='options' style='width: 281px;left: -2px'>";
                for(var j=0 ; j<option[i].option.length;j++){
                    modalbox+="<div class='select-option' style='width: 279px'><span>"+option[i].option[j]+"</span></div>";
                }


                modalbox+="</div></div></div>";
            }else{
                modalbox+="<div class='modalinput'>";
                modalbox+="<div class='modalinput-title'><span>"+option[i].title+"</span></div>";
                modalbox+="<label class='general-input'><input type='text'  name='"+option[i].name+"' placeholder='"+option[i].placeholder+"' data-v='"+option[i].Verification+"'></label>";
                modalbox+="</div>";
            }
        };
        modalbox+="</div>";
        modalbox+="<span class='public_bigbtn bg1aa modalbtn'>"+btnname+"</span>"
        modalbox+="</div></div>";

        $("body").append(modalbox);



        //关闭动作
        //$("body").on("click",".modalclose",function(){
        //    $("#modalbox").animate({"opacity":0},300);
        //    setTimeout(function(){
        //        $("#modalbox").remove();
        //    },300)
        //});

        //提交动作
        $(".modalbtn1").on("click",function(){
            var inputs=$(".modalinput input");
            var data=new Array();
            for(var i=0;i<inputs.length;i++){
                var _this=$(inputs[i]);
                var verification=new RegExp(_this.attr("data-v"));

                var name=_this.attr("name");
                var val=$.trim(_this.val());
                if(_this.attr("data-v")!=""){
                    if(verification.test(val)){
                        data[name]=val;
                    }else{
                        _this.closest(".general-input").css("border-color","#e23d46");
                        return;
                    }
                }else if(val!=""){
                    data[name]=val;
                }else{
                    _this.closest(".general-input").css("border-color","#e23d46");
                    return;
                }
            };
            $.ajax({
                type:"post",
                url:url,
                data:data,
                success:function(data){

                }
            })
        });

        //聚焦事件
        $("body").on("focus","#modalbox input",function(){
            var _this=$(this);
            $(this).closest(".general-input").css("border-color","#1aa9d2");
        });

        //失去焦点事件
        $("body").on("blur","#modalbox input",function(){
            var _this=$(this);
            $(this).closest(".general-input").css("border-color","#ddd");
        });

        //下拉选择
        $("#selectinput").on("click",function(){
            var _this=$(this);
            if(_this.closest(".general-select").next().height()=="0"){
                _this.closest(".general-select").next().css("height","auto");
            }else {
                _this.closest(".general-select").next().css("height","0px");
            }

        });



        $("body").on("mousedown",".select-option",function(){

            var _this=$(this);
            var optionhtml=_this.find("span").eq(0).html();
            _this.closest(".options").prev().find("input").val(optionhtml);
            _this.closest(".options").css("height","0");
           // $("body").click();

        });


    }


    //正则
    //手机正则     ^1[3|4|7|8][0-9]\\d{4,8}$
    //正整数       ^[1-9]\\d*$
    //邮箱         ^([0-9A-Za-z\\-_\\.]+)@([0-9a-z]+\\.[a-z]{2,3}(\\.[a-z]{2})?)$

$(".modalbtn1").on("click",function(){
    var title="标题内容"
    var option=[
        {title:"你的姓名：",name:"name",Verification:"",placeholder:"输入你的姓名"},
        {title:"你的年龄：",name:"age",Verification:"^[1-9]\\d*$",placeholder:"输入你的年龄"},
        {title:"你的性别：",name:"sex",Verification:"",placeholder:"",select:"true",option:["男","女"]},
    ];
    modal(title,option,"立即申请","/test.php");
})

//点击任意位置隐藏下拉
    $(document).on("click",function(){
        $(".options").each(function(){
            var _this=$(this);
            if(_this.height()!="0"){
                _this.css("height","0")
            }
        })
    });
    $(".general-select").click(function(event){
        event.stopPropagation();
    });

    $(document).on("click",".general-select",function(event){
        event.stopPropagation();
    });

})