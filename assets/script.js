/*questions
/*answers
/*event listeners
/*containers
/*multiple choice
/*score
/*scoreboard/initials
/*timer
/*start button
/*new question
/*game over*/

var timerEl = document.querySelector("#timer");

var score = 0;

var secondsLeft = 90;

var startEl = document.querySelector("#start");

/*var questionEl = document.querySelector("#question");*/

/*var answerEl = document.querySelector("#answer");*/

var nextEl = document.querySelector("#next");

var submitEl = document.querySelector("#submit");

var initialsInput = document.querySelector("#initials");

var submissionResponseEl = document.querySelector("#response");

var questions = {
    /*questions here*/
}

/*var answers = ? */

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function nextQuestion() {
    /*question*/
}

function sendMessage() {
    timerEl.textContext = "Game Over";
}

function showForm() {
    /*final score > any previous*/
}

function showResponse(event) {
    event.preventDefault();
    submissionResponseEl.textContent = response;
}

startEl.addEventListener("click", function() {
    setTime();
});

nextEl.addEventListener("click", function() {
    if (secondsLeft > 1) {
        nextQuestion()
    } else {
        sendMessage();
    }
})

submitEl.addEventListener("click", showResponse);
