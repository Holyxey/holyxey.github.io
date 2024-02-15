function reUTM(el) {
    if (!el.href.includes('holyxey')) {
        const hasParams = el.href.includes('?');
        el.href += (hasParams ? '&' : '?') + 'utm_source=Holyxey.com';
    }
}
    document.querySelectorAll('a').forEach(el => reUTM(el));