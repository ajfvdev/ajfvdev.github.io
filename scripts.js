$(document).ready(function() {


    $("#sobre").click(function() {
        $("#pro").removeClass("active");
        $(this).addClass("active");
    });

    $("#pro").click(function() {
        $("#sobre").removeClass("active");
        $(this).addClass("active");
    });

});