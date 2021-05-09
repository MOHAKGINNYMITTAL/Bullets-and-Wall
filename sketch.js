  var wall;
  var wall2,wall3,wall4;
  var bullet,bullet2,bullet3,bullet4;
  
  
  
  function setup() {
  createCanvas(800,400);
  wall=createSprite(750,50,10,40);
  wall2=createSprite(750,150,10,40);
  wall3=createSprite(750,250,10,40);
  wall4=createSprite(750,350,10,40);
  bullet=createSprite(50,50,10,10);
  bullet2=createSprite(50,150,10,10);
  bullet3=createSprite(50,250,10,10);
  bullet4=createSprite(50,350,10,10);
}

function draw() {
  background("black");  
  bullet.shapeColor="green";
  bullet2.shapeColor="yellow";
  bullet3.shapeColor="white";
  bullet4.shapeColor="blue";
  if(keyDown("RIGHT_ARROW")){
    bullet.velocityX=4;
    bullet2.velocityX=3;
    bullet3.velocityX=6;
    bullet4.velocityX=2;
  }
  if(bullet.isTouching(wall)){
    bullet.velocityX=0;
    bullet.shapeColor="yellow";
  }
  
  if(bullet2.isTouching(wall2)){
    bullet2.velocityX=0;
    bullet2.shapeColor="green";
  }
  if(bullet3.isTouching(wall3)){
    bullet3.velocityX=0;
    bullet3.shapeColor="red";
  }
  if(bullet4.isTouching(wall4)){
    bullet4.velocityX=0;
    bullet4.shapeColor="white";
  }
  if(keyDown("space")){
    bullet.x=50;
    bullet.y=50;
    bullet2.x=50;
    bullet2.y=150;
    bullet3.x=50;
    bullet3.y=250;
    bullet4.x=50;
    bullet4.y=350;
  }
  drawSprites();

}

