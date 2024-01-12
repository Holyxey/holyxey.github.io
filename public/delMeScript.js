let tableXO = document.getElementById('XO');
let placesXO = document.getElementsByClassName('placeXO');

let firstPlayer = document.getElementById('firstPlayer');
let secondPlayer = document.getElementById('secondPlayer');

let turn = 1;

for (let i = 0; i < placesXO.length; i++) {
    placesXO[i].setAttribute('onclick', 'placeClick(this)')
}

function placeClick(el)  {
    if (el.innerHTML === '') {
        if (turn === 1) {
            turn = 2;
            el.innerHTML = 'X';
        } else {
            turn = 1;
            el.innerHTML = 'O';
        }
    }
    check();
}

function check() {
    
}