// const currentDate = new Date();
// function printTime(){

   
//     console.log(currentDate.getSeconds())
// }
// function timeChanged(delta) {
//     // Whatever
//     console.log(delta);

//   }
  
setInterval(function timeChecker() {
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    let hourTurn = (30 * (hours % 12) + minutes / 2);
    let minuteTurn = 6 * minutes;
    let secondsTurn = 6 * seconds;
    // console.log(hours, hourTurn, minutes, minuteTurn, seconds, secondsTurn);
    // document.querySelector(".hours").style.transform = `rotate(${hourTurn} deg)`;
    // document.querySelector(".minutes").style.transform = `rotate(${minuteTurn} deg)`;
    document.querySelector('.seconds').style.transform = `rotate(${90+secondsTurn}deg)`;
    document.querySelector('.minutes').style.transform = `rotate(${90+minuteTurn}deg)`;
    document.querySelector('.hours').style.transform = `rotate(${90+hourTurn}deg)`;
}, 1000);
document.querySelector(".clock").style.display="flex";