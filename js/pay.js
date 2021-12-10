$(function(){
    $('.payWay tbody tr td').on('click',function(){
        $('.payWay tbody tr td').removeClass('active');
        $(this).addClass('active');
    })

    $('.couponUse').on('click',function(){
        $('.couponUse_popup_bg').css('display','block');
        $('.couponUse_popup').css('display','block');
    });

    $('.couponClose').on('click',function(){
        $('.couponUse_popup_bg').css('display','none');
        $('.couponUse_popup').css('display','none');
    });

    $('.payGo').on('clcik',function(){
        window.location.href="pay_ok.html"
    });
});