$(function(){

    $('.comment_write').on('click',function(e){

        var comment;

        comment = "<tr><td colspan='5'>"
        comment += "<div class='small_answer' style='text-align: right;'>"
        comment += "<div class='answer_info'>"
        comment += "<p class='small_answerId''>UserName</p>"
        comment += "<p class='small_answerNumber'></p>"
        comment += "</div>"
        comment += "<textarea class='small_textarea' cols='120' rows='5' placeholder='댓글을 남겨보세요.'></textarea>"
        comment += "<button class='comment_cancle'>취소</button> <button>등록</button>"
        comment +=  "</div></td></tr>"
        $(this).parent().parent().parent().after(comment);
        
    });

    $('.reference_table tbody tr td textarea').on('keyup',function(){
        $('.answerNumber').html($(this).val().length + "/3000")
        if ($(this).val().length > 2999){
            $(this).val($(this).val().substring(0,2999))
        }
    });

    $(document).on('keyup','.small_answer textarea',function(){
        $('.small_answerNumber').html($(this).val().length + "/3000")
        if ($(this).val().length > 2999){
            $(this).val($(this).val().substring(0,2999))
        }
    });

    $(document).on('click','.comment_cancle',function(){
        $(this).parent().parent().parent().remove();
    });
});