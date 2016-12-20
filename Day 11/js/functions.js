
let player = document.querySelector('.player');
let video = player.querySelector('video');
let progress = player.querySelector('.progress');
let progressBar = progress.querySelector('.progress__filled');
let skipButtons = player.querySelectorAll('[data-skip]');
let ranges = player.querySelectorAll('.player__slider');
let toggle = player.querySelector('.toggle');
let volumeIcon = player.querySelector('#volume-i');

function toggleFullscreen(e){
  if (!this.webkitDisplayingFullscreen)
    this.webkitEnterFullScreen();
  else
    this.webkitExitFullScreen();
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
  console.log(skipValue);
}

function handleProgressBar(e){
  let percent = (video.currentTime / video.duration) * 100;

  console.log(percent);
  progressBar.style.flexBasis = `${percent}%`;
}

video.addEventListener('dblclick', toggleFullscreen);
video.addEventListener('click', togglePauseClick);
video.addEventListener('pause', () => toggle.innerHTML = "&#9612; &#9612;");
video.addEventListener('play', () => toggle.innerHTML = "&#9658;");
video.addEventListener('timeupdate', handleProgressBar);
toggle.addEventListener('click', togglePauseClick);
ranges[0].addEventListener('input', changePlaybackRate)
ranges[1].addEventListener('input', changeVolumeIcon)
skipButtons.forEach(button => button.addEventListener('click', skipVideoTime));
window.addEventListener('keydown', togglePauseKeyDown);