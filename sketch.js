const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World  = Matter.World;

var engine,world;

function setup() {
createCanvas(10000,1000);

engine = Engine.create();
world = engine.world;

//Main Character 
MainBall = new Ball(200,920,20);

// created ground
ground = new Ground(5000,970,10000,20);

//created obstacles
obstacle1 = new Obstacle(700,210,50,500);
obstacle2 = new Obstacle(700,760,50,400);
obstacle3 = new Obstacle(925,585,400,50);
obstacle4 = new Obstacle(925,435,400,50);
obstacle5 = new Obstacle(1255,480,50,800);
obstacle6 = new Obstacle(1478,500,400,50);
obstacle7 = new Obstacle(1655,785,50,350);
obstacle8 = new Obstacle(1655,140,50,500);
}

function draw() {
 background("white");
 Engine.update(engine);

 //controls 
 fill("black");
 textSize(24);
 text("A,D,space to move left,right and jump",100,600);
 
 //displaying main character 
 MainBall.display();
 
 //displaying ground
 ground.display();
 
 //displaying obstacle
 obstacle1.display();
 obstacle2.display();
 obstacle3.display();
 obstacle4.display();
 obstacle5.display();
 obstacle6.display();
 obstacle7.display();
 obstacle8.display(); 
}
function keyPressed(){

 if(keyCode === 65){
    
    Matter.Body.applyForce(MainBall.body,MainBall.
                            body.position,{x:85,y:-85}); 
 }
if(keyCode === 68){
    
    Matter.Body.applyForce(MainBall.body,MainBall.
        body.position,{x:85,y:0}); 
  

}
if(keyCode === 32){

    Matter.Body.applyForce(MainBall.body,MainBall.
        body.position,{x:0,y:-85}); 

}
}