const readToken = '4d68a702-50a9-4a9f-9cb7-bcc1cbaa1387'
const docId = 'tHfdwb1AeV'

export const LINK_TABLES = `https://coda.io/apis/v1/docs/${docId}/tables`
export const headers = {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${readToken}`
    },
}
export const params = {
    // valueFormat: 'rich',
    // useColumnNames: true,
    // sortBy: 'natural',
}
export const findLocalTable = async (tableId) => {
    const table = JSON.parse(localStorage.getItem(tableId))
    if (table) {
        if (new Date().getTime() - table.timestamp > 3600000) {
            console.log(`Обновляю "${table.tableInfo.name}"`)
            localStorage.clear(tableId)
            return
        }
    }
    return table
}

const getByLink = async (link, headers) => {
    try {
        const res = await fetch(link, headers)
        return await res.json()
    } catch (e) {return "Ошибка getByLink: " + e.message}
}
export const getTables = async (LINK_TABLES, headers, tableId, rich) => {
    try {
        const localTable = await findLocalTable(tableId)

        const res = await fetch(LINK_TABLES, headers)
        let allTables = await res.json()

        if (tableId && !localTable) {
            for (let i = 0; i < allTables.items.length; i++) {
                if (allTables.items[i].id === tableId) {
                    const table = allTables.items[i]
                    const tableRows = await getByLink(`${table.href}/rows?${rich}`, headers)
                    const tableColumns = await getByLink(`${table.href}/columns?${rich}`, headers)
                    let tableToLocal = {
                        tableInfo: table,
                        tableRows: tableRows,
                        tableColumns: tableColumns,
                        timestamp: new Date().getTime()
                    }
                    localStorage.setItem(allTables.items[i].id, JSON.stringify(tableToLocal))
                    return {table, tableRows, tableColumns}
                }
            }
        } else if (localTable) {
            const table = localTable.tableInfo
            const tableRows = localTable.tableRows
            const tableColumns = localTable.tableColumns
            return {table, tableRows, tableColumns}
        } else {
            return allTables.items
        }
    }
    catch (e) {
        console.log(e)
        return e.message
    }
}


// tst
const getTime = (rowTimeValue) => {
    if (rowTimeValue && rowTimeValue.includes('1899'))
        return  rowTimeValue.slice(11, 16)
    else return rowTimeValue
}
const getTable = async (tableId, rich) => {
    return await getTables(LINK_TABLES, headers, tableId.toString(), rich ? 'valueFormat=rich' : '')
}
const renderRow = (rowsArray, whereTo) => {
    rowsArray.sort((a,b) => {
        if (a.index > b.index) return -1;
        if (a.index < b.index) return 1;
        return 0;
    })
    for (let i = 0; i < rowsArray.length; i++) {

        // console.log(i, '-', index)
        const id = rowsArray[i].id
        const values = rowsArray[i].values

        setTimeout(() => {
            whereTo.insertAdjacentHTML('afterbegin',
                `<tr style="animation: smoothShowTD .5s ease-out" id="${id}"></tr>`)

            const trIs = whereTo.querySelector(`#${id}`)

            for (const val in values) {
                trIs.insertAdjacentHTML('beforeend',
                    `<tr><td>
                    ${getTime(values[val].toString())}
                    </td></tr>`)
            }
        }, i*50)
    }
}
const renderColumns = (columnsArray, whereTo) => {
    columnsArray.sort((a,b) => {
        if (a.index > b.index) return -1;
        if (a.index < b.index) return 1;
        return 0;
    })
    for (let i = 0; i < columnsArray.length; i++) {
        const field = columnsArray[i].name

        // const values = columnsArray[i].format.table.name
        whereTo.insertAdjacentHTML('beforeend',
            `<td>${field}</td>`)
    }
}

const tablesToSync = document.querySelectorAll('.newTables')
for (let i = 0; i < tablesToSync.length; i++) {
    (async () => {
        const el = tablesToSync[i]
        const id = el.getAttribute('id')
        if (id === 'grid-tW6eqJBP-m' || id === 'grid-tW6eqJBP-m') { return null }
        const isRich = el.getAttribute('data-rich')
        const thead = el.querySelector('table > thead > tr')
        const tbody = el.querySelector('table > tbody')
        console.log(id)

        const table = await getTable(id, isRich ? 'true' : false);

        const columns = table.tableColumns.items
        renderColumns(columns, thead)
        el.querySelector('.loadingBlock').remove()
        const rows = table.tableRows.items
        renderRow(rows, tbody)
    })()
}