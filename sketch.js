
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4;
var world,boy;
var stone;
var slingShot;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,110,30);
	mango2=new Mango(1090,60,30);
	mango3=new Mango(1060,140,30);
	mango4=new Mango(1120,170,30);

	treeObj=new Tree(1050,580);
	groundObject=new Ground(width/2,600,width,20);
	stone = new Stone(300,320,50,50)
	slingShot = new Slingshot(stone.body,{x:215,y:385});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  groundObject.display();
  stone.display();
  slingShot.display();




}




function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
	}
	
	function mouseReleased(){
	slingShot.fly();
	}