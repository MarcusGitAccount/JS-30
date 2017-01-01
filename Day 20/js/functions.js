
let speechRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
let speechResult = document.querySelector('#speech-result');

speechRecognition.lang = 'ro-RO';
speechRecognition.interimResults = true;
speechRecognition.maxAlternatives = 1;
speechRecognition.start();

function speechTransform(e){
  let transcript = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');

  speechResult.lastChild.textContent = transcript;
}

function restartRecognition(){
  speechResult.appendChild(document.createElement('p'));
  this.start();
}

speechRecognition.addEventListener('result', speechTransform);
speechRecognition.addEventListener('end', restartRecognition);

