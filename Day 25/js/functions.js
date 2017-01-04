
const divs = document.querySelectorAll('div');

function divClick(e){
  console.log(this.className);
  e.stopPropagation();
}

divs.forEach(div => div.addEventListener('click', divClick, {'capture': false, 'once': true}));