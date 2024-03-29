// CASES PARAMETERS ==========
    let phCaseItem = document.getElementsByClassName('hx-at-photo-case-item')
    for (let i = 0; i < phCaseItem.length; i++) {
        phCaseItem[i].classList.add('case_' + (i + 1))
        phCaseItem[i].style.cssText += ('background-image: url("https://holyxey.github.io/public/AdsTarget/Photography/imgs/' + (i + 1) + '.webp")')
        phCaseItem[i].setAttribute('onclick', 'phCaseClick(this)')
    }

// CASES POPUP ==========
    function phCaseClick(el) {
        let image = el.style.backgroundImage;
        let imageUrl = image.slice(5, -2);
        let createPopupImg = document.createElement('img')
        let createPopupDiv = document.createElement('div')

        createPopupDiv.classList.add('hx-at-photo-popup-div')
        createPopupDiv.setAttribute('onclick', 'phClosePopup(this)')

        createPopupImg.classList.add('hx-at-photo-popup')
        createPopupImg.src = imageUrl;
        document.body.append(createPopupDiv)
        createPopupDiv.append(createPopupImg)

        document.documentElement.style.overflow = 'hidden'
    }
    function phClosePopup(el) {
        document.addEventListener("click", el.remove())
        document.documentElement.style.overflow = ''
    }