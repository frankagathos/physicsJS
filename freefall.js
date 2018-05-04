var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d'); 

var g = 0.1; 
var radius=10;
var color;
var balls;
var numBalls = 6;
 
//window.onload = init; 
 
function init() {
	balls = new Array();
	for (var i=0; i<numBalls; i++){
		var ball = new Ball(Math.random()*25,getRandomColor());	
		ball.x = Math.random()*300;//x axis positions are random
		ball.y = 0;
		ball.vx = 0;
		ball.vy = 0;
		ball.draw(context);
		balls.push(ball);
	}  
	setInterval(onEachStep, 1000/60); // 60 fps
};
 
function onEachStep() {
	context.clearRect(0, 0, canvas.width, canvas.height); 
	for (var i=0; i<numBalls; i++){
		var ball = balls[i];
		ball.vy += g;     
			
		ball.x += ball.vx; 
		ball.y += ball.vy; 
			
		if (ball.y > canvas.height - radius){ 
			ball.y = canvas.height - radius; 
			ball.vy *= -0.3; 
		}
		if (ball.x > canvas.width + radius){ 
			ball.x = -radius; 
		}
		ball.draw(context); 
	} 
};

//random color function
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
} 