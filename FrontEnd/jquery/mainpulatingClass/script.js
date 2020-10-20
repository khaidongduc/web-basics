// addClass() - add cladd to element - can assign several class at once
// removeClass() - remove class from element - can remove several class at once
// toggleClass() - toggle the class

var lis = $("li");
lis.addClass("some-class-1 some-class-2");
lis.removeClass("some-class-1");

var button = $("button");
button.on("click", function(){
    lis.toggleClass("some-class-2");
});