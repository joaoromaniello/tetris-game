var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
let x = 100;
var y = 200;
let cx = 125;
var i = 0;
var stat = 0;
var somador = 0;
var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(1, "red");

function update() {
if(i!=1){
    for(;i<4;i++){
        createRect(x, y, 60, 60);
        ctx.fillStyle = my_gradient;
        ctx.fillRect(x, y, 60, 60);
        x+= 60;
}
}
i = 1;
x= 100 + somador;
}

function loop() {
    window.requestAnimationFrame(loop, canvas);
    inicializa();
    update();
  
}

function createRect(x, y, lx, ly) {
    ctx.beginPath();
    ctx.rect(x, y, lx, ly);
    ctx.stroke();
}
function createCircle(posX, posY, raio) {
    ctx.beginPath();
    ctx.arc(posX, posY, raio, 0, 2 * Math.PI);
    ctx.stroke();
}

function mexer(event){
    y += 10;
    console.log(y);
    
}

function inicializa(){
    document.addEventListener('keydown', pegaTecla);
}

function clear(ctx) {
    ctx.clearRect(0, 0,canvas.height,canvas.width);
}

function pegaTecla(){
  var tecla = event.keyCode;
  if(tecla == "40"){
  y += 12;
  i = 0;
  clear(ctx);
 }
 if(tecla == "39"){
 somador += 12
 i = 0;
 clear(ctx);
  }
if(tecla == "37"){
    somador -= 12
    i = 0;
    clear(ctx);
   }
 
if(tecla == "38"){
    y -= 12
    i = 0;
    clear(ctx);
   }
   
}



loop();
