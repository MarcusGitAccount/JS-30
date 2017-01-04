
const MAX_FULL_PERCENT = 356;
let speed = document.querySelector('.speed');
let control = document.querySelector('.control');
let video = document.querySelector('video');
let span = document.querySelector('span#video-rate');

function speedMousever(e){
  let value = (e.clientY - speed.offsetTop - speed.offsetHeight + 2) * (-1);
  let percent = value * 100 / MAX_FULL_PERCENT;

  if (percent < 10)
    return;
  control.style.height = `${percent}%`
  video.playbackRate = percent / 5 * 0.1;
  span.innerHTML = Math.round(video.playbackRate * 10) / 10;
}

speed.addEventListener('mousemove', speedMousever);