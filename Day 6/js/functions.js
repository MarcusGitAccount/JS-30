
var response = [];

function getResponse(){
  var url      = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  let ajax    = new XMLHttpRequest();
  let reponse = [];

  ajax.onreadystatechange = function(){
    if (this.readyState === 4 && this.status === 200){
      response = JSON.parse(ajax.responseText);

      console.log(response);
      console.log(ajax);
    }
  }

  ajax.open('GET', url, true);
  ajax.send();

  return reponse;
}

function moveUpDown(e){
  if (e.keyCode === 40 && currentLiIndex < answersList.length){
    answersList[currentLiIndex].classList.add('li-outline');
    if (previousLiIndex >= 0)
      answersList[previousLiIndex].classList.remove('li-outline');
    if (currentLiIndex + 1 < answersList.length)
      currentLiIndex++;
    previousLiIndex = currentLiIndex - 1;
  }
  else if (e.keyCode === 38 && currentLiIndex > 0){
    answersList[previousLiIndex].classList.add('li-outline');
    answersList[currentLiIndex--].classList.remove('li-outline');
    previousLiIndex = currentLiIndex - 1;
    if (previousLiIndex === -1)
      previousLiIndex = currentLiIndex++;
  }
}

function getInput(){
  let text   = document.querySelector('input[type=text]').value.trim();
  let result = []; 
  let ul   = document.querySelector('#response-ul');

  while (ul.firstChild)
    ul.removeChild(ul.firstChild);
  console.log(ul);
  if (response.length === 0)
    response = getResponse();
  response.forEach(item => {
    if (item.city.toLowerCase().includes(text.toLowerCase()) || item.state.toLowerCase().includes(text.toLowerCase())){
      let li = document.createElement('li');
      let liText = document.createTextNode([item.city, item.state, item.population].join(' '));

      li.classList.add('response-li');
      li.appendChild(liText);
      ul.appendChild(li);
      console.log([item.city, item.state, item.population].join(' '));
    }
  });
  
  answersList = document.querySelectorAll('.response-li');
  console.log(text);
}

var currentLiIndex = 0;
var previousLiIndex = -1;
var answersList = document.querySelectorAll('.response-li');

document.querySelector('form').addEventListener('keydown', moveUpDown);
document.querySelector('input').addEventListener('input', getInput);