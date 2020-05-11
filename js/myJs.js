$(function(){
	'use strict';
	$(".hero").height($(window).height());
	$(window).resize(function(){
        $(".hero").height($(window).height());
         $(".slider").each(function(){
     	$(this).css("paddingTop",($(window).height() - $(".slider div").height())/2);

     });
	});
    //Links Add Active
    $(".links li").click(function(){
    	$(this).addClass('active').siblings().removeClass('active');
    });
    //Trigger the Bx slider
     $('.slider').bxSlider({
     	pager: false
     });
     //adjest make the item center 
     $(".slider").each(function(){
     	$(this).css("paddingTop",($(window).height() - $(".slider div").height())/2);

     });
     //smoth scroll
     $(".links li a").click(function(){
            $("html , body").animate({
            	scrollTop:$("#"+ $(this).data("value")).offset().top
            },1000);
     });


     //our auto slider code
     (function autoSlider(){
           $(".testime .sliderr .active").each(function(){
           	if(!$(this).is(":last-child")){
           		$(this).delay(3000).fadeOut(1000,function(){
           			$(this).removeClass("active").next().addClass("active").fadeIn();
           			autoSlider();
           		});
           	}else{
           		$(this).delay(3000).fadeOut(1000,function(){
           			$(this).removeClass("active");
           			$(".testime .sliderr div").eq(0).addClass("active").fadeIn();
           			autoSlider();

           		});
           	}
           }
           	)//end the loop
     
     	}());
     //trigger mixitup
     $("#container").mixItUp();
     $(".shuffle li").click(function(){
     	$(this).addClass("selected").siblings().removeClass("selected");
     });
     	
     

});









