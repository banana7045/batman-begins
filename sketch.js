const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops = []
var Umbrella

function preload(){
    
}

function setup(){
var canvas = createCanvas(1000,1000);
engine = Engine.create();
world = engine.world;
Umbrella=new umbrella(300,600)
if(frameCount%150===0){
    

for(var i=0;i<300;i++){
drops.push(new Drops(random(0,1000),random(0,1000)));
}
}
}
function draw(){
background(0)
Engine.update(engine);
for(var i=0;i<300;i++){
drops[i].display();
drops[i].update();
}
Umbrella.display()
}   

