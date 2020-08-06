class Person {
  constructor() {
        this.x = getRandomInt(width - 400);
        this.y = getRandomInt(height);
        this.status = 0;
        this.changeX = distancePerTick;
        this.changeY = distancePerTick;
        this.tageKrank = 0;
        this.zahlBisChange = 200;

  }

  show(){
    push();
    if (this.status == 0){
      fill(200);
    } else if (this.status == 1){
      fill(255,0,0);
    } else {
      fill(0,255,0);
    }
    noStroke();
    ellipse(this.x, this.y, 12);
    pop();
  }

  move() {
    this.changeDirection();
    this.checkBorder();
    if (this.status == 1){
      this.tageKrank++;
    }
    if (this.tageKrank > framerate * anzahlKrankeTage){
      this.status = 2;
    }

    if (getRandomInt(sick) == 1 && !ersterKrank) {
      this.status = 1;
      ersterKrank = true;
    }
    this.x += this.changeX;
    this.y += this.changeY;
  }

  changeDirection(){
    if (getRandomInt(this.zahlBisChange) == 1){
      this.changeX *= -1;
    }
    if (getRandomInt(this.zahlBisChange) == 1){
      this.changeY *= -1;
    }
  }

  checkBorder() {
    if (this.x <= 10){
      this.changeX = 1;
    }
    if (this.x >= width - 400){
      this.changeX = -1;
    }
    if (this.y <= 10){
      this.changeY = 1;
    }
    if (this.y >= height - 10){
      this.changeY = -1;
    }
  }
}
