

$(document).ready(function () {

  $('.announcement-bar .owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  autoplayTimeout: 4000,
  nav: true,
  dots: false,
  center: true,
  navText: ["<img src='https://cdn.shopify.com/s/files/1/0736/7357/2666/files/left-arrow.svg?v=1678953752'>", "<img src='https://cdn.shopify.com/s/files/1/0736/7357/2666/files/right-arrow.svg?v=1678953774'>"],
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
  
  $(".close-icon").click(function () {
    $(".announcement-bar").slideUp();
  });
});