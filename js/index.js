var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var x = 100;

function update() {
    ctx.lineWidth = 1;
    ctx.strokeRect(0, 25, canvas.width, 0);
}

function loop() {
    window.requestAnimationFrame(loop, canvas);
    update();
}

eae(evt) {
}

loop();
addEventListener('keyup', eae());