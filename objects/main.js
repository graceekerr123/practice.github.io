// same sized balls

// How is this different to the ball.js?????? - to seperate the code, 
// to store the classes in one place, 
// the initalisation in one place
// and the main is the doing part, calling

// NORMAL
var B = new Ball(200,200,50,colArray[5]);
B.area();
B.update();

// LOOPS
// objects live in arrays, common 
var ball_set = [];
// creating loops
//making 10 balls
for(var i = 0; i<11; i++){
    // %=modulus - meaning when it gets to 9 (end of the array) e.g. 9mod9
    // therefore the c will never get bigger than the length of the array
    // The mod makes it loop back to the first colour in the array if there's more circles
    // put '[0] if multi colour list
    var c = i%colArray.length
    // shift the balls along 60
    var temp = new Ball(200+i*60,400,25,colArray[c])
    // push each of the balls into the ball set
    ball_set.push(temp);
}

// to draw the balls you need to loop through tht eball set array
for (var j=0; j<ball_set.length; j++){
    ball_set[j].update();
}


// DOUBLE LOOP
var ball_set = []
for(var i = 0; i<colArray.length; i++){
   for (var j=0; j<colArray.length; j++){
       // in 'Coding Ball Object' the colour goes in gradient too
       var temp = new Ball(100 +60*j,300 + 60*i,25,colArray[i])
       ball_set.push(temp);
   }
}

for (var i=0; i<ball_set.length; i++){
    ball_set[i].update();
}
