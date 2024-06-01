'use strict';

const coda = {
    cdtkn: '2ab68a ae-74,fd-4d,bf-,80 72-3f61d5a3,5ad4',
    codaBase: `https://coda.io/apis/v1/docs/daCySdTJjh/tables/grid-zUqe9oCSsO`,
    getCodaData: async function (fullLink, array) {
        let fetchLink = function () {
            if (fullLink) {
                return fullLink;
            }
            return coda.codaBase
        }
        const response = await fetch(fetchLink(), {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${coda.cdtkn.replaceAll(',','').replaceAll(' ','')}`,
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (array) {
            data.items.forEach((item) => {
                coda[array].push(item);
            })
            console.log(coda[array])
        }
        // console.log(coda.projectsPages)
        return data
    },
    whatTheColumn: function (id) {
        coda.columns.forEach(item => {
            if (item.id === id) {
                return item;
            }
        });
    },
    columns: [], // pushing in the this.getCodaData() when DOMLoaded
    rows: [], // pushing in the this.getCodaData() when DOMLoaded

    renderProjects: async function () {
        await coda.getCodaData(coda.codaBase + '/rows', 'rows')
        await coda.getCodaData(coda.codaBase + '/columns', 'columns')
        console.log('Data is ready, rendering...')

        if (!document.getElementById('codaProjectsExports')) {
            document.body.insertAdjacentHTML('beforeend', `<section id="codaProjectsExports" class="all-projects-block"></section>`)
        }
        const allProjectsBlock = document.getElementById('codaProjectsExports')
        let coolDown = 0;
        this.rows.forEach((row) => {
            allProjectsBlock.insertAdjacentHTML('beforeend',
                `<article class="project-block" id="${row.id}" style="animation: smoothShow ${coolDown}s ease-out forwards;">
                <div class="project-header-block">
                    <h3 class="project-header">${row.name}</h3>
                </div>
                ${row.images 
                    ? `<div class="project-preview">
                            <img src="" alt="">
                        </div>`
                    : ''}
                </article>`)
            coolDown += 0.3;
        })
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    coda.renderProjects().then()
})