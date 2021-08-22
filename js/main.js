// Управление по собственной кнопке видео
$('.video-control').click(function () {
    let $videoContainer = $(this).parent()
    let $video = $(this).parent().find('.video_player')[0];
    if ($video.paused) {
        $video.play();
        $videoContainer.addClass('video-is-playing');
    } else {
        $video.pause();
        $videoContainer.removeClass('video-is-playing');
        //	возвращаем постер
        // $video.load();
    }
});

// Подменю каталога
let showCatalog = false;
$('.drop-down')
    .on('mouseenter', function () {
        $('.catalog-drop-down').slideToggle("fast").css("display", "flex");
    })
    .on('mouseleave', function () {
        showCatalog = false;
        setTimeout(function () {
            if (!showCatalog) $('.catalog-drop-down').slideToggle("fast");
        }, 1300)
    });

$('.catalog-drop-down')
    .on('mouseenter', function () {
        setTimeout(function () {
            showCatalog = true;
        }, 300)
    })
    .on('mouseleave', function () {
        showCatalog = false;
        setTimeout(function () {
            $('.catalog-drop-down').hide();
        }, 300)
    });

// Наведение на товар
/*if (window.top < $('.main-page_choice__container').top) {*/
    $('.main-page_choice__item')
        .on('mouseenter', function () {
            $(this).find('.main-page_choice__name-container').hide();
            $(this).find('.main-page_choice__cost').hide();
            $(this).find('.main-page_choice__type-container').hide();
            $(this).find('.main-page_choice__options-hover-container').slideToggle("fast");
        })
        .on('mouseleave', function () {
            $(this).find('.main-page_choice__name-container').show();
            $(this).find('.main-page_choice__cost').show();
            $(this).find('.main-page_choice__type-container').show();
            $(this).find('.main-page_choice__options-hover-container').toggle();
        });
/*}*/
