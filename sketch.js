const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	classImg =  loadImage("classroom.jpg");
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(40, 500);
	dustbinBase = new Dustbin(1050, 660, 100, 20);
	dustbinPart1 = new Dustbin(995, 610, 20,130);
	dustbinPart2 = new Dustbin(1105, 610, 20, 130);
	ground = new Ground(width/2, 680, width, 20);

	Engine.run(engine);
}


function draw() {
  Engine.update(engine);
  background(classImg);

  paper.display(); 
  dustbinBase.display();
  dustbinPart1.display();
  dustbinPart2.display();

  //image(dustImg, 1000, 640);

  ground.display();
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:546 , y:-546});
	}
}