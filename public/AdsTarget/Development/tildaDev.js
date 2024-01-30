// **


document.addEventListener("DOMContentLoaded", atTildaForm)

function atTildaForm(el) {
    let form = document.getElementById('consultation');

    let h1 = form.querySelector('.h1');
    let h4 = form.querySelector('.h4');
    let inputName = form.querySelector("input[name='cName']");
    let inputTel = form.querySelector("input[name='cTel']");
    let inputSubmit = form.querySelector("input[type='submit']");

    console.log(form);
    console.log(h1);
    console.log(h4);
    console.log(inputName);
    console.log(inputTel);
    console.log(inputSubmit);
}

function atTildaCopyStyle(from, to) {
    window.getComputedStyle(el);
}