let isFrowning = false; 
let backgroundColor = 'rgb(232,232,245)'; // Default
function setup() { 
  createCanvas(400, 600);
  background(backgroundColor);

  // Draw the body with custom functions
  drawTorso(150, 200);
  drawArms();
  drawKnife(100, 300);
  drawShortsAndLegs(150, 400); // shorts and legs together, adjusted closer

  // Draw the cute head with a ponytail
  drawCuteHead(200, 130); // x, y position for head
}

function draw() {
  background(backgroundColor); 
  drawTorso(150, 200);
  drawArms();
  drawKnife(100, 300);
  drawShortsAndLegs(150, 400);

  drawCuteHead(200, 130); 
}

// Mouse click function
function mousePressed() {
  isFrowning = true; // Set the frowning state to true
  backgroundColor = color(255, 0, 0); // Change background to red
}

// Mouse release function
function mouseReleased() {
  isFrowning = false; 
  backgroundColor = 255; 
}


function drawTorso(x, y) {
  fill(0, 255, 255);
  noStroke();
  rect(x, y, 100, 200, 20); 
}


function drawArms() {
  stroke(0, 255, 255);
  strokeWeight(20);
  line(150, 250, 100, 300); // left arm
  line(250, 250, 320, 180); // right arm
}


function drawKnife(x, y) {
  fill(255, 255, 0);
  noStroke();
  ellipse(x, y, 40); // x, y, diameter
}


function drawShortsAndLegs(x, y) {
  stroke(0);
  strokeWeight(2);
  noFill();

  // Left short leg
  beginShape();
  vertex(x, y); 
  vertex(x - 5, y + 50); 
  vertex(x + 40, y + 50);
  vertex(x + 30, y); 
  vertex(x, y); 
  endShape();
  beginShape();
  vertex(x + 60, y); 
  vertex(x + 55, y + 50); 
  vertex(x + 100, y + 50);  
  vertex(x + 90, y);  
  vertex(x + 60, y); 
  endShape();

  drawLegs(x + 30, y + 50, x + 80); 
}


function drawLegs(xLeft, y, xRight) {
  stroke(0);
  strokeWeight(2);

  // Left leg
  line(xLeft, y, xLeft, y + 50); 
  ellipse(xLeft, y + 60, 20, 10); 

  // Right leg
  line(xRight, y, xRight, y + 50); 
  ellipse(xRight, y + 60, 20, 10); // right foot
}


function drawCuteHead(x, y) {
  push();
  translate(x, y);


  drawHeadShape();
  drawPonytail(); 
  drawEyes();
  drawBlush();
  drawNose();
  drawMouth();

  pop();
}


function drawHeadShape() {
  fill(255, 220, 200);
  stroke(0);
  strokeWeight(2);
  ellipse(0, 0, 80, 100); 
}


function drawPonytail() {
  fill(0);
  noStroke();
  beginShape();
  vertex(-40, -40); 
  bezierVertex(-20, -50, 20, -50, 40, -40); 
  vertex(40, -40);  
  vertex(40, -60);  
  bezierVertex(20, -70, -20, -70, -40, -60); 
  endShape(CLOSE);

  fill(0);
  ellipse(0, -70, 30, 60); // Ponytail at the back
  ellipse(0, -90, 40, 30); // Top part of the ponytail
}

// eyes
function drawEyes() {
  fill(0);
  noStroke();
  ellipse(-20, -10, 20, 30); 
  ellipse(20, -10, 20, 30);  

  fill(255);
  ellipse(-25, -15, 8, 10); 
  ellipse(15, -15, 8, 10);  

  // Change the mouth
  drawMouth();
}

//  blush
function drawBlush() {
  fill(255, 150, 150);
  ellipse(-30, 10, 20, 10);  // left cheek
  ellipse(30, 10, 20, 10);   // right cheek
}

// nose
function drawNose() {
  fill(255, 150, 150);
  ellipse(0, 10, 10, 5); // small nose
}

// mouth
function drawMouth() {
  stroke(0);
  strokeWeight(1);
  noFill();
  

  if (isFrowning) {
    arc(0, 20, 20, 10, PI, 0); // frown
  } else {
    arc(0, 20, 20, 10, 0, PI); // smile
  }
}
