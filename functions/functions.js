console.log("functions js is called");

// function to make circles
function makeCircle(x,y,r,fillcolour,strokecolour){
    ctx.fillStyle = fillcolour;
    ctx.strokeStyle = strokecolour;
    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
}

// function to make rectangles
function makeRect(x,y,w,h,fillcolour,strokecolour,linewidth){
    ctx.fillStyle = fillcolour;
    ctx.strokeStyle=strokecolour;
    ctx.lineWidth=linewidth;
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.fill();
    ctx.stroke();
}

// function to make lines
function makeLine(x,y,x2,y2,strokecolour,linewidth){
    ctx.strokeStyle = strokecolour;
    ctx.lineWidth = linewidth;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}

// function to make text
function makeText(f,align,x,y,colour){
    ctx.fillStyle = colour;    
    ctx.fillText("Hey", x,y); 
    ctx.font = f;
    ctx.textAlign = align; 
}

// function to make button
function makeButton(){
    var x = 160;
    var y = 250;
    var w= 250;
    var h= 200;
    makeRect(x,y,w,h, colArray[1], colArray[1], 4);
    makeText("80px Arial", "center", x+w/2,y+h/2, colArray[4]);
}

// drawCircle x, y, r, fillC(rgb string), 
// strokeC(rgb string), lineWidth, fill(boolean), stroke(boolean)
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


makeCircle2(200,300,100,colArray[8],colArray[4], 10, true, false)

makeRect2(450,100,100,200,colArray[2],colArray[4],10, false, true)




// use of functions

/*
makeCircle(55,300,100,colArray[8],colArray[4])
makeCircle(300,300,200,colArray[6],colArray[6])
makeRect(80,80,150,250,colArray[2],colArray[4],10)
makeRect(500,100,50,110,colArray[8],colArray[8],10)
makeRect(550,275,200,150,colArray[8],colArray[8],10)
makeLine(400,10,400,500,colArray[2],10)
makeLine(410,50,480,90,colArray[2],10)
makeText("30px Arial", "left", 150, 60, colArray[5])
makeText("80px Arial", "center", 650, 350, colArray[5])


makeButton()

*/