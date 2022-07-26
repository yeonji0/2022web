$(".itemWrap>li").click(function(){
    console.log($(this).index());
    
    let i = $(this).index();
    $("#image>p").hide();
    $("#image>p").eq(i).show();
})

let current = 0;
$(".right").click(function(){
    current++;
    if(current == 3) { current = 2 }
    console.log(current);
    view(current)
})

$(".left").click(function(){
    current--;
    if(current < 0){current = 0}
    view(current)
})

function view(current){
    let value = current * -760;
    // $(".itemWrap").css("left",value)
    $(".itemWrap").stop().animate({"left":value},300)
}