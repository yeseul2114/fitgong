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

    $('.phoneEdit').on('click',function(){
        $('.info_edit_bottom .phone input').css('width','385px')

        $(this).text('인증번호 받기');
        $(this).attr('class','confirm')
        $(this).parent().append('<a class="phoneEditCancle">취소</a>')
    });

    $(document).on('click',".phoneEditCancle",function(){
        $(this).remove();
        $('.confirm').text('수정');
        $('.info_edit_bottom .phone input').css('width','493px')
    });

    $('.withdrawNO').on('click',function(){
        $('.withdraw_pop_bg').css('display','none')
        $('.withdraw_pop').css('display','none')
    });

    $('.withdraw').on('click',function(){
        $('.withdraw_pop_bg').css('display','block')
        $('.withdraw_pop').css('display','block')
    });

    $('.withdrawOK').on('click',function(){
        $('.withdraw_pop_bg').css('display','none')
        $('.withdraw_pop').css('display','none')

        $('.withdrawConfirm_popup').css('display','block');
        $('.withdrawConfirm_popup_bg').css('display','block');
    });

    $('.withdrawConfirm_popup p button').on('click',function(){
        window.location.href="index.html"
    });
});