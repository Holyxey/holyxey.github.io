const readToken = '4d68a702-50a9-4a9f-9cb7-bcc1cbaa1387'
const docId = 'tHfdwb1AeV'
const arenasTable = 'grid-DAuAgsnILS'
const redStar = 'i-od8z3Mo2Xc'

const LINK_TABLES = `https://coda.io/apis/v1/docs/${docId}/tables`
const headers = {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${readToken}`
    },
}

const allArenas = async () => {
    try {
        const response = await fetch(`https://coda.io/apis/v1/docs/tHfdwb1AeV/tables/grid-DAuAgsnILS/rows?valueFormat=rich&useColumnNames=true`, headers)
        return await response.json()
    }
    catch (e) {
        console.log(e.message)}
}
const arenasList = await allArenas()

arenasList.items.forEach((el) => {
    console.log(el.values['Галерея'])
})