import '../css/main.scss';

$('#skills-link').click(function(){
  $('.card').addClass('slideUp');
  $('#skills').css('display', 'block').addClass('slideSectionIn');
});

$('#about-link').click(function(){
  $('#about').css('display', 'block');
});

$('#projects-link').click(function(){
  $('#projects').css('display', 'block');
});
