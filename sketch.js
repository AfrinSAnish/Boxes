const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,ground01,box01,box02,box03,box04,box05,box06,box07,box08,box09,
box1,box2,box3,box4,box5,box5,box6,box7,box8,box9,box010,box011,box012,box013,box014,
box015,box016,launcher,sling;

function preload()
{
	
}

function setup() {
	createCanvas(1300,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//#1 biggggg
	ground1= new Ground(390,500,220,20)

	//level 1
	box1=new Blue(300,275,30,40)
	box2=new Green(330,275,30,40)
	box3=new Red(360,275,30,40)
	box4=new Yellow(390,275,30,40)
	box5=new Violet(420,275,30,40)
	box6=new Black(450,275,30,40)
	box7=new Pink(480,275,30,40)

	//level 2 
	box8=new Blue(330,235,30,40)
	box9=new Green(360,235,30,40)
	box10=new Red(390,235,30,40)
	box11=new Yellow(420,235,30,40)
	box12=new Blue(450,235,30,40)

	//level 3
	box13=new Black(360,195,30,40)
	box14=new Pink(390,195,30,40)
	box15=new Green (420,195,30,40)

	//level 4
	box16=new Yellow(390,155,30,40)


	//#2 biggggg
	ground01= new Ground(700,280,220,20)

	//level 1
	box01=new Blue(700,175,30,40)
	box02=new Green(670,175,30,40)
	box03=new Red(730,175,30,40)
	box04=new Yellow(760,175,30,40)
	box05=new Violet(640,175,30,40)
	box06=new Black(610,175,30,40)
	box07=new Pink(790,175,30,40)

	//level 2 
	box08=new Blue(700,135,30,40)
	box09=new Green(670,135,30,40)
	box010=new Red(730,135,30,40)
	box011=new Yellow(760,135,30,40)
	box012=new Violet(640,135,30,40)
	
	//level 3
	box013=new Black(670,195,30,40)
	box014=new Pink(700,195,30,40)
	box015=new Green (730,195,30,40)

	//level 4
	box016=new Yellow(700,155,30,40)

	//launcher
	launcher = new Polygon(1100,400,50,50)
	sling=new SlingShot(launcher.body,{x:1200,y:400})
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  

  ground01.display();
  box01.display();
  box02.display();
  box03.display();
  box04.display();
  box05.display();
  box06.display();
  box07.display();
  box08.display();
  box09.display();
  box010.display();
  box011.display();
  box012.display();
  box013.display();
  box014.display();
  box015.display();
  box016.display();

  launcher.display();
  sling.display();

  if(launcher.body.position.y<0||launcher.body.position.x<0||
	launcher.body.position.y>600){      
	  Matter.Body.setPosition(launcher.body,{x:1100,y:400})
	  sling.attach();
	}
  
  drawSprites();
 
}

function attached(lsling,lbodyA){
	lsling.bodyA=lbodyA;
  }

function mouseDragged(){
	Matter.Body.setPosition(launcher.body,{x: mouseX , y: mouseY});
}

function mouseReleased(){
	sling.fly();
}


