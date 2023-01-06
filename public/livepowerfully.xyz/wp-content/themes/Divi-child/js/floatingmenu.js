jQuery(function ($) {
  var $window = $(window);
  var $fixedbarTop = $('.fixedbar');
  var scrollTimer;


  $window.on('scroll', function () {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function() {
     if ($window.scrollTop() > 0.01) {
        $fixedbarTop.addClass('fixedbar-visible');
      } else {
        $fixedbarTop.addClass('fixedbar-visible');
      }         
    }, 1);
  });  
})