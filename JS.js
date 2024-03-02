function holyxey() {
    let addCommentHolyxey = document.createComment('Site design and supporting at AdsTarget by Holyxey');
    document.documentElement.prepend(addCommentHolyxey);
}
//
function backUTMButton() {
    if (location.href.includes('?utm_source=AdsTarget') && document.referrer.includes('adstarget')) {
        let bb = document.createElement("a")
        let referrerLink = document.referrer
        bb.href = referrerLink
        bb.style.cssText = `
        position: fixed;
        top: 2rem;
        left: 2rem;
        content: url("https://static.tildacdn.com/tild6663-6639-4166-a462-316239353461/SVG_logo_1.svg");
        width: 2.5rem;
        z-index: 995595607309995595607309;
        background: #ffffff;
        border-radius: 1rem;
        padding: .5rem;
        `;

        document.documentElement.append(bb)
    }
}
//


document.addEventListener("DOMContentLoaded", backUTMButton)
document.addEventListener("DOMContentLoaded", holyxey)