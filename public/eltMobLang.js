let mobMenuBlock = document.getElementById('mobLang');
let mobLinks = document.getElementsByClassName('mobLangLink');
let menuButtonHolyxey = document.querySelectorAll('data-w-id'["95b06c38-efdf-9b0b-0d7c-dfd5ca0d96b3"]);


for (let i = 0; i < mobLinks.length; i++) {
    mobLinks[i].style.display = 'none';
    mobLinks[i].style.opacity = '0';
}

function eltMobLang() {
    let i = 0;
            setInterval(function (){
                // mobLinks[i].style.opacity = '0';
                mobLinks[i].style.display = 'block';
                mobLinks[i].classList.add("linkShow");
                i++;
            }, 400);
}
//
eltMobLang();