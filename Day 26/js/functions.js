
let pills = document.querySelectorAll('.main-ul > li.pill');
let nav = document.querySelector('nav');
let follower = document.querySelector('.follower');
let timeOut = null;

function pillEnter() {
  let dropdown = this.querySelector('.dropdown');
  
  follower.classList.add('show');
  dropdown.classList.add('enter');
  timeOut = setTimeout(() => {
    dropdown.classList.add('enter-active');
  }, 200);

  let dropdownPosition = dropdown.getBoundingClientRect();
  let navPosition = nav.getBoundingClientRect();

  let position = {
    'height': dropdownPosition.height,
    'width': dropdownPosition.width,
    'top': dropdownPosition.top + 10 - navPosition.top,
    'left': dropdownPosition.left - 20 - navPosition.left
  };

  console.log(dropdownPosition);
  follower.style.setProperty('width', `${position.width}px`);
  follower.style.setProperty('height', `${position.height}px`);
  follower.style.setProperty('transform', `translate(${position.left}px, ${position.top}px)`)
}

function pillLeave() {
  let dropdown = this.querySelector('.dropdown');

  clearTimeout(timeOut);
  follower.classList.remove('show');
  dropdown.classList.remove('enter', 'enter-active');
}

pills.forEach(pill => pill.addEventListener('mouseenter', pillEnter));
pills.forEach(pill => pill.addEventListener('mouseleave', pillLeave));