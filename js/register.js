$(function(){

    $('.eye').on('click',function(){
        $(this).toggleClass('on');

        if ($('.eye').hasClass('on') == true) {
            $('.pw').attr('type', 'text');
        } else {
            $('.pw').attr('type', 'password');
        }
    });

    $('.eye_confirm').on('click',function(){
        $(this).toggleClass('on');

        if ($('.eye_confirm').hasClass('on') == true) {
            $('.pw_confirm').attr('type', 'text');
        } else {
            $('.pw_confirm').attr('type', 'password');
        }
    });

    $('.email a').on('click',function(e){
        e.preventDefault();

        $('.idSame_popup_bg').css('display','block')
        $('.idSame_popup').css('display','block')
    })

    $('.idSame_popup p button').on('click',function(){
        $('.idSame_popup_bg').css('display','none')
        $('.idSame_popup').css('display','none')
    });
});