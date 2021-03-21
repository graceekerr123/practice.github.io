// register mouse clicks, user can drag/move things around on the canvas and draw shapes 

console.log("testobject js is called")

class TestObject{
    // canvas is from init
    // canvas is the page element
    constructor(canvas){

        this.xMouse = 0;
        this.yMouse = 0;
        
        this.element = canvas;
        // mousedown is a event
        // not brackets after mdown because it's a special part of the code and no parameters can pass through it
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));
    }

    mDown(e){
        // shows exactly where the mouse is clicked
        //console.log(e);
        console.log("mouse down event");
        console.log("xMouse is :"+this.xMouse);
        console.log("yMouse is :"+this.yMouse);
    }

    mMove(e){
        // calculates the x and y position of the mouse relative to the canvas
        // should return the same as the coordinates of the canvas
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        console.log("mouse move event");
    }

    mUp(e){
        console.log("mouse up event");
    }

}