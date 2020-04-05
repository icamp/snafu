const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
  const now = new Date(); // grabs current date
  /*
  The 'new' keyword calls the 'Date()' constructor function which creates a date object
  Below, 'getSeconds()' calls a function on the 'now' object
  
  Date() and getSeconds()  are built in functions
  */

  const seconds = now.getSeconds(); // grabs seconds of current minute
  const secondsDegrees = ((seconds / 60) * 360) + 90; // + 90 is to offset the 90deg the hand starts at
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // applies style to secondHand

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 24) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000); // makes the function run every second