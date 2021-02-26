const log= console.log;
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');

function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360 ) + 90; //
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
 
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360 ) + 90;
  minsHand.style.transform = `rotate(${secondsDegrees}deg)`;
}
setInterval(setDate, 1000); // to get the function to run every second