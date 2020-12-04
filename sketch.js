  var wall,thickness;
  var bullet,speed,weight;
  
  
  
  function setup() {
  createCanvas(800,400);
  wall=createSprite(700,200,thickness,height/2);
  bullet=createSprite(100,200,10,10);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
}

function draw() {
  background("black");  
  bullet.velocityX=4;
  drawSprites();
}

function hasCollided(bullet,wall)
{
  bullet.velocityX=0;
bulletRightEdge=bullet.x +bullet.width;
wallLeftEdge=wall.x;
if (bulletRightEdge>=wallLeftEdge){
  return true
}
return false;
 if (hasCollided(bullet,wall)){
   bullet.velocityX=0;
   var damage=0.5 * weight * speed* speed/(thickness*thickness*thickness);
 }
 if (damage>10)
 {
   wall.shapeColor=color(255,0,0);
 }
 if (damage<10)
 {
   wall.shapeColor=color(0,255,0);
 }
}