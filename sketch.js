var fixedRect;
var movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,200,50,80);//25
  fixedRect.shapeColor = "green";
  movingRect = createSprite(500,200,80,50);//40
  movingRect.shapeColor = "blue";
  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {
  background(0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  console.log(movingRect.x -fixedRect.x);
 //right side - moving obj
 if(movingRect.x -fixedRect.x < movingRect.width/2+ fixedRect.width/2  &&
  fixedRect.x -movingRect.x < movingRect.width/2+ fixedRect.width/2 &&
  movingRect.y-fixedRect.y < movingRect.height/2+ fixedRect.height/2 &&
  fixedRect.y - movingRect.y < movingRect.height/2+ fixedRect.height/2)
 {
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
 }

 

  drawSprites();
 
}