const boxes = document.querySelectorAll('.inbox input[type="checkbox"]')
console.log(boxes);

let lastchecked;
function select(e){
    let inbetween = false;
    if(e.shiftKey && this.checked){
        boxes.forEach(box=>{
            if(box == this || box == lastchecked){
                inbetween = !inbetween;
            }
            if(inbetween){
                box.checked = true;
            }
        })
    }
    lastchecked = this;
}
boxes.forEach((box, i) => {
console.log(box);
box.addEventListener('click', select)});