
let anchors  = document.querySelectorAll('a');
let follower = document.querySelector('.anchor-follower');

function anchorMouseOver(e){
  const {'offsetWidth': width, 'offsetHeight': height} = this;
  const translateLeft = this.getBoundingClientRect().left + window.scrollX;
  const translateTop  = this.getBoundingClientRect().top + window.scrollY;

  follower.style.transform = `translate(${translateLeft}px, ${translateTop}px)`;
  follower.style.width = `${width}px`;
  follower.style.height = `${height}px`;
}

anchors.forEach(anchor => anchor.addEventListener('mouseover', anchorMouseOver));