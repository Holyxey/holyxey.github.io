
let linersCounter = document.getElementsByClassName('hx-limb-liners-point')


for (let i = 0; i < linersCounter.length; i++) {

    const newDiv = document.createElement("div");
    newDiv.classList.add('hx-limb-liners-point-before');
        setTimeout(function () {
            newDiv.classList.add('anishow');
        }, (300 * i))
    newDiv.innerHTML = (i + 1);
    linersCounter[i].appendChild(newDiv);

}