function holyxey() {
    let addCommentHolyxey = document.createComment('Дизайн, разработка: Holyxey.com');
    let addCommentAdsTarget = document.createComment('Продвижение бизнеса: AdsTarget.ru');
    document.prepend(addCommentHolyxey, addCommentAdsTarget);
}
const holyxeySchema = () => {
    let schemaData = {
        path: window.location.origin.toString(),
        year: new Date().getFullYear().toString()
    }
    let addSchemaWebSite = document.createElement('script')
    addSchemaWebSite.type = 'application/ld+json'
    addSchemaWebSite.innerHTML = `
        {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "${schemaData.path}",
        "copyrightYear": "${schemaData.year}",
        "author": {
            "@type": "Person",
            "email": "contact@holyxey.com",
            "url": "https://holyxey.com",
            "brand": "holyxey"
        },
        "publisher": {
            "@type": "Organization",
            "brand": "AdsTarget",
            "legalName": "AdsTarget",
            "email": "mail@adstarget.ru",
            "image": "https://optim.tildacdn.com/tild6631-3263-4136-b435-396234613533/x300.png"
        }
        }
    `;
    document.body.append(addSchemaWebSite);
}
//
function backUTMButton() {
    if (location.href.includes('?utm_source=AdsTarget')) {
        let bb = document.createElement("a")
        bb.href = 'https://adstarget.ru/?utm_source=Holyxey'
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
document.addEventListener("DOMContentLoaded", () => {
    holyxey();
    holyxeySchema();
})