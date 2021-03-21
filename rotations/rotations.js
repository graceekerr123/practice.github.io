// you don't rotate the rectangle
// instead you rotate the actual environment the rectangle is made in

function  makeCircle2(x,y,r,fillC,strokeC,lineW,fill,stroke){
    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI);
    // updating the context, colour choices etc.
    if(fill == true){
        ctx.fillStyle = fillC;
        ctx.fill();
    }
    if(stroke == true){
        ctx.lineWidth = lineW;
        ctx.strokeStyle = strokeC;
        ctx.stroke();
    }
}


function makeRect2(x,y,w,h,fillC,strokeC,lineW,fill,stroke){
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    // updating the context, colour choices etc.
    if(fill == true){
        ctx.fillStyle = fillC;
        ctx.fill();
    }
    if(stroke == true){
        ctx.lineWidth = lineW;
        ctx.strokeStyle = strokeC;
        ctx.stroke();
    }
}

ctx.save();
ctx.translate(300,200);
ctx.rotate(30*Math.PI/180);
makeCircle2(0,0,20, "", colArray[5],2,false,true);
makeRect2(0,0,100,200,colArray[4], colArray[6], 5, true, true);
ctx.restore();

// loop: rectangle spin in 15 degree increments
// there's a resriction on 360, so it'll go around in a circle
// loop will run, rotate the context by 15 degrees, draw rectangle
// run again, rotate the context by another 15 degrees
/*
ctx.save();
ctx.translate(500,200);
for(var i=0; i<360; i+=15){
    ctx.rotate(15*Math.PI/180);
    makeRect2(0,0,100,200,colArray[4], colArray[6], 5, true, true);
}
ctx.restore();
*/

// refining it
ctx.save();
ctx.translate(500,200);
for(var i=0; i<360; i+=15){
    ctx.rotate(15*Math.PI/180);
    makeRect2(0,0,50,50,colArray[4], colArray[6], 1, true, true);
}
ctx.restore();
