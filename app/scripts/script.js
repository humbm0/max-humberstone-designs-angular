"use strict";

$( document ).ready(function() {

  $(window).scroll(function(e){
    parallax();
  });

  function parallax(){
    var scrolled = $(window).scrollTop();
    $('.parallax').css('top',-(scrolled*-0.0245)+'rem');
    $('.parallax .content').css('top',-(scrolled*-0.0245)+'rem');
    $('.parallax div').css('opacity',1-(scrolled*0.00175));
  }


  //burger nav
    var header = $('header');

    function hideList() {
      $('header ul li').removeClass('show');
    }
    function showList() {
      $('header ul li').addClass('show');
    }
    function hideNav() {
      $('header').removeClass('open');
    }
    function showNav() {
      $('header').removeClass('open');
    }

    $('.burger').click(function(){
      if (header.hasClass('open')) {
        $('header ul li').removeClass('show');
        setTimeout(hideNav, 500);
      }else{
        $('header').addClass('open');
        setTimeout(showList, 500);
      }
    });

});

$( window ).load(function() {

  //scroll animations
  window.sr = ScrollReveal();

  console.log("scroll animations");

  var settings = {
    viewFactor: .8,
    distance : '20%',
    easing   : 'ease',
    scale    : 1,
    opacity  : 0,
    duration : 800
  };

  var settings2 = {
    viewFactor: .8,
    distance : '20%',
    easing   : 'ease',
    scale    : 1,
    opacity  : 0,
    duration : 800,
    delay    : 1500
  };

  var settings3 = {
    viewFactor: .8,
    distance : '20%',
    easing   : 'ease',
    scale    : 1,
    opacity  : 0,
    duration : 800,
    delay    : 2000
  };

  var settings4 = {
    viewFactor: .8,
    distance : '20%',
    easing   : 'ease',
    scale    : 1,
    opacity  : 0,
    duration : 800,
    delay    : 500
  };

  var settings5 = {
    viewFactor: .8,
    distance : '20%',
    easing   : 'ease',
    scale    : 1,
    opacity  : 0,
    duration : 800,
    delay    : 1000
  };

  var settings6 = {
    viewFactor: .8,
    distance : '20%',
    easing   : 'ease',
    scale    : 1,
    opacity  : 0,
    duration : 800,
    delay    : 2500
  };


  sr.reveal('.reveal', settings);
  sr.reveal('.load-reveal', settings2);
  sr.reveal('.load-reveal2', settings3);
  sr.reveal('.load-reveal3', settings6);
  sr.reveal('.second-reveal', settings4);
  sr.reveal('.third-reveal', settings5);


});
