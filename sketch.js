
var player1, playerRunRight,playerRunLeft
var ground,groundImage
var testBackground, testBackgroundImg
var platform1
var jumpSound

function preload(){
 playerRunRight=loadImage("Assets/playerRight.png");
 playerRunLeft=loadImage("Assets/playerLeft.png");
 groundImage=loadImage("Assets/ground2.png");
 testBackgroundImg=loadImage("Assets/background.png");
 jumpSound=loadSound("Assets/jump.mp3");
}

function setup(){
  createCanvas(2000,800)
  //camera.x=player1.x
  //camera.y=player1.y

 //ground
 ground=createSprite(1000,800,2000,20);
 

 //player 1 config
 player1=createSprite(1000,700,20,10);
 player1.addImage("runRight",playerRunRight);
 player1.addImage("runLeft",playerRunLeft);
 player1.scale=2;
 player1.debug=true;
 player1.setCollider("rectangle",0,0,50,85)
 //player 2 config
 player2=createSprite(1100,700,20,10);
 player2.addImage("runRight",playerRunRight);
 player2.addImage("runLeft",playerRunLeft);
 player2.scale=2;
 player2.debug=true;
 player2.setCollider("rectangle",0,0,50,85)
 
}

function draw(){
  background(testBackgroundImg);
 player1.collide(ground);
 player2.collide(ground);
 player1.collide(player2);
 player2.collide(player1);
  if(keyDown("d")){
    player1.x+= 5
    player1.changeImage("runRight")
  }
  if(keyDown("a")){
   player1.x-=5
   player1.changeImage("runLeft")
 }
 if(keyDown("w")&&player1.y>600){
  player1.velocityY-=6
  player1.changeImage("runLeft")
  jumpSound.play();
}

  player1.velocityY+=2

  if(keyDown("RIGHT")){
    player2.x+= 5
    player2.changeImage("runRight")
  }
  if(keyDown("LEFT")){
   player2.x-=5
   player2.changeImage("runLeft")
 }
 if(keyDown("UP")&&player2.y>600){
  player2.velocityY-=6
  player2.changeImage("runLeft")
  jumpSound.play();
}

  player2.velocityY+=2

  
drawSprites()
}
