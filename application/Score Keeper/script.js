var DEFAULT_MAX_SCORE = 5;

/// set up max score
var maxScore = DEFAULT_MAX_SCORE;
var game_over = false;
var maxScoreTag = document.getElementById("max-score");
setMaxScore = function(){
    maxScoreTag.innerHTML = maxScore;
};
setMaxScore();

/// set up players
class Player{
    constructor(scoreTagName, incButtonTagName){
        this.score = 0;
        this.scoreTag = document.getElementById(scoreTagName);
        this.set_score();
        this.incButtonTag = document.getElementById(incButtonTagName); 
        this.incButtonTag.addEventListener("click", this.inc_score.bind(this)); 
    }
    inc_score = function(){
        if(game_over) return;
        if(this.score < maxScore) ++ this.score;
        this.set_score();
        if(this.score == maxScore){
            this.scoreTag.classList.add("green");
            game_over = true;
        }
    };
    reset = function(){
        this.scoreTag.classList.remove("green");
        this.score = 0;
        this.set_score();
    };
    set_score = function(){
        this.scoreTag.innerHTML = this.score;
    };
}
var player1 = new Player("player-1-score", "player-1-inc");
var player2 = new Player("player-2-score", "player-2-inc");


/// set up reset button
var reset = document.getElementById("reset");
resetAll = function(){
    player1.reset();
    player2.reset();
    game_over = false;
}
reset.addEventListener("click", resetAll);

/// optional max score set up
var opMaxScoreField = document.getElementById("max-score-input");
opMaxScoreField.addEventListener("change", function(){
    var newMaxScore = Number(opMaxScoreField.value);
    maxScore = newMaxScore;
    setMaxScore();
    resetAll();
})