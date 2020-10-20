// to manipulate style use style property
var first_h1 = document.querySelector("h1");

/// using the text content
// dangerous since it overrides the current text
text = "Lorem Ipsum";
first_h1.textContent = text;

/// use property innerHTML
console.log(first_h1.innerHTML);
// this overrides the current text but grant more control over it since it receive html code
first_h1.innerHTML = "Lorem Ipsum <strong> Lorem </strong>";
