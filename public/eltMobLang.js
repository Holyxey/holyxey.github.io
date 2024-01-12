let mobMenuBlock = document.getElementById('mobLang');
let mobLinks = document.getElementsByClassName('mobLangLink');

for (let i = 0; i < mobLinks.length; i++) {
    setTimeout(function (){
        mobLinks[i].classList.add("linkShow");
    }, (100 + (i * 1000)));
}