
if (localStorage.getItem('tapas') === null){
  localStorage.setItem('tapas', JSON.stringify({}));
}

let tapas = JSON.parse(localStorage.getItem('tapas'));
let form = document.querySelector('form');
let checkboxes = document.querySelectorAll('input[type=checkbox]')
let deleteIcons = document.querySelectorAll('.trash-click');
let ul = document.querySelector('#tapas-ul');
let deleteAllButton = document.querySelector('input[type=button]');
let inputText = document.querySelector('input[type=text]');

setTimeout(function loadTapas(){
  while (ul.firstChild)
    ul.removeChild(ul.firstChild);
  Object.keys(tapas).forEach(key => appendTapasToList(key, tapas[key]));
}, 1000);

function addTapas(name, checked){
  tapas[name] = checked;
  addToLocalStorage();
}

function addToLocalStorage(){
  localStorage.setItem('tapas', JSON.stringify(tapas));
}

function checkboxClick(e){
  this.setAttribute('title', this.checked === true ?  'Unselect' : 'Select');
  tapas[this.parentNode.querySelector('span').textContent] = this.checked;
  addToLocalStorage();
}

function appendTapasToList(name, checked){
  let li    = document.createElement('li');
  let input = document.createElement('input');
  let span  = document.createElement('span');
  let i     = document.createElement('i');

  input.setAttribute('type', 'checkbox');
  input.setAttribute('value', `${name}`);
  input.setAttribute('title', checked === true ? 'Unselect' : 'Select');
  input.addEventListener('click', checkboxClick);
  if (checked)
    input.setAttribute('checked', 'true');

  span.textContent = name;

  i.classList = 'fa fa-trash-o trash-click';
  i.setAttribute('aria-Hidden', 'true');
  i.setAttribute('title', 'Delete entry');
  i.addEventListener('click', deleteListItemClick);

  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(i);
  ul.appendChild(li);

  addTapas(name, checked);
}

function submitForm(e){
  e.preventDefault();
  appendTapasToList(inputText.value.trim(), false);
  inputText.value = '';
}

function removeLoadingItem(){
  document.querySelector('ul').removeChild(document.querySelector('#loading'));
}

function deleteListItemClick(e){
  const deleteAnswer = confirm('Are you sure you want to delete this entry ?');

  if (deleteAnswer){
    ul.removeChild(this.parentNode);
    delete tapas[this.parentNode.querySelector('span').textContent];
    addToLocalStorage();
  }
}

function deleteAllListItemsClick(e){
  const deleteAnswer = confirm('Are you sure you want to delete all entries ?');

  if (deleteAnswer){
    while (ul.firstChild)
      ul.removeChild(ul.firstChild);
    let noTapasText = document.createTextNode('No tapas here');
    let liStart     = document.createElement('li');
 
    liStart.setAttribute('id', 'li-start');
    liStart.appendChild(noTapasText);
    liStart.setAttribute('style', 'text-align: center');
    ul.appendChild(liStart);

    tapas = {};
    addToLocalStorage();
  }
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', checkboxClick));
form.addEventListener('submit', submitForm);
deleteIcons.forEach(icon => icon.addEventListener('click', deleteListItemClick));
deleteAllButton.addEventListener('click', deleteAllListItemsClick);