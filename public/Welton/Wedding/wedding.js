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

document.addEventListener('DOMContentLoaded', () => {
    const hlNode = document.querySelector('#weddingHighLight > ul');
    (()=>{
        const host = location.hostname.startsWith('en.') ? 'eng' : 'rus' // todo замени на en.
        highlights.forEach(highlight=>{
            hlNode.insertAdjacentHTML('beforeend', `<li>${highlight[host]}</li>`)
        })
    })()
})