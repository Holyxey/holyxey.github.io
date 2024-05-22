// document.addEventListener("DOMContentLoaded", initPlayer);

function initPlayer() {
    let getWidth = document.getElementById('video-stream').offsetWidth
    let getHeigth = getWidth * 9 / 16
    sldpPlayer = SLDP.init({
        container: 'streamPlayer',
        stream_url: 'wss://b2o-vcore156.video.goodline.info:443/main/linkvideo_125009',
        autoplay: true,
        muted: true,
        height: getHeigth,
        width: getWidth
    });
}