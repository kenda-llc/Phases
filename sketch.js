var player
var SCENE_W = 800;
var SCENE_H = 516;
function preload(){
}

function setup() { //called once at the begining of the sketch
  createCanvas(300, 200); 
player = createSprite(width*0.33, height*0.66, 22, 60)
   player.addImage('player', "Player.png")
  
   player.addAnimation('left', "leftWalk0.png", "leftwalk3.png");
   player.addAnimation('right', "rightWalk0.png", "rightWalk3.png");
  player.addAnimation('up', "upWalk.png", "upWalk.png");
  player.addAnimation('down', "downWalk.png", "downWalk.png");
}

function draw() { //called every frame
  background(0); //background black (0)
  if(mouseIsPressed){
    camera.zoom = 0.5;
  }
  else {
    camera.zoom = 1;
  }

  camera.position.x = player.position.x;
  camera.position.y = player.position.y;
  
  
  if(keyIsDown(65) || keyIsDown(LEFT_ARROW)) { //a
player.changeAnimation('left')
    x -= 5;
       
  }
  if(keyIsDown(68) || keyIsDown(RIGHT_ARROW)) { //d
   player.changeAnimation('right')
    x += 5;

  }
  if(keyIsDown(87) || keyIsDown(UP_ARROW)) { //w
player.changeAnimation('up')
    y -=5;
    
  }
  
  if(keyIsDown(83) || keyIsDown(DOWN_ARROW)) { //s
   player.changeAnimation('down')
    y += 5;

  }
  
  drawSprites();
}
