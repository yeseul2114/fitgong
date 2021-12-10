$(function(){
    // tab
    $('.studyTab li').on('click',function(){
        $('.studyTab li').removeClass('active');
        $(this).addClass('active');

        var tabIdx = $(this).index();
        console.log(tabIdx)
        $('.studyContent div').removeClass('active');
        $('.studyContent > div').eq(tabIdx).addClass('active');
    });

    //chapter열기
    $('.studyContent > div ul li > p').on('click',function(){
        $('.studyContent > div ul li > div').css('display','none');
        $(this).next().css('display','flex')
        $('.studyContent > div ul li > p').removeClass('active');
        $(this).addClass('active');
    });

    $('.studyContent > div ul li > div div a').on('click',function(e){
        // e.preventDefault();

        //강의별 구매 이용하여 수강할 경우
        $('.only_pop_bg').css('display','block');
        $('.only_pop').css('display','block');

        //로그인이 필요한 경우
        $('.login_pop_bg').css('display','block');
        $('.login_pop').css('display','block');
    });

    //강의별 구매 팝업 닫기
    $('.only_popClose').on('click',function(){
        $('.only_pop_bg').css('display','none');
        $('.only_pop').css('display','none');
    });

    //로그인 필요합니다 팝업 닫기
    $('.login_popClose').on('click',function(){
        $('.login_pop_bg').css('display','none');
        $('.login_pop').css('display','none');
    });
});