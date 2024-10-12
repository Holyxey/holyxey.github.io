const whatIsMax = function(img) {
    if (img.width / img.height <= img.parentNode.clientWidth / img.parentNode.clientHeight) {
        img.style.maxHeight = 'unset'
        img.style.maxWidth = '100%'
    }
    else {
        img.style.maxHeight = '100%'
        img.style.maxWidth = 'unset'
    }
}