console.log("loops js is called");


function  makeCircle2(x,y,r,fillC,strokeC,lineW,fill,stroke){
    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI);
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

// increase the 50 to make there space inbetween the circles
var i = 0;
makeCircle2(200 +50*i,300,50,colArray[8],colArray[5], 5, true, true);
i=1;
makeCircle2(200 +50*i,300,50,colArray[8],colArray[5], 5, true, true);
i=2;
makeCircle2(200 +50*i,300,50,colArray[8],colArray[5], 5, true, true);
i=3;
makeCircle2(200 +50*i,300,50,colArray[8],colArray[5], 5, true, true);

// in python it's while, in javascript it's a 'for' loop
// variable declared, a limit on how far the loop will go, loop will go up by 1
// loop will only run while condition is true
// if <4, then it will run 3 times

// going across to the right
for(var i=0; i<10; i++){
    console.log(i);
    makeCircle2(40 +70*i,450,30,colArray[8],colArray[5], 5, true, true);
}

// going downwards
// don't change x value, make y value small and increase by i
for(var j=0; j<10; j++){
    console.log(j);
    makeCircle2(40,20 +j*30,30,colArray[8],colArray[5], 5, true, true);
}

// double loop
// i will run once for every 5 times j runs
for(var i=0; i<5; i++){

    // must not be i, as it's already used for outer loop
    for(var j=0; j<5; j++){
        makeCircle2(10 +30*i,10 +j*30,20,colArray[8],colArray[5], 5, true, true);   
    }
}