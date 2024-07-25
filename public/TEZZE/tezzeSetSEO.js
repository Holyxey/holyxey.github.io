const setSeo = () => {
    const findIt = setInterval(() => {
        if (document.location.href.includes('katalog') && !document.querySelector('h1')) {
            clearInterval(findIt);
            let title = document.querySelector('.t744__title').textContent
            let description = document.querySelector('.t744__descr').textContent
            console.log(title)
            console.log(description)
            document.body.insertAdjacentHTML("beforebegin",
                `
                <h1 style="height: 1px; overflow: hidden">${title}</h1>
                <p style="height: 1px; overflow: hidden">${description}</p>
                `)
        }
    }, 100)
}
setSeo()