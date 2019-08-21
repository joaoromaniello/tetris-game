var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
let x = 100;
let y = 200;
function initCanvas() {
    ctx.beginPath();
    ctx.rect(x, y, 50, 50);
    ctx.closePath();
    createCircle(50,50,30);

    ctx.stroke();

    // ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
    x += 5;
    y += 2
    initCanvas();
}

function loop() {
    window.requestAnimationFrame(loop, canvas);
    update();
}

function createRect(){}
function createCircle(posX,posY,raio){
    ctx.arc(posX,posY,raio,0,2*Math.PI);
    ctx.stroke();
}

loop();
