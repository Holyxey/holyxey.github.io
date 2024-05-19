// console.log('Инициализация стрима..')
let sldpPlayer;
let getWidth;
let getHeigth;

document.addEventListener("DOMContentLoaded", initPlayer);

function initPlayer() {
    getWidth = document.getElementById('video-stream').offsetWidth
    getHeigth = (getWidth / 16) * 9
    sldpPlayer = SLDP.init({
        container: 'sldp_player_wrapper',
        sync_buffer: 1000,
        log_level:   'debug',
        stream_url: 'wss://b2o-vcore155.video.goodline.info:443/main/linkvideo_125009',
        buffering: 1200,
        autoplay: true,
        height: getHeigth,
        width: getWidth
    });
}

function removePlayer() {
    sldpPlayer.destroy(function () {
        console.log('SLDP Player is destroyed.');
    });
}