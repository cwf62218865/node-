/**
 * Created by Administrator on 2017/9/11 0011.
 */
$(document).ready(function(){

    $("body").on("focus",".general-input input",function(){
        var _this=$(this);
        $(this).closest(".general-input").css("border-color","#1aa9d2");
    })

    $("body").on("blur",".general-input input",function(){
        var _this=$(this);
        $(this).closest(".general-input").css("border-color","#f5f5f5");
    });


    $(".cwfaddexp").on('click',function(){
        var addexp=$("#cwfaddexp").html();
        var addexpcontent="<div class='exp'><span class='cwfdashed460'></span>"+addexp+"</div>";
        $("#addexp").before(addexpcontent);
        $("#addexp .cwfaddexp").css("width","218px");
        if($("#addexp .cwfdelexp").length==0){
            $("#addexp").append("<span class='cwfdelexp'>删除</span>")
        };
    });






    var year="";
    $('body').on("mousedown",".general-select input",function(){
        var _this=$(this);
        year="";
        if(_this.closest(".general-select").next().height()=="0"){
            $(".options").css("height","0px");
            _this.closest(".general-select").next().css("height","auto");
        }else {
            _this.closest(".general-select").next().css("height","0px");
        }

    });


    $('body').on("mousedown",".cwfmonths span",function(){
        var _this=$(this);
        var timebox=_this.closest(".general-select").find("input").eq(0);
        var month=parseInt(_this.html());
        if(year.toString().length==4){
            timebox.val(year+"年"+month+"月");
            _this.closest(".options").css("height","0px");
        }else{

        };

    });

    $('body').on("mousedown",".select-option",function(){
        var _this=$(this);
        $(".select-option").each(function(){
            var _that=$(this);
            _that.css({'background-color':'#fff','color':'#333'})
        });
        _this.css({'background-color':'#1aa9d2','color':'#fff'})
        var optionhtml=_this.find("span").eq(0).html();
        _this.closest(".options").prev().find("input").val(optionhtml);
        year=optionhtml;
    });

    //
    //$(".general-select input").blur(function(){
    //    var _this=$(this);
    //    _this.closest(".general-select").next().css("height","0");
    //});


    //删除操作
    $('body').on("click",".cwfdelexp",function(){
        var exps=$(".exp");
        if(exps.length>2){
            exps.eq(exps.length-1).remove();
        }else if(exps.length==2){
            exps.eq(exps.length-1).remove();
            $("#addexp .cwfaddexp").css("width","458px");
            $(".cwfdelexp").remove();
        }
    })

    //默认年份
    var date =new Date();
    var year_date= date.getFullYear();//年
    var date_options="";
    for(var i=0;i<15;i++){
        date_options+="<div class='select-option' style='width:80px;'><span>"+(year_date-i)+"</span></div>"
    };
    $('.cwftimeoptions').append(date_options);
})