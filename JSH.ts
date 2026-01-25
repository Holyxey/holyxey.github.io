(() => {
  const paths = [
    'https://holyxey.github.io/JS.js',
    'https://holyxey.github.io/madeby.js',
  ];

  paths.forEach((p) => {
    if (!document.querySelector(`script[src="${p}"]`)) {
      const script = document.createElement('script');
      script.src = p;
      script.async = false;
      script.defer = true;
      script.type = 'module';
      document.head.append(script);
    }
  });
})();
