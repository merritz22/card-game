

// Canvas  ...........
const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

let trees = [];

const mainAreaWidth = 400;
const mainAreaHeight = 400;
let horizontalPadding = (window.innerWidth - mainAreaWidth)/2;
let verticalPadding = (window.innerHeight - mainAreaHeight)/2;

let balloonX,
    balloonY,
    heating,
    verticalVelocity,
    horizontalVelovity,
    gameStarted;

// initialisation du jeux
function resetGame() {
    balloonX = 0;
    balloonY = 0;
    heating = false;
    verticalVelocity = 5;
    horizontalVelovity = 5;
    gameStarted = false;

    trees = [];
    for (let i=1;i<11;i++) generateTree();

    draw();
}

resetGame();

window.addEventListener("mousedown",function () {
    heating = true;
    if (!gameStarted) {
        gameStarted = true;
        window.requestAnimationFrame(animate);
    }
})

window.addEventListener('mouseup',function(){
    heating = false;
})

//l'animation principale
function animate(){
    const velocityChangeWhileHeating = 0.4;
    const velocityChangeWhileCooling = 0.2;

    if (heating) {
        verticalVelocity -= velocityChangeWhileHeating;
    }else if (verticalVelocity <5) {
        verticalVelocity += velocityChangeWhileCooling;
    }

    balloonY += verticalVelocity;
    
    if (balloonY < -200) balloonY = -200;
    if (balloonY > 0) balloonY = 0;
    if (balloonY < 0) balloonX += horizontalVelovity;
    console.log(balloonY);
    //si un arbre estnhors de la scene on le remplace
    if (trees[0].x -(balloonX - horizontalPadding) < -100) {
        trees.shift();
        generateTree();
    }

    draw();
    
    window.requestAnimationFrame(animate);
}

function draw() {
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    ctx.save();
    ctx.translate(horizontalPadding - balloonX,verticalPadding + mainAreaHeight);

    // Draw scene
    drawBalloon();
    drawTrees();

    ctx.restore();//Reset transformation
}



function drawBalloon() {
    ctx.save();
    ctx.translate(balloonX, balloonY);
    // Cart
    ctx.fillStyle = "#db504a";
    ctx.fillRect(-30,-40,60,10);
    ctx.fillStyle = "#eA9E8D";
    ctx.fillRect(-30,-30,60,30);

    //Cables
    ctx.strokeStyle = "#d62828";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-24,-40);
    ctx.lineTo(-24,-60);
    ctx.moveTo(24,-40);
    ctx.lineTo(24,-60);
    ctx.stroke();

    // Balloon
    ctx.fillStyle = "#D62828";
    ctx.beginPath();
    ctx.moveTo(-30,-60);
    ctx.quadraticCurveTo(-80,-120,-80,-160);
    ctx.arc(0,-160,80,Math.PI,0,false);
    ctx.quadraticCurveTo(80,-120,30,-60);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
}

function generateTree() {
    const minimumGap = 50;//distance minimum entre 2 arbres
    const maximunGap = 600;//distance maximum entre 2 arbres

    const x = trees.length
        ? trees[trees.length -1].x +
            minimumGap +
            Math.floor(Math.random()*(maximunGap - minimumGap))
        : 400;

    const h = 60 + Math.random()*80;//height

    const r1 = 32 + Math.random()*16;//radius
    const r2 = 32 + Math.random()*16;
    const r3 = 32 + Math.random()*16;
    const r4 = 32 + Math.random()*16;
    const r5 = 32 + Math.random()*16;
    const r6 = 32 + Math.random()*16;
    const r7 = 32 + Math.random()*16;

    const treeColors = ["#6D8821","#8FAC34","#98B333"];
    const color = treeColors[ Math.floor(Math.random()*3) ];

    trees.push({ x, h, r1, r2, r3, r4, r5, r6, r7, color });
}


function drawTrees() {
    trees.forEach(({ x, h, r1, r2, r3, r4, r5, r6, r7, color }) =>{
        ctx.save();
        ctx.translate(x,0);

        // Trunk
        ctx.fillStyle = "#885F37";
        ctx.beginPath();
        ctx.moveTo(-20,0);
        ctx.quadraticCurveTo(-10,-h/2,-20,-h);
        ctx.lineTo(20,-h);
        ctx.quadraticCurveTo(10,-h/2,20,0);
        ctx.closePath();
        ctx.fill();

        //Crown
        ctx.fillStyle = color;
        drawCircle(-20,-h-15,r1);
        drawCircle(-30,-h-25,r2);
        drawCircle(-20,-h-35,r3);
        drawCircle(0,-h-45,r4);
        drawCircle(20,-h-35,r5);
        drawCircle(30,-h-25,r6);
        drawCircle(20,-h-15,r7);

        ctx.restore();
    })
}

function drawCircle(cx,cy,radius) {
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, 2*Math.PI);
    ctx.fill();
}