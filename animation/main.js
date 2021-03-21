// all the animation code goes inside the main
console.log("main js called");

// JUST STATIONERY ONE
// instatiated the circle
var BB = new Ball(300,300,20,colArray[2]);
// tested the circle



var count = 0
// this function is a parameterless function
function animate(){
    // to make the one circle moving to different places
    // erase the canvas everytime and only print the latest update
    ctx.clearRect(0,0, width, height)
    // everytime the function is called, the count will increase by one
    count +=1;
    // the cycle the counts just to 100
    // %=mod ; which takes any number of count and gives the remainder when count is divided by 100 + cant go past 99
    count = count%100;
    // update undlessly
    BB.update();

    
    // callback = wants to know the function to recall again and again
    // you don't need the () at the end of 'animate' bc it is a specialised place 
    // and it won't pass the parametres and only call the function
    // don't put the brackets there bc it is a parameterless function
    // IS IT ALWAYS THE FUNCTION THIS IT'S IN
    window.requestAnimationFrame(animate);
}

// YOU NEED TO CALL THE FUNCTION, to start the function, otherwise nothing will appear
animate();
