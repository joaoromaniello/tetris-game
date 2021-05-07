var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var actual = Math.floor(Math.random() * 12);
var next = Math.floor(Math.random() * 12);
var canGoLeft = canGoRight = true;
var blockFalling = true;
var currentPiece = new Tetris(actual, next);
var goDown = 0;
var stateBlocks = new StateBlocks();
var evt = new Event('fall');

function createNewPiece() {
    actual = next;
    next = Math.floor(Math.random() * 12);
    currentPiece = new Tetris(actual, next);
    blockFalling = true;
}

function update() {
    if (!blockFalling) {
        createNewPiece();
    }
    goDown++;
    if (goDown % 60 === 0) {
        currentPiece.move(false, 1);
        document.dispatchEvent(evt);
    }
    if (currentPiece.y > 500) {
        console.log("oi");
        blockFalling = false;
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
        document.dispatchEvent(evt);
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
document.addEventListener('fall', function() {
    // clean above layer
    ctx.clearRect(0, currentPiece.y - 30, canvas.width, 30);
    currentPiece.block.format.forEach((value, index) => {
        if (value) {
            for (var i = 0; i < 4; i++) {
                if (!currentPiece.block.format[i + Math.floor(index/4)]) {
                    // clear current layer where does not have block
                    ctx.clearRect(currentPiece.x + 30*i, currentPiece.y, 30, 30);
                }
            }
        }
    })
}, true)

loop();