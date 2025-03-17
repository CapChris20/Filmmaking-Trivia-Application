let question = 0;
let guess;
let answer;
let lives = 9;
let score = 0;
let bg;

function setup() {
  createCanvas(600, 600);
  bg = loadImage("movies.jpg");
}

function draw() {
  background(bg);
  if (question == 0) {
    openingScreen();
  }
  if (question == 1) {
    questionOne();
  }
  if (question == 2) {
    questionTwo();
  }
  if (question == 3) {
    questionThree();
  }
  if (question == 4) {
    questionFour();
  }
  if (question == 5) {
    questionFive();
  }
  if (question == 6) {
    questionSix();
  }
  if (question == 7) {
    questionSeven();
  }
  if (question == 8) {
    questionEight();
  }
  if (question == 9) {
    questionNine();
  }
  if (question == 10) {
    gameOver();
  }
}

function mousePressed() {
  if (question == 0) {
    question = question + 1;
  } else {
    if (mouseX > 165 && mouseX < 315 && mouseY > 265 && mouseY < 340) {
      console.log("You Clicked A");
      guess = "A";
      checkGuess();
      question = question + 1;
    }

    if (mouseX > 320 && mouseX < 470 && mouseY > 265 && mouseY < 340) {
      console.log("You Clicked B");
      guess = "B";
      checkGuess();
      question = question + 1;
    }
    if (mouseX > 165 && mouseX < 315 && mouseY > 345 && mouseY < 420) {
      console.log("You Clicked C");
      guess = "C";
      checkGuess();
      question = question + 1;
    }
    if (mouseX > 320 && mouseX < 470 && mouseY > 345 && mouseY < 420) {
      console.log("You Clicked D");
      guess = "D";
      checkGuess();
      question = question + 1;
    }
  }
}

function checkGuess() {
  if (guess == answer) {
    score = score + 1;
  }
  if (answer < guess) {
    lives = lives - 1;
}
} 

function openingScreen() {
  textSize(35);
  text("Filmmaking Trivia", 160, 260);
}

function questionOne() {
  textSize(30);
  fill('Orange');
  text("Score = " + score, 50, 500);
  textSize(30);
  text("Lives = " + lives, 350, 500);

  textSize(28);
  fill(0,0,0);
  text("The majority of a Film is based on...", 70, 100);
  textSize(25);
  text("A: Special Effects", 100, 160);
  textSize(25);
  text("B: The Script", 100, 185);
  textSize(25);
  text("C: Brainstorming Ideas", 100, 210);
  textSize(25);
  text("D: Storyboard", 100, 235);

  answer = "B";
  drawButtons();
}

function questionTwo() {
  textSize(30);
  fill('Orange');
  text("Score = " + score, 50, 500);
  textSize(30);
  text("Lives = " + lives, 350, 500);

  textSize(28);
  fill(0,0,0);
  text("What does each script page count as?", 60, 100);
  textSize(25);
  text("A: 1 Minute", 100, 160);
  textSize(25);
  text("B: 30 Seconds", 100, 185);
  textSize(25);
  text("C: 5 Minutes", 100, 210);
  textSize(25);
  text("D: 1 Seconds", 100, 235);

  answer = "A";
  drawButtons();
}

function questionThree() {
  textSize(28);
  fill("Orange");
  text("Score = " + score, 50, 500);
  textSize(30);
  text("Lives = " + lives, 350, 500);

  textSize(28);
  fill(0, 0, 0);
  text("What is the Box Office?", 70, 100);
  textSize(25);
  text("A: Ticket Counter or Office", 100, 160);
  textSize(25);
  text("B: Movie Theater Brand", 100, 185);
  textSize(25);
  text("C: Studio", 100, 210);
  textSize(25);
  text("D: Film Office", 100, 235);

  answer = "A";
  drawButtons();
}

function questionFour(){
textSize(28);
fill("Orange");
  text("Score = " + score, 50, 500);
  textSize(30);
  text("Lives = " + lives, 350, 500);

  textSize(26);
  fill(0, 0, 0);
  text("Short films need to be longer than 1 hour", 65, 100);
  textSize(25);
  text("A: True", 100, 160);
  textSize(25);
  text("B: False", 100, 185);
  textSize(25);
  text("C: 30 minutes", 100, 210);
  textSize(25);
  text("D: 10 minutes", 100, 235);
 
answer = "B";
drawButtons();
}

