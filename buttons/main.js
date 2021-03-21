console.log("main js called");

// grid
//var G = new Grid(width, height, 50, 50);
//var C = new showColours(colArray,800,500,200);

// instatiate new button
// set variables, so defining button code will be shorted
/*
var x = 400;
var y = 100;
var w = 200;
var h = 50;
var B = new Button(x,y,w,h, "Hello Grace", colArray[2], colArray[5], colArray[8])
*/

var name_list = ["Press Me", "Over Here", "What about me?"]
var button_list=[]
var x = 400;
var y = 100;
var w = 200;
var h = 50;

// add a button to the button_list for every name_list item
for (var i=0; i<name_list.length ; i++){
    //'y+i*h' = it'll move the buttons down by the height of the button
    button_list.push(new Button(x,y+i*h,w,h, name_list[i], colArray[8], colArray[2], colArray[6]))
}


function animate(){
    ctx.clearRect(0,0,width,height);
    // grid
    //G.update();
    //B.update();

    for(var i=0;i<button_list.length;i++){
        button_list[i].update();
    }

    window.requestAnimationFrame(animate);
}

animate();


// If we want only one button to be able to click at one time
// then store a shared variable up in the class (static variables)
// so only one object can be the selected one at any one time