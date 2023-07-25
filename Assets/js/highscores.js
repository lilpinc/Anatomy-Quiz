let clearHighScore = document.getElementById("clear");
let highScoreList = document.getElementById("highscorelist");

function init() {
    let storedHighScores = JSON.parse(localStorage.getItem("highScores")); 
    if (storedHighScores !== null) {
        let li = document.createElement('li');
        li.setAttribute("style", "font-size: 20px; list-style-type: none; margin-bottom: 20px;");
        li.innerHTML = storedHighScores.username + ": " + storedHighScores.displayedScore;
        highScoreList.appendChild(li);
};
};
init();

function clearScore(){
    localStorage.clear();
    while (highScoreList.hasChildNodes()) {
        highScoreList.removeChild(highScoreList.firstChild);
};
};

clearHighScore.addEventListener("click", clearScore);