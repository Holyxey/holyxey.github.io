const codaData = {
    token: '05896b56-c4ba-4618-9307-9ac5a3875310',
    link: 'https://coda.io/apis/v1/docs/MdTwSAMQdF/tables/grid-CUhNJsTdaX/',
    codaRender: 'c-lNBi3dv-2n',
    codaName: 'c-awgOeHjKtP',
    codaDescriptionS: 'c-boL7AGtvhE',
    codaPreviewLink: 'c-LnPhwjdRHB',
    codaResult: 'c-PnhNZ8-Kv9',
    codaProcess: 'c-TwV9kloKNk',
    codaFigma: 'c-5hcmiE_gHS',
}
//
const getData = async function (newLink) {
    let get;
    if (newLink) {
        get = newLink
    } else {get = codaData.link}
    const response = await fetch(get, {
        method: 'GET',
        headers: {'Authorization': `Bearer ${codaData.token}`},
    })
    if (!response.ok) {
        throw new Error(response.statusText)
    }

    return response.json()
}
const getList = async (type) => {
    const response = await getData(codaData.link + type);
    response.items.forEach(item => {
        if (item.id) {
            data[type].push(item)
        }
    })
}
//
const render = async () => {
    if (!document.querySelector('#projectsBlock')) {
        document.body.insertAdjacentHTML('beforebegin', `<section id="projectsBlock"></section>`)
    }
    const projectsBlock = document.getElementById('projectsBlock')

    for (const [item] of Object.entries(data)) {
        await getList(item)
    }
    data.rows.forEach(project => {
        if (!project.values[codaData.codaRender]) return // проверка на блок рендера
        projectsBlock.insertAdjacentHTML("beforeend", `<article id="${project.id}" class="project-card-preview">
            <div class="project-card-header-block">
                <h2 class="project-card-header-h2">${project.name}</h2>
            </div>
            <div class="project-card-image-block">
                <img src="${project.values[codaData.codaPreviewLink]}" alt="${project.values[codaData.codaDescriptionS]}" class="project-preview">
            </div>
            <div class="project-card-buttons-block">
            ${project.values[codaData.codaProcess] ? `<a class="project-button project-card-process" href="${project.values[codaData.codaProcess]}" target="_blank">Процесс</a>` : ''}
            ${project.values[codaData.codaResult] ? `<a class="project-button project-card-result" href="${project.values[codaData.codaResult]}" target="_blank">Результат</a>` : ''}
            ${project.values[codaData.codaFigma] ? `<a class="project-button project-card-figma" href="${project.values[codaData.codaFigma]}" target="_blank">Фигма</a>` : ''}
            </div>
        </article>`)
    })
}
const data = {
    rows: [],
    columns: [],
}
//

document.addEventListener('DOMContentLoaded', () => {
    render().then()
})