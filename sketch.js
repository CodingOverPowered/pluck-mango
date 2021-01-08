
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,treeImg
var slingshot
var ground
var stone
var chain
var boy
var mango1,mango2,mango3,mango4,mango5,mango6,mango7
function preload()
{
	//treeImg=loadImage("Plucking mangoes/tree.png")
}

function setup() {
	createCanvas(1200, 600);
	 
	 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  tree = new Tree(900,400,400,400)
  boy=new Boy(200,530,250,250)

  mango1=new Mango(1100,100,30);
 
  mango2=new Mango(1170,130,30); 
  mango3=new Mango(1010,140,30); 
  mango4=new Mango(1000,70,30);
  mango5=new Mango(1100,70,30);
  mango6=new Mango(1000,230,30);
  mango7=new Mango(900,230,40);
  mango8=new Mango(1140,150,40); 
  /*mango9=new Mango(1100,230,40);
  mango10=new mango(1200,200,40);
  mango11=new mango(1120,50,40);
  mango12=new mango(900,160,40);*/
  stone=new Stone(110,460,50)
  //chain=new Chain(boy.body,stone.body)

  

  //tree.addImage(treeImg)
  ground=new Ground(10,590,1000000,20)

  slingshot=new SlingShot(stone.body,{x:125,y:480})

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  //rect(tree.position.x,tree.position.y,10,10)
background(222);

 tree.display()
 mango1.display()
 //mango2.display()
 mango3.display()
 mango4.display()
 mango5.display()
 mango6.display()
 mango7.display()
 stone.display()
 //chain.display()

 ground.display()
 boy.display()
 slingshot.display()
detectCollision(stone,mango1)
detectCollision(stone,mango2)
detectCollision(stone,mango3)
detectCollision(stone,mango4)
detectCollision(stone,mango5)
detectCollision(stone,mango6)
detectCollision(stone,mango7)
  drawSprites();
 
}




function mouseDragged (){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }
  
  function mouseReleased(){
  slingshot.fly()
  }
  
  function detectCollision(lstone,lmango){
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lmango.body.position

    var distance =dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if (distance<=lmango.r+lstone.r){
      Matter.Body.setStatic(lmango.body,false)
    }

  }
  function keyPressed(){
    if (keyCode===32){
      Matter.Body.setPosition(stone.body,{x:110,y:460})
      slingshot.attach(stone.body)
    }
  }



