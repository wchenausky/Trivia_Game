var highscoreScreen = document.querySelector("#highscore")
var timerCountdown = document.querySelector("#time");
var startQuizBtn = document.querySelector("#start-quiz-btn")

function startQuiz() {
    titleScreen.setAttribute("class", "hide");
    highscoreScreen.setAttribute("class", "hide");
    scoreDisplay.setAttribute("class", "hide");
   
    quizScreen.setAttribute("class", "show");
  
    timer = setInterval(countdown, 1000);
  
    var time = 75;
    timerCountdown.textContent = time;
  
    getQuestion();
  }