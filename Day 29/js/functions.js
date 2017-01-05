
let nav = document.querySelector('nav');
let buttons = nav.querySelectorAll('input[type=button]');
let inputText = nav.querySelector('form>input[type=text]');
let timeobject = new countdownTimer();
let timeDiv = document.querySelector('#time-div');
let activity = timeDiv.querySelector('p');
let coundownDiv = timeDiv.querySelector('#countdown');
let backTime = timeDiv.querySelector('#back-time');

function countdownTimer(){
  this.setTimerXTimes = function(delay, times, callback){
    this.times = times;
    this.delay = delay;    
    this.interval = setInterval(callback.bind(this), delay);

    let timeoutFunction = function(){
      clearInterval(this.interval);
      console.log('Countdown stopped');
    };
    
    setTimeout(timeoutFunction.bind(this) ,times * delay);
  }
}

function countdown(){
  console.log(this.times--);
}

function buttonTimeClick(e){
  clearInterval(timeobject.interval);
  timeobject.setTimerXTimes(1000, parseInt(this.dataset.seconds), countdown);
}

timeobject.setTimerXTimes(1000, 5, countdown);

buttons.forEach(button => button.addEventListener('click', buttonTimeClick));