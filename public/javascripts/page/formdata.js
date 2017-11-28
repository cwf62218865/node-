/**
 * Created by Administrator on 2017/9/18 0018.
 */
jQuery.extend({

    //固定栏目的验证
    fromdata:function(obj,url,post_btn,callback){
        var _this=$(obj);
        var inputs=_this.find("input");//获取所有的input
        $(post_btn).on("click",function(){
            $(".formtip").remove();
            var data=[];//定义最后的data对象，用于ajax发送
            for(var i=0 ; i<inputs.length;i++){
                var inputi=$(inputs[i]);
                var name=inputi.attr("name");//input字段名称
                var inputval=inputi.val();//input值
                var error=inputi.attr("data-error");//错误提示信息
                var warn=inputi.attr("data-warn");//警告提示信息
                var rg=inputi.attr("data-rg");//正则

                if(error){//需要验证通道
                    if(inputval==""){
                        if(warn){
                            var no_data="<div class='formtip'><img class='tip_ico' src='../images/ico_error.png'> <span class='tip_msg'>"+warn+"</span></div>"
                        }else if(error){
                            var no_data="<div class='formtip'><img class='tip_ico' src='../images/ico_error.png'> <span class='tip_msg'>"+error+"</span></div>"
                        }else{
                            var no_data=""
                        }
                        inputi.closest(".general-input").css("border-color","#e23d46").append(no_data);
                        return false;
                    }else if(rg){
                        verification=new RegExp(rg);
                        if(verification.test(inputval)){
                            data[name]=inputval;
                        }else{
                            if(warn){
                                var no_data="<div class='formtip'><img class='tip_ico' src='../images/ico_error.png'> <span class='tip_msg'>"+warn+"</span></div>"
                            }else if(error){
                                var no_data="<div class='formtip'><img class='tip_ico' src='../images/ico_error.png'> <span class='tip_msg'>"+error+"</span></div>"
                            }else{
                                var no_data=""
                            }
                            inputi.closest(".general-input").css("border-color","#e23d46").append(no_data);
                            return false;
                        }
                    }
                }else{//不需要验证通道
                    data[name]=inputval;
                }
            };

            $.ajax({
                url:url,
                type:"post",
                data:{
                    data:data
                },
                success:function(data){
                    callback(data);
                }
            })

        });

        //点击取消提示
        inputs.on("focus",function(){
            $(this).closest(".general-input").find(".formtip").remove()
        })
    },

    //有重复内容的表单验证
    repeatfromdata:function(obj,url,post_btn,repeatbox,callback){
        var _this=$(obj);
        var repeatboxs=_this.find(repeatbox);//获取所有的input
        $(post_btn).on("click",function(){
            var data=[];//定义最后的data对象，用于ajax发送
            for(var i=0 ;i<repeatboxs.length; i++){
                var inputs=repeatboxs[i].find("input");//获去一个重复容器的所有的input
                for(var j=0;j<inputs.length; j++){
                    var inputi=$(inputs[j]);
                    var name=inputi.attr("name");//input字段名称
                    var inputval=inputi.val();//input值
                    var error=inputi.attr("data-error");//错误提示信息
                    var warn=inputi.attr("data-warn");//警告提示信息
                    var rg=inputi.attr("data-rg");//正则

                    if(error){//需要验证通道
                        if(inputval==""){
                            if(warn){
                                var no_data="<div class='formtip'><img class='tip_ico' src='../images/ico_error.png'> <span class='tip_msg'>"+warn+"</span></div>"
                            }else if(error){
                                var no_data="<div class='formtip'><img class='tip_ico' src='../images/ico_error.png'> <span class='tip_msg'>"+error+"</span></div>"
                            }else{
                                var no_data=""
                            }
                            inputi.closest(".general-input").css("border-color","#e23d46").append(no_data);
                            return false;
                        }else if(rg){
                            verification=new RegExp(rg);
                            if(verification.test(inputval)){
                                data[i][name]=inputval;
                            }else{
                                if(warn){
                                    var no_data="<div class='formtip'><img class='tip_ico' src='../images/ico_error.png'> <span class='tip_msg'>"+warn+"</span></div>"
                                }else if(error){
                                    var no_data="<div class='formtip'><img class='tip_ico' src='../images/ico_error.png'> <span class='tip_msg'>"+error+"</span></div>"
                                }else{
                                    var no_data=""
                                }
                                inputi.closest(".general-input").css("border-color","#e23d46").append(no_data);
                                return false;
                            }
                        }
                    }else{//不需要验证通道
                        data[i][name]=inputval;
                    }
                }



                $.ajax({
                    url:url,
                    type:"post",
                    data:{
                        data:data
                    },
                    success:function(data){
                        callback(data);
                    }
                })


            }
        });


        //点击取消提示
        $("body").on("focus","input",function(){
            $(this).closest(".general-input").find(".formtip").remove()
        })

    }
})