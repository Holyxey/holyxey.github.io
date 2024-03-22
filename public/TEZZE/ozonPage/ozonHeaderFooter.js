document.addEventListener("DOMContentLoaded", function () {
    let removeElements = [
        document.querySelector('[data-elem-id="1689176995382"]'),
        document.querySelector('[data-elem-id="1689176995418"]'),
        document.querySelector('[data-elem-id="1689176995388"]'),
        document.querySelector('[data-elem-id="1689176995395"]'),
        document.querySelector('[data-elem-id="1689176995404"]'),
        document.querySelector('[data-elem-id="1689946071832"]'),
        document.querySelector('[data-elem-id="1689176995439"]'),
        document.querySelector('[data-elem-id="1689176995446"]'),
        document.querySelector('[data-elem-id="1689176995454"]'),
        document.querySelector('[data-elem-id="1689786169293"]'),
        document.querySelector('[data-elem-id="1689788273481"]'),
        document.querySelector('[data-elem-id="1689784432715"]'),
        document.querySelector('[data-elem-id="1689784432699"]'),
        document.querySelector('[data-elem-id="1689786114025"]'),
        document.querySelector('[data-elem-id="1689786126103"]'),
        document.querySelector('[data-elem-id="1689786968539"]'),
        document.querySelector('[data-elem-id="1689786169270"]'),
        document.querySelector('[data-elem-id="1689786169277"]'),
        document.querySelector('[data-elem-id="1689786169283"]'),
        document.querySelector('[data-elem-id="1689786169288"]'),
        document.querySelector('[data-elem-id="1689786283362"]'),
        document.querySelector('[data-elem-id="1689788273454"]'),
        document.querySelector('[data-elem-id="1690398509102"]'),
        document.querySelector('[data-elem-id="1689786401389"]'),
        document.querySelector('.t794__content'),
    ]
    for (let i = 0; i < removeElements.length; i++) {
        removeElements[i].remove()
    }

    // Мужское
    document.querySelector('[data-elem-id="1689176995400"]').addEventListener('click', function () {
        window.open('https://www.ozon.ru/brand/tezze-100143424/category/muzhskie-aksessuary-17063/?type=40559', '_blank')
    })
    // Женское
    document.querySelector('[data-elem-id="1689176995409"]').addEventListener('click', function () {
        window.open('https://www.ozon.ru/brand/tezze-100143424/category/zhenskie-aksessuary-17000/?type=40559', '_blank');
    })

    // Чистим ссылки на сайт
    document.querySelectorAll('[href="/"]').forEach(function (el) {
        el.href = 'https://www.ozon.ru/seller/tezze-1092754/products/?miniapp=seller_1092754'
        el.setAttribute('target', '_blank')
    })

    // Переводим с мужских на Озон
    document.querySelectorAll('[href="/muzhskie_remni"]').forEach(function (el) {
        el.href = 'https://www.ozon.ru/brand/tezze-100143424/category/muzhskie-aksessuary-17063/?type=40559'
        el.setAttribute('target', '_blank')
    })

    // Переводим с Женских на Озон
    document.querySelectorAll('[href="/zhenskie_remni"]').forEach(function (el) {
        el.href = 'https://www.ozon.ru/brand/tezze-100143424/category/zhenskie-aksessuary-17000/?type=40559'
        el.setAttribute('target', '_blank')
    })
})
