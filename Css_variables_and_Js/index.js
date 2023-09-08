// console.log(space)
// console.log(blur);
// console.log(color)
function changeBorder(e){
    document.querySelector(".image").style.borderColor = `${color.value}`;
    document.querySelector(".image").style.backgroundColor = `${color.value}`;
    document.querySelector(".h1").style.color = `${color.value}`;
}

function blurImage(e){
    document.querySelector(".image").style.filter = `blur(${blur.value}px)`;
}

function changePadding(){
    document.querySelector(".image").style.padding = `${space.value}px`;
}

var color = document.getElementById("border-color");
color.addEventListener("input", changeBorder);

var blur = document.querySelector(".blur");
blur.addEventListener("input", blurImage);
 
var space = document.querySelector(".spacing");
space.addEventListener("input", changePadding);