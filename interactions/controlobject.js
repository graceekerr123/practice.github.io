console.log("controlobject js is called")

class ControlObject{
    // canvas is from init
    // canvas is the page element
    constructor(canvas){
        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false;

        this.w = 0;
        this.h = 0;
        
        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));
    }

    // single event
    // SO OBVIOUSLY WE NEED THE X AND Y MOUSE START TO ALWAY BE THE SAME
    // WHAT SHOWS THIS IN THE CODE?
    mDown(e){
        // positions of the mouse
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        // when mouse goes down it stays down
        this.mouseDown = true;
    }

    // current positions of the mouse (updated)
    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        console.log("mouse move event");
    }

    // mouse not down
    mUp(e){
        console.log("mouse up event");
    }

    update(){
        // calculate the new w and h values of the rect to use in the draw
        this.w = this.xMouse - this.xMouseStart;
        this.h = this.yMouse - this.yMouseStart;
        // only call draw function if the mouse is down
        // short for saying 'this.mouseDown == true'
        if(this.mouseDown){
            console.log("mouse is down");
            this.draw();
        }
    }

    draw(){
        this.drawRect(this.xMouseStart, this.yMouseStart, this.w, this.h);

    }

    drawRect(x,y,w,h){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWith = 1;
        ctx.strokeStyle = "rgb(200,230,20)";
        ctx.stroke();

    }


}