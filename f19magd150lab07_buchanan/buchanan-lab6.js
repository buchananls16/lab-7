var theta=0;
var marioX, marioY; // Mario's Position
var speed, gravity; // movement variables
var marioScale; //mario zooms in 

function setup() {
  // put setup code here
  createCanvas(800, 800);
  marioX= 100; 
  marioY =600;
  speed= 15;
  gravity = .75;
  marioScale=1.0;
}

function draw() {
  // put drawing code here
  background('#62ECFF');
  drawGrass();
  drawCloud();
  drawMario(marioX, marioY);

  push();
  translate(width/2, height/2); //rotating ellipses
  rotate(theta);
  fill(255, 200, 50);
  ellipse(0, 0, 64, 64);
  ellipse(64,0,64, 64);
  ellipse(128,0,64, 64);
  ellipse(-64,0,64, 64);
  ellipse(-128, 0, 64, 64);
  pop();

   if (keyIsPressed){ //mario jumps
    if(key==' '){
    marioY -=30;
  } else if (keyCode==RIGHT_ARROW){ //mario runs left & right
    marioX +=10;
  } else if (keyCode==LEFT_ARROW){
    marioX -=10;
  } else if (key == 'x'){
    marioScale = 1.2;
  }
  }
  
  if(marioY >= (4*height/5)){
    speed =0;
  }
  
  marioY += speed;
  speed += gravity;
  theta += .01;
}

function drawMario(x,y){
  push();
  scale(marioScale);
  rectMode(CENTER)
  fill(255, 0,0);
  noStroke();
  rect(x, y-200, 80,20);
  rect(x,y-190,100,10)
  fill('#e3a588');
  rect(x, y-160, 80, 50);
  fill(255, 0, 0);
  rect(x, y-100, 70, 70);
  fill(0);
  ellipse(x, y-170, 15, 15);
  fill('#0E0CFF')
  rect(x-15, y-40, 30, 50);
  rect(x-(-20), y-40, 30, 50);
  pop();
}

function drawCloud(){
fill(255);
ellipse(500, 100, 175, 90);
ellipse(200, 200, 175, 90);
}

function drawGrass(){
fill('#51E878');
noStroke();
rect(0, 650, 900, 500);
 
push();
fill('#FECF00');
rect(80, 300, 50, 50);
fill(0);
textSize(36);
text('?', 95, 340);
pop();

}





  

 

