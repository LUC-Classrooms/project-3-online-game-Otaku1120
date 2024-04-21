/**
 * Project 3 versions 0-4 - 2D Web Game
 * Name:
 * Anahi Paz- vs 1
 * Use this template to get started creating a simple 2D game for the web using P5.js. 
 */
var gameState = "splash";//lab13
var player1;//lab14
var gameTimer;//lab15
var testBox; // a box to preview on the splash screen
var dropTimer; // regulate box drops
var presents = new Array(0); // an empty array called "presents"
var score = 0; // keep track of points (starting at 0)

function setup() {

  createCanvas(600, 400);
  player1= new Player(width/2, height* 7/8);
  testBox = new Box(width/2, height/3);
  //console.log(player1);

  gameTimer = new Timer(5000); // 5 second timer
  dropTimer = new Timer(1000);
  //console.log(gameTimer);
 
}

function draw() {
  background(200);
  switch (gameState) {
    case "splash":
      splash(); // call the splash screen function (below)
      break;
  case "play"://play(); // call the play screen function (below)
  play();
  break;
   // call the gameOver screen function (below)
  case "gameOver":
    gameOver(); // go to the "game over" screen
    break;
    //default :
    //console.log("no match found - check your mousePressed() function!");
  }
}

function splash() {
 // this is what you would see when the game starts
  background(200);
  textAlign(CENTER);
  textSize(16);
  text("Let's Play a Game!", width / 2, height / 2);
  textSize(12);
  text("(click the mouse to continue)", width / 2, height / 2 + 30);
  testBox.display();
 testBox.spin();
}

function play() {
   // this is what you see when the game is running 
  background(0, 200, 0);
  fill(0, 0, 200)
  textAlign(CENTER);
  textSize(16);
  text("This is where the Game happens", width / 2, height / 2);
  //mouse controls
  //player1.x = mouseX;
  //player1.y = mouseY;
  player1.display();
  player1.move();

  if (gameTimer.isFinished()) {
    gameState = "gameOver";
  }
  
  if(dropTimer.isFinished()) {
    let p = new Box(random(width), -40);
    // new box, anywhere across the width of the canvas, but 40px above the canvas
    presents.push(p); // add object 'p' to the 'presents' Array
    dropTimer.start(); // restart timer for next drop
  }
  for(let i = 0; i < presents.length; i++) {
    presents[i].display(); // draw it on the canvas
    presents[i].move(); // make it drop
    presents[i].spin() // make it rotate

    if(presents[i].y > height) { // present went below the canvas
      presents.splice(i, 1); // remove 1 element from from "presents" at index 'i'
      score--; // decrement score by 1
    }
    
    let d = dist(presents[i].x, presents[i].y, player1.x, player1.y);
    if (d < 50) {
      presents.splice(i, 1); // remove 1 item at index 'i'
      score ++; // add 1 point!
    }
  
  } //end of for ()loop

  textAlign(LEFT);
  text("elapsed time: " + gameTimer.elapsedTime, 20, 20);
  // show elapsed time in top left corner
  text("Score: " + score, 20, 40);

  if(keyIsPressed){
    switch(keyCode){
      case UP_ARROW:
        player1.thrust(); // accelerate
        break;
      case DOWN_ARROW:
        player1.brake();
        break;
      case LEFT_ARROW:
        player1.angle -= .02; //turn left
        break;
      case RIGHT_ARROW:
        player1.angle += .02; //turn right
        break;
        default:
          console.log("use the arrow keys to move");
    }
  }
}
function gameOver() {
  // this is what you see when the game ends
  background(0);
  fill(255, 0, 0)
  textAlign(CENTER);
  textSize(16);
  text("Game Over!", width / 2, height / 2);
  text("Your final score: " + score, width/2, height * 2/3);
}

function mousePressed() {
  if (gameState === "splash") {
    gameState = "play";
    gameTimer.start();
    dropTimer.start();
    score = 0; // reset score to 0 at start of game
  } else if (gameState === "play") {
    //gameState = "gameOver";
  } else if (gameState === "gameOver") {
    gameState = "splash";
  }
  //console.log(gameState);
}

//function keyPressed(){
  //switch(keyCode){
   // case UP_ARROW :
    //  player1.y -= 30;// sub 38 from .y
     // player1.angle = 0;
     // if(player1.y<0) player1.y=height;
     // break;
    //case DOWN_ARROW:
    //  player1.y += 30;
     // player1.angle = PI;
     // if(player1.y>height) player1.y=0;
     // break;
   // case LEFT_ARROW:
    //  player1.x -= 30;
    //  player1.angle= PI + PI/2;
     // if(player1.x<0) player1.x = width;
      //break;
   // case RIGHT_ARROW:
    //  player1.x +=30;
     // player1.angle= PI/2;
     // if(player1.x>width) player1.x=0;
     // break;
   // default:
     // console.log("use the arrow keys to move!");
  