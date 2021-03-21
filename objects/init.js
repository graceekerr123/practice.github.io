console.log("init js is called")

// basic connectin code
canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
var width = 800;
var height = 600;
canvas.width = width;
canvas.height = height;

// colour array
var colArray=[
    "rgb(255,255,255)", "rgb(0,0,0)", "rgb(255, 255, 0)", 
    "rgb(255, 153, 51)","rgb(255, 51, 0)","rgb(255, 51, 153)",
    "rgb(191, 128, 255)","rgb(102, 153, 255)", "rgb(0, 51, 204)", 
    "rgb(0, 204, 102)"
    ]

/*
// how to access the colour
console.log(colArray[0]);
*/