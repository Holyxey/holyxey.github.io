let accordion = document.querySelector('[id^="accordion4_"] > div');
if (accordion) {
    accordion.firstChild.remove()

    let newInstruction = document.createElement('article')
    newInstruction.innerText = 'asd'
    accordion.prepend(newInstruction)
}