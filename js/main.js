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
/*if (window.scrollY > $('.main-page_choice__container').offset().top) {*/
$('.main-page_choice__item')
    .on('mouseenter', function () {
        console.log(window.scrollY);
        console.log($('.main-page_choice__container').offset().top);
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

function iOS() {
    return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

//Запрет на увеличение сайта кропом пальцев или двойным тапом
if (iOS() === true) {
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        let now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    document.addEventListener('touchmove', function (event) {
        if (event.touches.length === 2) {
            event.preventDefault();
        }

    }, {passive: false});
}

//Фэнсибокс без стрелочек
$(".modal-inline_no-arrows").fancybox({
    margin: 0,
    padding: 20,
    maxWidth: 600,
    autoScale: true,
    transitionIn: 'none',
    transitionOut: 'none',
    type: 'inline',
    touch: false,
    helpers: {
        overlay: {
            locked: false
        }
    },
    btnTpl: {
        arrowLeft:
            '',

        arrowRight:
            ''
    },
    showNavArrows: false,
    /*afterLoad: function () {
        const kol_vo = $('.main-row .pp-orderl-info__row-label span.kol-vo');
        if ($(window).width() <= '596' && kol_vo.text() === 'Количество') {
            kol_vo.text('Кол-во');
        } else {
            kol_vo.text('Количество');
        }
    },*/
});

//Спасибо на главной странице ПРОСТО ДЛЯ АНИМАЦИИ
$(".main-page_deal-callback__btn").on("click", function () {
    $(this).parent().parent().find('.submit-message').slideToggle("fast");
})

$(".popup-callback__button").on("click", function () {
    $(this).parent().parent().find('.submit-message').slideToggle("fast");
})


$('.homeuse__single-slide').slick({
    arrows:true,
    dots:false,
});



