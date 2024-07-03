$(function(){
    $(".toggle").click(function(){
        $(this).prev(".plus_text").toggleClass("on");
    });
});