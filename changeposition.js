var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d'); 

var radius = 20;
var color = "blue";
var g = 0; // acceleration due to gravity
var x = 50;  // initial horizontal position
var y = 150;  // initial vertical position
var vx = 0;  // initial horizontal speed
var vy = 0;  // initial vertical speed
 
window.onload = init; 
 
function init() {
  setInterval(onEachStep, 1000/60); // 60 fps
};
 
function onEachStep() {
  
  x += vx; // horizontal speed increases horizontal position 
  y += vy; // vertical speed increases vertical position
 
  if (y > canvas.height - radius){ // if ball hits the ground
    y = canvas.height - radius; // reposition it at the ground
    vy *= -0.8; // then reverse and reduce its vertical speed
  }
  if (x > canvas.width + radius){ // if ball goes beyond canvas
    x = -radius; // wrap it around 
  }


  drawBall(); // draw the ball
};
 
function drawBall() {
    with (context){
        clearRect(0, 0, canvas.width, canvas.height); 
        fillStyle = color;
        beginPath();
        arc(x, y, radius, 0, 2*Math.PI, true);
        closePath();
        fill();
    };
};
function increasex(){
  x+=2;
};
function decreasex(){
  x-=2;
  if (x-radius < 0  ){ 
   
    x=radius;

  }
};

function constantv (){
  vx=2;
};
function stop (){
  vx=0;
};