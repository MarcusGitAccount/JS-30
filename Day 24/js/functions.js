
let nav         = document.querySelector('nav');
let initialTop  = nav.offsetTop;
let ul          = nav.querySelector('ul');
let logo        = createLogo();

function createLogo(){
  let li = document.createElement('LI');
  let a  = document.createElement('A');

  a.setAttribute('href', '#');
  a.appendChild(document.createTextNode('This is a LOGO'));
  li.appendChild(a);
  li.className = 'logo';

  return li;
}

function debounce(func, wait = 20, immediate = true){
  let timeout;

  return function(){
    let context   = this;
    let args      = arguments;
    let later     = function(){
      timeout = null;
      if (!immediate)
        func.apply(context, args);
    }
    let callnow   = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callnow)
      func.apply(context, args);
  }
}

function windowScroll(e){
  if (window.scrollY >= initialTop){
    nav.classList.add('top-sticked');
    ul.insertBefore(logo, ul.firstChild);
  }
  else{
    nav.classList.remove('top-sticked');
    if (ul.firstChild.className === 'logo')
    ul.removeChild(ul.firstChild);
  }
}

window.addEventListener('scroll', debounce(windowScroll, 10));