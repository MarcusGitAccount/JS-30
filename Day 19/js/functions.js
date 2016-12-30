
if (localStorage.getItem('imageId') === null)
  localStorage.setItem('imageId', '0');

let webcamVideo     = document.querySelector('.webcam-video');
let photoTakenAudio = document.querySelector('audio');
let canvas          = document.querySelector('.webcam-photo');
let context         = canvas.getContext('2d');
let takePhotoButton = document.querySelector('#simple-button');
let timerButton     = document.querySelector('#timer-button');
let photosTakenDiv  = document.querySelector('.photos-taken');
let spanTimer       = document.querySelector('#timer');

function setTimerX(delay, times, callback, span){
  let counter  = 0;
  let interval = setInterval(() => {
    span.textContent = counter + 1;
    if (++counter === times){
      clearInterval(interval);
      callback();
      spanTimer.textContent = '';
    }
  }, delay);
}

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
    //let pixels = context.getImageData(0, 0, width, height);
    
    //context.globalAlpha = 0.5;
    //pixels = greenScreenEffect(pixels);
    //context.putImageData(pixels, 0, 0);
  }, photoInterval);
}

function greenEffect(pixels){
  for (let index = 0; index < pixels.data.length; index += 4){
    // r g b alpha
    pixels.data[index]     = pixels.data[index] / 2;
    pixels.data[index + 1] = pixels.data[index + 1] * 3;
    pixels.data[index + 2] = pixels.data[index + 2] - 100;
  }

  return pixels;
}

function rgbSplitEffect(pixels){
  for (let index = 0; index < pixels.data.length; index += 4){
    // r g b alpha
    pixels.data[index - 250] = pixels.data[index];
    pixels.data[index + 300] = pixels.data[index + 1];
    pixels.data[index - 400] = pixels.data[index + 2];
  }

  return pixels;
}

function valueInBetween(value, a, b){
  return value >= a && value <= b ? true : false;
}

function greenScreenEffect(pixels){
  let inputValues = {};

  document.querySelectorAll('input[type=range]').forEach(input => {
    inputValues[input.name] = input.value;
  });
  for (let index = 0; index < pixels.data.length; index += 4){
    // r g b alpha, +0, +1, +2, +3
    if (valueInBetween(pixels.data[index + 0], inputValues.rmin, inputValues.rmax) &&
        valueInBetween(pixels.data[index + 1], inputValues.gmin, inputValues.gmax) && 
        valueInBetween(pixels.data[index + 2], inputValues.bmin, inputValues.bmax))
        pixels.data[index + 3] = 0;
  }

  return pixels;
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
timerButton.addEventListener('click', () => {
  setTimerX(1000, 5, takePhoto, spanTimer);
});

getWebcamVideo();