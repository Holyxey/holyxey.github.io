window.addEventListener("DOMContentLoaded", hxAtVidHero)

function hxAtVidHero(el) {
    let vidsctn = document.getElementById('hx-at-hero-video');
    vidsctn.style.opacity = '0';
    vidsctn.classList.add('slowshow');
    vidsctn.src = 'https://167vod-adaptive.akamaized.net/exp=1706971669~acl=%2Fa06c2cb7-d91c-4a25-9fbc-5c976a86dfde%2F%2A~hmac=1c786376a4416bc253b11f4f1f5e2854c42b3cb26f115ca265674256633f336b/a06c2cb7-d91c-4a25-9fbc-5c976a86dfde/parcel/video/7b077004.mp4';
    // vidsctn.src = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
}
