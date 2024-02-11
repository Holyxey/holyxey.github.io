// В разработке

function atReferrerBack() {
    if (document.referrer.includes('adstarget')) {
        let referrerCreate = document.createElement('a')
        referrerCreate.href = 'https://adstarget.ru/web-development';
        referrerCreate.text = 'Назад';
        referrerCreate.style.cssText = `
            position: fixed;
            top: 1rem;
            left: 1rem;
            z-index: 995595607309;
            color: #222222!important;
            padding: .5rem 1rem;
            border: 1px solid #5ED7CF;
            background-color: #ffffff;
            border-radius: .3rem;
            text-decoration: none;
            font-weight: 100;
            font-family: sans-serif;
            `;
        document.body.append(referrerCreate)
    }
}

window.addEventListener("load", setTimeout(atReferrerBack, 1500))