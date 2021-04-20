var tower,towerimg, door, doorimg, doorgroup, climber, climberimg, climergroup,ghost,ghostimg,invisibleblock,invisibleblockgroup,ghostsound,gameState="play";

function preload(){
 
towerimg=loadImage("tower.png")
 doorimg=loadImage("door.png")
 climberimg=loadImage("climber.png")
 ghostimg=loadImage("ghost-standing.png")
 ghostsound=loadSound("spooky.wav") 
  
  
  
}

function setup() {
createCanvas(600,600)
ghostsound.loop();

tower= createSprite(300,300)
 tower.addImage(towerimg)
  tower.velocityY=3;

  doorgroup=new Group();
  climbergroup=new Group();
  invisibleblockgroup=new Group();
  
  ghost=createSprite(200,200);
  ghost.addImage(ghostimg);
  ghost.scale=0.3;
}


function draw() {
 background("black");

 if (gameState==="play"){
 if(keyDown("a")){
 ghost.x=ghost.x-3;

 }
 if(keyDown("d")) {
 ghost.x=ghost.x+3;  
 }  
 if(keyDown("space")) {
  ghost.velocityY=-12; 
 }
 ghost.velocityY=ghost.velocityY+0.8;


 if (tower.y>600){
  tower.y=300   
 }
 spawnDoors();
 if(climbergroup.isTouching(ghost)){
   ghost.velocityY=0;
   
 }
 if(invisibleblockgroup.isTouching(ghost)||ghost.y>=600) {
   ghost.destroy();
   gameState="end"
 } 
drawSprites();
}
if(gameState==="end"){
  stroke("yellow");
  fill("yellow");
  textSize("100");
  text("GAME OVER",230,250);
}
}
 function spawnDoors(){
   if(frameCount%240===0) {
    var door= createSprite(100,100)
    door.addImage(doorimg)
    door.velocityY=3;  
    door.x=Math.round(random(120,400)) 
    door.lifetime=200;
    doorgroup.add(door);
    


     var climber=createSprite(100,160)
     climber.addImage(climberimg)
     climber.velocityY=3;
     climber.x=door.x;
     climber.lifetime=200;
     climbergroup.add(climber);
     
     
     invisibleblock=createSprite(100,150,climber.width,2);
     invisibleblock.x=door.x;
     invisibleblock.velocityY=3;
     invisibleblock.debug=true;
     invisibleblockgroup.add(invisibleblock);
     invisibleblock.lifetime=200;
     ghost.depth=door.depth
     ghost.depth=ghost.depth+1;
   }
  
   } 
  

