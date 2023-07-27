let clearHighScore = document.getElementById("clear");
let highScoreList = document.getElementById("highscorelist");

// on page load, init is called, highscores is dsplayed on page, continuing scores are displayed. Did not have time to put them in order.
function init() {
    let storedHighScores = JSON.parse(localStorage.getItem("highScores")); 
    if (storedHighScores !== null) {
        let li = document.createElement('li');
        li.setAttribute("style", "font-size: 20px; list-style-type: none; margin-bottom: 20px;");
        li.classList.add('fhs');
        let finalHighScores = JSON.stringify(storedHighScores);
        let finalHighScores2 = finalHighScores.replace(/[{}]/g, '');
        let finalHighScores3 = finalHighScores2.replace(/[[\]]/g, "");
        let finalHighScores4 =finalHighScores3.replace(/"/g,'');
        let finalHighScores5 = finalHighScores4.replace(/,/g, '\n'); 
        li.innerHTML = finalHighScores5;
    // used replace to take out unwanted characters. I know this looks super funky and there is a better way but it let me understand see what was happening the best.
        highScoreList.appendChild(li);
    };
};
init();
// clear score when clicking clear score button
function clearScore(){
    localStorage.clear();
    while (highScoreList.hasChildNodes()) {
        highScoreList.removeChild(highScoreList.firstChild);
};
};

clearHighScore.addEventListener("click", clearScore);