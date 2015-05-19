// JavaScript Document

//Mobile Nav

$(function() {
    $('#navicon').click(function() {
        if($('#navicon').hasClass('closed')) {
      $('#fade').fadeIn().css({"z-index":"1"});
            $('body').animate({left: "-250px"}, 400);
      $('header').animate({left: "-250px"});
      //$('#navicon').animate({"left": "0"}, 400).css({"z-index":"22"});
            $('#mobile-nav').animate({right: "0"}, 400);
            $(this).removeClass('closed').addClass('open'); 
  }
      
      
        else if($('#navicon').hasClass('open')) {
            $('body').css({"position":"relative"}).animate({left: "0"}, 400);
            $('#mobile-nav').animate({right: "-250px"}, 400);
            $(this).removeClass('open').addClass('closed');
      $('header').animate({left: "0"});
            $('#fade').fadeOut(); }
    });
  
});