import '../stylesheets/main.scss';
import './jquery.inview.min.js';

$('.page-link').click(function(e){
  e.preventDefault();
  let go = this.getAttribute('href');
  $('.card-container').removeClass('slideDown').addClass('slideUp');
  setTimeout(function(){
    window.location = go;
    $('.card-container').removeClass('slideUp');
  }, 500);
});

$('.nav-arrow').click(function(e){
  let go = this.getAttribute('href');
  $('.card-container').addClass('slideDown');
});

$("#about").bind("inview", function(isVisible) {
  // Event is triggered once the element becomes visible in the browser's viewport, and once when it becomes invisible
  if (isVisible) {
    $( "#technical").fadeIn(800, () => {
      $("#creative").fadeIn(800, () => {
        $("#strategic").fadeIn(800, () => {
          $("#teamoriented").fadeIn(800);
        });
      });
    });
  }
});
