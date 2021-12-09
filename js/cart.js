$(function(){
    $('.right_cart table tr td button').on('click',function(){
        window.location.href="pay.html"
    })

    $('.remove_btn').on('click',function(){
        $(this).parent().parent().remove();
        console.log('aas')
    });
});