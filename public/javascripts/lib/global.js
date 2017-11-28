
require.config({
    baseUrl:YEJ.STATIC_ROOT+"js"
    
    
});

// Start the main app logic.
define(['lib/jquery'],
    function ($) {
	
	
	   var Global={
		    init:function(){
		    	
		    	Global.initAction();
		    	Global.load();

		    	var endTime = (new Date("2016/06/03 08:00:00")).getTime();
		    	
		    	
		      var nowTime =	new Date().getTime(); 
		    	
		   
		    }
	 
	   
	   ,initAction:function(){
		    	
		   
	            
	            
	            
             
		    	//回到顶部按钮
		    	$("#J_back_to_top").on("click",function(){
		    		 $('body,html').animate({scrollTop:0},1000);
		                return false;
		    		
		    	});
		    	 $(window).scroll(function(){
		                if ($(window).scrollTop()>100){
		                    $("#J_back_to_top").fadeIn(1500);
		                }
		                else
		                {
		                   $("#J_back_to_top").fadeOut(1500);
		                }
		            });
		    	
		    	$(".-lpy-btn").on("mouseover",function(){
		    		$(this).removeClass("mousedown")
		    		$(this).addClass("mouseover")
		    	});
		    	
		    	$(".-lpy-btn").on("mouseout",function(){
		    		$(this).removeClass("mouseover")
		    	});
		    	
		    	$(".-lpy-btn").on("mousedown",function(){
		    		$(this).removeClass("mouseover")
		    		$(this).addClass("mousedown")
		    		
		    	});
		    	
		    	$(".-lpy-btn").on("mouseup",function(){
		    		$(this).removeClass("mousedown")
		    	});
		    	
		    
		    	
		    }, load :function(){
	    		
                if ($(window).scrollTop()>100){
                    $("#J_back_to_top").fadeIn(1500);
                }
                else
                {
                   $("#J_back_to_top").fadeOut(1500);
                }
            },
		    //得到http://192.168.1.61:8080/usercenter/user-center-private-info-set?a=1中部分/usercenter/user-center-private-info-set?a=1
		    getTargetUrl:function(){
		    	return window.location.pathname+window.location.search;
		    },
		    //得到登录路径
		    getLoginUrl:function(){
		    	return   "/user/sign-in-web?url="+Global.getTargetUrl();
		    },
		    
		    //检测按钮是否可以点击
		    check_can_click:function(target){
		    	var result = $(target).hasClass("can_not_click");
				if(result){
					return false;
				} else {
					return true;
				}
		    },
		    //按钮加锁
		    btn_add_lock:function(target){
		    	$(target).addClass("can_not_click");
		    },
		    //按钮解锁
		    btn_remove_lock:function(target){
		    	$(target).removeClass("can_not_click");
		    },
		    
		    
			//邮箱格式校验
			checkEmail:function(email){
			    var re =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			    if(re.test(email)){
			       return true;
			    }else{
			       return false;
			    }
			}
		    ,
		     StringAs:function(string) { 
		    	 return string;
		       // return  string.replace(/(\\|\"|\n|\r|\t)/g, "\\$1") ;  
		    }  
		   

	}
	
	   Global.init();
	   return Global;
	
});

