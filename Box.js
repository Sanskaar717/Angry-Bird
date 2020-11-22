class Box{

   constructor(x,y,width,height){
       
  var rest1 = {
    restitution : 0.5
  }

  this.body = Bodies.rectangle(x,y,width,height,rest1);
  this.width = width;
  this.height = height;
  World.add(myWorld,this.body);
   }

   display(){
       var pos = this.body.position;
       var angle = this.body.angle;  
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       fill("blue");
       rectMode(CENTER);
       rect(0,0,this.width,this.height);
       pop();
   }

}