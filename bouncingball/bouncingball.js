console.log("bouncingball js is called")

class BouncingBall{
    constructor(x,y,w,h,c1,R,dy,dx){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.col = c1
        this.R = R
        // dy is the varaiable for changing the y value
        this.dy = dy
        this.dx = dx
        // circle centre
        this.xC = x + w/2
        this.yC = y+h/2
    }

    update(){
        // If the position of the centre of the ball is biggger than the 0,0 + height of box
        // || = or
        if(this.yC > this.y + this.h || this.yC < this.y){
            this.dy = -this.dy;
        }
        if(this.xC < this.x || this.xC > this.x + this.w){
            this.dx = -this.dx;
        }

        this.xC += this.dx;
        // everytime you call update, it wil add on the dy value to yC value
        this.yC += this.dy;

        this.draw();

    }

    draw(){
        // make sure to include 'this.'
        this.drawRect(this.x, this.y, this.w, this.h, this.col);
        this.drawCircle(this.xC, this.yC, this.R, this.col);
    }

    drawRect(x,y,w,h,col){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.strokeStyle = col;
        ctx.stroke();
    }

    drawCircle(x,y,r,col){
        ctx.beginPath();
        ctx.arc(x,y,r,0,2*Math.PI);
        ctx.fillStyle = col;
        ctx.fill();
    }


}