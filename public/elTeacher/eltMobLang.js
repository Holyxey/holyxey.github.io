let mobMenuBlock = document.getElementById('mobLang');
let mobLinks = document.getElementsByClassName('mobLangLink');

for (let i = 0; i < mobLinks.length; i++) {
    setTimeout(function (){
        mobLinks[i].classList.add("linkShow");
    }, (100 + (i * 1000)));
}

// Добавим отступов в мобильной версии
let footerCheck = document.getElementsByClassName('mainFooterBlock');
function footerPadding() {
    footerCheck[0].style.paddingBottom = '80px';
}
if (document.documentElement.clientWidth < 600) {
    footerPadding()
} else {}



//////// крепим навбар
setTimeout(function () {
    document.querySelector('.w-embed').style.position = 'sticky';
    document.querySelector('.w-embed').style.position = '-webkit-sticky';
    document.querySelector('.w-embed').style.top = '0';
    document.querySelector('.w-embed').style.zIndex = '100500';
}, 3000)
