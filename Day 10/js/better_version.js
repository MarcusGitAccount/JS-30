let previousIndex = -1;
let checkBoxes    = document.querySelectorAll('input[type=checkbox]');

function checkBetweenIndexes(prev, current){
  let low = prev, high = current;

  if (low > high){
    let temp  = low;
    low = high;
    high = temp;
  }
  console.log([low, high]);

  while (low <= high)
    checkBoxes[low++].checked = true;
  
}

function getCurrentIndex(checkbox){
  return Array.from(checkBoxes).indexOf(checkbox);
}

function checkboxClick(e){
  let currentIndex = getCurrentIndex(this);

  if (e.shiftKey && previousIndex != -1){
    console.log('both');
    checkBetweenIndexes(previousIndex, currentIndex);
  }
  console.log(currentIndex, previousIndex);
  previousIndex = currentIndex;
}

checkBoxes.forEach(checkbox => checkbox.addEventListener('click', checkboxClick));
document.querySelector('form').addEventListener('submit', () => previousIndex = -1);