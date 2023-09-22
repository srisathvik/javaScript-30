const progressBar = document.querySelector('.progress_filled');

function changeVolume(e){
    // console.log(sound.value);
    vid.volume = sound.value/100;
}


function changePlayBack(){
    // console.log(speed.value);
    vid.playbackRate = speed.value/50;
}

function videoPause(){
    if(vid.paused){
        vid.play();
        pause.innerText = "⏸️"
        console.log("paused");
    }
    else{
        vid.pause();
        pause.innerText = "▶️"
        console.log("played");

    }
}

function decTenSec(){
    // console.log(vid.currentTime);
    vid.currentTime = vid.currentTime - 10;
}


function forwardTime(){
    vid.currentTime = vid.currentTime + 25;
}

function handleProgress() {
    const percent = (vid.currentTime / vid.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }
  
function changeTime(e){
    var pos = e.offsetX;
    var last = progressPoint.offsetWidth
    // console.log(pos, progressPoint.offsetWidth);
    var percent = (pos/last) * 100;
    progressBar.style.flexBasis = `${percent}%`;
    vid.currentTime = (vid.duration/100) * percent;

}

// function screensize(){
//     vid.requestFullscreen();
// }

var vid = document.querySelector("#myvideo")
// console.log(vid.volume);
vid.addEventListener("click", videoPause);
vid.addEventListener("timeupdate", handleProgress);

var sound = document.querySelector("#sound");
sound.addEventListener("input", changeVolume);
function display(e){
    // console.log(vid.playbackRate);
    
}

var speed = document.querySelector("#playbackspeed")
speed.addEventListener("input", changePlayBack);

var pause = document.querySelector(".play")
pause.addEventListener("click", videoPause);

var backward = document.querySelector(".backward");
backward.addEventListener("click", decTenSec);


var forward = document.querySelector(".forward");
forward.addEventListener("click", forwardTime);

var progressPoint = document.querySelector(".progress");
progressPoint.addEventListener("click", changeTime);

vid.addEventListener("keypress", (e)=>{
    if(e.code == "space"){
        videoPause;
    }
})

// var fullScreen = document.querySelector(".fullscreen");
// fullScreen.addEventListener("click", screensize);