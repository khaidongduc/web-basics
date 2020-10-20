var body = document.querySelector("body");
var button = document.querySelector("button");

var colors = ["white", "purple"];
var current_color_index = 0;

button.addEventListener("click", function(){
    body.style.backgroundColor = colors[current_color_index = 1 - current_color_index];
});