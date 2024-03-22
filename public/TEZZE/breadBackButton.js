
if (document.querySelector('[data-elem-id="1690796453018"]') && document.referrer.includes('tezze.ru')) {
    let breadBackButton = document.querySelector('[data-elem-id="1690796453018"]');
    breadBackButton.style.cursor = 'pointer'
    breadBackButton.addEventListener('click', function() {
        history.back();
    });
}
if (document.querySelector('[data-elem-id="1690796453018"]') && !document.referrer.includes('tezze.ru')) {
    document.querySelector('[data-elem-id="1690796453018"]').style.opacity = '0'
}