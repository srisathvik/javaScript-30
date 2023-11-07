let slider = document.querySelector(".items");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e)=>{
    isDown = true;
    slider.classList.add("active");
    startX = e.clientX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", (e)=>{
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mouseup", (e)=>{
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e)=>{

    if(isDown === false){
        return;
    }
    e.preventDefault();
    const x = e.clientX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
});
