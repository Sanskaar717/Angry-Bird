const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground,box,box2;

function setup(){
  createCanvas(1200,500);

  myEngine = Engine.create(); //myEngine.World
  myWorld = myEngine.world;

  ground = new Ground(width/2,490,width,20);

  box = new Box(width/2,height/2,50,50);
  box2 = new Box(620,100,50,100);
}

function draw(){

  background(0);

  Engine.update(myEngine);

  ground.display();
  box.display();
  box2.display();
}