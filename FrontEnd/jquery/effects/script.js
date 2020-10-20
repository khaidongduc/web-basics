/// fade effect
// .fadeIn() and .fadeOut()
// default is 400ms
// can provide fade time to the function slow, fast, or specific in ms
// by adding a function, the function will be done at the end of the fade

$("#b1").on("click", function(){
    $("h1").fadeOut(function(){
        $("li").fadeOut(1000);    
    });
});


/// slide - work similar to fade
// will slide obj instead of changing opacity
// slideUp() slideDown() slideToggle()
$("#b2").on("click", function(){
    $("h1").slideDown(function(){
        $("li").slideDown();    
    });
});
