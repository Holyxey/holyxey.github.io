let formLabels = document.querySelectorAll('input');
for (let i = 0; i < formLabels.length; i++) {
    if (formLabels[i].hasAttribute('required')) {
        formLabels[i].classList.add('form_required')
    }
}