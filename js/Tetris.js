class Tetris {
    constructor(actual, next) {
        this.x = 90;
        this.y = 0;
        this.actual = actual;
        this.next = next;
        this.block = PIECES[this.actual];
    }

    move(hor, relative) {
        if (hor) {
            this.x += relative * 30;
        }
        else {
            this.y += relative * 30;
        }
    }

    update() {

    }

    draw() {
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.block.format.forEach((value, index) => {
            if (value) {
                ctx.fillStyle = this.block.color;
                ctx.fillRect(this.x + 30 * (index % 4), this.y + 30 * Math.floor(index / 4), 29, 29);
            }
        });
    }

    rotate() {

    }
}