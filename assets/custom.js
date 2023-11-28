
//home banner slider
var owl = $('.home-banner-slider .owl-carousel');
$('.home-banner-slider .owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  autoplayTimeout: 5000,
  smartSpeed: 1000,
  autoplay: true,
  nav: true,
  dots: false,
  navText: ["<img src='https://cdn.shopify.com/s/files/1/0844/8462/0583/files/left-arrow-black.svg?v=1700548458'>", "<img src='https://cdn.shopify.com/s/files/1/0844/8462/0583/files/right-arrow-black.svg?v=1700548458'>"],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    }
  }
});
$('.play').on('click', function () {
  owl.trigger('play.owl.autoplay', [3000])
})
$('.stop').on('click', function () {
  owl.trigger('stop.owl.autoplay')
})

$(".play-pause-slider").click(function () {
  $(this).toggleClass("is-active");
});
// slider-jacket//


$('.home-collection-sider.owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  autoplayTimeout: 4000,
  nav: true,
  mouseDrag  : false,
  dots: true,
  center: true,
  smartSpeed: 900,
  autoplayHoverPause:false,
  startPosition: 1,
  navText: ["<img src='https://cdn.shopify.com/s/files/1/0844/8462/0583/files/collection-left.svg?v=1700563013'>", "<img src='https://cdn.shopify.com/s/files/1/0844/8462/0583/files/collection-right.svg?v=1700563013'>"],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      center: false,
      mouseDrag  : false,
    },
    600:{
      items: 3,
      mouseDrag  : false,
    },
    768: {
      items: 3,
    }
  }
});

$('.images-slider.owl-carousel').owlCarousel({
  loop: true,
  margin: 32,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  smartSpeed: 2000,
  nav: false,
  autoplay: true,
  mouseDrag  : true,
  dots: false,
  autoplayHoverPause:false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1.2,
    },
    600: {
      items: 1.2,
    },
    1000: {
      items: 1.2,
    }
  }
});


$(document).ready(function () {
  $(".close-icon").click(function () {
    $(".announcement-bar").slideUp();
  });
});
// Color Swatches
$('.color-toggle').click(function(){
  $(this).siblings('.color-variant-index').slideToggle();
});

$(document).ready(function () {
  $(window).scroll(function () {
    var flag1 = true;

    // for flag 1 
    var f1 = $(".home-slider-bg");
    if (f1.length) {
      var top_of_element5 = $(".home-slider-bg").offset().top;
      var bottom_of_element5 = $(".home-slider-bg").offset().top + $(".home-slider-bg").outerHeight();
      var bottom_of_screen5 = $(window).scrollTop() + $(window).innerHeight();
      var top_of_screen5 = $(window).scrollTop();
    }

    if ((bottom_of_screen5 > top_of_element5) && (top_of_screen5 < bottom_of_element5) && flag1) {
      $('.home-slider-bg').addClass('active');
      console.log('in h')
      flag1 = false;
    } else { }

  });

})
if ($(window).width() < 991) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      $('.header-navigation').addClass("sticky");
    }
    else {
      $('.header-navigation').removeClass("sticky");
    }
  });
}
