var movingRect,fixedRect


function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(300, 200, 50, 50);
  fixedRect=createSprite(200, 400, 50, 80);
  
}

function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY

  if(movingRect.x-fixedRect.x< movingRect.width/2 + fixedRect.width/2
     && fixedRect.x-movingRect.x<movingRect.width/2 + fixedRect.width/2
     &&movingRect.y-fixedRect.y< movingRect.height/2 + fixedRect.height/2
     && fixedRect.y-movingRect.y<movingRect.height/2 + fixedRect.height/2)
{
    movingRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";  
  }
console.log(movingRect.x-fixedRect.x)

  drawSprites();
}