
let oldDate = localStorage.getItem('date') || (new Date());

//localStorage.setItem('date', 72);


function checkboxClick(e){
  this.setAttribute('title', this.checked === true ?  'Unselect' : 'Select'); 
}

function submitForm(e){
  e.preventDefault();
}

function removeLoadingItem(){
  document.querySelector('ul').removeChild(document.querySelector('#loading'))
}

document.querySelectorAll('input[type=checkbox]').forEach(checkbox => checkbox.addEventListener('click', checkboxClick));
document.querySelector('form').addEventListener('submit', submitForm);