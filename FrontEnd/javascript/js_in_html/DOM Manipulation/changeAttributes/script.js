// tag.getAttribute(attr) - get the attribute attr
// tag.setAttribute(attr, val) - set the attribute attr to val


var tag = document.querySelector("a");
console.log(tag.getAttribute("href")); // retrieve the "href"
tag.setAttribute("href", "https://www.google.com/"); // change the "href"

console.log(tag.getAttribute("class"));
tag.setAttribute("class", "custom-2");

var img_tag = document.querySelector("img");
console.log(img_tag.getAttribute("src"));
img_tag.setAttribute("src", "https://images.unsplash.com/photo-1602157339949-d229cb6d223c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80");

