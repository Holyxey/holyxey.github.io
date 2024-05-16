let fetchCata;
let fetchCataCategories;
let fetchCataProducts;


//
let fetchCataGet = () => {
    fetch('https://store.tildaapi.com/api/getproductslist/?storepartuid=227151755511&recid=748764525&c=1715780724989&getparts=true&getoptions=true&slice=1&size=100')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            let s = JSON.stringify(data);
            let r = JSON.parse(s);

            fetchCata = r;
            fetchCataCategories = fetchCata.parts;
            fetchCataProducts = fetchCata.products;

            console.log('fetchCataCategories is:')
            console.log(fetchCataCategories)
            console.log('fetchCataProducts is:')
            console.log(fetchCataProducts)
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
window.onload = fetchCataGet;