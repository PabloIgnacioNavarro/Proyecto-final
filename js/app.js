// eslint-disable-next-line no-undef
$(document).ready(function () {
  //HERO SLIDER
  // eslint-disable-next-line no-undef
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    navText: ["PREV", "NEXT"],
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      },
      1000: {},
    },
  });
});

// eslint-disable-next-line no-undef
$(document).ready(function () {
  //PROJECT SLIDER
  // eslint-disable-next-line no-undef
  $("#project-slider").owlCarousel({
    loop: true,
    margin: 24,
    navText: ["PREV", "NEXT"],
    nav: true,
    dots: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 0,
      },
      768: {
        items: 2,
      },
      1140: {
        items: 2,
        center: true,
      },
    },
  });

  // eslint-disable-next-line no-undef
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1,
    smartSpeed: 800,
  });
});
