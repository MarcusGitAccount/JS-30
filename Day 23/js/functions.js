
if (!('speechSynthesis' in window))
  alert('Your browser does not support speechSynthesis');

let timer = null;
let voices = [];
let inputRanges = document.querySelectorAll('input[type=range]');
let dropdown = document.querySelector('select[name=voices]');
let buttons = document.querySelectorAll('input[type=button]');
let textarea = document.querySelector('textarea');
let speech = new SpeechSynthesisUtterance();
let str = "The Web Speech API adds voice recognition (speech to text) and speech synthesis (text to speech) to JavaScript. The post briefly covers the latter, as the API recently landed in Chrome 33 (mobile and desktop).";

function changeVoice(e){
  voices = this.getVoices();
  let options = voices.map(voice => `<option value="${voice.name}">${voice.name}</option>`).join('');

  dropdown.innerHTML = options;
}

function dropdownOptionChange(e){
  console.log(this.options[this.selectedIndex].value);
  speech.voice = voices.find(voice => voice.name === this.options[this.selectedIndex].value);
  toggleVoice(true);
}

function rangeInput(e){
  document.querySelector(`span[data-for=${this.name}]`).innerHTML = Math.trunc(this.value * parseFloat(this.dataset.multiplier));
  speech[this.name] = this.value;
  toggleVoice(true);
}

function buttonClick(e){
  speechSynthesis[this.dataset.action]();
}

function toggleVoice(startOver = false){
  speechSynthesis.cancel();
  if (startOver)
    speechSynthesis.speak(speech);
}

function textareaKeydown(e){
  clearTimeout(timer);
  timer = setTimeout(() => {
    speech.text = this.value;
    toggleVoice(true);
  }, 1500);
}

speech.voiceURI = 'native';
speech.volume = 1;
speech.rate = 1;
speech.pitch = 1;
speech.text = str;
speech.lang = 'en-GB';

speechSynthesis.speak(speech);
speech.addEventListener('end', e => console.log('Time taken: %s', e.elapsedTime));
speechSynthesis.addEventListener('voiceschanged', changeVoice);
dropdown.addEventListener('change', dropdownOptionChange);
inputRanges.forEach(input => input.addEventListener('input', rangeInput));
buttons[0].addEventListener('click', toggleVoice);
buttons[1].addEventListener('click', toggleVoice.bind(null, false));
textarea.addEventListener('keydown', textareaKeydown);