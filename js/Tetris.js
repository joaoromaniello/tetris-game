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

     //  'I' type blocks rotations
     if(this.block == PIECES[0] )
        this.block = PIECES[1] //Change the current block to its rotated one

     else if(this.block == PIECES[1])
        this.block = PIECES[0]
     
    //'J' type blocks rotations
     if(this.block == PIECES[2])
        this.block = PIECES[3]

     else if(this.block == PIECES[3])
        this.block = PIECES[4]
        
     else if(this.block == PIECES[4])
        this.block = PIECES[5]   
    
     else if(this.block == PIECES[5])
        this.block = PIECES[2]   

    //'S' type blocks rotations
    if(this.block == PIECES[7])
    this.block = PIECES[8]

     else if(this.block == PIECES[8])
    this.block = PIECES[7]
    
    //'T' type blocks rotations
    if(this.block == PIECES[9])
    this.block = PIECES[10]

     else if(this.block == PIECES[10])
    this.block = PIECES[11]

    else if(this.block == PIECES[11])
    this.block = PIECES[12]

    else if(this.block == PIECES[12])
    this.block = PIECES[9]

    



    }
}