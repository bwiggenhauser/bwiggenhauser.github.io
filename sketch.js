let people = [];
let ersterKrank = false;
let framerate = 60;
let sick = 5000;

let population = 200;
let anzahlKrankeTage = 12;
let krankNachKontakt = 8;
let rangeOfInfection = 10;
let distancePerTick = 1;

function setup() {
  createCanvas(1600,700);
  frameRate(framerate);
  for (let i = 0; i < population; i++){
    let newPerson = new Person();
    people.push(newPerson);
  }
}

function draw() {
  angleMode(DEGREES);
  background(50);
  drawArcs();
  drawCenterLine();



  for (let i = 0; i < population; i++){
    let current = people[i];
    if (current.status == 1){
      let currentX = current.x;
      let currentY = current.y;
      let exposed = [];
      for (let p of people) {
        let px = p.x;
        let py = p.y;
        let c2 = (currentX - px)*(currentX - px) + (currentY - py)*(currentY - py);
        let distance = Math.sqrt(c2);
        if (distance < rangeOfInfection){
            exposed.push(p);
        }
      }
      infect(exposed);
    }
    current.move();
    current.show();
  }
}

function infect(exposed){
  for (let ex of exposed) {
    if (getRandomInt(krankNachKontakt) == 1){
      ex.status = 1;
    }
  }
}

function drawArcs(){
  let amountS = amountI = amountR = 0;
  for (let p of people) {
    if (p.status == 0){
      amountS++;
    } else if (p.status == 1){
      amountI++;
    } else {
      amountR++;
    }
  }

  angleS = (amountS / population) * 100 * 3.6;
  angleI = (amountI / population) * 100 * 3.6;
  angleR = (amountR / population) * 100 * 3.6;


  push();
    strokeWeight(4);
    noFill();
    stroke(80);
    arc(width-380/2,height/4,140,140,0,360);
    arc(width-380/2,height/2,140,140,0,360);
    arc(width-380/2,height/2 + height/4,140,140,0,360);
  pop();

  push();
    strokeWeight(16);
    stroke(200);
    noFill();
    arc(width-380/2,height/4,140,140,0,angleS);
  pop();

  push();
    strokeWeight(16);
    stroke(255,0,0);
    noFill();
    arc(width-380/2,height/2,140,140,0,angleI);
  pop();

  push();
    strokeWeight(16);
    stroke(0,255,0);
    noFill();
    arc(width-380/2,height/2 + height/4,140,140,0,angleR);
  pop();

  push();
    noStroke();
    textSize(20);
    fill(255);
    text("Susceptible", width-380/2-50, height/4+5);
    text("Infected", width-380/2-35,height/2+5);
    text("Removed", width-380/2-42,height/2 + height/4+5);
  pop();
}


function drawCenterLine(){
  push();
  stroke(150,200,240);
  strokeWeight(8);
  line(width-380, 0, width-380, height);
  pop();
}
