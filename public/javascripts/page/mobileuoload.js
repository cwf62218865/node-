/**
 * Created by Administrator on 2017/9/13 0013.
 */
$(document).ready(function(){
    //设置页面样式
    var height=$(window).height();
    $(".logo").css("margin-top",height*6/100);
    $(".file_name").css({"height":height*10.5/100,"line-height":height*10.5/100+"px","margin-top":height*8.3/100})
    $(".imgbox svg").css("height",height*26/100);
    $(".imgbox").css({"margin-top":height*6/100,"height":height*26.5/100+"px"});
    $(".file_btn").css({"height":height*6.6/100,"line-height":height*6.6/100+"px","margin-top":height*4.5/100+"px"})
    $(".imgbox img").css({"height":height*20.5/100,"width":height*20.5/100,"margin-top":height*2/100,"margin-bottom":height*2/100});


})