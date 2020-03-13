const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");

const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScore = JSON.parse(localStorage.getItem("highScore")) || [];


finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", ()=>{
    saveScoreBtn.disabled = !username.value;
})

saveHighScore = event =>{
    event.preventDefault();
    
    const score = {
        score : mostRecentScore,
        name : username.value
    };
    highScore.push(score);

    localStorage.setItem("highScores", JSON.stringify(highScore));
    window.location.assign("quiz.html");
}