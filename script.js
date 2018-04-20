setClock();
setInterval(setClock, 1000);
function setClock() {
    const currentTime = new Date();
    const seconds = currentTime.getSeconds();
    const minutes = currentTime.getMinutes();
    const hours = currentTime.getHours();

    const secondsHand = document.querySelector(".clock__hand.second");
    const minuteHand = document.querySelector(".clock__hand.minute");
    const hourHand = document.querySelector(".clock__hand.hour");
    
    const secondsDegrees = (seconds*360) / 60;
    const minuteDegrees = ((minutes*360) / 60) + secondsDegrees/60;
    const hourDegrees = (hours*360) / 12;

    console.log(seconds, secondsDegrees);
    if(secondsDegrees === 0) {
        secondsHand.style.transform = `translateY(-50%)`;
    } else {
        secondsHand.style.transform = `translateY(-50%) rotate(${secondsDegrees}deg)`;
    }
    minuteHand.style.transform = `translateY(-50%) rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `translateY(-50%) rotate(${hourDegrees}deg)`;
}


