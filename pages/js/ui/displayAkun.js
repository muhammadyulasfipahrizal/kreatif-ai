$(document).ready(function() {
    $(".expert-card").hide();

    $('.pro-slider').click(function() {
        $('.pro-card').show();
        $('.expert-card').hide();
    });
    
    $('.expert-slider').click(function() {
        $('.pro-card').hide();
        $('.expert-card').show();
    });
})