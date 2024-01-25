new Splide("#footer-slider",{
    type: "loop",
    perPage: 6,
    autoplay: true,
    arrows: false,
    direction: 'rtl',
    pagination: false,
    paginationDirection: 'rtl',
    height: '200px',
    fixedHeight: '100px',
    autoPlay:true,
    snap : true,
    trimSpace: true,
    pagination: false,
    classes:{
      pagination: 'splide__pagination footer__slider-pagination',
    },
    breakpoints: {
      1024: {
        perPage: 4,
      },
      768:{
        perPage: 2,
      }
    }
  }).mount();
  