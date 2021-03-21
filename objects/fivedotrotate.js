console.log("five dot rotate called");

// create the class with constructor
// include the functions only with console logs
// test at this stage for problems


class FiveDotRotate{
constructor(xC, yC, s, c1, c2, c3, ang){
    this.xC = xC;
    this.yC = yC;
    this.s = s;
    this.r = s/8;
    this.c1 = c1;
    this.c2 = c2;
    this.c3 = c3;
    this.ang = ang;
    }

update(){
    this.draw()
    }

draw(){
    // to rotate we need a save at the beginning and a restore at the end
    ctx.save();
    // this is the centre
    ctx.translate(this.xC, this.yC);
    // conversion to radians
    ctx.rotate(this.ang*Math.PI/180);

    ctx.beginPath();

    // x, y, h, w - draw the rectangle
    ctx.rect( - this.s/2, - this.s/2, this.s, this.s)
    ctx.fillStyle = this.c1;
    ctx.fill();
    // top left
    this.drawCircle( - this.s/2,  - this.s/2, this.r, this.c3);
    // top right
    this.drawCircle(+ this.s/2,  - this.s/2, this.r, this.c3);
    // bottom left
    this.drawCircle( - this.s/2,  + this.s/2, this.r, this.c3);
    //bottom right
    this.drawCircle(+ this.s/2,  + this.s/2, this.r, this.c3);
    //centre  
    this.drawCircle(0, 0, this.r, this.c3);

    ctx.restore();
}

// just a functions, the third functions
drawCircle(x,y,r,col){
    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI);
    ctx.fillStyle = col;
    ctx.fill();
}



}