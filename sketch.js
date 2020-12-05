
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box1,box2,box3;
var paper,ground;

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;
	
    box1 = new Box(1095,510,20,100);
	box2 = new Box(985,550,200,20);
	box3 = new Box(875,510,20,100);

	paper = new Paper(50,550,20,20);
	ground = new Ground(600,580,1200,20);
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
   
  box1.display();
  box2.display();
  box3.display();

  paper.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:27,y:-27})
	}
}



