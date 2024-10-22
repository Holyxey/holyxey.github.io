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
const description = {
    eng: '3 500 RUR* At the reservation of Wedding package additional 20% discount for the room rate is applied',
    rus: 'Стоимость: 3500 руб.* При бронировании свадебного пакета предоставляется скидка 20% на проживание в любой категории номера',
}

document.addEventListener('DOMContentLoaded', () => {
    const hlNode = document.querySelector('#weddingHighLight > ul');
    (()=>{
        const host = location.hostname.startsWith('en.') ? 'eng' : 'rus'; // todo замени на en.
        highlights.forEach(highlight=>{
            hlNode.insertAdjacentHTML('beforeend', `<li>${highlight[host]}</li>`)
        })
        hlNode.insertAdjacentHTML('afterend', `<p>${description[host]}</p>`)
    })()
})