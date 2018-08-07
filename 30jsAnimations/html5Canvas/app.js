console.log('works');
// working with canvas
const canvas = document.querySelector('#draw');
// deciding the context (2d or 3d)
const context = canvas.getContext('2d');
// assigning width & height to canvas
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
//draw format
context.strokeStyle = ' ';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 30;  //with draw
// when I want to paint with cursor -> orders
let isDrawing = false;
let lastX = 0;    //where line starts to be drawn
let lastY = 0;    //where line ends
let hue = 0;
//create function to draw
var draw = function(e) {
  if(!isDrawing) return ; //don't run while event is not moused down *1
 context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  console.log(e);
  //function works well, I now set function to draw
  context.beginPath();
  //where to draw
  context.moveTo(lastX, lastY);
  // get values from e on mousedown event
  context.lineTo(e.offsetX, e.offsetY);
  //wants to input valies on X & Y axis from beginning
  lastX = e.offsetX;
  lastY = e.offsetY;
  //run stroke
  hue++; 
  context.stroke();
}
//add an Event Listener
canvas.addEventListener('mousemove', draw);  //*1
canvas.addEventListener('mousedown', (e) =>{  //draw when mouse is pressed
    isDrawing = true;
    // ES6 DESTRUCTURING AN ARRAY
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false); //stop
canvas.addEventListener('mouseout', () => isDrawing = false); //stop when leaving screen
