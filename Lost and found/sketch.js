
function draw() {
  background(220);
}
function setup() {

  createCanvas(400, 400);

  background(220);
}

// Draw function runs in a loop
function draw() {
  // Set stroke color to black
  stroke(0);

//container
  fill(000, 002, 002, 000);
  rect(75, 150, 250, 150);



//lid
  fill(43, 130, 5);
  rect(75, 150, 250, 30);

//tomatoes
  fill(255, 77, 82);
  ellipse(200, 275, 50, 50);
  fill(255, 77, 82);
  ellipse(260, 275, 50, 50);
    strokeWeight(20);
  
// macroni
  stroke(255, 204, 0);  // Yellow
  noFill();
  arc(200, 220, 50, 50, HALF_PI, PI);
  arc(170, 215, 50, 50, PI, PI/2);
  arc(150, 240, 50, 50, PI/4, PI);
  arc(270, 240, 50, 50, 3*PI/4, PI);
  arc(120, 260, 50, 50, PI/2, PI);
  arc(280, 220, 50, 50, PI, PI/16);
stroke(34, 139, 34);  // Dark green outline
  fill(50, 205, 50);    // Light green fill
  strokeWeight(1)
beginShape();
  arc(220, 220, 25, 50, HALF_PI, PI + HALF_PI); 
  // Left side of the leaf
  arc(220, 220, 25, 50, PI + HALF_PI, HALF_PI); 
  // Right side of the leaf
  endShape();
beginShape();
  arc(100, 220, 30, 70, HALF_PI, PI + HALF_PI); 
  // Left side of the leaf
  arc(100, 220, 30, 70, PI + HALF_PI, HALF_PI); 
  // Right side of the leaf
endShape();


  

strokeWeight(1)
}
