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

swiper.on('slideChange', function () {
    let videoExists = $('.catalog-detail .swiper-container').find('.video_player');
    let videoContainer = $('.catalog-detail .swiper-container').find('.video');
    if (videoExists.length != 0)
        for (let i = 0; i < videoExists.length; i++)
            videoExists[i].pause();
    videoContainer.removeClass('video-is-playing');
});