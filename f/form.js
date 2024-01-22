let formLabels = document.querySelectorAll('input');
for (let i = 0; i < formLabels.length; i++) {
    if (formLabels[i].hasAttribute('required')) {
        formLabels[i].classList.add('form_required')
    }
}


//
let dateLabel = document.getElementById('date');
let labelHeight = formLabels[0].clientHeight.toString();
dateLabel.style.height = (labelHeight + 'px');
dateLabel.style.padding = ('0 .5rem');


//