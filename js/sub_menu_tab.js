$(function(){
    $(".click_on").click(function(){
        $(this).toggleClass("click_on");
        $(this).siblings(".click_on").remove_class("click_on")
    });
});