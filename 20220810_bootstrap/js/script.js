$(".cont-2st .btn-gruop div").click(function(){

    $(".cont-2st .btn-gruop div").removeClass("active");
    $(this).addClass("active");

    let $selector = $(this).attr("data-filter");
    console.log($selector);


    $(".cont-2st .view").isotope({
        filter: $selector
    })
})
window.onload = function(){
    $(".cont-2st .btn-gruop div").eq(0).trigger("click")
}

// owl carousel
$("#oslide1").owlCarousel({
    loop:true,
    autoplay:true,
    margin:30,
    responsive:{
        0:{items:1},
        760:{items:2},
        990:{items:4}
    }
});

$("#oslide2").owlCarousel({
    loop:true,
    autoplay:true,
    center:true,
    nav:true,
    
    margin:30,
    responsive:{
        0:{items:1},
        760:{items:2},
        990:{items:4}
    }
});

$(".view .vPopup").magnificPopup({
    type:"image",
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    }
})

console.log(window.innerHeight);
const lazyLoad = document.querySelectorAll(".lazy-load");

window.addEventListener("scroll",function(){
    lazyLoad.forEach(function(item){
        // console.log(item)
        const rect = item.getBoundingClientRect().top
        console.log(rect);
        if(rect <= window.innerHeight){
            item.classList.add("fade")
        }
    })
})