console.log("ball js is called")

// What is difference to just making circles and drawing a ball object? - to change places on the screen
/// ball stores all the data with it

class Ball{
constructor(x,y,r,col){
    this.x = x;
    this.y = y;
    this.rad = r;
    this.col = col;
    console.log("A ball has been instantiated");
}
// What does this. mean, and how is it diff from what was used before?
// so it can appear or not appear, or change the variables through the update
// update has us changing x values, so there will be loops int the main file
// can put a count in the update
// just setting up the structure at the moment
update(){
    this.draw();
}
// use this. if variable is in the constructor
// if in one function and need to call another function then use this.

// How does this relate to draw above? - it's being called in the update
draw(){
    ctx.fillStyle = this.col;
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.rad,0,2*Math.PI);
    ctx.fill();
}

area(){
    var a = Math.PI*Math.pow(this.rad,2)
    var output = "Area is:" + a + "pixels";
    console.log(output);
}


}