const highlights = [
    {
        eng: 'Complement from Executive Chief – fruit plate and dessert, accompanied by a bottle of sparkling wine',
        res: 'Комплемент от бренд-шефа ресторана: фруктово-десертный набор и игристое вино'
    },
    {
        eng: 'In-room breakfast (special menu)',
        res: 'Поднятие завтрака в номер ( по специальному меню )'
    },
    {
        eng: 'Decoration of the room with rose petals',
        res: 'Украшение номера лепестками'
    },
    {
        eng: 'Mr. & Mrs. bathrobes',
        res: 'Халаты Mr & Mrs'
    },
]

document.addEventListener('DOMContentLoaded', () => {
    const hlNode = document.querySelector('#weddingHighLight > ul'); // todo замени на en.
    (()=>{
        const host = location.hostname.startsWith('local') ? 'eng' : 'rus'
        highlights.forEach(highlight=>{
            hlNode.insertAdjacentHTML('beforeend', `<li>${highlight[host]}</li>`)
        })
    })()
})