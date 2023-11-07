const buttons = document.querySelectorAll(".timer__button");
const input = document.querySelector("input[type='text']");
console.log(buttons);

function setTimer(e){
    console.log(e);
}
buttons.forEach(button =>{
    button.addEventListener("click", setTimer);
});
input.addEventListener("input", setTimer);