function atAddUtmCases(el) {
    if (!el.href.includes('adstarget')) {
        const hasParams = el.href.includes('?');
        el.href += (hasParams ? '&' : '?') + 'utm_source=AdsTarget';
        el.setAttribute('onclick', 'atUtmCookie()')
    }
}
// document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a').forEach(el => atAddUtmCases(el));
// })