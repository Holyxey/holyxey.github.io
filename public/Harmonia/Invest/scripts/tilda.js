const findTildaCopy = setInterval(() => {
    if (document.querySelector('.t-tildalabel')) {
        document.querySelectorAll('.t-tildalabel').forEach(el => {
            el.remove()
        })
        clearInterval(findTildaCopy);
    }
}, 300)