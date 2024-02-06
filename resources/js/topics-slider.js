new Splide("#specific-content",{
    type: "loop",
    perPage: 1,
    direction: 'rtl',
    height: '340px',
    paginationDirection: 'rtl',
    autoplay:true,
    snap   : true,
    trimSpace: true,
    breakpoints: {
        1024: {
            width: '100%',
            height: '207px'
    },
  }
}).mount();

new Splide("#documentary-slider-pc",{
    type: "loop",
    perPage: 1,
    direction: 'rtl',
    height: '340px',
    width: '95%',
    gap: '10px',
    fixedHeight: '290px',
    paginationDirection: 'rtl',
    pagination: false,
    autoplay:true,
    snap   : true,
    arrows : false,
    trimSpace: true,
    breakpoints: {
        1024: {
            height: '300px'
    },
  }
}).mount();
new Splide("#booklet-slider-pc",{
    type: "loop",
    perPage: 1,
    direction: 'rtl',
    height: '340px',
    width: '100%',
    fixedHeight: '340px',
    fixedWidth: '100%',
    pagination: false,
    paginationDirection: 'rtl',
    autoplay:false,
    snap   : true,
    arrows : false,
    trimSpace: true,
    breakpoints: {
        1024: {
            height: '300px'
    },
  }
}).mount();

new Splide("#booklet-slider-mobile",{
  type: "loop",
  perPage: 1,
  fixedWidth: '360px',
  fixedHeight: '300px',
  gap: '15px',
  height: '300px',
  width: '95%',
  direction: 'rtl',
  paginationDirection: 'rtl',
  autoplay:false,
  snap   : true,
  trimSpace: true
}).mount();

new Splide("#documentary-slider-mobile",{
  type: "loop",
  perPage: 1,
  padding: { left: '100px'},
  gap: '15px',
  width:'100%',
  height: '290px',
  fixedHeight: '290px',
  fixedWidth: '230px',
  direction: 'rtl',
  paginationDirection: 'rtl',
  autoplay:false,
   snap   : true,
  trimSpace: true
}).mount();
