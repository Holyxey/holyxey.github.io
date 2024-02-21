document.addEventListener("DOMContentLoaded", function() {
    // Синхронизация ввода
    document.getElementById("companyName").addEventListener("input", function() {
        document.getElementById("input_1708505224926").value = this.value;
    });

    document.getElementById("review").addEventListener("input", function() {
        document.getElementById("input_1708505251392").value = this.value;
    });

    // Имитация отправки второй формы при отправке первой
    document.getElementById("reviewForm").addEventListener("submit", function(e) {
        document.querySelector('#form709442463 [type="submit"]').click();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelector('#form709442463 [type="submit"]')
    button.classList.add('hx-at-btn-p')
});