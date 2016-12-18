
function toggleOpen(e){
  this.classList.toggle('open');
}

function toggleActive(e){
  if(e.propertyName.includes('flex'))
    this.classList.toggle('active');
}

document.querySelectorAll('.panel').forEach(panel => { 
  panel.addEventListener('click', toggleOpen);
  panel.addEventListener('transitionend', toggleActive);
});