window.addEventListener("DOMContentLoaded", hxAtVidHero)

function hxAtVidHero(el) {
    let vidsctn = document.getElementById('hx-at-hero-video');
    vidsctn.style.opacity = '0';
    vidsctn.classList.add('slowshow');
    vidsctn.src = 'https://vk.com/video_ext.php?oid=-20458507&id=456239141&hd=4&autoplay=1';
    // vidsctn.src = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
}
