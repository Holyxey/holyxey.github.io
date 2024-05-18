// console.log('Инициализация стрима..')
let sldpPlayer;
let getWidth;
let getHeigth;

function initPlayer() {
    getWidth = document.getElementById('video-stream').width
    getHeigth = (getWidth / 16) * 9

    sldpPlayer = SLDP.init({
        container: 'sldp_player_wrapper',
        stream_url: "wss://b2o-vcore155.video.goodline.info:443/main/linkvideo_125009",
        width: `${getWidth}`,
        height: `${getHeigth}`,
        muted: true,
        autoplay: true
    });
}

function removePlayer() {
    sldpPlayer.destroy();
}

