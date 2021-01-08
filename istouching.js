function  isCollision(){

    if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
        && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
        && movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2 
        && fixedRect.y - movingRect.y < movingRect.width/2 + fixedRect.width/2) {
        fixedRect.shapeColor = "red";
        movingRect.shapeColor = "red";
      }
      else {
        fixedRect.shapeColor = "green";
        movingRect.shapeColor = "green";
      }

}