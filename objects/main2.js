// balls of different sizes
console.log("main js is called")

// you don't need to have this but since you will have multiple objects and it will run update for all of them
// empty array (aka list)
var objectSet = []

// WHAT DOES NEW MEAN? 
// defining//instationation of the object of five dot??
var FDOne = new FiveDot(400, 100, 60, colArray[3], colArray[4], colArray[5]);
// call the update on it
// if you run, it should get draw is called as that's what update calls (only that at the moment, but more later)
//the functions are being called through the update

/* FDOne.update(); */

var FDTwo = new FiveDot(200, 300, 100, colArray[6], colArray[7], colArray[8]);
var FDThree = new FiveDot(600, 300, 120, colArray[1], colArray[2], colArray[3]);
var FDFour = new FiveDot(400, 400, 200, colArray[1], colArray[3], colArray[7]);

objectSet.push(FDOne, FDTwo, FDThree, FDFour);
// this is another way of pushing to the list
// you don't need the var. Just done the instatiation and directed pushed it in the set
objectSet.push(new FiveDotRotate(150,100,80,colArray[3],colArray[6], colArray[4], 60))

console.log(objectSet);
// update all of the FD's
for(var i=0; i<objectSet.length; i++){
    objectSet[i].update();

}


