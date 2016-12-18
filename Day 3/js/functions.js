
document.querySelectorAll('input').forEach(input => input.addEventListener('input', function(){
  let unit     = this.dataset.unit || '';
  let variable = this.name;
  let size     = this.value;

  document.querySelector(`span[data-name="${this.name}"]`).innerHTML = this.value + unit;
  document.documentElement.style.setProperty(`--${variable}`, size + unit);
}));