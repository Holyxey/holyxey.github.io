const codaAdsTarget = {
    docID: 'h2vJEbQ8Ep',
    readToken: '2608dfd9-ff62-4fca-bcca-a690eb6280c1',
    link: 'https://coda.io/apis/v1/docs/',
    allTables: [],
    targeting: {
        prices: {
            pageID: 'canvas-kKHitIlYbW'
        },
    },
    getTables: async () => {
        try {
            const res = await fetch(`https://coda.io/apis/v1/docs/${codaAdsTarget.docID}/tables`, {
                method: 'GET',
                headers: {'Authorization': `Bearer ${codaAdsTarget.readToken}`},
            })
            const data = await res.json()
            codaAdsTarget.allTables = data.items
            for (let table in codaAdsTarget.allTables) {
                console.log(codaAdsTarget.allTables[table].id)
            }
        }
        catch (e) {
            console.log(e.error);
        }
    },
}

document.addEventListener('DOMContentLoaded', () => {
    codaAdsTarget.getTables()
        .then()
})