console.log("main js called");

var myT = new ControlObject(canvas);

//this is the base code for the animation loop
//it is running but at present is not having any impact
//the listeners in the object are independent of the animation loop

function animate(){
    // erases the canvas before new rect is drawn
    // IS CLEAR RECT A STANDARD COMMAND IN CODE????
    ctx.clearRect(0,0,width,height);
    myT.update();


    // no ()'s after animate bc no parameters can pass through the code
    window.requestAnimationFrame(animate);
}

animate();