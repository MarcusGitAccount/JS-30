
let cards = document.querySelector('.cards');
let previousScrollLeftValue = 0;
let startX;
let isMouseDownCards = false;


cards.addEventListener('mouseup', (e) => {
  isMouseDownCards = false;
  cards.classList.remove('active');
});

cards.addEventListener('mousedown', (e) => {
  isMouseDownCards = true;
  startX = e.clientX - cards.offsetLeft;
  cards.classList.add('active');
  previousScrollLeftValue = cards.scrollLeft;
});

cards.addEventListener('mouseleave', (e) => {
  isMouseDownCards = false;
  cards.classList.remove('active');
});

cards.addEventListener('mousemove', (e) => {
  let currentX = e.clientX - cards.offsetLeft;

  if (!isMouseDownCards)
    return;
  e.preventDefault();
cards.scrollLeft = previousScrollLeftValue - (currentX - startX) * 2;
});