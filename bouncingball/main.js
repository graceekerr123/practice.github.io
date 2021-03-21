console.log("main 1 js called");

objectSet = [];

//instatiate object
var BBOne = new BouncingBall(300,200,190,270,colArray[8], 10, 2, -2);
var BBTwo = new BouncingBall(300,200,190,270,colArray[6],10, -3, 1)
var BBThree = new BouncingBall(300,200,190,270,colArray[2], 10, 1, 2)
objectSet.push(BBOne, BBTwo, BBThree);


function animate(){
    ctx.clearRect(0,0, width, height);

    for(var i=0; i<objectSet.length; i++){
        objectSet[i].update();
    }
    





    window.requestAnimationFrame(animate);
}

animate();