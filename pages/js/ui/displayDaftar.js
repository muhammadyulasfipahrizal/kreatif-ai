$(document).ready(function() {
  $(".sign-in").hide();
  $('.sign-up').show();

  $('.sign-in-btn').click(function() {
    $('.sign-in').show();
    $('.sign-up').hide();
  });

  $('.sign-up-btn').click(function() {
    $('.sign-up').show();
    $('.sign-in').hide();
  });
});