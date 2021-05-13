
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	stand=new Stand(400,200,300,30)
    b1= new Ball(300,400,30);
    s1=new SlingShot(b1.body,stand.body,-50*2,0);

	b2= new Ball(350,400,30);
	s2=new SlingShot(b2.body,stand.body,-50,0);

	b3= new Ball(400,400,30);
	s3=new SlingShot(b3.body,stand.body,0,0);

	b4= new Ball(450,400,30);
	s4=new SlingShot(b4.body,stand.body,50,0);

	b5= new Ball(500,400,30);
	s5=new SlingShot(b5.body,stand.body,100,0);

	//Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  
  background(100000);
  
  stand.display();
 b1.display();
 s1.display();
 b2.display();
 s2.display();
 b3.display();
 s3.display();
 b4.display();
 s4.display();
 b5.display();
 s5.display();
}


function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-100,y:-100})
	}
}
