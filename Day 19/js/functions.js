
if (localStorage.getItem('imageId') === null)
  localStorage.setItem('imageId', '0');

let webcamVideo     = document.querySelector('.webcam-video');
let photoTakenAudio = document.querySelector('audio');
let canvas          = document.querySelector('.webcam-photo');
let context         = canvas.getContext('2d');
let takePhotoButton = document.querySelector('input[type=button]');
let photosTakenDiv  = document.querySelector('.photos-taken');

function debounce(func, wait, immediate){
  let timeout;

  return function(){
    let context   = this;
    let args      = arguments;
    let later     = function(){
      timeout = null;
      if (!immediate)
        func.apply(context, args);
    }
    let callnow   = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callnow)
      func.apply(context, args);
  }
}

function getWebcamVideo(){
  navigator.mediaDevices.getUserMedia({
    'video': true,
    'audio': false
  }).then(mediaStream => {
      webcamVideo.src = window.URL.createObjectURL(mediaStream);
      webcamVideo.currenTime = 0;
      webcamVideo.play();
    }).catch(error => {
      console.log(error);
    });
}

function paintCanvas(){
  const {'videoWidth': width, 'videoHeight': height} = webcamVideo;
  const photoInterval = 15;

  [canvas.width, canvas.height] = [width, height];

  return setInterval(() => {
    context.drawImage(webcamVideo, 0, 0, width, height);
  }, photoInterval);
}

function takePhoto(){
  const data = canvas.toDataURL('image/jpeg');
  let imageId = localStorage.getItem('imageId');
  let anchor = document.createElement('a');
  let img = document.createElement('img');

  img.src = data;
  img.alt = `photo_image${imageId}`;
  anchor.href = data;
  anchor.setAttribute('download', `photo_image${imageId}`);
  anchor.appendChild(img);

  photosTakenDiv.insertBefore(anchor, photosTakenDiv.firstChild);
  localStorage.setItem('imageId', (parseInt(imageId) + 1).toString());

  photoTakenAudio.currentTime = 0;
  photoTakenAudio.play();
}

takePhotoButton.addEventListener('click', debounce(takePhoto, 0, true));
webcamVideo.addEventListener('canplay', paintCanvas);

getWebcamVideo();