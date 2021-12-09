$(function(){
      // tab
      $('.goods_tab li').on('click',function(){
        var title = $(this).text();
        $('.goods h2').text(title);
        console.log(title)
        $('.goods_tab li').removeClass('active');
        $(this).addClass('active');

        var tabIdx = $(this).index();
        console.log(tabIdx)
        $('.tabContent div').removeClass('active');
        $('.tabContent > div').eq(tabIdx).addClass('active');
    });

    //상품 클릭
    $('.goods_plan table tr td').on('click',function(){
        $('.goods_plan table tr td').removeClass('active')
        $(this).toggleClass('active');

        $('.mini_planPop').css('display','flex')
        var planName = $(this).children('p').eq(0).text();
        var planPrice = $(this).children('p').children('strong').text();

        $('.planType').text(planName)
        $('.planPrice').text(planPrice + '원')
    });

    //장바구니 버튼 클릭
    $('.goCart').on('click',function(e){
        e.preventDefault();
        $('.goCart_popup_bg').css('display','block');
        $('.goCart_popup').css('display','block');
    });

    //팝업 닫기
    $('.planKeep').on('click',function(){
        $('.goCart_popup_bg').css('display','none');
        $('.goCart_popup').css('display','none');
    });

    //장바구니 가기 버튼 클릭 시 장바구니로 이동
    $('.goCartBtn').on('click',function(){
        window.location.href = 'cart.html';
    });
});