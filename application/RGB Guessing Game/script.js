defaultGameMode = "HARD";
defaultHeadingColor = document.documentElement.style.getPropertyValue("--head-color");
defaultBackgroundColor = document.documentElement.style.getPropertyValue("--background-color");

/**
 * return a random value from 0 - max
 * @param {the maximum value} max 
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

/**
 * get a random RGB
 */
function getRandomRGB() {
    var red = getRandomInt(255);
    var green = getRandomInt(255);
    var blue = getRandomInt(255);
    return "rgb(" + red + ", " + blue + ", " + green + ")";
}

// prepare tags
var headingTag = document.querySelector(".heading");
var colorTags = document.querySelectorAll(".square");
var resetTag = document.querySelector("#reset-button");
var messageTag = document.querySelector("#message");
var resetTag = document.querySelector("#reset-button");
var easyTag = document.querySelector("#easy");
var hardTag = document.querySelector("#hard");

var gameMode = defaultGameMode;
var numColor, colors, givenColor;

/**
 * change the heading color
 * @param {the new color} color 
 */
function changeHeadColor(color) {
    document.documentElement.style.setProperty("--head-color", color);
}

/**
 * square click handler
 */
function squareClick() {
    if (this.style.backgroundColor != givenColor) {
        // Wrong color
        this.classList.add("hidden");
        messageTag.innerHTML = "Try Again";
        return;
    }
    // right color
    messageTag.innerHTML = "Correct!";
    resetTag.innerHTML = "TRY AGAINS?"
    changeHeadColor(givenColor);
    for (var i = 0; i < numColor; ++i) {
        colorTags[i].style.backgroundColor = givenColor;
        colorTags[i].classList.add("appear");
    }
}


/**
 * a round of the game
 */
function aGameRound() {
    // reset
    changeHeadColor(defaultHeadingColor);
    messageTag.innerHTML = "";
    resetTag.innerHTML = "NEW GAME";
    for (var i = 0; i < colorTags.length; ++i) {
        colorTags[i].style.backgroundColor = defaultBackgroundColor;
        colorTags[i].classList.remove("hidden");
        colorTags[i].classList.remove("appear");
        colorTags[i].removeEventListener("click", squareClick);
    }

    // start game
    if (gameMode == "HARD") numColor = 6;
    else numColor = 3;

    colors = [];
    for (var i = 0; i < numColor; ++i) colors.push(getRandomRGB());

    for (var i = 0; i < numColor; ++i) colorTags[i].style.backgroundColor = colors[i];
    givenColor = colors[getRandomInt(numColor - 1)];
    givenColorTag = document.querySelector("#given-color");
    givenColorTag.innerHTML = givenColor;

    for (var i = 0; i < numColor; ++i) colorTags[i].addEventListener("click", squareClick);
    
}

/**
 * change mode to hard
 */
function selectHard() {
    gameMode = "HARD";
    hardTag.classList.add("game-mode-selected");
    easyTag.classList.remove("game-mode-selected");
    aGameRound();
}

/**
 * change mode to easy
 */
function selectEasy() {
    gameMode = "EASY";
    easyTag.classList.add("game-mode-selected");
    hardTag.classList.remove("game-mode-selected");
    aGameRound();
}

// start the game with hard mode
selectHard();
aGameRound();

/// add events to button
resetTag.addEventListener("click", aGameRound);
easyTag.addEventListener("click", selectEasy);
hardTag.addEventListener("click", selectHard);

/// Mouse Hovering Handles
var mouseOverHandle = function () {
    this.classList.add("hovering");
}
var mouseOutHandle = function () {
    this.classList.remove("hovering");
}
var addMouseHandles = function (tag) {
    tag.addEventListener("mouseover", mouseOverHandle);
    tag.addEventListener("mouseout", mouseOutHandle);
}

addMouseHandles(resetTag);
addMouseHandles(easyTag);
addMouseHandles(hardTag);