$(document).ready(function() {
    $('#menuButton').click(function() {
        $('#menu').toggleClass('active');
    });

    $('#closeButton').click(function() {
        $('#menu').removeClass('active');
    });

  
});