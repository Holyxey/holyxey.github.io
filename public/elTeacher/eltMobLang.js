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
} else {};