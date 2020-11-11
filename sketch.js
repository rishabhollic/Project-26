
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

function setup() {
createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Cradle bobs
b1 = new Paper(200,500,50);
b2 = new Paper(250,500,50);
b3 = new Paper(300,500,50);
b4 = new Paper(350,500,50);
b5 = new Paper(400,500,50);

//Roof thing
g = new Ground(width/2,height/4,250,15);

//Ropes to constrain bobs
s = new rope(b1.body, g.body,-100,0);
a = new rope(b2.body, g.body,-50,0);
b = new rope(b3.body, g.body,0,0);
c = new rope(b4.body, g.body,50,0);
d = new rope(b5.body, g.body,100,0);

	Engine.run(engine);


}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  
  textSize(20);
  fill("Brown")
  text("Press the right-arrow to observe Newton's cradle.",width/4,150);
  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  
  s.display();
  a.display();
  b.display();
  c.display();
  d.display();

  g.display();
 
  drawSprites();
}

function keyPressed() { 
	if (keyCode === RIGHT_ARROW) 
	{ Matter.Body.applyForce(b1.body,b1.body.position,{x:-100,y:-80}); } 
}




