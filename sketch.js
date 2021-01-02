const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var myEngine, myWorld;
var ground,box,box2,pig,pig2;
var bird,log,log2,log3,log4;
var box3, box4,box5;
var bgI;

function preload(){
  bgI = loadImage("sprites/bg.png");
}

function setup(){
  createCanvas(1200,600);

  myEngine = Engine.create(); //myEngine.World
  myWorld = myEngine.world;

  ground = new Ground(width/2,590,width,20);
  platform = new Ground(170,450,350,300);
  box = new Box(800,550);
  box2 = new Box(1000,550);
  box3 = new Box(800,450);
  box4 = new Box(1000,450);
  box5 = new Box(900,350);
  pig = new Pig(900,550);
  pig2 = new Pig(900,450);
  bird = new Bird(200,225);
  log = new Log(900,500,300,PI/2);
  log2 = new Log(900,400,300,PI/2);
  log3 = new Log(800,350,150,PI/7);
  log4 = new Log(1000,350,150,-PI/7);
  sling = new Slingshot(bird.body,{x:250,y:140});
  
}

function draw(){

  background(bgI);

  Engine.update(myEngine);

  ground.display();
  box.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  pig.display();
  pig2.display();
  bird.display();
  log.display();
  log2.display();
  log3.display();
  log4.display();
  platform.display();
  sling.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    sling.attach(bird.body);
  }
}