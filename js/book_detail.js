$(function(){
    $('.bookBottom ul li').on('click',function(){
        var idx = $(this).index();
        var imgOffset1 = $('.bookBottom div p').eq(0).offset();
        var imgOffset2 = $('.bookBottom div p').eq(1).offset();
        
        if(idx == 0){
            $('html,body').animate({scrollTop:imgOffset1.top},500)
        }else if(idx == 1){
            $('html,body').animate({scrollTop:imgOffset2.top},1000)
        }
    });
});