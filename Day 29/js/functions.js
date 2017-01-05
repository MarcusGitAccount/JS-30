
let nav = document.querySelector('nav');
let buttons = nav.querySelectorAll('input[type=button]');
let form = nav.querySelector('form');
let inputText = nav.querySelector('form>input[type=text]');
let timeobject = new countdownTimer();
let timeDiv = document.querySelector('#time-div');
let activity = timeDiv.querySelector('#activity');
let countdownDiv = timeDiv.querySelector('#countdown');
let backTime = timeDiv.querySelector('#back-time');
let currentDate = timeDiv.querySelector('#current-date');

function countdownTimer(){
  this.setTimerXTimes = function(delay, times, callback, endfunction){
    this.times = times;
    this.delay = delay;    
    this.interval = setInterval(callback.bind(this), delay);

    let timeoutFunction = function(){
      if (this.times <= 1){
        try {
          endfunction();
        }
        finally {
          clearInterval(this.interval);
        }
      }
    };

    setTimeout(timeoutFunction.bind(this), (times + 1) * delay);
  }
}

function countdown(){
  countdownDiv.innerHTML = mapAsTime(this.times--);
}

function mapAsTime(seconds){
  let numbers = Array(3);

  numbers[2] = seconds % 60 < 10 ? '0' + seconds % 60 : seconds % 60;
  numbers[1] = Math.trunc(seconds / 60) % 60 < 10 ? '0' + Math.trunc(seconds / 60) % 60 : Math.trunc(seconds / 60) % 60;
  numbers[0] = Math.trunc(seconds / 3600) < 10 ? '0' + Math.trunc(seconds / 3600)  : Math.trunc(seconds / 3600);

  return numbers.join(':');
}

function buttonTimeClick(e){
  activity.innerHTML = this.value;
  clearInterval(timeobject.interval);
  timeobject.setTimerXTimes(1000, parseInt(this.dataset.seconds), countdown, updateDate);
  backTime.innerHTML = `See you back at ${seeYouAt(this.dataset.seconds)}`;
  updateDate();
}

function seeYouAt(seconds){
  let dateObject = new Date();
  let secondsFinal = 0;

  dateObject.setTime(dateObject.getTime() + seconds * 1000);
  secondsFinal += dateObject.getMinutes() * 60;
  secondsFinal += dateObject.getHours() * 3600;

  return mapAsTime(secondsFinal).split(':').splice(0, 2).join(':');
}

function updateDate(){
  let dateObject = new Date();
  let items = Array(3);

  items[0] = dateObject.getUTCDay() + 1;
  items[1] = dateObject.getUTCMonth() + 1;
  items[2] = dateObject.getFullYear();

  currentDate.textContent = items.join('.');
}

function formSubmit(e){
  let seconds = parseInt(inputText.value) * 60;

  clearInterval(timeobject.interval);
  timeobject.setTimerXTimes(1000, seconds, countdown, updateDate);
  backTime.innerHTML = `See you back at ${seeYouAt(seconds)}`;
  updateDate();
  e.preventDefault();

  console.log('submit');
}

updateDate();
form.addEventListener('submit', formSubmit);
buttons.forEach(button => button.addEventListener('click', buttonTimeClick));