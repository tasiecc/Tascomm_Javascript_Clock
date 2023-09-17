const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const digitalHour = document.getElementById('digital-hour');
const digitalMin = document.getElementById('digital-min');
const digitalSec = document.getElementById('digital-sec');
const handColorInput = document.getElementById('hand-color');
const hourLengthInput = document.getElementById('hour-length');
const minLengthInput = document.getElementById('min-length');
const secLengthInput = document.getElementById('sec-length');
const timezoneSelector = document.getElementById('timezone');
const applyButton = document.getElementById('apply-button');

let selectedTimezone = 'auto'; // Initialize with 'auto' for local time

function setClock() {
  const now = getTimeBasedOnTimeZone(selectedTimezone);

  setSecondHand(now);
  setMinuteHand(now);
  setHourHand(now);

  setDigitalClock(now);
}

function setSecondHand(now) {
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  digitalSec.textContent = seconds < 10 ? `0${seconds}` : seconds;
}

function setMinuteHand(now) {
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((now.getSeconds() / 60) * 6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  digitalMin.textContent = mins < 10 ? `0${mins}` : mins;
}

function setHourHand(now) {
  const hour = now.getHours() % 12; // Convert to 12-hour format
  const hourDegrees = ((hour / 12) * 360) + ((now.getMinutes() / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  digitalHour.textContent = hour < 10 ? `0${hour}` : hour;
}

function setDigitalClock(time) {
  digitalHour.textContent = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
  digitalMin.textContent = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
  digitalSec.textContent = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();
}

function getTimeBasedOnTimeZone(timezone) {
  if (timezone === 'auto') {
    return new Date(); // Use the local time
  } else {
    const options = { timeZone: timezone };
    return new Date().toLocaleString('en-US', options);
  }
}

function updateClock() {
  setInterval(setClock, 1000);
  setClock();
  updateBackground();
}

function updateBackground() {
  const now = new Date();
  const currentHour = now.getHours();
  let background = '';

  if (currentHour >= 6 && currentHour < 12) {
    background = 'morning.jpg';
  } else if (currentHour >= 12 && currentHour < 18) {
    background = 'afternoon.jpg';
  } else if (currentHour >= 18 && currentHour < 21) {
    background = 'evening.jpg';
  } else {
    background = 'night.jpg';
  }

  document.documentElement.style.backgroundImage = `url(${background})`;
}

function customizeClock() {
  const handColor = handColorInput.value;
  const hourLength = hourLengthInput.value + 'rem';
  const minLength = minLengthInput.value + 'rem';
  const secLength = secLengthInput.value + 'rem';

  const hands = document.querySelectorAll('.hand');
  hands.forEach(hand => {
    hand.style.backgroundColor = handColor;
  });

  hourHand.style.height = hourLength;
  minsHand.style.height = minLength;
  secondHand.style.height = secLength;
}

// Initial setup
updateClock();
