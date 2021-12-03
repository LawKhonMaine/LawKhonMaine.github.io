$(document).ready(function () {

    // Scrolling nav
    $('.js--section-feature').waypoint(function(direction){
      if(direction == 'down') {
          $('nav').addClass('sticky-nav');
      }else{
          $('nav').removeClass('sticky-nav');
      }
    },{offset : '50%'})

    // Scrolling btn

    $('.js-btn-full').click(function (){
        $('html,body').animate({scrollTop:$('.js--section-plan').offset().top},1000)
    })

    $('.js-btn-ghost').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-feature').offset().top},500)
    })

    // Select all links with hashes
    $('a[href*="#"]')
// Remove links that don't actually link to anything
   .not('[href="#"]')
   .not('[href="#0"]')
   .click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

$('.js--section-header').waypoint(function(direction){
  if(direction=='down'){
    $('.js--wp-1').addClass('animate__fadeIn')
  }else{$('.js--wp-1').removeClass('animate__fadeIn')}
})

$('.js--section-meal').waypoint(function(direction){
  if(direction=='down'){
  $('.js--wp-2').addClass('animate__backInUp')
}else{$('.js--wp-2').removeClass('animate__backInUp')}
})

$('.js--section-step').waypoint(function(direction){
  if(direction=='down'){
    $('.js--wp-3').addClass('animate__fadeInUp')
  }else{$('.js--wp-3').removeClass('animate__fadeInUp')}
})



})