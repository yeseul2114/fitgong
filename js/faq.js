$(function(){
    $('.faq_tab li').on('click',function(){
        $('.faq_tab li').removeClass('active');
        $(this).addClass('active');
        var faqClass = $(this).attr('class');

        console.log(faqClass)
        var aa = $('.faqTabContent ul li').attr('class');

        if(faqClass == aa){
            aa.css('display','block')
        }
        // if(faqClass == $('.faqTabContent ul li').attr('class')){
        //     $('.faqTabContent ul li').addClass('active')
        // }
    });
});
//li에 모든 faq 적기
//전체 카테고리의 경우