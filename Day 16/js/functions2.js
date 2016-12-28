
let container = document.querySelector('.container');
let header    = container.querySelector('h1');

function changeShadow(e){
  let {'offsetWidth': width, 'offsetHeight': height} = container; // deconstructing
  let {'offsetX': x, 'offsetY': y} = e;

  if (this !== e.target){ // mouse x and y will not work properly over nested elements
    x += e.target.offsetLeft; // child left and top positions
    y += e.target.offsetTop;
  }

  const shadowX = Math.round(x / width * 100 - 75); // setting the shadow x and y between - 50 and 50 px
  const shadowY = Math.round(y / height * 100 - 75);

  header.style.textShadow = `${shadowX}px ${shadowY}px 5px #e0e0e0,
                             ${shadowX * -1}px ${shadowY}px 4px red,
                             ${shadowX * -1}px ${shadowY * -1}px 5px green,
                             ${shadowX}px ${shadowY * -1}px 4px blue`; // multiple text shadows
}


container.addEventListener('mousemove', changeShadow);