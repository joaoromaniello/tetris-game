var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var actual = Math.floor(Math.random() * 7);
var next = Math.floor(Math.random() * 7);
var canGoLeft = canGoRight = true;
var blockFalling = true;
var currentPiece = new Tetris(actual, next);

function generate() {
    currentPiece.draw();
}

function update() {
    if (!blockFalling) {
        actual = next;
        next = Math.floor(Math.random() * 7);
        currentPiece = new Tetris(actual, next);
    }
    generate();
}

function keyDown(event) {
    const keyDownCode = event.keyCode;
    if (keyDownCode === LEFT && canGoLeft) {
        currentPiece.move(true, -1);
    }
    else if (keyDownCode === RIGHT && canGoRight) {
        currentPiece.move(true, 1);
    }
    else if (keyDownCode === DOWN) {
        currentPiece.move(false, 1);
    } else if (keyDownCode === UP) {
        currentPiece.rotate();
    }
}

function keyUp(event) {
    const keyUpCode = event.keyCode;

    if (keyUpCode === DOWN) {

    }
}

function loop() {
    window.requestAnimationFrame(loop, canvas);
    update();
}

document.addEventListener('keydown', keyDown, false);
document.addEventListener('keyup', keyUp, false);

loop();
