const nav = document.querySelector("#main");
const topOfNAv = nav.offsetTop;


function fixNav(){
    if(window.scrollY >= topOfNAv){
        document.body.style.paddingTop = nav.offsetHeight + "px";
        document.body.classList.add("fixed-nav");
    }
    else{
        document.body.style.paddingTop = 0;
        document.body.classList.remove("fixed-nav");
    }

    
}




window.addEventListener("scroll", fixNav);