var swiper = new Swiper('.image-slider', {
    centeredSlides: true,
    slidesPerView: 1,
    // slidesPerView: 'auto',
    //slidesPerGroup: 1,
    //initialSlide: 1,
    loop: true,
    autoHeight: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slideToClickedSlide: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        //Стрелочки влево вправо
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
        eventsTarget: ".image-slider"
    },

});