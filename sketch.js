
var sam;

 
sam = createSprite(-10,190,20,20);
sam.shapeColor = "red";

function draw() {

if (keyDown("left")) {
sam.x = sam.x  -8;
 
}

if (keyDown("RIGHT")) {
sam.x = sam.x  +8;
 
}

if (keyDown("UP_ARROW")) {
sam.y = sam.y -8 ;
 
}

if (keyDown("DOWN_ARROW")) {
sam.y = sam.y  +8;
 
}

drawSprites();
}

