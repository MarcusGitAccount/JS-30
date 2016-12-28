
function countSeconds(str){
  let numbers = str.split(':');
  let result  = 0;

  for (let index = 0; index < numbers.length; index++)
    result += Math.pow(60, numbers.length - index - 1) * parseInt(numbers[index]);

  return result;
}

function mapAsTime(seconds){
  let numbers = Array(3);

  numbers[2] = seconds % 60 < 10 ? '0' + seconds % 60 : seconds % 60;
  numbers[1] = Math.round(seconds / 60) % 60 < 10 ? '0' + Math.round(seconds / 60) % 60 : Math.round(seconds / 60) % 60;
  numbers[0] = Math.trunc(seconds / 3600) < 10 ? '0' + Math.trunc(seconds / 3600)  : Math.trunc(seconds / 3600);

  console.log(numbers);
  return numbers.join(':');
}

let videos = Array.from(document.querySelectorAll('li'));

let totalSeconds = videos.map(value => countSeconds(value.dataset.time)).reduce((a, b) => {
  return a + b;
});

console.log(mapAsTime(totalSeconds));

document.querySelector('p').innerHTML = `Total time: ${mapAsTime(totalSeconds)}`;