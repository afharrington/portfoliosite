import '../css/main.scss';

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
