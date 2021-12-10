$(function(){
    $('.submit').on('click',function(){
        $('.popup_bg').css('display','block');
        $('.confirm_pop').css('display','block');
    });

    $('.yes').on('click',function(){
        $('.popup_bg').css('display','none');
        $('.confirm_pop').css('display','none');
    });
});