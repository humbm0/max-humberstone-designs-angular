"use strict";

$( document ).ready(function() {

  $(window).scroll(function(e){
    parallax();
  });

  function parallax(){
    var scrolled = $(window).scrollTop();
    if ($(window).width() < 420) {
      $('.parallax').css('top',-(scrolled*-0.0245)+'rem');
      $('.parallax .content').css('top',-(scrolled*-0.0245)+'rem');
    }else{
      $('.parallax').css('top',-(scrolled*-0.0245)+'rem');
      $('.parallax .content').css('top',-(scrolled*-0.0245)+'rem');
      $('.parallax div').css('opacity',1-(scrolled*0.00075));
    }
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
