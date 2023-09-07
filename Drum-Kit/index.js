
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.alpha[data-key="${e.code}"]`);
    if(!audio){
        return;
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");

}
function removeTransition(e){
    if(e.propertyName != "transform"){
        return;
    }
    this.classList.remove("playing");   
}
document.addEventListener("keydown", playSound)

const keys = document.querySelectorAll(".alpha")
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
