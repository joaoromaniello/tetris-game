var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var x = 100;

function initCanvas() {
    ctx.rect(x, 10, 50, 50);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.stroke();
}

function update() {
    x += 5;
    initCanvas();
}

function loop() {
    window.requestAnimationFrame(loop, canvas);
    update();
}

loop();
