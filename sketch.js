//size of face dependent upon input value for var x
var mouseCount;
var x = 50;

var r;
var g;
var b;

function setup() {
  createCanvas(400, 400);
  mouseCount = 0;
}

function draw() {
  background(220);
  if (mouseCount === 0) face();
  if (mouseCount === 1) face2();
  if (mouseCount === 2) mouseCount = 0;
  console.log(mouseCount);
  
  if(frameCount%120===0){
    r = random(255);
    g = random(255);
    b = random(255);
  }
}

function face() {
  //face
  fill(7, 135, 13);
  ellipse(width / 2, height / 2, x * 3, x * 3);

  fill(158, 11, 11);
  ellipse(width / 2 - x / 2, height / 2 - x / 4, x / 4, x / 4);
  fill(69, 77, 128);
  ellipse(width / 2 + x / 2, height / 2 - x / 4, x / 2, x / 2);
  fill(255, 255, 15);
  ellipse(width / 2, height / 2 + x / 2, x * 2, x);
  
  //hat
  fill("black");
  rectMode(CENTER);
  rect(width/2,height/2-x*1.9,x*3,x);
  rect(width/2,height/2-x*2.7,x*1.8,x);
  fill(r,g,b);
  rect(width/2,height/2-x*2.7,x*1.8,x/4);
}
function face2() {
  rectMode(CENTER);
  fill(93, 76, 105);
  rect(width / 2, width / 2, x * 2, x * 3);
  fill(255);
  rect(width / 2 - x / 2, height / 2 - x / 4, x, x / 3);
  fill(0);
  ellipse(width/2-x/2,height/2-x/4,x/4,x/4);
  fill(0);
  rect(width / 2 + x / 2, height / 2 - x / 2, x, x / 3);
  fill(255);
  ellipse(width/2+x/2,height/2-x/2,x/4,x/4);
  fill(255, 0, 0);
  ellipse(width / 2, height / 2 + x - x / 6, x * 1.5, x);
}

function mousePressed() {
  mouseCount++;
}
