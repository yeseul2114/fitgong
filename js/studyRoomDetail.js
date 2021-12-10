$(function(){
        //chapter열기
        $('.fastMove ul li p').on('click',function(){
            $('.fastMove ul li').removeClass('active');
            $(this).parent().addClass('active');
        });
});