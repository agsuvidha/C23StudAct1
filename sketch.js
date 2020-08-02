const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box1;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
   box1=new Box(100,300,50,50);
   box2=new Box(100,100,50,100);
    box3=new Box(300,200,50,70);
    ground=new Ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    //box1.disp();
    
    box1.disp();
    box2.disp();
    box3.disp();
    ground.display();
}