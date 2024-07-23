$(document).ready(function() {
    $('#menuButton').click(function() {
        $('#menu').toggleClass('active');
    });

    $('#closeButton').click(function() {
        $('#menu').removeClass('active');
    });

    // メニュー外をクリックしたときにメニューを閉じる
    $(document).click(function(event) {
        if (!$(event.target).closest('#menuButton, #menu').length) {
            $('#menu').removeClass('active');
        }
    });
});