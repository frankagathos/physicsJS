var ctx;
var r=5;
var xb= 20;
var yb=23;
var dx=2;
var dy=2;
var color = "blue";
 
   
function init (){
 ctx = canvas.getContext('2d');
setInterval(onEachStep,1000/60); //(fps)
addEventListener('click',Clicker);
}


// the ball//

function draw () {
ctx.beginPath();
ctx.arc(xb, yb, r, 0, 2 *Math.PI);
ctx.fillStyle = color;
ctx.closePath();
ctx.fill();

};



function Clicker(){
	


		r=5;
		color="black";

		
};



//clear and draw every time //
function onEachStep() {
        
    if( xb-r<0 || xb+r>canvas.width) dx=-dx;
	if( yb-r<0 || yb+r>canvas.height) dy=-dy; 
	xb+=dx; 
	yb+=dy;
	

   ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();
}

