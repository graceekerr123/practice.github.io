console.log("drawing js is called");

/*
// draw rectangle
ctx.fillStyle = colArray[3];
ctx.strokeStyle = colArray[7];
ctx.lineWidth = 10;
ctx.beginPath();
ctx.rect(75,80,300,200);
ctx.fill();
ctx.stroke();

// draw circle
ctx.fillStyle = colArray[8];
ctx.strokeStyle = colArray[6];
ctx.lineWidth = 6;
ctx.beginPath();
ctx.arc(400,300, 45, 0, 2*Math.PI);
ctx.fill();
ctx.stroke();

// draw line
ctx.strokeStyle = colArray[2];
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(400,10);
ctx.lineTo(400,500);
ctx.stroke();


//draw polyline with closure
ctx.strokeStyle=colArray[8];
ctx.fillStyle=colArray[4];
ctx.lineWidth=5;
ctx.beginPath();
ctx.moveTo(300, 250);
ctx.lineTo(400,250);
ctx.lineTo(500,300);
ctx.lineTo(300,300);
ctx.closePath();
ctx.stroke();
ctx.fill();



// draw shape with a gradient
var my_gradient=ctx.createLinearGradient(10,350,10,550);
my_gradient.addColorStop(0,"rgb(255,102,102)");
my_gradient.addColorStop(0.5,"rgb(255,255,153)");
my_gradient.addColorStop(1,"rgb(0,153,204)");
ctx.fillStyle=my_gradient;
ctx.beginPath()
ctx.rect(200,350, 200,200);
ctx.fill();
ctx.stroke();



// quadratic curves (bezier)
ctx.strokeStyle=colArray[5];
ctx.beginPath();
ctx.moveTo(200,400);
ctx.lineWidth=10;
ctx.quadraticCurveTo(500, 550, 400, 600);
ctx.stroke();
 
*/

// function to make circle
function makeCircle(x,y,r,fillcolour,strokecolour){
    ctx.fillStyle = fillcolour;
    ctx.strokeStyle = strokecolour;
    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
}

makeCircle(55,300,100,colArray[8],colArray[4])