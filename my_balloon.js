const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
midlle_y = canvas.height / 2;
midlle_x = canvas.width / 2;
function drawBalloon() {
    //Cart 
    ctx.fillStyle = "#ff45aa";
    ctx.fillRect(midlle_x-60,midlle_y*2-25,60,5);
    ctx.fillStyle = '#ff1410';
    ctx.fillRect(midlle_x-60,midlle_y*2-20,60,20);
    // total height start bottom 25 width 60

    //cable
    ctx.strokeStyle = "#ff35aa";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(midlle_x-55,midlle_y*2 - 25);
    ctx.lineTo(midlle_x-55,midlle_y*2 - 35);
    ctx.moveTo(midlle_x - 5,midlle_y*2 - 25);
    ctx.lineTo(midlle_x - 5,midlle_y*2 - 35);
    ctx.stroke();

    //balloon
    ctx.fillStyle = "#aa14ff";
    // ctx.moveTo(-30,-60);
    ctx.moveTo(midlle_x - 55,midlle_y*2 - 35);
    // ctx.quadraticCurveTo(-88,-120,-80,-160);
    ctx.quadraticCurveTo(10,100,midlle_x -120,midlle_y);
    ctx.quadraticCurveTo(midlle_x - 30,midlle_y - 80,midlle_x + 60,midlle_y);
    ctx.quadraticCurveTo(midlle_x + 80,midlle_y + 30,midlle_x -5,midlle_y*2 - 35);
    // ctx.quadraticCurveTo(88,-120,30,-60);
    ctx.closePath();
    // ctx.stroke()
    ctx.fill();
}
drawBalloon();