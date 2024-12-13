let data = [30, 14, 6, 11]; 
let labels = ['eat', 'cook', 'stare', 'dress'];
let colors = ['#F34613', '#FF5A00', '#f8961e', '#FFEB3B'];
let icons = []; // Array

function preload() {

  icons[0] = loadImage('icons/egg.png'); 
  icons[1] = loadImage('icons/pan.png');
  icons[2] = loadImage('icons/tree1.png');
  icons[3] = loadImage('icons/shirt.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('rgb(203,219,255)');
    let centerX = width / 2;
  let centerY = height / 2;
  let numLines = 36; // Number
  let radius = 300;  // Length

  
  for (let i = 0; i < numLines; i++) {
    let angle = map(i, 0, numLines, 0, TWO_PI); // Divide the circle
    let x = centerX + cos(angle) * radius; // x coordinate
    let y = centerY + sin(angle) * radius; // y coordinate
    
    stroke('yellow');
    line(centerX, centerY, x, y);
  }
  textFont('monospace')
    text('My Morning Routine',width/2, 20)
  
  let total = data.reduce((sum, value) => sum + value, 0); // total
  let angleStart = 0; // Start angle chart

  for (let i = 0; i < data.length; i++) {
    let angle = map(data[i], 0, total, 0, TWO_PI); // Map
    fill(colors[i]);
    stroke(255);
    strokeWeight(2);
    arc(width / 2, height / 2, 300, 300, angleStart, angleStart + angle, PIE);
    let angleMid = angleStart + angle / 2;

    let labelX = width / 2 + cos(angleMid) * 120; 
    let labelY = height / 2 + sin(angleMid) * 120;
    let iconX = width / 2 + cos(angleMid) * 150; // 
    let iconY = height / 2 + sin(angleMid) * 150;

 
    imageMode(CENTER); 
   
    image(icons[i], iconX, iconY, 30, 30); 


    fill(0); 
    noStroke();
    textAlign(CENTER, CENTER);
    text(labels[i], labelX, labelY); 

    angleStart += angle; 
  }
}
