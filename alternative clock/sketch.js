let x,y
let opac
let size
let cloudOffset1 = 0;
let cloudOffset2 = 0;
let cloudOffset3 = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
let ms = millis()/1000;
let sec= second()
   if(hour()<5||hour()<19) {
  background('rgb(220,239,255)');
fill('#FFC822')
noStroke()
   }
  else{
  background('rgb(73,5,163)');
fill('#DFE0E2')
noStroke()}
  circle(200,200,100)


function cloud(x,y,size){   
  fill(255,255,255)
  circle(x+30,y+10,50*size)
  circle(x+20,y+30,40*size)
  circle(x-10,y+30,60*size)
  circle(x-5,y,40*size)
  circle(x+50,y+30,40*size)
} 
  
cloudOffset1 = (cloudOffset1 + 0.5) % width;
cloudOffset2 = (cloudOffset2 + 0.3) % width;
cloudOffset3 = (cloudOffset3 + 0.4) % width;
  
fill('rgb(249,231,144)')
    textSize(30)
    text(hour()+':'+minute(),162,230)
  cloud(cloudOffset1, 34, 2);
  cloud(cloudOffset2 + 150, 70, 1);
  cloud(cloudOffset3 + 300, 34, 1.5);
  cloud((cloudOffset1 + 270) % width, 300, 1.5); 
  cloud((cloudOffset2 + 120) % width, 240, 1.2);
  cloud((cloudOffset3 + 50) % width, 370, 2.5);
  
}