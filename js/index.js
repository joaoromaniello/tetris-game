var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var x = 100;

function update() {
    
}

function loop() {
    window.requestAnimationFrame(loop, canvas);
    update();
}

loop();
