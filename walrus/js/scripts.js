$(document).ready(function() {
  $("p").click(function() {
    $(".walrus-showing").fadeToggle();
    $(".walrus-hidden").fadeToggle();
  });

  $("button#black").click(function() {
    $("body").addClass("black-background");
  });
});
