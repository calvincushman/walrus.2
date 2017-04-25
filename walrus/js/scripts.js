$(document).ready(function() {
  $("p").click(function() {
    $(".walrus-showing").fadeToggle();
    $(".walrus-hidden").fadeToggle();
  });

  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });
  $("button#light").click(function() {
    $("body").removeClass();
  });
});
