
function removeClass(e){
  if (e.propertyName !== 'transform')
    return;
  this.classList.remove('keydown');
}

window.addEventListener('keydown', e => {
  let keyObject = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  let audioObject = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (Array.isArray(audioObject) || audioObject === null)
    return;
  
  keyObject.classList.add('keydown');
  audioObject.currentTime = 0;
  audioObject.play();
});

document.querySelectorAll('.key').forEach(key => key.addEventListener('transitionend', removeClass));