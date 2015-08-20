//= require_tree .
$( document ).ready(function() {
  $('#menu-action, #close-nav-button, #mobile-menu').click(function(){
    
    $('#mobile-menu').fadeToggle(500);
    $('nav').toggleClass('active-nav');
    
  });


 $(window).scroll(function(){

    var wScroll = $(this).scrollTop();
    var offerSection = $('.offer-section').offset().top;

    if(wScroll > offerSection - 200 ) {
      $('.top-opacity-image').css('opacity', '1') ; }
    if (wScroll > offerSection + 200 ) {
      $('.bottom-opacity-image').css('opacity', '1'); }
  });
});