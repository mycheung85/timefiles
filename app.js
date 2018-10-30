const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  let seconds = now.getSeconds();
  let secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  let mins = now.getMinutes();
  let minsDeg = ((mins/ 60) * 360) + ((seconds/60) * 6) + 90;
  minsHand.style.transform = `rotate(${minsDeg}deg)`

  let hour = now.getHours();
  let hourDeg = ((hour / 12) * 360) + ((mins/60) *30) + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`
}

setInterval(setDate, 1000)
setDate();

const digital = document.getElementById('digitalclock')

function getDigital() {
  const time = new Date();
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hour = time.getHours() % 12;
  let nightOrDay = hour >= 12 ? 'AM' : 'PM'; 

  digital.textContent = `${hour}:${minutes}:${seconds}:${nightOrDay}` 
}
setInterval(getDigital, 1000);
getDigital();
