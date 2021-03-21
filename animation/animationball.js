console.log("animationball js called");
// this is just a circle

class Ball{
    constructor(x,y,r,col){
        this.x = x;
        this.y = y;
        this.r = r;
        this.fill = col;
    }

    update(){
        // will increase x value by 10 everytime update is called
        // lower number = smaller
        this.x += 3;
        // when it gets to 800 pixels it will go back to zero
        this.x = this.x%800;

        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }
}