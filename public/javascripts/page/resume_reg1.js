/**
 * Created by Administrator on 2017/9/15 0015.
 */
//提取省市内容
var area=new Array();
area=dsy.Items[0];
var html="";
$(".general-select input").on("mousedown",function(){

    var _this=$(this);
    if(_this.closest(".general-select").next().height()=="0"){
        $(".options").css("height","0px");
        _this.closest(".general-select").next().css("height","185px");
    }else {
        _this.closest(".general-select").next().css("height","0px");
    }

})
for(var i=0;i<area.length;i++){
    html+="<div class='select-option city_con ' id='city"+i+"'><span>"+area[i]+"</span></div>";
}
$(".city1 .options").html(html);

var areacq=dsy.Items['0_3_0'];
var htmlcq="";
for(var i=0;i<areacq.length;i++){
    htmlcq+="<div class='select-option district_con'><span>"+areacq[i]+"</span></div>";
}
$(".district1 .options").html(htmlcq);


$("body").on("mousedown",".city_con",function(){
    var _this=$(this);
    var optionhtml=_this.find("span").eq(0).html();
    _this.closest(".options").prev().find("input").val(optionhtml);
    _this.closest(".options").css("height","0");
    $(".district1 input").val("");
    var city=$(this).attr("id");
    var len=city.length;
    var index=city.substring(4,len);
    if(index<4){
        var area1=dsy.Items['0_'+index+"_0"];
    }else if(index>=4){
        var area1=dsy.Items['0_'+index];
    }
    var html1="";
    for(var i=0;i<area1.length;i++){
        html1+="<div class='select-option district_con'><span>"+area1[i]+"</span></div>";
    }

    $(".district1 .options").html(html1);
    $(".district1 input").val(area1[0]);

    $("body").on("mousedown",".district_con",function() {
        var _this = $(this);
        var optionhtml = _this.find("span").eq(0).html();
        _this.closest(".options").prev().find("input").val(optionhtml);
        _this.closest(".options").css("height","0");
    });
});
$(".msg_zj .radio_box").click(function () {
    $(".msg_zj .radio_box").removeClass("radio_sec");
    $(this).addClass("radio_sec");
})


$(".img_con").click(function () {
    $(".title_content").html("上传头像");
    $("#modalbox").animate({"opacity":1},300);
    setTimeout(function(){
        $("#modalbox").css("display","block");
    },0)
});

$(".modalclose").on("click",function(){
    $("#modalbox").animate({"opacity":0},300);
    setTimeout(function(){
        $("#modalbox").css("display","none");
    },300)
});

