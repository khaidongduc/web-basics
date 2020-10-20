/// click
var button = document.querySelector("button");
button.addEventListener("click", function(){
    alert("You have clicked the button.");
});

var h1 = document.querySelector("h1");
h1.addEventListener("click", function(){
    this.style.color = "red";
});

// mouseover, mouseout
h1.addEventListener("mouseover", function(){
    this.style.color = "pink";
})
h1.addEventListener("mouseout", function(){
    this.style.color = "black";
})


