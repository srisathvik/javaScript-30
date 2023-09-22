var input = [];

const code = "sathvik";

window.addEventListener("keyup", pressed);

function pressed(e){
    input.push(e.key)
    input.splice(-code.length-1, input.length-code.length);
    // console.log(-code.length-1, input.length-code.length);
    if(input.join("").includes(code)){
        cornify_add();

    }
}