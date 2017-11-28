/**
 * Created by Administrator on 2017/9/18 0018.
 */
$(document).ready(function(){

    //设置下拉选择框
    $("body").on("mousedown",".general-select input",function(){
        var _this=$(this);
        if(_this.closest(".general-select").next().height()=="0"){
            $(".options").css("height","0px");
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
    });
    //点击选择标签


    $("body").on("click",".zjbiaoqian_wrap .zjflbq",function(){
        $(".zjbiaoqian_wrap").find(".chec_tip1  .left_align").html("");
        if($(".bqselect").length>=5){
            if($(this).hasClass("bqselect")){
                $(this).removeClass("bqselect");
            }
        }else{
            if($(this).hasClass("bqselect")){
                $(this).removeClass("bqselect");
            }else{
                $(this).addClass("bqselect");
            }
        }
    });


    //点击添加标签
    $("#zjtianjia").on("click",function(){

        var Label=$("#zjtianjiainput").val();
        if($.trim(Label)!=""){
            if($(".bqselect").length>=5){
                $("#zjtianjiainput").val("");
                return;
            }else{
                var labelspan="<span class='zjflbq bqselect zjwidth"+$.trim(Label).length+"' style='margin: 15px 12px 0 0'>"+Label+"</span>"
                $(".zjbiaoqian_wrap").append(labelspan);
                $("#zjtianjiainput").val("");
            }

        }
    })


    $(".general-input input").on("focus",function(){
        var _this=$(this);
        if(_this.closest(".general-input").css("borderColor")=="rgb(226, 61, 70)"){
            _this.closest("div").nextAll(".chec_tip1").eq(0).find(".left_align").html("");
            _this.closest("div").nextAll(".chec_tip1").eq(0).find(".right_align").html("");
        }
    });


})