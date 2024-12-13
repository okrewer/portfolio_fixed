let img, img2, img3, backgrd, intro,mid,end1, end;
let song
let scene_num = 1;
let leavesArray = [];
let count1 = 0;
let count2 = 0;
let count3 = 0;
let slider;
let mouse;
let goal1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let goal2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let goal3 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

function preload() {
  img = loadImage('/pics/leaf1.png');
  img2 = loadImage('/pics/leaf2.png');
  img3 = loadImage('/pics/leaf3.png');
  backgrd = loadImage('/pics/game tree bitmap.png');
  mouse = loadImage('/pics/gloved hang curser.png');
  intro = loadImage('pics/intro_v2.png');
  end = loadImage('/pics/cat photo.jpg');
mid=loadImage('/pics/grass field mcgorlick park_2.png')
end1=loadImage('/pics/mcgorlick leaves.png')
}


class Leaves {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.species = type;
    this.size = 20;
    this.state = true;
  }

  display() {
    if (this.state){
    switch (this.species) {
      case 1:
        image(img, this.x, this.y);
        break;
      case 2:
        image(img2, this.x, this.y);
        break;
      case 3:
        image(img3, this.x, this.y);
        break;
      default:
        break;
    }
  }
  }
  move_fish() {
    let speed = slider.value()*.5;  
    this.y += speed;

    if (this.y > height) {
      this.y = 0;
    }
  }

  check_collision(leafx, leafy, size) {
    let d = dist(leafx, leafy, mouseX, mouseY);
    return d < size * 1.5;
    
  }

}

function setup() {
  createCanvas(400, 400);
  textFont('Courier New', 15);
song = loadSound()
  
  // Create the slider, but hide it initially
  slider = createSlider(1, 5, 1, 1);
  slider.position((width - 220) - 45, height - 30);
  slider.size(120);
  slider.hide();

  // Populate the leavesArray with random leaves
  for (let i = 0; i < 40; i++) {
    let x = random(width);
    let y = random(height);
    let type = floor(random(1, 4));  // Random species type (1-4)
    leavesArray.push(new Leaves(x, y, type));
  }
}

function draw() {
  background(220);
  image(mouse, mouseX - 33, mouseY - 32, 60, 60);

  // Scene handling switch statement
  switch (scene_num) {
    case 1:
      image(intro, 0, 0, 400, 400);
      textStyle('bold');
      textSize(14);
      text('Welcome to my neighborhood\n ', width / 4.5, height / 2);
      textStyle('normal');
      textSize(10);
      text('Press right arrow key\n ', width / 3, height - 50);

      slider.hide();  // Hide the slider in this scene
      break;
      
    case 2:
      image(mid,0,0,400,400)
      textAlign('center')
      textSize(14);
      textStyle('bold')
      text('I live across from McGorlick Park.\n Having green space in the city is \n a privilege. I want you all to enjoy it to! \n \n Click on the leaves to \n collect them \n \n ', 200, 150);
      textStyle('normal');
      textSize(10);
      text('Press right arrow key\n ', 200, 350);

      slider.hide();  // Hide the slider in this scene
      break;
      
    case 3:
      image(backgrd, 0, 0);
      text(goal1, width - 390, height - 190);
      text(goal2, width - 390, height - 162);
      text(goal3, width - 390, height - 135);

      text(count1, width - 350, height - 190);
      text(count2, width - 350, height - 162);
      text(count3, width - 350, height - 135);
      text(slider.value(), width - 280, height - 10);
      let leaf1 = new Leaves(width - 375, height - 205, 1, 2)
leaf1.display()
let leaf2 = new Leaves(width - 375, height - 185, 2, 2)
leaf2.display()
let leaf3 = new Leaves(width - 375, height - 150, 3, 2)
leaf3.display()    

      slider.show();  // Show the slider in this scene

      for (let leaf of leavesArray) {
        leaf.move_fish();
        leaf.display();
      }
      break;

    case 4:
      textSize(30)
      textStyle('bold')
      image(end1,0,0,400,400)
      textAlign('center')
      text('GOOD JOB!', width / 2, height / 3);
      textSize(18)
      text('Press enter to play again', width / 2, height / 1.5);

      slider.hide();  // Hide the slider in this scene
      break;
      
    case 5:
      image(end, 0, 0, 400, 400);
      textAlign('center')
      fill('#000000')
      textSize(20)
      textStyle('bold')
      text("Highest level \n complete PRIZE: \n Picture of \n my sweet cat",220,150)

      slider.hide();
      break;

    default:
      console.log('end');
      break;
  }

  win();
  image(mouse, mouseX - 33, mouseY - 32, 60, 60);
}

function keyPressed() {
  if (key === 'ArrowRight' && scene_num < 3) {
    scene_num++;
  }
  else if (key === 'Enter' && scene_num === 4) {
    scene_num = 3;
    count1 = 0;
    count2 = 0;
    count3 = 0;
    resetLeavesArray();
  }
}



function mousePressed() {
  for (let leaf of leavesArray) {
    if (leaf.check_collision(leaf.x, leaf.y, leaf.size) && leaf.state) {
      if (leaf.species === 1) {
        count1++;
      } else if (leaf.species === 2) {
        count2++;
      } else if (leaf.species === 3) {
        count3++;
      }
      leaf.state = false;  // Make the leaf disappear
    }
  }
}

function resetLeavesArray() {
  leavesArray = [];  // Clear the array
  for (let i = 0; i < 40; i++) {
    let x = random(width);
    let y = random(height);
    let type = floor(random(1, 4));  // Random species type (1-4)
    leavesArray.push(new Leaves(x, y, type));  // Add new leaves
  }
}



function win() {
  if (goal1 <= count1 && goal2 <= count2 && goal3 <= count3) {
    scene_num = 4;
  }
  if (goal1 <= count1 && goal2 <= count2 && goal3 <= count3 && slider.value()===5){
    scene_num = 5
  }
}
