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
});

//Спасибо на главной странице ПРОСТО ДЛЯ АНИМАЦИИ
$(".main-page_deal-callback__btn").on("click", function () {
    $(this).parent().parent().find('.submit-message').slideToggle("fast");
})

$(".popup-callback__button").on("click", function () {
    $(this).parent().parent().find('.submit-message').slideToggle("fast");
})


$('.homeuse__single-slide').slick({
    infinite: true,
    arrows: true,
    dots: false,
    speed: 300,
});

$('#news-item__single-slider1').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
});

$('#catalog-detail__single-slider1').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
});

(function () {
    var init = function () {

        var sliderPrice = new rSlider({
            target: '#catalog-items__slider1',
            range: true,
            tooltip: false,
            values: {min: 2500, max: 41000},
            set: [3500, 31000],
            step: 500,
            labels: false,
            scale: true,
        });

        var sliderPower = new rSlider({
            target: '#catalog-items__slider2',
            range: true,
            tooltip: false,
            values: {min: 20, max: 540},
            set: [11, 222],
            step: 20,
            labels: false,
            scale: true,
        });
    };
    window.onload = init;
})();

// Наведение на товар в каталоге

$('.catalog-items__choice-wrapper')
    .on('mouseenter', function () {
        $(this).find('.catalog-items__choice-hover').toggle();
    })
    .on('mouseleave', function () {
        $(this).find('.catalog-items__choice-hover').toggle();
    });

/*}*/

// Where el is the DOM element you'd like to test for visibility
function isHidden(el) {
    var style = window.getComputedStyle(el);
    return (style.display === 'none')
}

let posTop = 0
$(window).scroll(function () {
    posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    let hiddenHeader = isHidden($('.header-under_menu')[0]);
    //console.log(hiddenHeader)

    //let elementExists = $('.header.main-page_header')[0]; - если для других страниц тоже понадобится плавающее меню

    if (((posTop + 25) > $('.header.main-page_header').height()) && (hiddenHeader == false)) {
        //$('.header.main-page_header').css("height",this.height());
        $('.header.main-page_header').css("background-color", "none");
        $('.header.main-page_header').backgroundImage = "none";
        $('.header-under_menu').hide();
        $('.header-separator').hide();
        $('.header-background').css("position", "fixed").css("background-color", "#e1e1e1");
        //$(window).scrollTop(200);
    }

    //console.log(posTop);
    //console.log(isHidden($('.header-separator')[0]));
    if ((hiddenHeader == true) && (posTop + 25) < 150) {
        $('.header.main-page_header').css("background-color", "var(--color-omega)").css("z-index", "200");
        $('.header.main-page_header').backgroundImage = "url('../img/main/header_background.png')";
        $('.header-under_menu').show();
        $('.header-separator').show();
        $('.header-background').css("position", "unset").css("background-color", "rgba(128, 128, 128, 0.28)");
    }


    console.log(posTop, " TOP");

});

function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
}


// Наведение на товар
let offsetItemBuy = offset($('.main-page_choice__container')[0]);

$('.main-page_choice__item')
    .on('mouseenter', function () {
        if (posTop < offsetItemBuy.top) {
            $(this).find('.main-page_choice__name-container').hide();
            $(this).find('.main-page_choice__cost').hide();
            $(this).find('.main-page_choice__type-container').hide();
            $(this).find('.main-page_choice__options-hover-container').slideToggle("fast");
        }

    })
    .on('mouseleave', function () {
        if (posTop < offsetItemBuy.top) {
            $(this).find('.main-page_choice__name-container').show();
            $(this).find('.main-page_choice__cost').show();
            $(this).find('.main-page_choice__type-container').show();
            $(this).find('.main-page_choice__options-hover-container').toggle();
        }
    });
/*}*/

