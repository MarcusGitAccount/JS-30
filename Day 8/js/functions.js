
// all the drawing is done in the context
// hsl()
// ctrl + alt + d to clear canvas

const canvas  = document.querySelector('#drawing');
const context = canvas.getContext('2d');
let isDrawing = false;
let lastX     = 0;
let lastY     = 0;
let hue       = 10;
let direction = 1;

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 10;
context.globalCompositeOperation = 'multiply';

function draw(e){
  if (!isDrawing)
    return;
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue += direction;
  hue % 100;
  console.log(e);
}

function clearCanvas(){
  context.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup',   () => isDrawing = false);
canvas.addEventListener('mouseout',  () => isDrawing = false);

var combination = {
  '17': false,
  '18': false,
  '68': false
};

window.addEventListener('keydown',   (e) => {
  if (combination.hasOwnProperty(e.keyCode)){
    combination[e.keyCode] = true;
    if (Object.keys(combination).every(key => combination[key] === true))
      clearCanvas();
  }
});

window.addEventListener('keyup',   (e) => {
  if (combination.hasOwnProperty(e.keyCode))
    combination[e.keyCode] = false;
});