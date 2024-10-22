const highlights = [
    {
        eng: 'Complement from Executive Chief – fruit plate and dessert, accompanied by a bottle of sparkling wine',
        rus: 'Комплемент от бренд-шефа ресторана: фруктово-десертный набор и игристое вино'
    },
    {
        eng: 'In-room breakfast (special menu)',
        rus: 'Поднятие завтрака в номер ( по специальному меню )'
    },
    {
        eng: 'Decoration of the room with rose petals',
        rus: 'Украшение номера лепестками'
    },
    {
        eng: 'Mr. & Mrs. bathrobes',
        rus: 'Халаты Mr & Mrs'
    },
]
const descriptions = [
    {
        eng: 'Special price for 1 hour exclusive SPA rent - 2 000 RUR',
        rus: 'Специальная стоимость аренды SPA на 1 час под закрытие - 2000 руб.',
    },
    {
        eng: '4 000 RUR* At the reservation of Wedding package additional 20% discount for the room rate is applied',
        rus: 'Стоимость: 4000 руб.* <i>При бронировании свадебного пакета предоставляется скидка 20% на проживание в любой категории номера</i>',
    },
]

document.addEventListener('DOMContentLoaded', () => {
    const hlNode = document.querySelector('#weddingHighLight > ul');
    (() => {
        const host = location.hostname.startsWith('en.') ? 'eng' : 'rus'; // todo замени на en.
        highlights.forEach(highlight => {
            hlNode.insertAdjacentHTML('beforeend',
                `${highlight[host] ? `<li>${highlight[host]}</li>` : ''}`
            )
        })
        descriptions.forEach(descr => {
            hlNode.insertAdjacentHTML('afterend',
                `${descr[host] ? `<p>${descr[host]}</p>` : ''}`
            )
        })
    })()
})