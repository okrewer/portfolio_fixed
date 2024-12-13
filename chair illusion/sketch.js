let chairs = [];  

function setup() {
  createCanvas(400, 400);
  background('#FBF5E3');
}

function draw() {
  background('#FBF5E3');  

  // Loop
  for (let chair of chairs) {
    // Animate the legs
    animateLegs(chair);
    drawChair(chair.x, chair.y, chair.size, chair.leftHeight, chair.rightHeight, chair.color);
  }
}


function drawChair(x, y, size, leftHeight, rightHeight, chairColor) {
  fill(chairColor);
  strokeWeight(0);
  
  
  rect(x, y + size / 2, size / 6, leftHeight);
  
  
  rect(x + size / 2, y + size / 2, size / 6, rightHeight);
  
  // Chair seat
  rect(x, y + size / 2, size, size / 6);
  
  // Chair backrest
  rect(x, y, size / 6, size / 2);
}

// Animation
function animateLegs(chair) {
  chair.leftHeight += chair.changeRate;
  chair.rightHeight -= chair.changeRate;
  

  if (chair.leftHeight >= chair.maxHeight || chair.leftHeight <= chair.minHeight) {
    chair.changeRate *= -1;
  }
}


function mousePressed() {
  
  let chair = {
    x: random(width - 50),         // Random X 
    y: random(height - 100),       // Random Y 
    size: random(30, 100),         
    color: color(random(255), random(255), random(255)),  
    leftHeight: random(50, 100),   // Initial height left 
    rightHeight: random(50, 100),  // Initial height right
    changeRate: 1,                 // Speed of leg animation
    minHeight: 50,                 // Minimum leg height
    maxHeight: 200                 // Maximum leg height
  };
  

  chairs.push(chair);
}
