function Box(_x, _y){
  this.x = _x;
  this.y = _y;

  this.xSpeed = 0;
  this.ySpeed = random(1, 2); // 1 - 2 (falling)
  this.rSpeed = random(-.02, .02); // rotation speed

  this.angle = 0;

  /* choose a color scheme at random */
  if(random(100) > 50){ // 50-50 chance
    this.boxColor = color(random(100, 255), 0, 0); // red
    this.ribbonColor = color(0, random(100, 255), 0); // green
  } else {
    this.boxColor = color(0, random(100, 255), 0); // green
    this.ribbonColor = color(random(100, 255), 0, 0); // red
  }

  this.display = function(){

    push();
    translate(this.x, this.y);
    rotate(this.angle);
// Draw fish
    // Body
    fill(28, 172, 120); // Greenish color
    ellipse(0, 0, 50, 30);

    // Tail
    triangle(-25, 0, -40, -15, -40, 15);
    curve(-5, -15, 0, 0, 0, 10, -5, 20);

    // Eyes
    fill(0); // Black color
    ellipse(15, -5, 5, 5);

    
    
    // Draw ribbons
    rectMode(CENTER);
    fill(this.boxColor);

    rectMode(CENTER);
    fill(this.ribbonColor);
    

    pop();

  }

  this.move = function() {
    this.y += this.ySpeed; // spin
  }

  this.spin = function() {
    this.angle += this.rSpeed; // spin
  }



}