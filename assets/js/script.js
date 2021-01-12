var highscoreScreen = document.querySelector("#highscore")
var timerCountdown = document.querySelector("#time");
var startQuizBtn = document.querySelector("#start-quiz-btn")
var quizScreen = document.querySelector("#quiz-section");
var scoreDisplay = document.querySelector("#highscore-display")

function pageLoad() {
    highscoreScreen.setAttribute("class", "hide");
    quizScreen.setAttribute("class", "hide");
    scoreDisplay.setAttribute("class", "hide");
  
    if (startQuiz == true){
      return;
    }
  
  }

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

  var currentQuestionIndex = 0;
var time = 75;
var timer;