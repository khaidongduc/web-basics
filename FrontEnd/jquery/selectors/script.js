/// select using $("css style selector")
/// $ return all elements that fit the selector
/// tags.last() return the last value, tags.first() return the first value
var heading = $("h1");
var lis = $("li");
var idTag = $("#some-id");
var classTag = $(".some-class");


/// now we will style them using .css;
heading.css("color", "yellow");
lis.css("color", "blue"); // apply to all objects within the list

/// we can add several style into an object and pass it through css
styles = {
    color: "red",
    backgroundColor: "blue"
};
idTag.css(styles);


