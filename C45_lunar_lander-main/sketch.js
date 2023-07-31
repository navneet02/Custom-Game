let ground;
let lander;
var lander_img;
var bg_img;
var bg;
var a1,m1,c1,a1_img,m1_img,c1_img


var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("C45_lunar_lander-main/bg1.jpg");

  a1_img= loadImage("C45_lunar_lander-main/a1.png")
  m1_img= loadImage("C45_lunar_lander-main/M1.png")
  c1_img= loadImage("C45_lunar_lander-main/c1.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  frameRate(80);
  

  //bg=createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  //bg.addImage(bg_img);
  //bg.scale=5.11

  
  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;



  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  //bg_image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();


if (keyDown(UP_ARROW)) {
  lander.position.y-=10

}
 if(keyDown(LEFT_ARROW)){
 lander.position.x-=10


 }

 if(keyDown(RIGHT_ARROW)){
  lander.position.x+=10
 }



  //fall down
  vy +=g;
  lander.position.y+=vy;
  drawSprites();
}


function spawnAsteroids(){
  if (condition) {
    
  }
}
