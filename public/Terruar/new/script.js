let staffMain = document.getElementById('staff-main');
let staffBefore = document.getElementById('staff-before');
function showStaff() {
    if (staffMain.style.display === 'none' && staffBefore.style.display === 'none') {
        staffMain.classList.add('show');
        staffMain.classList.remove('hide');
        staffBefore.style.display = 'block';
        staffMain.style.display = 'block';
        staffMain.style.cssText += 'margin: 5rem auto;';
    }
    else {
        staffMain.classList.add('hide');
        staffMain.classList.remove('show');
        staffBefore.style.display = 'none';
        staffMain.style.display = 'none';
    }
}