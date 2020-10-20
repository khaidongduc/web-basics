/// Check specific todo by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("crossed-off");
});

/// deleting todo by click X
$("ul").on("click", ".delete-elem-btn", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

/// creating todo
var ENTER_KEY = 13;
$("input[type='text']").keypress(function(event){
    if(event.which === ENTER_KEY){
        var todoText = $(this).val();
        if(todoText === "") return;
        $("ul").append(
            "<li><span class=\"delete-elem-btn\"><i class=\"fa fa-trash\"></i></span> " + todoText + "</li>"
        );
        $(this).val("");
    }
});

/// toggling the form
$("#form-toggling").click(function(){
    $("input[type='text']").fadeToggle();
});