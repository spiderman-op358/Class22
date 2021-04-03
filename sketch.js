const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies


var myworld;
var myEngine;
var ground;
var ball;




function setup() {
  createCanvas(400,400);
  myEngine=Engine.create();
  myworld=myEngine.world
  var option={isStatic:true}
  ground=Bodies.rectangle(0,300,400,10,option);
  World.add(myworld,ground)

 var option1={restitution:1.5};
  ball=Bodies.circle(200,200,25,option1);
  World.add(myworld,ball);
}

function draw() {
  background("Black");  
  Engine.update(myEngine);
  rect(ground.position.x,ground.position.y,400,10)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25)
}