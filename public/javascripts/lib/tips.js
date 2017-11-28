jQuery.tips = {
    alert:function(text,callback) {

        var mengban_html='<div id="J_mengban" style="top:0;z-index: 200000;opacity:0.5;-moz-opacity:0.5;filter:alpha(opacity=50);width: 100%;height: 100%;position: fixed;background-color: #000000;"> </div>';

        var alert_html='<div id="J_alert" style="width:300px;height: 200px;position: fixed;z-index: 200001;background-color: #ffffff;margin: auto;left:0;right: 0;top:200px;">'
            +        '<div style="height: 14px ;background-color: #463b7f;margin-bottom: 30px;"></div>'
            +        '<div style="color:#2b2e30;width: 200px;height: 50px;margin: auto;text-align: center;">'+text+'</div>'
            +        '<div id="J_alert_ok" style="border-radius:4px;-webkit-border-radius: 4px;-moz-border-radius: 4px; cursor: pointer; color:#ffffff; position: absolute;bottom: 10px;margin: auto;left:0;right: 0;  width: 80%;height: 40px;background-color: #463b7f;text-align: center;line-height: 40px;">确定</div>'
            +     '</div>';

        $("#J_mengban").remove();

        $("#J_alert").remove();
        $("body").append(mengban_html)
        $("body").append(alert_html);

        $("#J_alert_ok").on("click",function(){
            $("#J_mengban").remove();

            $("#J_alert").remove();
            if(callback){
               callback();
            }
        });

    },
    conform:function(text,callback) {

        var mengban_html='<div  id="J_mengban" style="z-index: 200000;top:0;opacity:0.5;-moz-opacity:0.5;filter:alpha(opacity=50);width: 100%;height: 100%;position: fixed;background-color: #000000;"> </div>';

        var conform_html ='<div  id="J_conform" style="width:300px;height: 200px;position: fixed;z-index: 200001;background-color: #ffffff;margin: auto;left:0;right: 0;top:200px;">'
            +          '<div style="height: 14px ;background-color: #463b7f;margin-bottom: 30px;"></div>'
            +          '<div style="color:#2b2e30;width: 200px;height: 50px;margin: auto;text-align: center;">'+text+'</div>'

            +          '<div id="J_alert_cancel" style="border-radius:4px;-webkit-border-radius: 4px;-moz-border-radius: 4px; cursor: pointer; color:#ffffff; position: absolute;bottom: 10px;left:20px;  width: 40%;height: 40px;background-color: #aaaaaa;text-align: center;line-height: 40px;">取消</div>'

            +          '<div id="J_alert_sure" style="border-radius:4px;-webkit-border-radius: 4px;-moz-border-radius: 4px; cursor: pointer; color:#ffffff; position: absolute;bottom: 10px;right:20px;  width: 40%;height: 40px;background-color: #463b7f;text-align: center;line-height: 40px;">确定</div>'
            +       '</div>';
        $("#J_mengban").remove();
        $("#J_conform").remove();
        $("body").append(mengban_html)
        $("body").append(conform_html);

        $("#J_alert_sure").on("click",function(){
            $("#J_mengban").remove();
            $("#J_conform").remove();
            if(callback){
                callback(true);
            }

        });

        $("#J_alert_cancel").on("click",function(){
            $("#J_mengban").remove();
            $("#J_conform").remove();
            if(callback){
                callback(false)
            }
            ;
        });

    },
    
    toast:function(text,callback){
    	
    	var content='<div id="J_toast" style="position: fixed;z-index:1000; text-align:center; left:0;right:0; bottom:100px; margin:auto; text-align: center;">'
    		+'<span style="padding: 5px 10px;background-color: #000000; border-radius: 5px;    -webkit-border-radius: 5px;    -moz-border-radius: 5px; color: #ffffff ">'+text+'</span>'
    		+'</div>';
    	 $("#J_toast").remove();
    	 $("body").append(content)
    	 window.setTimeout(hideToast,2000); 
				function hideToast() 
				{ 
					$("#J_toast").remove();
					
			    		 if(callback){
			                 callback(true);
			             }
			    	
				}
    }
};
