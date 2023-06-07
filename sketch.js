var ground
var trex ,trex_running;
function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,170,20,50)
 trex.addAnimation("running",trex_running)
 trex.scale=0.5
 ground=createSprite(300,190,1000,20)
}

function draw(){
  background("lightgray")
  if(keyDown("space")){
    trex.velocityY=-10
  }
  trex.velocityY=trex.velocityY+0.8
  trex.collide(ground)
  drawSprites()

}
