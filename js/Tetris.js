class Tetris {
    constructor(actual, next) {
        this.x = 90;
        this.y = 0;
        this.actual = actual;
        this.next = next;
    }

    move(hor, position) {
        if (hor) {
            this.x += position * 30;
        }
        else {
            this.y += position * 30; 
        }
    }

    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        PIECES[actual].format.forEach((value, index) => {
            if (value) {
                ctx.fillStyle = PIECES[actual].color;
                ctx.fillRect(this.x + 30*(index % 4), this.y + 30 * Math.floor(index / 4), 29, 29);
            }
        });
    }
    
    rotate() {
        
    }
}