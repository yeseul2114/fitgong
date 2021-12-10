$(function(){
    $('.eye').on('click',function(){
        $(this).toggleClass('on');

        if ($('.eye').hasClass('on') == true) {
            $('.pw').attr('type', 'text');
        } else {
            $('.pw').attr('type', 'password');
        }
    });


});