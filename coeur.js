const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


function draw_Coeur () {
     // Cubic curves example
     ctx.beginPath();
     ctx.fillStyle = "#FF0000";
     ctx.moveTo(75, 40);
     ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
     ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
     ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
     ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
     ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
     ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
     ctx.fill();
     ctx.closePath();
}

draw_Coeur();

function draw_Feuille() {
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.moveTo(75, 100);
    // ctx.lineTo(100, 75);
    ctx.lineTo(90,135);
    ctx.lineTo(65,135);
    // ctx.lineTo(100, 25);

    ctx.moveTo(75, 100);
    ctx.bezierCurveTo(120, 150, 90, 70, 75, 25);
    ctx.bezierCurveTo(60, 75, 40, 150, 75, 100);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

}
draw_Feuille();