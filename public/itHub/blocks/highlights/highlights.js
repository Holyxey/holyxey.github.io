(() => {
    const node = document.getElementById('highlights');
    const highlights = [
    {
        title: '<b>Диплом</b> гос. образца',
        isHigh: false,
        // image: 'https://static.tildacdn.com/tild3663-3133-4461-a435-663062323331/173f18cc-17ce-4763-9.png'
        image: 'https://ib-t.by/images/photo%20k%20kursam/diplom.png'
    },
    {
        title: 'Скидка <b>10%</b> до конца октября',
        isHigh: true,
    },
    {
        title: 'Стажировки и реальные заказы через <b>год обучения</b>',
        isHigh: false,
    }
]
    const render = (hl) => {
        if (!node.querySelector('ul'))
            node.insertAdjacentHTML('afterbegin',`<ul></ul>`)

        const ul = node.querySelector('ul')
        ul.insertAdjacentHTML('beforeend', `<li ${hl.isHigh ? 'class="isHigh"' : ''}>
${hl.image ? `<img alt="${hl.title}" src="${hl.image}">` : ''}
<p>${hl.title}</p>
</li>`)
    }
    highlights.forEach((hl) => render(hl))
})()