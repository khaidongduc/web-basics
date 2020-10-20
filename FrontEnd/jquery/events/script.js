
/// .click add an click event listener to the object
$("h3").click(function(){
    console.log("Some one click the h1");
});

// .keypress() - fire between keydown and keyup
// .keydown() - fire when key is pressed down
// .keyup() - fire when key is released
$("input").keypress(function(){
    console.log("You Pressed A Key");
});

$("input").keypress(function(event){
    // event object is used to extract info about the event
    console.log(event.which);
});

// .on() - similar to addEventListener
// on add event to all future element (need to add to existing element 
// which is the parent of the element) - see todo list webpage
// .on(<event_name>, <function>)
// can take place of every method
$("h3").on("click", function(){
    // $(this) act like this in vanila javascript
    $(this).css("color", "red");
});