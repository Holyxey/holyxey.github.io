const offers = {
  banya: {
    icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><g stroke="#F8F3C8" stroke-width="1.5"><path d="M22 12H2M12 2v20m1-10a4 4 0 0 0 4 4m-6-4a4 4 0 0 1-4 4" stroke-linecap="round"/><path d="M12 10.035a3.25 3.25 0 0 1 2.46-3.15c1.603-.4 3.056 1.052 2.655 2.656a3.25 3.25 0 0 1-3.15 2.46H12zm0 0a3.25 3.25 0 0 0-2.46-3.15c-1.603-.4-3.056 1.052-2.655 2.656a3.25 3.25 0 0 0 3.15 2.46H12z"/><path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536" stroke-linecap="round"/></g></svg>',
    title: `Баня бесплатно`,
    description: `2 часа бани или банного чана в подарок при <span class="faqbtn" style="cursor: pointer" onclick="multipage.bookingClick(); multipage.hideMobileMenu()">бронировании</span> сегодня! Просто в комментариях напишите <b>SAUNA</b>`,
    expires: new Date(2034, 11, 30, 12, 0, 1),
  },
  ny2026: {
    icon: '<span style="font-size: 2rem; float: left; margin: auto 1rem auto 0; display: block">🎄</span>',
    title: `Новый год!`,
    description: `Дарим 30% скидку на новогодние заезды при раннем бронировании`,
    expires: new Date('08-01-2026'),
    style: {
      'box-shadow': '0 0 1rem #a4315b, inset 0 0 5px #621d37',
      padding: '0.5rem',
      cursor: 'pointer',
      'border-radius': '1rem',
      'user-select': 'none',
      outline: '2px solid #a4315b',
      background: 'linear-gradient(53deg, #a4315b 0%, #621d37 100%)',
    },
    action: {
      text: 'Забронировать',
      style: {
        background: 'var(--holyxey-yellow)',
        border: 'none',
        width: '100%',
        margin: '0.5rem 0 0 0',
        padding: '0.5rem',
        'font-size': '1rem',
        'pointer-events': 'none',
        'border-radius': '0.5rem',
      },
      func: () => {
        window.location.href = '/2026';
      },
    },
  },
};

//
function pasteOffer(offer) {
  if (!offer) return;

  try {
    const offersNode = document.getElementById('heroPreferences');

    const article = document.createElement('article');
    article.className = 'heroPreferencesBlock';
    article.style = Object.entries(offer.style || {})
      .map(([key, value]) => `${key}: ${value}`)
      .join('; ');

    const iconDiv = document.createElement('div');
    iconDiv.innerHTML = offer.icon;
    article.appendChild(iconDiv);

    const titleH3 = document.createElement('h3');
    titleH3.className = 'blockTitle';
    titleH3.innerText = offer.title;
    article.appendChild(titleH3);

    const descP = document.createElement('p');
    descP.innerHTML = offer.description;
    article.appendChild(descP);

    if (offer.action) {
      article.onclick = offer.action.func;
      article.style.cursor = 'pointer';

      const button = document.createElement('button');
      button.innerText = offer.action.text || 'Подробнее';
      button.style = Object.entries(offer.action.style || {})
        .map(([key, value]) => `${key}: ${value}`)
        .join('; ');
      article.appendChild(button);
    }

    offersNode.insertAdjacentElement('afterbegin', article);
  } catch (error) {
    console.error('Error inserting offer:', error);
  }
}
function addOffer() {
  const queryParams = new URLSearchParams(window.location.search);
  const utmAds = queryParams.get('utm_ads');

  const adsCookie = localStorage.getItem('terruar_utm_ads_cookie');
  const offer = offers[utmAds] || offers[adsCookie];

  if (!offer) return;

  const isExpired = offer.expires - new Date().getTime() < 0;

  if (isExpired) {
    localStorage.removeItem('terruar_utm_ads_cookie');
    return;
  }

  pasteOffer(offer);
  localStorage.setItem('terruar_utm_ads_cookie', utmAds);
}

document.addEventListener('DOMContentLoaded', addOffer);
