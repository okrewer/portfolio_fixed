let x=400
let y =400
let recW
let recH = 20
let faceColor = [252, 159, 8]
let madEyebrows = false;;
function setup() {
  createCanvas(x, y);
}

function draw() {
  background(255, 234, 227);
  recW= 70+mouseX
  fill(faceColor);
  circle(x/2,y/2, 100+mouseX,)
  fill(255,253,243)
  rect((x/2)-(recW/2),(y/2)+10,recW,recH,20)
  line((x/2)-(recW/2),(y/2)+20,(x/2)+(recW/2),(y/2)+20)
  circle (x/2-30,y/2-30,20)
    circle (x/2+30,y/2-30,20)
  if (madEyebrows) {
    // Mad eyebrows
    line(x / 2 - 40, y / 2 - 40, x / 2 - 20, y / 2 - 50); // Left eyebrow
    line(x / 2 + 20, y / 2 - 50, x / 2 + 40, y / 2 - 40); // Right eyebrow
  } else {
    // neutral eyebrows
    line(x / 2 - 40, y / 2 - 40, x / 2 - 20, y / 2 - 40); // Left eyebrow
    line(x / 2 + 20, y / 2 - 40, x / 2 + 40, y / 2 - 40); // Right eyebrow
  }
  line(x/2,y/2-10,x/2,y/2+5);
}

function mousePressed(){
  faceColor = [252, 65, 8]; //red
  strokeWeight(random(1,5));
  madEyebrows = true;

}
function mouseReleased() {
  faceColor = [252, 159, 8];
  strokeWeight(1)
  madEyebrows= false;
 // I drew a baby turning into an old man but while I was working in PJ5s I //instead of had fun playing with my faces emotions. While
//pressing the mouse the eyebrows change to uncertain but face turns red. //Making the eyebrows a variable was new to me. It would be
//fun if it was possible to make a more freeform head shape with changed //with your curser movement.
}
