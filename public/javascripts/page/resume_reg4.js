/**
 * Created by Administrator on 2017/9/11 0011.
 */
$(document).ready(function(){
    var national = [
        "汉族", "壮族", "满族", "回族", "苗族", "维吾尔族", "土家族", "彝族", "蒙古族", "藏族", "布依族", "侗族", "瑶族", "朝鲜族", "白族", "哈尼族",
        "哈萨克族", "黎族", "傣族", "畲族", "傈僳族", "仡佬族", "东乡族", "高山族", "拉祜族", "水族", "佤族", "纳西族", "羌族", "土族", "仫佬族", "锡伯族",
        "柯尔克孜族", "达斡尔族", "景颇族", "毛南族", "撒拉族", "布朗族", "塔吉克族", "阿昌族", "普米族", "鄂温克族", "怒族", "京族", "基诺族", "德昂族", "保安族",
        "俄罗斯族", "裕固族", "乌孜别克族", "门巴族", "鄂伦春族", "独龙族", "塔塔尔族", "赫哲族", "珞巴族"
    ];

    var date_options=""
    for(var i=0;i<national.length;i++){
        date_options+="<div class='select-option' style='width: 108px'><span>"+national[i]+"</span></div>"
    };
    $('.cwfnationaloptions').append(date_options);

    $('body').on("mousedown",".general-select input",function(){
        var _this=$(this);
        year=parseInt(_this.val().substring(0,4));

        if(_this.closest(".general-select").next().height()=="0"){
            $(".options").css("height","0px");
            _this.closest(".general-select").next().css("height","auto");
        }else {
            _this.closest(".general-select").next().css("height","0px");
        }

    });




    $('body').on("mousedown",".cwfnationaloptions .select-option,.cwfoptions_reg4 .select-option",function(){
        var _this=$(this);
        var optionhtml=_this.find("span").eq(0).html();
        _this.closest(".options").prev().find("input").val(optionhtml);
        _this.closest(".options").css("height","0px");
    });





    //籍贯
    var  area=dsy.Items[0];
    var city="";
    for(var i=0;i<area.length;i++){
        city+="<div class='select-option' style='width:120px;' data-id='"+i+"'><span>"+area[i]+"</span></div>"
    };
    $('.cwfcityoptions').append(city);

    $("body").on("mousedown",".cwfcityoptions .select-option",function(){
        var _this=$(this);
        $(".cwfcityoptions .select-option").each(function(){
            var _that=$(this);
            _that.css({'background-color':'#fff','color':'#333'})
        });
        _this.css({'background-color':'#1aa9d2','color':'#fff'});

        var areas="";
        var data_id=_this.attr("data-id");
        var listnum="0_"+data_id+"_0";
        var areamsg=dsy.Items[listnum];
        for(var i=0;i<areamsg.length;i++){
            areas+="<span>"+areamsg[i]+"</span>"
        }
        $(".cwfarea").html(areas);
    });

    $("body").on("mousedown",".cwfarea span",function(){
        var _this=$(this);
        _this.closest(".options").prev().find("input").val(_this.html());
        _this.closest(".options").css("height","0px");
    })

    //生日
    //默认年份
    var date =new Date();
    var year_date= date.getFullYear();//年
    var datetime_options="";
    for(var i=0;i<15;i++){
        datetime_options+="<div class='select-option' style='width:80px;'><span>"+(year_date-i)+"</span></div>"
    };
    $('.cwftimeoptions').append(datetime_options);


    var year="";

    $('body').on("mousedown",".cwftimeoptions .select-option",function(){
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

    $('body').on("mousedown",".cwfmonths span",function(){
        var _this=$(this);
        var timebox=_this.closest(".general-select").find("input").eq(0);
        var month=parseInt(_this.html());
        if(year.toString().length==4){
            timebox.val(year+"."+month);
            _this.closest(".options").css("height","0px");
        }else{

        };

    });

    $(".cwfreg4content textarea").focus(function(){
        var _this=$(this);
        $(this).closest(".cwfreg4content").css("border-color","#1aa9d2");
    }).blur(function(){
        var _this=$(this);
        $(this).closest(".cwfreg4content").css("border-color","#f5f5f5");
    });

    //查看示例
    $(".cwfseeexample").on("click",function(){
        if($(".examplebox").eq(0).height()=="0"){
            $(".examplebox").eq(0).css({"height":"auto","margin":"0 0 20px 60px","padding-bottom":"10px"});
            $(".cwfseeexample").css("color","#1aa9d2").html("收起示例")
        }else {
            $(".examplebox").eq(0).css({"height":"0","margin":"0","padding-bottom":"0"});
            $(".cwfseeexample").css("color","#999").html("查看示例")
        }
    })

    //文本域输入数字显示
    $(".cwftextarea").on("input",function(){
        var content=$(this).val();
        var contentlength=content.length;
        var length=60;
        var nowlength=length-contentlength;
        if(nowlength>=0){
            $("#textareanum").html(nowlength);
        }else{
            $(this).val(content.substring(0,length));
        }

    })

    $(".general-select input").on("click",function(){
        var isremove=0;
        $("input").each(function(){
            var _this=$(this);
            if(_this.closest(".general-select").css("border-color")=="rgb(226, 61, 70)"){
                isremove=1;
            }
        })
        if(isremove==0){
            $(".cwf_tip").html("");
        }
    })
    $("#introduce").on("click",function(){
        $(".cwf_tip1").html("");
    })


})