
/// important document property
// document.URL - the URL of the page
// document.head - the head 
// document.body - the body
// document.links - the list of links (anchor tags) in the page

/// important methods in document
// document.getElementById(id) - return an element with matching id
var id_tag = document.getElementById("item-2");
id_tag.style.color = "gray";

// document.getElementsByClassName(className) - return a node list of elements that have matching class
var class_tag = document.getElementsByClassName("odd-item");
console.log(class_tag[0]);

// document.getElementsByTagName(tagName) - return a node list of elements with given tag name
var name_tag = document.getElementsByTagName("li");
console.log(name_tag[1]);

// document.querySelector(name) - return the first element that matches a give css-style selector
var h1 = document.querySelector("h1");
h1.style.color = "pink";

// document.querySelectorAll(name) - return the list of elements that match a given css-style selector
var h1_tag = document.querySelectorAll("h1");
console.log(h1_tag[1]);

