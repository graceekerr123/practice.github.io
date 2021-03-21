console.log("buttons js called");

class Button{
    constructor(x,y,w,h,text, c_1, c_2, c_3){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.text = text;
        this.outline = c_1;
        this.fill = c_2;
        this.over = c_3;
        // also could have a selected colour
        // 'click' is an offical JavaScript EVENT
        canvas.addEventListener('click', this.mClick.bind(this));
        canvas.addEventListener('mousemove', this.mMove.bind(this));
        
        this.xMouse = 0;
        this.yMouse = 0;
        //  false is the the default setting
        this.inBounds = false;
        // get rid of this because 'Button.clicked' has been incorprated
        //this.clicked = false;
    }


    mClick(e){
        console.log("click");
        // if we clicked and it's inbound then button has been selected
        if(this.inBounds){
            //button has been selected
            // remove this bc now it's 'button.clicked'
            //this.clicked = true;
            Button.clicked = this;
            // it will say this 'this is the selected object'
            // it'll push out a button, if a new one becomes clicked
        }
        /*
        Button.clicked = this;
            Button.shape = this.text;
        */

    }

    mMove(e){
        // update the x and y position variables to be the correct canvas coordinates
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        //console.log(this.xMouse);
        this.inBounds=this.inBoundsCheck(this.xMouse,this.yMouse, this.x, this.y, this.w, this.h)
        //console.log(this.inBounds);

    }

    inBoundsCheck(xM, yM, x, y, w, h){
        // if inside button return true
        if(xM>x && xM<x+w && yM>y && yM<y+h){
            return true;
        }else{
            return false;
        }
    }

    update(){
        this.draw();
    }


    draw(){
        ctx.strokeStyle = this.outline;
        ctx.fillStyle = this.fill;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.w,this.h);
        

        // change colour if mouse is over button
        if(this.inBounds || Button.clicked == this){
            ctx.fillStyle = this.over;
            ctx.lineWidth = 4;
            ctx.fill();
            //ctx.fillStyle = this.fill;
            // this is set for the text code next, so it will be written in the fill colour
            ctx.fillStyle = this.fill;
        }
        else{
            // IS THIS LINE NECESSARY?
            ctx.fillStyle = this.fill;
            ctx.fill();
            // fill txt with different colour, this is set for the text code next
            ctx.fillStyle = this.outline;
        }
        

        ctx.stroke();

        
        var myFont = "bold 20px 'Trebuchet MS', Verdana, sans-serif";
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        // sets the font from 'var myFont'
        ctx.font=myFont;
        // set the text in the middle of the button
        ctx.fillText(this.text, this.x+this.w/2, this.y+this.h/2)

    }
    

}


// to make it so only one button can be clikced at one time
// changed any 'this.clicked' to 'button.clicked'
Button.clicked = ""
