window.addEventListener("load", function () {
    if (!localStorage.getItem('resortTax')) {

        let resortTax = document.createElement('section')
        resortTax.id = 'resortTax'
        let taxText = document.createElement('p')
        taxText.classList.add('taxText')
        taxText.textContent = 'В соответствии с Законом Санкт-Петербурга от 29.06.2023 № 419-81 «О введении на территории Санкт-Петербурга курортного сбора», с 01 апреля 2024 г. каждый совершеннолетний гость обязан произвести оплату курортного сбора в размере 100 рублей в сутки. В случае, если гость отказывается от уплаты курортного сбора, он должен подписать документ «Отказ от оплаты».'
        let taxOk = document.createElement('button')
        taxOk.id = 'taxOk'
        taxOk.textContent = 'OK'

        document.body.prepend(resortTax)
        resortTax.prepend(taxText)
        resortTax.append(taxOk)

        function hideTax() {
            localStorage.setItem('resortTax', 'showed')
            document.querySelector('#resortTax').style.cssText += 'animation: resortTaxHide 1s ease-in-out forwards'
            setTimeout(function () {
                document.querySelector('#resortTax').remove()
            }, 1000)
        }

        document.querySelector('#taxOk').addEventListener('click', hideTax)
    }
})

function checkModuleInput() {
    // if (document.querySelector('input[ng-model="ngModel"]')) {
    if (document.querySelector('.x-ci__row')) {
        clearInterval(checkIntervalModule)
        inputNameModule = document.querySelector('input[ng-model="ngModel"]')
        console.log('Поле найдено')
        return(inputNameModule);
    } else {
        console.log('Поле не найдено')
        return(inputNameModule);
    }
}
let inputNameModule;
const checkIntervalModule = setInterval(checkModuleInput, 3000)