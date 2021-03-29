const Bodies = Matter.Bodies
const Engine = Matter.Engine
const World = Matter.World
const Constraint = Matter.Constraint

var engine, world
var box, ground, slingshot
var stand

function setup(){
createCanvas(1091, 630)
engine = Engine.create();
world = engine.world();

stand = new Ground(545.5, 315, 1091, 25)
}

function draw(){
background(0)
Engine.update(engine);

stand.display();
}
