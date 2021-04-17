const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var ball;
var box;



function setup() {
  createCanvas(1300, 600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,590,1300,40)
   
  box1 = new Box(800,560,60,60);
  box2 = new Box(800,530,60,60);
  box3 = new Box(800,500,60,60);
  box4 = new Box(800,470,60,60);
  box5 = new Box(800,440,60,60);

  box6 = new Box(900, 560, 60, 60);
  box7 = new Box(900, 530, 60, 60);
  box8 = new Box(900, 500, 60, 60);
  box9 = new Box(900, 470, 60, 60);
  box10 = new Box(800, 440, 60, 60);

  box11 = new Box(700, 560, 60, 60);
  box12 = new Box(700, 530, 60, 60);
  box13 = new Box(700, 500, 60, 60);
  box14 = new Box(700, 470, 60, 60);
  box15 = new Box(700, 440, 60, 60);
  box16 = new Box(700, 410, 60, 60);
  box17 = new Box(700, 380, 60, 60);
  box18 = new Box(700, 350, 60, 60);
  box19 = new Box(700, 320, 60, 60);
  box20 = new Box(700, 290, 60, 60);

  ball = new Ball(400,200,90,90)

  rope = new Rope (ball.body,{x :600 ,y:100 })
 

}

function draw() {
  background(180);
  Engine.update(engine);
 
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  ball.display();
  rope.display();


}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}

function mouseReleased(){
  ball.fly();
}



