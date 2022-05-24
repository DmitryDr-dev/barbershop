$('[data-slider-list]').slick({
  autoplay: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 767.99,
      settings: {
        arrows: false,
        dots: false,
      },
    },
  ],
});
