

setInterval(() => {
  let rotateSeconds  = `rotate(${new Date().getSeconds() * 6}deg)`;
  let rotateHours    = `rotate(${new Date().getHours() % 12 * 30}deg)`;
  let rotateMinutes  = `rotate(${new Date().getMinutes() *6}deg)`;
  /*
  if (new Date().getSeconds() !== 0)
    document.querySelectorAll('.hand').forEach(hand => hand.style.transitionTimingFunction = 'cubic-bezier(0.24, 2.14, 0.58, 1)');
  else
    document.querySelectorAll('.hand').forEach(hand => hand.style.transitionTimingFunction = 'unset');*/
  document.querySelector('#second').style.transform = rotateSeconds;
  document.querySelector('#minute').style.transform = rotateMinutes;
  document.querySelector('#hour').style.transform   = rotateHours;
}, 1000);

