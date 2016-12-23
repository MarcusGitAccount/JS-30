
// further explanation: https://davidwalsh.name/javascript-debounce-function

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


let images = document.querySelectorAll('.slide-in');

function windowScroll(e){

  images.forEach(image => {
    let pageYposition       = window.scrollY + window.innerHeight;
    let imageBottomY        = image.offsetTop + image.height;
    let halfShown           = pageYposition > imageBottomY + image.height / 2;
    let isScrolledPastImage = window.scrollY > imageBottomY;

    if (halfShown && !isScrolledPastImage)
      image.classList.add('active');
    else
      image.classList.remove('active');
  });
}

window.addEventListener('scroll', debounce(windowScroll, 10, true));