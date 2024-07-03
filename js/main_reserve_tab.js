$(function(){
    $(".round2>.round_btn>a").click(function(){
        $(".round2>.round_btn>a").removeClass("reserve_on");
        $(this).addClass("reserve_on")
    });
});