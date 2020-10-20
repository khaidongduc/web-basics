/// to manipulate style use style property
var first_h1 = document.querySelector("h1");

// however this is hardcoded version
first_h1.style.color = "blue";
first_h1.style.border = "2px solid red";
first_h1.style.fontFamily = "Ariel";
first_h1.style.padding = "20% 20%"

// to do it more efficiently we add a class in css and then we will add it when needed
var second_h1 = document.querySelectorAll("h1")[1];
second_h1.classList.add("some-class"); // add the class to the tag
first_h1.classList.toggle("some-class"); // toggle the class
first_h1.classList.remove("some-class"); // remove the class
