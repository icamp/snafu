
// cache the canvas
const canvas = document.querySelector('#draw');

// drawing is done on something called the context
const ctx = canvas.getContext('2d');

let hint = document.getElementById("info");

// remove the hint 
function infoRemove() {
  console.log("clicking");
  hint.remove();
};

// resize the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';  // the color drawing will start with
// ctx.lineJoin = 'round'; // shape of the end of the line   
ctx.lineWidth = 1;  // thickness the line starts with
ctx.globalCompositeOperation = 'multiply'; // to google & try different values

let isDrawing = false;
let lastX = 0;  // position of start of the line
let lastY = 0;  // position of end of the line
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return;
  // console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  // ctx.lineWidth = hue;
  ctx.beginPath();  
  ctx.moveTo(lastX, lastY); // start from
  ctx.lineTo(e.offsetX, e.offsetY); // go to
  ctx.stroke();
  // lastX = e.offsetX;
  // lastY = e.offsetY;
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if(direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

window.addEventListener('mousedown', infoRemove, {once: true});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);


// ##### touch functionality #####
// window.addEventListener('touchstart', infoRemove, {once: true});
// canvas.addEventListener('touchmove', draw);
// canvas.addEventListener('touchstart', (e) => {
//   isDrawing = true;
//   [lastX, lastY] = [e.offsetX, e.offsetY];
// });
// canvas.addEventListener('touchend', () => isDrawing = false);
// canvas.addEventListener('touchcancel', () => isDrawing = false);