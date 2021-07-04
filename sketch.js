var runner,run,path,pathImg;
var invisibleBoundary1,invisibleBoundary2;


function preload(){
  //pre-load images
  run = loadAnimation("Runner1.png","Runner2.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.scale = 1.2;
  runner = createSprite(50,300);
  runner.addAnimaton(run);

  //making the background move
  path.velocityY = 4;

  if (path.y < 400) {
    path.y = path.width/2;

   //making invisible Boundaries
  invisibleBoundary1 = createSprite(0,10,10,400);
  invisibleBoundary1.visible = "false";
  runner.collide(invisibleBoundary1);
  invisibleBoundary2 = createSprite(390,10,10,400);
  invisibleBoundary2.visible = "false";
  runner.collide(invisibleBoundary2);
  }

  runner.x = world.mouseX;

}

function draw() {
  background(0);
   drawSprites();
  setup();
  preload();
}
