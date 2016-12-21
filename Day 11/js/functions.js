
let player = document.querySelector('.player');
let video = player.querySelector('video');
let progress = player.querySelector('.progress');
let progressBar = progress.querySelector('.progress__filled');
let skipButtons = player.querySelectorAll('[data-skip]');
let ranges = player.querySelectorAll('.player__slider');
let toggle = player.querySelector('.toggle');
let volumeIcon = player.querySelector('#volume-i');
let timeset = player.querySelector('#time');
let fullscreenIcon = player.querySelector('#fullscreen');
let progressMouseDown = false;

function toggleFullscreen(e){
  if (!video.webkitDisplayingFullscreen)
    video.webkitEnterFullScreen();
  else
    video.webkitExitFullScreen();
}

function togglePauseKeyDown(e){
  if (e.keyCode === 32){
    video[video.paused ? 'play' : 'pause']();
  }
}

function togglePauseClick(e){
  video[video.paused ? 'play' : 'pause']();
}

function changeVolumeIcon(e){
  volumeIcon.className = "";
  video.volume = this.value / 100;
  volumeIcon.className = video.volume > 0 ? (video.volume < 0.5 ? "fa fa-volume-down" : "fa fa-volume-up"): "fa fa-volume-off";
}

function changePlaybackRate(e){
  video.playbackRate = this.value;
}

function skipVideoTime(e){
  const skipValue = this.dataset.skip;

  video.currentTime += parseInt(skipValue);
}

function getTime(){
  let result  = '';
  let seconds = parseInt(video.currentTime % 60);
  let minutes = parseInt(video.currentTime / 60);

  result += minutes < 10 ? '0' + minutes : minutes;
  result += seconds < 10 ? ':0' + seconds : ':' + seconds;

  return result;
}

function handleProgressBar(e){
  let percent = (video.currentTime / video.duration) * 100;

  if (percent === 100)
    video.pause();
  progressBar.style.flexBasis = `${percent}%`;
  timeset.innerHTML = getTime();
}

function handleRepeatVideo(e){
  console.log('it ended');

  let replayElement = document.createElement('i');
  let ariaHidden = document.createAttribute('aria-hidden');

  ariaHidden.value = true;
  replayElement.setAttributeNode(ariaHidden);
  replayElement.className = "fa fa-repeat";
  toggle.innerHTML = "";
  toggle.appendChild(replayElement);
}

function getProgressTime(e){
  let time = e.offsetX / progress.offsetWidth * video.duration;

  video.currentTime = time;
}

video.addEventListener('dblclick', toggleFullscreen);
video.addEventListener('click', togglePauseClick);
video.addEventListener('pause', () => toggle.innerHTML = "&#9658;");
video.addEventListener('play', () => toggle.innerHTML = "&#10074;&#10074;");
video.addEventListener('ended', handleRepeatVideo);
video.addEventListener('timeupdate', handleProgressBar);
toggle.addEventListener('click', togglePauseClick);
ranges[0].addEventListener('input', changePlaybackRate)
ranges[1].addEventListener('input', changeVolumeIcon)
skipButtons.forEach(button => button.addEventListener('click', skipVideoTime));
fullscreenIcon.addEventListener('click', toggleFullscreen);
progress.addEventListener('click', getProgressTime);
progress.addEventListener('mousemove', (e) => progressMouseDown && getProgressTime(e));
progress.addEventListener('mousedown', (e) => progressMouseDown = true);
progress.addEventListener('mouseup', (e) => progressMouseDown = false);
window.addEventListener('keydown', togglePauseKeyDown);