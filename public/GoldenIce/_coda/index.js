const readToken = '4d68a702-50a9-4a9f-9cb7-bcc1cbaa1387'
const docId = 'tHfdwb1AeV'

const getCoda = async (
        link = `https://coda.io/apis/v1/docs/${docId}/tables`,
        headers = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${readToken}`
            },
        },
        params = {}
    ) => {
    try {
        const res = await fetch(link, headers, params)
        return await res.json()
    }
    catch (e) {
        console.log(e)
    }
}

const renderArenas = (allTables) => {

}

let tablesList = {
}

document.addEventListener("DOMContentLoaded", async () => {
    let arenas = getCoda(`https://coda.io/apis/v1/docs/${docId}/pages/canvas-nmHTwUGvGH`)
    let coaches = getCoda(`https://coda.io/apis/v1/docs/${docId}/pages/canvas-h69xwckvd6`)
    let allTables = getCoda(`https://coda.io/apis/v1/docs/${docId}/tables`)
    await renderArenas(allTables)
})