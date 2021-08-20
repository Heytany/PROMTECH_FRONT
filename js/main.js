
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

