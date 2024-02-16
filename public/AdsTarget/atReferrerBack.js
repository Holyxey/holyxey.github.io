function atAddUtmCases(el) {
    if (!el.href.includes('adstarget')) {
        let utm = window.location.href
        const hasParams = el.href.includes('?');
        el.href += (hasParams ? '&' : '?') + 'utm_source=' + utm;
        el.setAttribute('onclick', 'atUtmCookie()')
    }
}
// document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a').forEach(el => atAddUtmCases(el));
// })