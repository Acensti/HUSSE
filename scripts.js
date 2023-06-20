$(document).ready(function() {
    // When the navbar's button is clicked, toggle the "show" class on the navbar's collapse div
    $('.navbar-toggler').on('click', function() {
        $('.navbar-collapse').toggleClass('show');
    });
});