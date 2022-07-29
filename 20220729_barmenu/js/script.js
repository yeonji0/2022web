console.log("test")

$(".navbar ul li").mouseover(function(){
   let i = $(this).index();
   console.log(i);

   let value = i * 240;
   $(".bar").css("left",value)
});
