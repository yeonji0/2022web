
$(".itemWrap>li").click(function(){
    console.log($(this).index());

    let i = $(this).index();
    $("#image>p").hide();
    $("#image>p").eq(i).show();
})

let current=0;
$(".right").click(function(){
    current++;
    if(current == 3){current = 2}
    console.log(current);
    let value = current * -760;
    // $(".itemWrap").css("left",current*-760)
    $(".itemWrap").animate({"left":value},300)
})


