jQuery(window).scroll(function(){
  var fromTopPx = 10;
  var scrolledFromtop = jQuery(window).scrollTop();

  if(scrolledFromtop > fromTopPx){
    jQuery('.logo').addClass('scroll');
    jQuery('header').addClass('header-scroll');
    jQuery('nav').addClass('nav-scroll');
  }
  else{
    jQuery('.logo').removeClass('scroll');
    jQuery('header').removeClass('header-scroll');
    jQuery('nav').removeClass('nav-scroll');
  }
});

$(document).on('turbolinks:load', function() {
  $(function() {
    $('a[href*=\\#]:not([href=\\#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 350);
          return false;
        }
      }
    });
  });
});


$(document).on('turbolinks:load', function() {
  var images = ['ss1.jpg', 'ss2.jpg', 'ss3.jpg', 'ss4.png', 'ss5.jpg'];
  var image = images[Math.floor(Math.random() * images.length)];
  $('.slideshow').css('background-image', "url('/assets/"+image+"')") ;
});
