var startBtn = document.getElementById("startBtn")
var questionsEl = document.getElementById("questions")

let shuffledQuestions, currentQuestionIndex



var startGame = document.querySelector(".container");
console.log(startGame)

var timer = document.getElementById("timer");
console.log(timer)



var questions = [
    {
        trivia: "Arrays in JavaScript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "boolenas", "all of the above"],
        { answer: "all of the above", correct: true },

    },
]


function beginGame() {
    startGame.setAttribute("class", "hide");
    shuffledQuestions = questions.sort(() => Math.random( - .5)
    currentQuestionIndex = 0
    questionsEl.removeAttribute("class");
    startBtn.addEventListener("click"), 


    }
   
    // add timer & start the clock
    timer // initiate timer and countdown
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

var count=30;
var counter=setInterval (timer, 1000)

function countDown()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     return;
  }

  document.getElementById("timer").innerHTML=count + "secs";


function show Question(questions) {
    questionsEl.innerText=question.question
    
    //this function will get all the questions from the array of objects
    //create for loop and buttons for the answer choices
}

//separate function for on click when user clicks right or wrong question. Subtract from timer: if/else statements

//separate function for addEventListener "click"
startBtn.onclick = beginGame;