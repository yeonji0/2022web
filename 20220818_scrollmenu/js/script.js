let $oneTop = $("#v01").offset().top;
let $twoTop = $("#v02").offset().top;
let $threeTop = $("#v03").offset().top;

// $(".menuWrap>a").eq(0).click(function(e){
//     e.preventDefault();
//     $(".menuWrap>a").removeClass("active");
//     $(this).addClass("active");
//     $("html,body").stop().animate({scrollTop:oneTop})
// })

$(".menuWrap > a").click(function(e){
    e.preventDefault();

    let i = $(this).index();
    let st = $(".scene").eq(i).offset().top;
    $("html,body").stop().animate({scrollTop:st})
})

