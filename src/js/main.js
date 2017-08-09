import '../stylesheets/main.scss';
import './jquery.inview.min.js';

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

// Top navigation becomes visible when scrolling past landing page
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 700) {
    $('.top-nav').fadeIn();
  } else {
    $('.top-nav').fadeOut(100);
  }
});


$('nav a').on('click', function() {
    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 60;
    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);
    return false;
})


$(window).scroll(function() {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 100) {
    $('nav').addClass('fixed');
    $('section').each(function(i) {
      if ($(this).position().top <= windscroll - 20) {
        // $('nav a.active').removeClass('active');
        // $('nav a').eq(i).addClass('active');
      }
    });

    } else {
      $('nav').removeClass('fixed');
      // $('nav a.active').removeClass('active');
      // $('nav a:first').addClass('active');
    }

}).scroll();
