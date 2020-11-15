const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground,box2,box3;

function setup(){
  createCanvas(600,600);

  myEngine = Engine.create(); //myEngine.World
  myWorld = myEngine.world;

  var op = {
    isStatic : true
  }

  var rest = {
    restitution : 2
  }

  var rest1 = {
    restitution : 1
  }

  ground = Bodies.rectangle(300,590,600,10,op);
  World.add(myWorld,ground);

  box2 = Bodies.rectangle(300,100,50,50,rest);
  World.add(myWorld,box2);

  box3 = Bodies.rectangle(125,25,50,50,op);
  World.add(myWorld,box3);

}

function draw(){

  background(0);

  Engine.update(myEngine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,10);
  rect(box2.position.x,box2.position.y,50,50);
  rect(box3.position.x,box3.position.y,50,50);

}