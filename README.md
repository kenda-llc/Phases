# Phases
my phases project centers a little sprite of myself that I have drawn a walk cycle for movement following the four cartesian planes (^<>V). 
In my research for this project I found a library for p5 called p5.play, which is still in beta, which means there will be bugs or idoscyncracies. 
this was developed for intermediate programmers to be able to use and modify for simple 2D game engine development
there is information on sprites, animation, virtual camera, collisions, events, and much more (about 4300 lines of code more) about the topic.



Notes for setting up this library in your project:

*All images must be ".png" files, not even ".PNG" is okay here. 
if the file format is wrong, then it will give you so many errors your head will spin (its usally flowers though so it isnt too harsh)

*  <script src="https://molleindustria.github.io/p5.play/lib/p5.play.js"></script> 
this line of code needs to go into your index.html to call the library into your sketch

*function preload() {} is reccomended before the setup function as a place to load images and animation that youll call later on in order to prevent visual delays. 
youll notice I didnt do that here, and in my defense I am tired and I probably had a reason for that at the time.

*adding animations stores the data to your sprite, but doesn't call them until sprite.changeAnimation is triggered. 

*^^ changing or adding the animation will not do anything visually unless "drawSprites()" is called

*your camera is automatically created with this library



var player   //stores player animation
var SCENE_W = 800;   //if larger than canvas then character will be able to move around a map of terrain (ex. sidescroller)
var SCENE_H = 516;   //^^^
function preload(){   //Preload function reccomended to prevent loading delays
}

function setup() { //called once at the begining of the sketch
  createCanvas(300, 200);                                              //smaller than the scene height and width in order to allow player movement around scene
player = createSprite(width*0.33, height*0.66, 22, 60)                    //creates Player Sprite (xPos, yPos, width, height) this sprite can store images or animations
   player.addImage('player', "Player.png")                             //adding an image to the sprite Player
  
   player.addAnimation('left', "leftWalk0.png", "leftwalk3.png");     //adding an animation to the sprite Players storage. ('label', "first.png", "last.png")
   player.addAnimation('right', "rightWalk0.png", "rightWalk3.png");   //^ the library reference tells our compiler to grab any pngs between the declared two with the same naimng convention
  player.addAnimation('up', "upWalk.png", "upWalk.png");              //^^
  player.addAnimation('down', "downWalk.png", "downWalk.png");         //^^^
}

function draw() {                                                      //called every frame
  background(0);                                                         //background black (0)
  if(mouseIsPressed){                                                 //looks for if mouse buttons are currently being held down
    camera.zoom = 0.5;                                                //if any mouse buttons are down the camera zooms out to 50%
  }
  else {                                                            //else in this case describes the natural unpressed state behavior
    camera.zoom = 1;                                                //camera is naturally at 100% zoom, which is the size of our canvas declared prior
  }

  camera.position.x = player.position.x;                            //instructs the camera to follow the players x position
  camera.position.y = player.position.y;                            //instructs the camera to follow the players y position
  
  
  if(keyIsDown(65) || keyIsDown(LEFT_ARROW)) {                       //a is key 65. looks for if a or the left arrow are currentlt pressed
player.changeAnimation('left')                                      //if pressed the player sprite changes animaiton states to "left"
    x -= 5;                                                         // if pressed the player x location changes in the negative direction
       
  }
  if(keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {                      //d is key 65. looks for if d or the right arrow are currently pressed
   player.changeAnimation('right')                                  // if pressed the player sprite changes animation states to "right"
    x += 5;                                                         //if pressed the player x location changes in the positive direction

  }
  if(keyIsDown(87) || keyIsDown(UP_ARROW)) {                        //w  is key 87. looks for if w or up arrow are currently pressed
player.changeAnimation('up')                                        //if pressed the player sprite changes animation states to "up"
    y -=5;                                                          //if pressed the player y location changes in the negative direction
    
  }
  
  if(keyIsDown(83) || keyIsDown(DOWN_ARROW)) {                      //s is key 83. looks for if the s or down arrow are currently pressed
   player.changeAnimation('down')                                   //if pressed the player sprite changes animation states to "down"
    y += 5;                                                         //if pressed the player y location changes in the positive direction

  }
  
  //I think I am missing a line of code here to set our animations natural state to the player Image
  
  drawSprites();                                                    //IMPORTANT: instructs the sprites to be drawn. Without this nothing happens.
}
