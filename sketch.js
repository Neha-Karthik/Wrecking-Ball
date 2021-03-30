const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine, world;
var ball, ground, rope;
var box1, box2, box3, box4, box5, box6;

function setup(){
    createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,580,1000,10);
    ball = new Ball(400,400,50,50);
    box1 = new Box(800,500,70,70);
    box2 = new Box(800,480,70,70);
    box3 = new Box(800,450,70,70);
    box4 = new Box(800,430,70,70);
    box5 = new Box(800,400,70,70);
    box6 = new Box(800,380,70,70);

    rope = new Rope(ball.body,{x:500,y:50});

    console.log("in setup function");
}

function draw(){
    background("blue");
    Engine.update(engine);

    ground.display();
    ball.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();  

    rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
