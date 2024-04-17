/**
 * Project 3 versions 0-4 - 2D Web Game
 * Name:
 * Anahi Paz- vs 1
 * Use this template to get started creating a simple 2D game for the web using P5.js. 
 */
var gameState = "splash";
var player1;

function setup() {

  createCanvas(600, 400);
  player1= new Player(width/2, height* 7/8);
  console.log(player1);

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
    default :
    console.log("no match found - check your mousePressed() function!");
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
}

function gameOver() {
  // this is what you see when the game ends
  background(0);
  fill(255, 0, 0)
  textAlign(CENTER);
  textSize(16);
  text("Game Over!", width / 2, height / 2);
}

function mousePressed() {
  if (gameState === "splash") {
    gameState = "play";
  } else if (gameState === "play") {
    gameState = "gameOver";
  } else if (gameState === "gameOver") {
    gameState = "splash";
  }
  console.log(gameState);
}

function keyPressed(){
  switch(keyCode){
    case UP_ARROW :
      player1.y -= 30;// sub 38 from .y
      player1.angle = 0;
      if(player1.y<0) player1.y=height;
      break;
    case DOWN_ARROW:
      player1.y += 30;
      player1.angle = PI;
      if(player1.y>height) player1.y=0;
      break;
    case LEFT_ARROW:
      player1.x -= 30;
      player1.angle= PI + PI/2;
      if(player1.x<0) player1.x = width;
      break;
    case RIGHT_ARROW:
      player1.x +=30;
      player1.angle= PI/2;
      if(player1.x>width) player1.x=0;
      break;
    default:
      console.log("use the arrow keys to move!");
  }
}