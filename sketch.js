
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var dustbinObj, paperObject,groundObject	
var world, slingShot;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,300,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	slingShot = new SlingShot(paperObject.body,{x : 200, y : 100});	
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  groundObject.display();
  dustbinObj.display();
  paperObject.display();
  slingShot.display(); 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
		
  	}
}

function mouseDragged(){
    Matter.Body.setPosition(paperObject.body,{x : mouseX, y : mouseY});
}
function mouseReleased(){
    slingShot.fly();
}

