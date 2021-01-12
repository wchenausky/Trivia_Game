
var currentQuestionIndex = 0;
var time = 75;
var timer;





var timerCountdown = document.querySelector("#time");
var startQuizBtn = document.querySelector("#start-quiz-btn");
var initialBtn = document.querySelector("#initials-submit-button");
var titleScreen = document.querySelector("#start-quiz");
var quizScreen = document.querySelector("#quiz-section");
var initialsEl = document.querySelector("#initials");
var feedbackKey = document.querySelector("#key");
var answersEl = document.querySelector("#answers");
var highscoreScreen = document.querySelector("#highscore")
var scoreDisplay = document.querySelector("#highscore-display")
var hideHighScoresLink = document.querySelector("#view-highscores")
var hideTime = document.querySelector(".time")

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

function countdown() {
  time--;
  timerCountdown.textContent = time;

  if (time <= 0) {
    quizEnd();
  }
}

function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  console.log(currentQuestion)

  var titleEl = document.getElementById("quiz-question");
  titleEl.textContent = currentQuestion.quizQuestion;

  answersEl.innerHTML = "";

  currentQuestion.answers.forEach(function(answer, i) {
  
    var answerNode = document.createElement("button");
    answerNode.setAttribute("class", "btn");
    answerNode.setAttribute("value", answer)

    answerNode.textContent = i +1 + ". " + answer;
    answerNode.onclick = questionClick;

    answersEl.appendChild(answerNode);
  });
   
  
};

