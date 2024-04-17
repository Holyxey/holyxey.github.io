function holyxey() {
    let addCommentHolyxey = document.createComment('Site design and supporting at AdsTarget by Holyxey');
    document.documentElement.prepend(addCommentHolyxey);
}
//
function backUTMButton() {
    if (location.href.includes('?utm_source=AdsTarget') && document.referrer.includes('adstarget')) {
        let bb = document.createElement("a")
        // let referrerLink = document.referrer
        bb.onclick = () => {
            history.back()
        }
        bb.style.cssText = `
        position: fixed!important;
        top: 2rem!important;
        left: 2rem!important;
        width: 2rem!important;
        max-width: 2rem!important;
        z-index: 995595607309995595607309;
        background: #ffffff;
        border-radius: 1rem!important;
        padding: .5rem!important;
        box-shadow: 0 0 10px #00000050;
        content: url("https://static.tildacdn.com/tild6663-6639-4166-a462-316239353461/SVG_logo_1.svg");
        cursor: pointer;
        `;
        document.documentElement.append(bb)
    }
}
//


window.addEventListener("load", backUTMButton)
document.addEventListener("DOMContentLoaded", holyxey)