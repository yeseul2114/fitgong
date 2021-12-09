$(function(){
    $('.studyThumb p a').on('click',function(e){
        e.preventDefault();
        $('.purchase_pop_bg').css('display','block');
        $('.purchase_pop').css('display','block');
    });

    $('.purchase_popClose').on('click',function(){
        $('.purchase_pop_bg').css('display','none');
        $('.purchase_pop').css('display','none');
    });

    $('.couponClose').on('click',function(){
        $('.coupon_pop_bg').css('display','none');
        $('.coupon_pop').css('display','none');
    });

    $('.coupon').on('click',function(){
        $('.coupon_pop_bg').css('display','block');
        $('.coupon_pop').css('display','block');
    });

    $('.enrollment_btn').on('click',function(){
        $('.enrollment_pop_bg').css('display','block');
        $('.enrollment_pop').css('display','block');
    });

    $('.enrollmentClose').on('click',function(){
        $('.enrollment_pop').css('display','none');
        $('.enrollment_pop_bg').css('display','none')
    });
});