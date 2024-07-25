const videoBlock = document.getElementById("popUpVideo");
const videoEmbed = document.getElementById("embedPopUp");
const videoButton = document.getElementById("showHide");
const arrowSvg = videoBlock.querySelector("svg");
const missionBlock = document.getElementById("mission");
let visible = true
let videoWidth = videoEmbed.getBoundingClientRect().width;
let videoHeight = videoEmbed.getBoundingClientRect().height;
videoButton.onclick = () => {
    if (visible) {
        visible = false
        videoEmbed.style.width = '0'
        videoEmbed.style.height = '0'
        arrowSvg.style.rotate = '180deg'
        videoButton.style.borderRadius = '1rem 0 0 1rem'
        videoButton.style.translate = '0 5px'
    } else {
        visible = true
        videoEmbed.style.width = `${videoWidth}px`
        videoEmbed.style.height = `${videoHeight}px`
        arrowSvg.style.rotate = '-0deg'
        videoButton.style.borderRadius = '1rem 0 0 0'
        videoButton.style.translate = '0 0'
    }
}
const checkMissionTop = () => {

}
const firstShow = setInterval(() => {
    console.log('1')
    let topIs = missionBlock.getBoundingClientRect().top
    if (topIs < 0) {
        clearInterval(firstShow)
        videoButton.click()
    }
}, 900)
document.addEventListener("DOMContentLoaded", () => {
    videoButton.click()
})