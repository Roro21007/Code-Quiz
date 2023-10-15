/*questions
/*answers
/*event listeners
/*containers
/*multiple choice
/*score
/*scoreboard/initials
timer
/*start button
/*new question
/*game over*/

var timerEl = document.querySelector("#timer");

var score = 0;

var secondsLeft = 300;

var startEl = document.querySelector("#start");
var nextEl = document.querySelector("#next")

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
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

startEl.addEventListener("click", function() {
    setTime();
});

nextEl.addEventListener("click", function() {
    if (secondsLeft > 0) {
        nextQuestion()
    } else {
        sendMessage();
    }
})