function questionFive(){
textSize(28);
fill("Orange");
  text("Score = " + score, 50, 500);
  textSize(30);
  text("Lives = " + lives, 350, 500);

  textSize(28);
  fill(0, 0, 0);
  text("What does Int. mean on the script?" , 75, 100);
  textSize(25);
  text("A: Indoor", 100, 160);
  textSize(25);
  text("B: Exterior", 100, 185);
  textSize(25);
  text("C: Outdoor", 100, 210);
  textSize(25);
  text("D: Interior", 100, 235);
 
  answer = "A";
  drawButtons();
}

function questionSix(){
textSize(28);
fill("Orange");
  text("Score = " + score, 50, 500);
  textSize(30);
  text("Lives = " + lives, 350, 500);

  textSize(28);
  fill(0, 0, 0);
  text("What does 'Ext.' in the script mean?", 75, 100);
  textSize(25);
  text("A: Indoor", 100, 160);
  textSize(25);
  text("B: Exterior", 100, 185);
  textSize(25);
  text("C: Outdoor", 100, 210);
  textSize(25);
  text("D: Interior", 100, 235);

answer = "C";
drawButtons();
}

function questionSeven(){
textSize(28);
fill("Orange");
  text("Score = " + score, 50, 500);
  textSize(30);
  text("Lives = " + lives, 350, 500);

  textSize(28);
  fill(0, 0, 0);
  text("What is A Story Board?", 70, 100);
  textSize(25);
  text("A: Special Effects Team", 100, 160);
  textSize(25);
  text("B: Screenwriters", 100, 185);
  textSize(25);
  text("C: Drawings of the Scenes", 100, 210);
  textSize(25);
  text("D: Production Company", 100, 235);

answer = "C";
drawButtons();
}

function questionEight(){
  textSize(28);
  fill("Orange");
  text("Score = " + score, 50, 500);
  textSize(30);
  text("Lives = " + lives, 350, 500);

  textSize(28);
  fill(0, 0, 0);
  text("Film School is required", 70, 100);
  textSize(25);
  text("A: True", 100, 160);
  textSize(25);
  text("B: False", 100, 185);
  textSize(25);
  text("C: Recommended", 100, 210);
  textSize(25);
  text("D: Online Class Only", 100, 235);

answer = "B";
drawButtons();
}

function questionNine(){
textSize(28);
fill("Orange");
  text("Score = " + score, 50, 500);
  textSize(30);
  text("Lives = " + lives, 350, 500);

  textSize(28);
  fill(0, 0, 0);
  text("Most Important thing for Filmaking is..", 65, 100);
  textSize(25);
  text("A: Experience", 100, 160);
  textSize(25);
  text("B: Creativity", 100, 185);
  textSize(25);
  text("C: Both A & B", 100, 210);
  textSize(25);
  text("D: Fame", 100, 235);

answer = "C";
drawButtons();
}

function questionTen(){
textSize(28);
fill("Orange");
  text("Score = " + score, 50, 500);
  textSize(30);
  text("Lives = " + lives, 350, 500);

  textSize(28);
  fill(0, 0, 0);
  text("What Do Executive Producers Do?", 65, 100);
  textSize(25);
  text("A: Write the Scripts", 100, 160);
  textSize(25);
  text("B: Market and Sell the Film", 100, 185);
  textSize(25);
  text("C: Direct the Films", 100, 210);
  textSize(25);
  text("D: Create the Special Effects", 100, 235);

answer = "B";
drawButtons();
}

function drawButtons() {
 
  fill("Red");
  rect(165, 265, 150, 75, 10);
  fill(0, 0, 0);
  textSize(30);
  text("A", 235, 310);

  fill("Yellow");
  rect(320, 265, 150, 75, 10);
  fill(0, 0, 0);
  textSize(30);
  text("B", 385, 310);

  fill(56, 172, 236);
  rect(165, 345, 150, 75, 10);
  fill(0, 0, 0);
  textSize(30);
  text("C", 235, 390);

  fill("#E97451");
  rect(320, 345, 150, 75, 10);
  fill(0, 0, 0);
  textSize(30);
  text("D", 385, 390);
}

function gameOver() {
  text("Game Over!", 200, 320);
}
