let mainImg = document.querySelector('.wbMainImg')
let listOfImg = document.querySelectorAll('.wbListImg')
let visibleCounter;
let arrowNext = document.querySelector('#wbListDown');
let arrowPrev = document.querySelector('#wbListUP');

if (location.href.includes('muzhskie_remni_flat_charcoal/ab') || location.href.includes('muzhskie_remni_Flat_charcoal/ab')) {
    //
    //

    mainImg.addEventListener('load', setImgListHeight)

    //
    //

    function setMainImgSrc() {
        mainImg.setAttribute('src', (document.querySelector('.wbListImgChosen').getAttribute('src')))
    }
    function setImgChosenClass(el) {
        if (el && document.querySelector('.wbListImgChosen')) {
            document.querySelector('.wbListImgChosen').classList.remove('wbListImgChosen')
            el.classList.add('wbListImgChosen')
        } if (el && !document.querySelector('.wbListImgChosen')) {
            el.classList.add('wbListImgChosen')
        }
        setVisibleCounter()
        setMainImgSrc()
        if (visibleCounter === '0')
            arrowPrev.style.display = 'none'
        else arrowPrev.style.display = ''
        if (visibleCounter === (listOfImg.length - 1).toString())
            arrowNext.style.display = 'none'
        else arrowNext.style.display = ''
    }
    function setVisibleCounter() {
        visibleCounter = document.querySelector('.wbListImgChosen').getAttribute('imgListCounter')
    }
    function setImgListHeight() {
        document.querySelector('.wbList').style.maxHeight = (mainImg.clientHeight + 'px')
        document.querySelector('.wbList').style.height = (mainImg.clientHeight + 'px')
    }
    function setImgListPosition() {
        let imgChosenTop = document.querySelector('.wbListImgChosen').getBoundingClientRect().top
        document.querySelector('.wbList').scrollTo({
            top: imgChosenTop,
            left: 0,
            behavior: "smooth",
        });
    }
    function clickArrowNext() {
        let chosenEl = document.querySelector('.wbListImgChosen')
        let chosenCounter = Number(chosenEl.getAttribute('imglistcounter'))
        if (document.querySelector('[imglistcounter="' + (chosenCounter + 1) +'"]')) {
            chosenEl.classList.remove('wbListImgChosen')
            document.querySelector('[imglistcounter="' + (chosenCounter + 1) +'"]').classList.add('wbListImgChosen')
        }
        setImgChosenClass()
        setImgListPosition()
    }
    function clickArrowPrev() {
        let chosenEl = document.querySelector('.wbListImgChosen')
        let chosenCounter = Number(chosenEl.getAttribute('imglistcounter'))
        if (document.querySelector('[imglistcounter="' + (chosenCounter - 1) +'"]')) {
            chosenEl.classList.remove('wbListImgChosen')
            document.querySelector('[imglistcounter="' + (chosenCounter - 1) +'"]').classList.add('wbListImgChosen')
        }
        setImgChosenClass()
        setImgListPosition()
    }

    //
    //

    for (let i = 0; i < listOfImg.length; i++) {
        listOfImg[i].setAttribute('onmouseenter', 'setImgChosenClass(this)')
        listOfImg[i].setAttribute('imgListCounter', i)
    }
    arrowNext.setAttribute('onclick', 'clickArrowNext()')
    arrowPrev.setAttribute('onclick', 'clickArrowPrev()')
    window.addEventListener("resize", setImgListHeight)
    // document.querySelector('#rec716277636').style.display = 'none'
    document.querySelector('.js-product').style.display = 'none'

    //
    //

    setImgChosenClass()
    setImgListPosition()
}