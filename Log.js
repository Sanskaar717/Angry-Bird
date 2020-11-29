class Log{

    constructor(x,y,height,angle){
        
   var rest1 = {
     restitution : 0.5,
     friction : 1
   }
 
   this.body = Bodies.rectangle(x,y,20,height,rest1);
   this.width = 20;
   this.height = height;
   Matter.Body.setAngle(this.body,angle);
   World.add(myWorld,this.body);
    }
 
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;  
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("yellow");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
 
 }