var player
//var pickup
var SCENE_W = 800;
var SCENE_H = 516;
function preload(){
}

function setup() { //called once at the begining of the sketch
  createCanvas(300, 200); 
player = createSprite(width*0.33, height*0.66, 22, 60);
   player.addImage('player', "Player.png");
  //pickup.addImage('pickup', "pens.png");
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

//function pickup(pickup){
//Random number drawn between 1 and 6.
//random location generation. 
//Consistant Size, 0.5-1.0 of Player Size
// before setup "let movement = 0" 
//movement = 5;
//set boundaries for edge of Scene. i.e. Roomba mode
//remove pen pickup object upon collision/overlap with player sprite
//}

//add text at top of screen that says "You are out of drawing supplies and you are broke. Walk around town and pickup pens in the meantime"
//add text count to track how many pens you have.
//Win text when you collected 12 pens "Awesome, a perfect dozen should be plenty. Head on home and make some art"
