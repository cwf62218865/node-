/**
 * Created by chenwenfang on 2017/12/1 0001.
 */
$.basecontrol={
    //禁止滚动
    stopRoll:function(){
        $("body").css("overflow","hidden");
    },
    //开启滚动
    startRoll:function(){
        $("body").css("overflow","auto");
    },
    //确定弹窗
    confirm:function(option){
        var title=option.title||"确认操作";
        var content=option.content||"请确认此次操作";
        var cancel=option.cancel||"取消";
        var confirm=option.confirm||"确认";
        var overflow=option.overflow||"auto";
        var html="<div class='modalbox' id='stop_action'>";
        html+="<div class='stopbox'>";
        html+="<span class='close_modalbox' id='close_modalbox'><img src='/static/images/close.png'> </span>";
        html+="<div class='stopbox_title'>"+title+"</div>";
        html+="<div class='stopbox_content'>"+content+"</div>";
        html+="<div class='stopbox_btn'>";
        html+="<span id='cancel_btns'>"+cancel+"</span>";
        html+="<span id='confirm_btns'>"+confirm+"</span>";
        html+="</div></div></div>";
        $('body').append(html);
        if(overflow=="hidden"){
            $.basecontrol.stopRoll();
        }
        $("#confirm_btns").on("click",function(){
            $("#stop_action").remove();
            option.callback(true);
            $.basecontrol.startRoll();
        });
        $("#close_modalbox,#cancel_btns").on("click",function(){
            $("#stop_action").remove();
            $.basecontrol.startRoll();
        });
    },

    //分页
    pages:function (page,totalpage){
        var page=parseInt(page);
        var totalpage=parseInt(totalpage);
        if(totalpage=="0"){
            return false;
        }else{
            var pagehtml='<div class="pages_btn">';
            if(page==1){//判断当前显示的页数是否为第一页
                pagehtml+='<span class="pre_page no_page">上一页</span>';
                pagehtml+='<span class="page select">1</span>';
            }else{
                pagehtml+='<span class="pre_page">上一页</span>';
                pagehtml+='<span class="page">1</span>';
            }
            if(totalpage>8){
                if(page>=4){
                    pagehtml+='<span class="page1">...</span>';
                    if(page<=totalpage-3){

                    }else{

                    }

                    if(page<=totalpage-3){
                        pagehtml+='<span class="page">'+(page-1)+'</span>';
                        pagehtml+='<span class="page select">'+page+'</span>';
                        pagehtml+='<span class="page">'+(page+1)+'</span>';
                        pagehtml+='<span class="page1">...</span>';
                        pagehtml+='<span class="page">'+totalpage+'</span>';
                    }
                    if(page>totalpage-3){
                        if(page==totalpage-2){
                            pagehtml+='<span class="page">'+(page-1)+'</span>';
                            pagehtml+='<span class="page select">'+page+'</span>';
                            pagehtml+='<span class="page">'+(totalpage-1)+'</span>';
                            pagehtml+='<span class="page">'+totalpage+'</span>';
                        }else if(page==totalpage-1){
                            pagehtml+='<span class="page">'+(page-1)+'</span>';
                            pagehtml+='<span class="page select">'+page+'</span>';
                            pagehtml+='<span class="page">'+totalpage+'</span>';
                        }else{
                            pagehtml+='<span class="page">'+(page-2)+'</span>';
                            pagehtml+='<span class="page">'+(page-1)+'</span>';
                            pagehtml+='<span class="page select">'+page+'</span>';
                        }
                    }
                }else{
                    if(page==2){
                        pagehtml+='<span class="page select">2</span>';
                        pagehtml+='<span class="page">3</span>';
                    }else if(page==3){
                        pagehtml+='<span class="page">2</span>';
                        pagehtml+='<span class="page select">3</span>';
                    }else{
                        pagehtml+='<span class="page">2</span>';
                        pagehtml+='<span class="page">3</span>';
                    }
                    if(page<=totalpage-3){
                        pagehtml+='<span class="page">4</span>';
                        pagehtml+='<span class="page1">...</span>';
                        pagehtml+='<span class="page">'+totalpage+'</span>';
                    }
                }


            }else{
                for(var i=2;i<=totalpage;i++){
                    if(i==page){
                        pagehtml+='<span class="page select">'+i+'</span>'
                    }else{
                        pagehtml+='<span class="page">'+i+'</span>'
                    }
                }
            }
            if(page==totalpage){//判断当前显示的页数是否为最后一页
                pagehtml+='<span class="next_page no_page">下一页</span>';
            }else{
                pagehtml+='<span class="next_page">下一页</span>';
            }
            pagehtml+='</div>';
            return pagehtml;
        }
    },

    //表单验证

}