console.log('ok1');

document.getElementsByClassName("box")[0].innerHTML = "안녕하세요";

// let btn = document.getElementsByClassName("btn");
// let box = document.getElementsByClassName("box");

let btn = document.querySelectorAll("button.btn")[0];
let box = document.querySelectorALL("div.box")[0];


btn.addEventListener("click",function(){
    console.log('click')
    box.innerHTML = "안녕1";
});

let array = [1,2,3,4]