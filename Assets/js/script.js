// define variables 
let generateBtn = document.getElementById("startquiz");
let timer = document.getElementById("countdown");
let count;
let score = document.getElementById("score-text");
let correctAnswer = 0;
let incorrectAnswer = 0;
let nextQuestion = document.getElementById("nextquestion");
let chosenAnswer = document.getElementById("response");
let displayedScore;
let questionContainerElement = document.getElementById("question-container");
let questionElement = document.getElementById("question");
let explanation1 = document.getElementById("explanation");
let answerButtons = document.getElementById("answers");
let title = document.getElementById("title");
let currentQuestionIndex = 0;
let resultsBox = document.getElementById("resultsbox");
let submitButton = document.getElementById("submit");


const questions = [
    {
        question: "What is the main source of energy in the body?",
        answers: [
            { text: "Adenosine Triphosphate", correct: true },
            { text: "Adenonsine Kinase", correct: false },
            { text: "Adenosine Diphosphate", correct: false },
            { text: "Polypetides", correct: false }
        ]
    },
    {
        question: "What muscle primariliy attaches your hip to your rib?",
        answers: [
            { text: "Psoas", correct: false },
            { text: "Erector Spinae", correct: false },
            { text: "Quadratus Lumborum", correct: true },
            { text: "Vastus Lateralis", correct: false },
        ]
    },
    {
        question: "What is the correct path of blood going away and then back to the heart?",
        answers: [
            { text: "Aorta, arterioles, arteries, capillaries, veins, venules, vena cava", correct: false },
            { text: "Aorta, arteries, arterioles, capillaries, venules, veins, vena cava", correct: true },
            { text: "Vena cava, veins, venules, capillaries, arteries, aorta, arterioles", correct: false },
            { text: "Veins, venules, vena cava, capillaries, arteries, arterioles, aorta", correct: false }
        ]
    },
    {
        question: "What boney prominence does the patellar tendon attach to?",
        answers: [
            { text: "tibial tuberosity", correct: true },
            { text: "calcaneus", correct: false },
            { text: "greater trochanter", correct: false },
            { text: "medial malleolus", correct: false }
        ]
    },
    {
        question: "What cranial nerve travels down to the rest of the body?",
        answers: [
            { text: "Oculomotor nerve", correct: false },
            { text: "Trigeminal nerve", correct: false },
            { text: "Hypoglossal nerve", correct: false },
            { text: "Vagus nerve", correct: true }
        ]
    }
];


// define functions
function startGame() {
    count = 100;
    // THEN a timer starts 
    var timeInterval = setInterval(function () {
        if (count > 0) {
            timer.textContent = count;
            count--;
        } else {
            timer.textContent = 0; /*once the timer reaches 0 i want it to maintain the display of zero */
            clearInterval(timeInterval);
            finishQuiz();
        }
    }, 1000);
    // once it reaches 0, i want the webpage to show the score.
    generateBtn.setAttribute("style", "display:none");
    answerButtons.setAttribute("style", "display:block");
    explanation1.setAttribute("style", "display:none");
    title.setAttribute("style", "display:none");
    questionContainerElement.setAttribute("style", "display:block");
    showNextQuestion();
    // and I am presented with a question
    // showQuestion();
};

function showNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        answerButtons.setAttribute("style", "display:block");
        nextQuestion.setAttribute("style", "display:none");
        showQuestion(questions[currentQuestionIndex]);
        currentQuestionIndex++;
    } else {
        finishQuiz();
    };
}

function showQuestion(questions) {
    questionElement.textContent = questions.question;
    chosenAnswer.textContent = "";

    for (i = 0; i < questions.answers.length; i++) {
        let answer = questions.answers[i];
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    };
}
function resetState() {

}
function selectAnswer(event) {
    if (event.target.dataset.correct === "true") {
        correctAnswer++;
        chosenAnswer.textContent = "Correct";
    } else {
        incorrectAnswer++;
        chosenAnswer.textContent = "Incorrect";
    }

    while (answerButtons.hasChildNodes()) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    nextQuestion.setAttribute("style", "display:block");
    nextQuestion.addEventListener("click", showNextQuestion)
};

function finishQuiz() {
    count = 0;
    questionContainerElement.setAttribute("style", "display:none");
    resultsBox.setAttribute("style", "display:block");
    nextQuestion.setAttribute("style", "display:none");
    score.textContent = "" + correctAnswer + "/" + questions.length;
    submitButton.addEventListener("click", saveHighScores);
    
};

function saveHighScores() {

    let scoreInfo = {
        username: document.getElementById("input").value,
        displayedScore: score.textContent
    };
    function test() {
    localStorage.setItem("highScores", JSON.stringify(scoreInfo));
    window.location.assign("index2.html");
    }
};

// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score




// define special functions (events)
// WHEN I click the start button
generateBtn.addEventListener("click", startGame);




// business logic