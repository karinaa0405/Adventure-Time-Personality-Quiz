/*Add your JavaScript here*/
var finnTheHumanScore = 0;
var jakeTheDogScore = 0; 

var questionCount = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", finn);
q1a2.addEventListener("click", jake);

q2a1.addEventListener("click", finn);
q2a2.addEventListener("click", jake);

q3a1.addEventListener("click", finn);
q3a2.addEventListener("click", jake);

restart.addEventListener("click", restartQuiz);

function finn() {
  finnTheHumanScore += 1;
  questionCount += 1;
 
  console.log("questionCount = " + questionCount + " finnTheHumanScore = " + finnTheHumanScore);
  if (questionCount == 3) {
    console.log("The quiz is finshed!");
    updateResult();
  }
}

function jake(){
  jakeTheDogScore += 1;
  questionCount += 1; 
  console.log("questionCount = " + questionCount + " jakeTheDogScore = " + jakeTheDogScore);
  if (questionCount == 3) { 
    console.log("The quiz is finished!");
    updateResult();
  }
}

function updateResult() {
  if (finnTheHumanScore >= 2) {
    result.innerHTML = "You are Finn The Human!";
    console.log("You are Finn The Human!");
  }
  else if (jakeTheDogScore >= 2) {
    result.innerHTML = "You are Jake The Dog!";
    console.log("You are Jake The Dog!");
  }
}

function restartQuiz() {
finnTheHumanScore = 0; 
jakeTheDogScore = 0;
questionCount = 0; 
result.innerHTML = "Your result is...";
}
