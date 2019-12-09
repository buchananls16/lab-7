var trunk =[];

function setup() {
  createCanvas(400, 400);
  for(let i = 0; i<20; i++){ //loop for trees
   trunk[i] = new Trees();
    frameRate(10); //speed at which the trees are moving
  }
  
}

function draw() {
  background('#01C147');
  for(let i = 0; i<20; i++){
    trunk[i].display();
    trunk[i].refreshTrees();
  }
}


class Trees{
  
    constructor(){
  this.x = random(100,width);	//top of tree (ellipse) size 
  this.y = random (200, height);
  this.dia = 40; // diameter of ellipse
  this.w = 20; // width and height of tree stump
  this.h = 50;
      }

  refreshTrees(){
  this.x = random(0,width);
  this.y = random (0, height);
    
  }
  
display(){
  fill ('#AB7707');
  rect((this.x-(this.w/2)), this.y, this.w, this.h);
  fill(0,255,0);
  ellipse(this.x, this.y, this.dia);
}
}
