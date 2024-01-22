let staffMain = document.getElementById('staff-before');
function showStaff() {
    if (staffMain.style.display == 'none') {
        staffMain.classList.add('show');
        staffMain.classList.remove('hide');
        staffMain.style.display = 'flex';
    }
    else {
        staffMain.classList.add('hide');
        setTimeout(staffHide, 500)
    }
}

function staffHide() {
    staffMain.classList.remove('show');
    staffMain.style.display = 'none';
}
let offerFirst = document.getElementById('offer_1');
offerFirst.setAttribute('onclick', 'showStaff()')
