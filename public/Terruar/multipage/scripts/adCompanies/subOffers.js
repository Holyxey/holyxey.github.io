const offers = {
    banya: {
        icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><g stroke="#F8F3C8" stroke-width="1.5"><path d="M22 12H2M12 2v20m1-10a4 4 0 0 0 4 4m-6-4a4 4 0 0 1-4 4" stroke-linecap="round"/><path d="M12 10.035a3.25 3.25 0 0 1 2.46-3.15c1.603-.4 3.056 1.052 2.655 2.656a3.25 3.25 0 0 1-3.15 2.46H12zm0 0a3.25 3.25 0 0 0-2.46-3.15c-1.603-.4-3.056 1.052-2.655 2.656a3.25 3.25 0 0 0 3.15 2.46H12z"/><path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536" stroke-linecap="round"/></g></svg>',
        title: `Баня&nbsp;бесплатно`,
        description: `2 часа бани или банного чана в&nbsp;подарок при&nbsp;<span class="faqbtn" style="cursor: pointer" onclick="multipage.bookingClick(); multipage.hideMobileMenu()">бронировании</span> сегодня! Просто в&nbsp;комментариях напишите <b>SAUNA</b>`,
        expires: new Date(2024,11,30,12,0,1),
    }
}

function pasteOffer(offerName) {
    const offersNode = document.getElementById('heroPreferences');

    offersNode.insertAdjacentHTML('afterbegin', `
        <article class="heroPreferencesBlock">
            ${offers[offerName].icon}
            <h3 class="blockTitle">${offers[offerName].title}</h3>
            <p class="blockText">${offers[offerName].description}</p>
        </article>
    `)
}
function addOffer() {
    const queryParams = new URLSearchParams(window.location.search);
    const utmAds = queryParams.get('utm_ads');
    const adsCookie = localStorage.getItem('terruar_utm_ads_cookie');
    const isExpired = offers[utmAds || adsCookie].expires - new Date().getTime() < 0;

    if ((utmAds || adsCookie) && isExpired) {
        localStorage.removeItem('terruar_utm_ads_cookie');
        return
    }

    if ( utmAds && offers[utmAds]) {
        pasteOffer(utmAds)
    } else if (adsCookie && !utmAds) {
        pasteOffer(adsCookie)
    }

    if (utmAds && !adsCookie) {
        localStorage.setItem("terruar_utm_ads_cookie", utmAds);
    }

}

document.addEventListener('DOMContentLoaded', addOffer);