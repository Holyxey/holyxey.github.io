window.addEventListener("DOMContentLoaded", hxAtVidHero)

function hxAtVidHero(el) {
    let vidsctn = document.getElementById('hx-at-hero-video');
    vidsctn.style.opacity = '0';
    // vidsctn.classList.add('slowshow');
    vidsctn.src = 'https://167vod-adaptive.akamaized.net/exp=1706972578~acl=%2Fa06c2cb7-d91c-4a25-9fbc-5c976a86dfde%2F%2A~hmac=d4e43b23cc5749ef78619dcadda455992e87d8e883539ad54abba9fcc9ed0391/a06c2cb7-d91c-4a25-9fbc-5c976a86dfde/parcel/video/7b077004.mp4';
    // vidsctn.src = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
}

