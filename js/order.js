$(function(){

    // tab
    $('.order_tab li').on('click',function(){
        $('.order_tab li').removeClass('active');
        $(this).addClass('active');

        var tabIdx = $(this).index();
        console.log(tabIdx)
        $('.tabContent div').removeClass('active');
        $('.tabContent > div').eq(tabIdx).addClass('active');
    });

    // popup
    $('.no').on('click',function(){
        $('.popup_bg').css('display','none');
    });
    
    $('.exchange').on('click',function(){
        $('.exchange_pop_bg').css('display','block');
        $('.exchange_pop').css('display','block');
    });

    $('.cancle').on('click',function(){
        $('.cancle_pop_bg').css('display','block');
        $('.cancle_pop').css('display','block');
    })

    $('.imgX').on('click',function(){
        $(this).parent().remove();
        console.log('aa')
    });

    $('.plan').on('click',function(){
        $('.plan_pop_bg').css('display','block');
        $('.plan_pop').css('display','block');
    })

    $('.exchangeNO').on('click',function(){
        $('.exchangeNO_pop_bg').css('display','block');
        $('.exchangeNO_pop').css('display','block');
        console.log('aa')
    });
});