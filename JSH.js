(() => {
    const path = 'https://holyxey.github.io/JS.js'
    if (!document.querySelector(`script[src="${path}"]`)) {
        const script = document.createElement('script');
        script.src = path;
        script.async = false;
        document.head.append(script);
    }
})();