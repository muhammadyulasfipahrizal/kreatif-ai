$(document).ready(function() {
    $(".sign-in").show();
    $('.sign-up').hide();
  
    $('.sign-in-btn').click(function() {
      $('.sign-in').show();
      $('.sign-up').hide();
    });
  
    $('.sign-up-btn').click(function() {
      $('.sign-up').show();
      $('.sign-in').hide();
    });
  });