var h1 = $("h1");
var lis = $("li");

// .text() give us the text and .text(new text) change the text
// it will change all element in the list
// however this will override the text with normal text
console.log(h1.text());
h1.text("t&h")
lis.text("Lorem");

// .html() give us the html and .html(new html) change the html
// it will change all element in the list
// this will override the text with normal text but give more control over it
console.log(h1.html());
h1.html("<strong>t&H </strong>")
lis.html("Lorem <strong>t&H </strong> <a href=\"https://api.jquery.com/\"> jQuery </a>");

