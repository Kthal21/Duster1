
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground,db1,db2,db3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paper1= new Paper (100,150,6);
  ground= new Ground (400,600,20);
  db1= new dustbin (600,600,50);
  db2= new dustbin (600,600,100);
}


function draw() {
  rectMode(CENTER);
  background("black");
  keyPressed();
  
Engine.update(engine);
ground.display();
db1.display();
db2.display();
paper1.display();

   
  drawSprites();
 
}

function keyPressed(){

if (keyDown("up")) {

Matter.Body.applyForce(paper1.body, paper1.body.position, {x:85, y:-85})
;

//paper1.velocityX=5;
//paper1.collide(db2);

}


}

