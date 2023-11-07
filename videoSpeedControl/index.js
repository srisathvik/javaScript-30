const bar = document.querySelector(".speed-bar");

const speed = document.querySelector(".speed");

const video = document.querySelector(".flex");

function changeSpeed(e){
    const y = e.pageY - this.offsetTop;
    let percent = (y/409) * 100;
    percent = Math.round(percent * 10)/10;
    bar.style.height = `${percent}%`;
    bar.innerHTML = `${Math.round(((5/100)* percent) *10)/10}x`;
    video.playbackRate = Math.round(((5/100)* percent) *10)/10;
}

speed.addEventListener("mousemove", changeSpeed);
