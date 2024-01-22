new Splide("#news-slider",{
    type: "loop",
    perPage: 2,
    padding: {left : '5rem'},
    gap: '15px',
    direction: 'rtl',
    fixedHeight: '157px',
    fixedWidth: '280px',
    pagination: false,
    paginationDirection: 'rtl',
    autoplay:true,
     snap   : true,
    trimSpace: true,
    classes: {
        // Add classes for arrows.
        arrows: 'splide__arrows arrows__newsslider',
        prev  : 'splide__arrow--prev prev__newsslider',
        next  : 'splide__arrow--next next__newsslider',
    },
    breakpoints: {
        1024: {
            width: '95%',
            height: '300px'
    },
  }
}).mount();

new Splide("#specific-content",{
    type: "loop",
    perPage: 1,
    direction: 'rtl',
    height: '450px',
    paginationDirection: 'rtl',
    autoplay:true,
    snap   : true,
    trimSpace: true,
    breakpoints: {
        1024: {
            width: '95%',
            height: '207px'
    }
  }
}).mount();

new Splide("#story-slider",{
    type: "loop",
    perPage: 2,
    padding: {left : '5rem'},
    gap: '15px',
    direction: 'rtl',
    fixedHeight: '157px',
    fixedWidth: '280px',
    pagination: false,
    paginationDirection: 'rtl',
    autoplay:true,
     snap   : true,
    trimSpace: true,
    classes: {
        // Add classes for arrows.
        arrows: 'splide__arrows arrows__newsslider',
        prev  : 'splide__arrow--prev prev__newsslider',
        next  : 'splide__arrow--next next__newsslider',
    },
    breakpoints: {
        1024: {
            width: '95%',
            height: '300px'
        }
    }
}).mount();