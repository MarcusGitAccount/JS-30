
if (!('speechSynthesis' in window))
  alert('Your browser does not support speechSynthesis');

let dropdown = document.querySelector('select[name=voices]');
let speech = new SpeechSynthesisUtterance();
let voices = Array.from(window.speechSynthesis.getVoices());
let str = "The Web Speech API adds voice recognition (speech to text) and speech synthesis (text to speech) to JavaScript. The post briefly covers the latter, as the API recently landed in Chrome 33 (mobile and desktop).";

function changeVoice(e){ 
  let options = speechSynthesis.getVoices().map(voice => `<option value="${voice.name}">${voice.name}</option>`).join('');

  dropdown.innerHTML = options;
}

function dropdownOptionChange(e){
  console.log(this.options[this.selectedIndex].value);
}

speech.voice = voices[5];
speech.voiceURI = 'native';
speech.volume = 1;
speech.rate = 1;
speech.pitch = 1;
speech.text = str;
speech.lang = 'en-GB';

speech.addEventListener('end', e => console.log('Time taken: %s', e.elapsedTime));
speechSynthesis.addEventListener('voiceschanged', changeVoice);
speechSynthesis.speak(speech);
dropdown.addEventListener('change', dropdownOptionChange);