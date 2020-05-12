$(function () {

  'use strict';


  var winH = $(window).height(),
      navH = $('.navbar').innerHeight(),
      slideH = (winH - navH),
      slideInH = $('.slider-in').height(),
      subScribeH = $('.subscribe').height(),
      formH = $('.form').height();


  $('.sliders, .slider-in').height(winH);
  $('.slider-item').css('paddingTop', (slideH-slideInH)/2);

  $(window).resize(function () {
    $('.sliders, .slider-in').height($(window).height());
    $('.slider-item').css('paddingTop', ($(window).height()-navH-slideInH)/2);
  });

  $('.form').css('paddingTop', (subScribeH-formH)/2);


  $('html').niceScroll({
    cursorcolor:"#28a745",
    cursorwidth:"10",
    cursorborderradius:3,
    cursorborder: '1px solid #28a745',
    scrollspeed: 80,
    mousescrollstep: 60,
    background:"#CFC"
  });


$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    $('.scroll-top').fadeIn(500);
  } else {
    $('.scroll-top').fadeOut(500);
  }
});

$('.scroll-top').on('click', function() {
  $('html, body').animate({scrollTop:0}, 1000);
});


  $('.nav-menu .nav-item').click(function () {
    $('html, body').animate({
      scrollTop: $('#' + $(this).data('scroll')).offset().top
    }, 1000)
  })

});