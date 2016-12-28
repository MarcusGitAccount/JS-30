
const MAXX     = 200;
const MAXY     = 200;

let header     = document.querySelector('h1');
let overHeader = false;
let shadowAxis = {
  'x': 0,
  'y': 0
};

function debounce(func, wait = 5, immediate = true){
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

function textShadowMove(e){
  if (overHeader)
    shadowAxis.x = shadowAxis.y = 0;
  else{
    shadowAxis.x = e.clientX % MAXX;
    shadowAxis.y = e.clientY % MAXY;
  }

  if (e.clientY > window.innerHeight / 2)
    shadowAxis.y *= (-1);
  if (e.clientX < window.innerWidth / 2)
    shadowAxis.x *= (-1);
  
  header.style.textShadow = `${shadowAxis.x}px ${shadowAxis.y}px 20px grey`;
  console.log(shadowAxis);
}

window.addEventListener('mousemove', debounce(textShadowMove, 5, true));
header.addEventListener('mouseenter', () => overHeader = true);
header.addEventListener('mouseleave', () => overHeader = false);