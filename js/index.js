var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var actual = Math.floor(Math.random() * 7);
var next = Math.floor(Math.random() * 7);
var canGoLeft = canGoRight = true;
var blockFalling = true;
var currentPiece = new Tetris(actual, next);
var goDown = 0;

function createNewPiece() {
    actual = next;
    next = Math.floor(Math.random() * 7);
    currentPiece = new Tetris(actual, next);
    blockFalling = true;
}

function update() {
    if (!blockFalling) {
        createNewPiece();
    }
    if (currentPiece) {
        goDown = 1;
    }
    goDown++;
    if (goDown % 60 === 0) {
        currentPiece.move(false, 1);
    }
    currentPiece.draw();
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
        goDown = 0;
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
