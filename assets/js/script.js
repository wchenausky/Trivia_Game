
var currentQuestionIndex = 0;
var time = 75;
var timer;



//Global Variables

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


function questionClick() {
    
    if (this.value !== questions[currentQuestionIndex].correct) {
      
      time -= 10;
  
      if (time < 0) {
        time = 0;
      }
  
      timerCountdown.textContent = time;
  
      feedbackKey.textContent = "Wrong!";
    } if (this.value == questions[currentQuestionIndex].correct) {
      time += 10;

      if (time < 0) {
        time = 0;
      }
  
      timerCountdown.textContent = time;
      feedbackKey.textContent = "Correct!";
    };
  
    feedbackKey.setAttribute("class", "key");
    setTimeout(function() {
      feedbackKey.setAttribute("class", "key hide");
    }, 1000);
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex === questions.length) {
      quizEnd();
    } else {
      getQuestion();
    }
  }
  
  
  function quizEnd () {
    clearInterval(timer);
  
    highscoreScreen.setAttribute("class", "show");
   
    var finalScore = document.querySelector("#final-score");
    finalScore.textContent = time;
  
    quizScreen.setAttribute("class", "hide");
  }
  // function to save highscore 
function saveHighscore () {
  // get value of input box
  var initials = initialsEl.value

  //make sure value wasn't empty 
  if (initials !== "") {
    // get saved scores from localStorage, or if not any set to empty array
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

   // format new score object for current user 
   var newScore = {
     score:time, 
     initials: initials
   };

   // save to localStorage 
   highscores.push(newScore);
   window.localStorage.setItem("highscores", JSON.stringify(highscores));

   
  }
  printHighscores();
}

function checkForEnter(event) {
  if (event.key === "Enter") {
    saveHighscore();
  }
}

function printHighscores() {
  titleScreen.setAttribute("class", "hide");
  scoreDisplay.setAttribute("class", "show");
  highscoreScreen.setAttribute("class", "hide");
  hideHighScoresLink.setAttribute("class", "hide");
  hideTime.setAttribute("class", "hide");

  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  highscores.sort(function(a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function(score) {

    var liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;

    var olEl = document.getElementById("display-scores");
    olEl.appendChild(liTag);
  });
}

function clearHighscores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}

document.getElementById("clear-btn").onclick = clearHighscores;



initialBtn.onclick = saveHighscore;

startQuizBtn.onclick = startQuiz;

initials.onkeyup = checkForEnter;


pageLoad();