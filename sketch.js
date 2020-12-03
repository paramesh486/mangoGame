const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var tree1, g1, boy1, stone1, slingshot1;

function setup() {
  createCanvas(2304,1005);
  engine = Engine.create();
  world = engine.world;

  g1 = new ground(width/2,height-30,width,30);  ///g is mentioned small in index.html

  box1 = new box(1750,550,100,100);
  box2 = new box(1750,250,130,130);
  box3 = new box(1900,300,70,70);   //change the box parameters
  box4 = new box(2000,400,120,120);
  box5 = new box(1960,200,80,80);
  box6 = new box(2050,280,100,100);
  box7 = new box(1600,400,130,130);
  box8 = new box(1580,300,70,70);
  box9 = new box(1870,100,100,100);
  box10 = new box(1700,150,100,100);

  tree1 = new tree(1800,505,800,1000);

  boy1 = new boy(500,830,400,600);

  stone1 = new stone(680,700,100,100);

  slingShot1 = new slingshot(stone1.body,{x:680,y:400});  //class name is in small in index.html 

 ////Engine.run(engine);  this should be inside function draw  */
}

function draw() {
  background(255,255,255);
  //added this
  Engine.update(engine);
 
  g1.display();
  tree1.display();

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

 boy1.display();
  slingShot1.display();   ///there in the object name in line 34 you mention capital s its coorected
  stone1.display();
  
  

}

function mouseDragged(){
	setPosition (stone1.body,{x:mouseX,y:mouseY})
    

}

function mouseReleased(){
slingShot1.fly ();
}


/////you didnt added the images in the folder, so i added them