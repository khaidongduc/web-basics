// .attr() Get the value of an attribute for the first element in the 
// set of matched elements or set one or more attributes for every matched element.
// change all obj in the list
// .attr(attr) or .attr(attr, newValue)
var img = $(".some-img");
console.log(img.attr("src"));
img.attr("str", "https://api.jquery.com/");

// val() extract the value from the input field
// val(newValue) - update the input
// work on all element with value attributes
var text = $("input");
text.val("65600");  
console.log(text.val());
text.val("");  
