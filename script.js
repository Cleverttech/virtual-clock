const log= console.log;
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360 ) + 90; //
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
 
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360 ) + 90; //set to orbit 60 times
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360 ) + 90; // set to orbit 12 times
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(setDate, 1000); // to get the function to run every second