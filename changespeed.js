var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 20;
var color = "blue";
var a = 0; // acceleration 
var x = 50; // initial horizontal position
var y = 150; // initial vertical position
var vx = 2; // initial horizontal speed
var vy = 0; // initial vertical speed

window.onload = init;

function init() {
    setInterval(onEachStep, 1000 / 60); // 60 fps
}
//the core function 
function onEachStep() {

    x += vx; // horizontal speed increases horizontal position 
    y += vy; // vertical speed increases vertical position
    vx += a; //acceleration increases speed

    y = canvas.height - radius; // position the ball  at the ground 

    if (x > canvas.width + radius) { // if ball goes beyond canvas
        x = -radius; // wrap it around 
    }
    if (x - radius < 0) { // if ball goes beyond the beggining of canvas 
        //hits the wall

        x = radius; //doesnt let the ball go before the beginning of the tube

    }

    drawBall(); // draw the ball
};


function drawBall() {
    with(context) {
        clearRect(0, 0, canvas.width, canvas.height);
        fillStyle = color;
        beginPath();
        arc(x, y, radius, 0, 2 * Math.PI, true);
        closePath();
        fill();
    };
}

//functions of the buttons
function increasev() { //increases the speed
    vx += 1;
}

function decreasev() { //decreases the speed
    vx -= 1;
}

function constanta() { //sets a constant acceleration
    a = 0.1;
}

function stop() { //sets velocity to zero
    vx = 0;
}

function stopa() { //sets velocity to zero
    a = 0;
}
