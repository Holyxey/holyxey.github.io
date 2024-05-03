const showCart = () => {
    clearInterval(checkButton);

    let button = document.querySelector('.t706__carticon')
    button.style.cssText += `display: block!important; opacity: 0!important;`

    setCartStyles();
    button.click();
    window.addEventListener("load", () => {
        button.style.cssText += `display: block!important; opacity: 0!important;`

        // Удали условия ниже перед пушем
            if (document.querySelector('.t762__btn')) {
                document.querySelector('#rec730237440').style.cssText += `opacity: 0!important`
                document.querySelector('.t762__btn').click()
            }
        //

        setCartStyles()
        button.click();
    })
}
const setCartStyles = () => {
    let cartContent = document.querySelector('.t706__sidebar_showed')
    let headerPCHeight = document.querySelector('.t396__artboard').getBoundingClientRect().height + 20

    let cartBlock = document.querySelector('.t706__sidebar')
    let cart = document.querySelector('.t706__sidebar-content')
    let cartHeaderMob = document.querySelector('.t706__cartpage-top')
    let cartHeaderPC = document.querySelector('.t706__sidebar-top')
    let cartPurchaseButton = document.querySelector('.t706__sidebar-bottom')
    let cartProductList = document.querySelector('.t706__sidebar-products')
    let cartProductPrice = document.querySelector('.t706__sidebar-prodamount-wrap')

    if (cartBlock) {
        cart.style.cssText += `
            transition: unset;
            `
    }
    if (cart) {
        cart.style.cssText += `
            max-width: unset;
            `
    }
    if (cartHeaderMob && cartHeaderPC) {
        cartHeaderMob.style.cssText += 'display: none!important';
        cartHeaderPC.style.cssText += 'display: none!important';
    }
    if (cartPurchaseButton && window.innerWidth > 800) {
        cartPurchaseButton.style.cssText += `
            max-width: 50%!important;
            margin: 0 auto!important;
            `
        cartProductList.style.cssText += `
            max-width: 50%!important;
            margin: 0 auto!important;
            `
        cartProductPrice.style.cssText += `
            max-width: 50%!important;
            margin: 0 auto!important;
            `
    }
}
const checkButton = setInterval(() => {
    document.querySelector('.t706__carticon') ? showCart() : console.log('Страница загружена')
}, 200)