// 'use strict';
const videoPlayBackToken = ''
const whatPageIs = {
    mainPageBlock: document.getElementById('multi-page'),
    data: document.getElementById('multi-page').getAttribute('data-page')
}
const lists = {
    servicesList: [
        {
            id: 'bath',
            title: 'Баня',
            header: '',
            price: '',
            shortDescr: 'от 1500 р',
            fullDescr: '',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild3933-6233-4938-b230-643539623531/-/format/webp/511.jpg', '', ''],
        },
        {
            id: 'bicycle',
            title: 'Велосипед',
            header: '',
            price: '',
            shortDescr: '400 р/час',
            fullDescr: '',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild6465-6438-4934-b630-616231316662/-/format/webp/image.png', '', ''],
        },
        {
            id: 'xbox',
            title: 'Xbox',
            header: '',
            price: '',
            shortDescr: 'от 900 р',
            fullDescr: '',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild3630-3036-4563-b134-326462623439/-/format/webp/jose-gil-2pNdTBn4C7U.jpg', '', ''],
        },
        {
            id: 'bathvat',
            title: 'Банный чан',
            header: '',
            price: '',
            shortDescr: 'от 1500 р',
            fullDescr: '',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild3435-6233-4833-b861-366330383062/-/format/webp/KIR_5744_1.jpg', '', ''],
        },
        {
            id: 'projector',
            title: 'Проектор',
            header: '',
            price: '',
            shortDescr: 'от 700 р',
            fullDescr: '',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild3337-3031-4236-a638-363235343733/-/format/webp/600A3332.png', '', ''],
        },
        {
            id: 'quadbike',
            title: 'Квадроцикл',
            header: '',
            price: '',
            shortDescr: 'от 3000 р',
            fullDescr: '',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild6230-3462-4431-b436-386138613338/-/format/webp/photo.jpg', '', ''],
        },
        {
            id: 'jeeptour',
            title: 'Джип-тур',
            header: '',
            price: '',
            shortDescr: '8000 за 3 часа',
            fullDescr: '',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild3264-6431-4131-a234-663461616431/-/format/webp/c45331ec-7b02-4c17-8.jpg', '', ''],
        },
        {
            id: 'horseriding',
            title: 'Конные прогулки',
            header: '',
            price: '',
            shortDescr: 'Рядом с нами',
            fullDescr: '',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild3433-3561-4364-b363-643465653962/-/format/webp/tim-schmidbauer-7RdZ.jpg', '', ''],
        }
    ],
    offersList: [],
    other: [
        {
            id: 'online',
            title: 'Терруар онлайн',
            header: '',
            price: '',
            shortDescr: 'Трансляция с камеры нашей территории, и прогноз погоды на пару дней',
            fullDescr: '',
            benefits: ['', '', ''],
            images: ['https://optim.tildacdn.com/tild3530-3138-4862-a135-633935343735/-/format/webp/heroImg.png', '', ''],
            popUp: true,
            readMoreLink: '',
            readMoreText: 'Подробнее',
        },
        {
            id: 'restaurant',
            title: 'Ресторан',
            header: '',
            price: '',
            shortDescr: 'Ресторан в 3х минутах ходьбы, со специальным предложением для наших гостей',
            fullDescr: '',
            benefits: ['', '', ''],
            images: ['https://optim.tildacdn.com/tild6336-3166-4539-b933-646265376165/-/format/webp/DSC_4878-2_.JPG', '', ''],
            popUp: true,
            readMoreLink: '',
            readMoreText: 'Подробнее',
        },
        {
            id: 'team',
            title: 'Наша команда',
            header: '',
            price: '',
            shortDescr: 'Небольшие рассказы о каждом из нас!',
            fullDescr: '',
            benefits: ['', '', ''],
            images: ['https://optim.tildacdn.com/tild6336-3166-4539-b933-646265376165/-/format/webp/DSC_4878-2_.JPG', '', ''],
            popUp: false,
            readMoreLink: '',
            readMoreText: 'Подробнее',
        },
    ]
}
const styleClassLists = [
    {
        needHeader: true,
        needCounter: true,
        needToSmooth: true,
        section: 'classic-sec',
        headBlock: 'classic-hb',
        itemsParent: 'classic-ip',
        article: 'classic-art',
        artHeads: 'classic-art-hb',
        artHeader: 'classic-art-header',
        artDescr: 'classic-art-descr',
        artImgBlck: 'classic-art-imgBlck',
        artImg: 'classic-art-img',
        artLink: 'classic-art-link',
    }, // design #1
    {
        needHeader: true,
        needCounter: true,
        needToSmooth: true,
        section: 'classic-sec classic-sec-second',
        headBlock: 'classic-hb classic-hb-second',
        itemsParent: 'classic-ip classic-ip-second',
        article: 'classic-art classic-art-second',
        artHeads: 'classic-art-hb classic-art-hb-second',
        artHeader: 'classic-art-header classic-art-header-second',
        artDescr: 'classic-art-descr classic-art-descr-second',
        artImgBlck: 'classic-art-imgBlck classic-art-imgBlck-second',
        artImg: 'classic-art-img classic-art-img-second',
        artLink: 'classic-art-link classic-art-link-second',
    } // design #2
]
const whatIsMax = function(img) {
    img.width > img.height ? img.style.height = '120%' : img.style.width = '120%'
}
const needToRender = function (where) {
    const sections = document.querySelectorAll('[data-need-to-render]')

    const renderNow = function (where, what, design) {
        where.classList = `${design.section}`;
        if (design.needHeader) {
            where.insertAdjacentHTML('afterbegin',
                `<div class="${design.headBlock}" ${design.needCounter ? 'data-counter-where' : ''}>
                    <h3>${where.title}</h3>
                </div> 
                <div class="${design.itemsParent}" 
                    ${design.needToSmooth ? 'data-smooth-mobile' : ''}
                    ${design.needCounter ? 'data-counter-scrollIt' : ''}
                    >
                </div>
                `)
        } else {
            where.insertAdjacentHTML('afterbegin',
                `
                <div class="${design.itemsParent}" 
                    ${design.needToSmooth ? 'data-smooth-mobile' : ''}
                    ${design.needCounter ? 'data-counter-scrollIt' : ''}
                    >
                </div>
                `)
        }// Рендерим (или нет) заголовок из аттрибута тайтл из "where"

        const itemsParent = where.querySelector(`[class="${design.itemsParent}"]`)
        what.forEach(function (item) {
            itemsParent.insertAdjacentHTML('beforeend',
                `
                <article class="${design.article}"
                ${item.popUp ? `data-popup="${item.id}" data-header="${item.title}"` : ''}
                ${design.needCounter ? 'data-counter-item' : ''}>
                    ${design.artHeads 
                    ? `<div class="${design.artHeads}">
                            <h4 class="${design.artHeader}">${item.title}</h4>
                            <p class="${design.artDescr}">${item.shortDescr}</p>
                        </div>` 
                    : ''}
                    ${design.artImgBlck 
                    ? `<div class="${design.artImgBlck}"><img onload="whatIsMax(this)" class="${design.artImg}" src="${item.images[0]}" alt="${item.shortDescr}"></div>` 
                    : ''}
                    ${design.artLink 
                    ? `<a class="${design.artLink}" ${item.readMoreLink ? `href="${item.readMoreLink}"` : ''}>${item.readMoreText}</a>` 
                    : ''}
                </article>
                `)

            console.log(`.."${item.id}" —OK`)
        })
    }
    const getData = function (section) {
        const data = section.getAttribute('data-need-to-render')
        const title = section.getAttribute('title')
        const setups = data.split(',')
        const listName = setups[0]
        const styleNumber = setups[1] - 1
        const design = styleClassLists[styleNumber]
        const elements = lists[listName]

        console.log(`Rendering "${title}":"${listName}, ${styleNumber + 1}"...`)
        renderNow(section, elements, design)

    }
    sections.forEach(section => {
        getData(section)
    })
}

const terruarCatalogue = {
    link: 'https://store.tildaapi.com/api/getproductslist/?storepartuid=513452425241&recid=752306605&c=1716436482010&getparts=true&getoptions=true&slice=1&size=36&projectid=5131025',
    catalog: {},
    get parts() {
        return this.catalog.parts;
    },
    get products() {
        return this.catalog.products;
    },
    getProductId: (product, string) => {
        if (string)
            return product.uid.toString();
        return Number(product.uid)
    },
    getProductTitle: (product, string) => {
        if (string)
            return product.title.toString();
        return product.title
    },
    getProductPart: (product, string) => {
        if (string)
            return product.partuids.slice(1, -1)
        return Number(product.partuids.slice(1, -1))
    },
    getProductPrice: (product, string) => {
        if (string)
            return product.price
        return Math.floor(product.price)
    },
    getProductDescription: (product, string) => {
        if (string)
            return product.descr.toString()
        return product.descr
    },
    renderCategories: () => {
        if (document.getElementById('terruarMenu')) {
            let menu = document.getElementById('terruarMenu');
            if (terruarCatalogue.parts) {
                terruarCatalogue.parts.forEach(part => {
                    menu.insertAdjacentHTML('beforeend', `<div class="menuCategory" id="${part.uid}"><h4 class="categoryHeader">${part.title}</h4></div>`)
                })
            }
        } else {console.log('Не обнаружен <div id="terruarMenu"></div>')}
    },
    renderProducts: () => {
        if (document.getElementById('terruarMenu')) {
            let menu = document.getElementById('terruarMenu');
            if (terruarCatalogue.products) {
                terruarCatalogue.products.forEach(product => {
                    let partID = terruarCatalogue.getProductPart(product)
                    document.getElementById(partID).insertAdjacentHTML("beforeend",
                        `
<div class="product" id="${terruarCatalogue.getProductId(product)}">
                        ${product.title
                            ? `<p class="productTitle">${terruarCatalogue.getProductTitle(product)}</p>`
                            : ''}
                        ${product.descr
                            ? `<p class="productDescription">${terruarCatalogue.getProductDescription(product)}</p> `
                            : ''}
                        ${product.price
                            ? `<p class="productPrice">${terruarCatalogue.getProductPrice(product)} p.</p> `
                            : ''}
</div>
`)
                })
            }
        } else {
            console.log('Не обнаружен <div id="terruarMenu"></div>')}
    },
    getCatalogues: async function() {
        try {
            const response = await fetch(this.link);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            if (response.ok) {
                terruarCatalogue.catalog = await response.json();
            }
        } catch (error) {
            // console.error('Error fetching catalog:', error)
        }
    },
}
const restaurantGallery = {
    horizontal: [
        "https://optim.tildacdn.com/tild3862-3466-4135-a662-666565663861/-/format/webp/DSC_4429-2_.JPG",
        "https://optim.tildacdn.com/tild3437-3138-4262-b363-626433353334/-/format/webp/DSC_4434-2_.JPG",
        "https://optim.tildacdn.com/tild6664-3532-4735-b462-633139333135/-/format/webp/DSC_4440-2_.JPG",
        "https://optim.tildacdn.com/tild3433-3235-4663-b232-643536333365/-/format/webp/DSC_4443-2_.JPG",
        "https://optim.tildacdn.com/tild6162-6562-4463-a437-636434366233/-/format/webp/DSC_4445-2_.JPG",
        "https://optim.tildacdn.com/tild6336-3166-4539-b933-646265376165/-/format/webp/DSC_4878-2_.JPG",
        "https://optim.tildacdn.com/tild6633-3865-4561-b134-376231613366/-/format/webp/DSC_4575-2_.JPG",
        "https://optim.tildacdn.com/tild3661-6230-4561-a565-376134643135/-/format/webp/DSC_4453-2_.JPG",
        "https://optim.tildacdn.com/tild6334-3865-4563-b063-353037343638/-/format/webp/DSC_4902-2_.JPG",
        "https://optim.tildacdn.com/tild3134-3434-4562-a631-316133326565/-/format/webp/DSC_4454-2_.JPG",
        "https://optim.tildacdn.com/tild3837-3564-4233-b164-306238613366/-/format/webp/DSC_4638-2_.JPG",
        "https://optim.tildacdn.com/tild6635-3839-4761-a336-323563613861/-/format/webp/DSC_4462-2_.JPG",
        "https://optim.tildacdn.com/tild6538-3838-4332-b963-333761386339/-/format/webp/DSC_4611-2_.JPG",
    ],
    vertical: [
        "https://optim.tildacdn.com/tild6234-3262-4536-a465-373837626336/-/format/webp/DSC_4432-2_.JPG",
        "https://optim.tildacdn.com/tild6466-3038-4463-b737-363630623662/-/format/webp/DSC_4876-2_.JPG",
        "https://optim.tildacdn.com/tild6462-6533-4762-b666-313337666537/-/format/webp/DSC_4435-2_.JPG",
        "https://optim.tildacdn.com/tild6330-3664-4339-b364-383535363434/-/format/webp/DSC_4930-2_.JPG",
        "https://optim.tildacdn.com/tild3534-6537-4563-b536-303465323663/-/format/webp/DSC_4870-2_.JPG",
        "https://optim.tildacdn.com/tild6662-3538-4636-b637-643961333535/-/format/webp/DSC_4448-2_.JPG",
        "https://optim.tildacdn.com/tild6239-3665-4137-b937-323531623161/-/format/webp/DSC_4456-2_.JPG",
        "https://optim.tildacdn.com/tild3432-3438-4661-a366-366137363137/-/format/webp/DSC_4577-2_.JPG",
        "https://optim.tildacdn.com/tild6361-3539-4533-b466-383833316338/-/format/webp/DSC_4893-2_.JPG",
        "https://optim.tildacdn.com/tild6264-3164-4465-a432-646533636363/-/format/webp/DSC_4915-2_.JPG",
        "https://optim.tildacdn.com/tild6364-3030-4437-b934-633130393034/-/format/webp/DSC_4558-2_.JPG",
    ]
}
const multipage = {
    popupButtonsInit: function () {
        const buttons = document.querySelectorAll("[data-popup]")
        buttons.forEach(button => {
            const insideTheButton = button.querySelectorAll("*")
            insideTheButton.forEach(el => {
                el.setAttribute('data-popup', button.getAttribute("data-popup"));
                el.setAttribute('data-header', button.getAttribute("data-header"));
            })
            button.addEventListener('click', (e) => {
                multipage.popup(e.target)
            })
        })
    },
    popup(target){
        const dataPopup= target.getAttribute('data-popup')
        const dataHeader = target.getAttribute('data-header')
        this.changeScroll()

        const multiPage = document.getElementById('multi-page')
        const getVideoStream = () => {
            let q;
            if (this.getUserAgent() === 'Safari') {
                q = `<article id="video-stream">
                    <video controls autoplay muted playsinline loop style="width: 100%">
                        <source id="videoPlayBack" src="" type="video/mp4">
                    </video></article>`
                videoPlayBack().then()
            }
            else if (this.getUserAgent() !== 'Safari') {
                q = `<article id="video-stream"><div id='streamPlayer'></div></article>`
            }
            return q;
        }
        const getMenu = (target) => {
            terruarCatalogue.getCatalogues().then(r => {terruarCatalogue.renderCategories();terruarCatalogue.renderProducts()})
            return `<div id="terruarMenu"></div>`
        }
        const getGallery = () => {
            let q = ''
            if (window.innerWidth > window.innerHeight) {
                for (const img of restaurantGallery["horizontal"]) {
                    q += `<img src="${img}" alt="Фотографии ресторана">`
                }
                return `<article id="restaurantGallery">${q}</article>`;
            } else {
                for (const img of restaurantGallery["vertical"]) {
                    q += `<img src="${img}" alt="Фотографии ресторана">`
                }
                return `<article id="restaurantGallery" class="vertical">${q}</article>`;
            }
        }

        multiPage.insertAdjacentHTML('afterbegin', `
                <div id="close-popup" onclick="multipage.remPopup()">
                        <svg width="50px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10m-2.83-7.17 5.66-5.66m0 5.66L9.17 9.17" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div> <!--кнопка закрытия поп-апа-->
                <div class="blur" id="popup-block"> <!--тело поп-апа-->
                    ${dataPopup === 'online' ? `<article id="weatherTest"></article>` : ''} <!--условие рендера виджета с погодой-->
                    <h2 class="popUpHeader">${dataHeader}</h2> 
                    ${dataPopup === 'online' ? getVideoStream() : ''}
                    ${dataPopup === 'online' ? initPlayer() : ''}
                    ${dataPopup === 'restaurant' ? getGallery() : ''}
                    ${dataPopup === 'restaurant' ? getMenu(target) : ''}
                </div>`) // Рендер поп-апа
        getWeatherForecast().then()
    }, // Показ поп-апа
    remPopup(){
        this.changeScroll()
        const popup = document.getElementById('popup-block')
        const closeButton = document.getElementById('close-popup')
        const weatherBlock = document.getElementById('weatherTest')
        const mobileMenuButton = document.getElementById('monMenuButton')
        popup.style.animation = 'hidepopup .3s ease-out forwards'
        closeButton.style.animation = 'hidepopup .3s ease-out forwards'
        // weatherBlock.style.animation = 'hidepopup .3s ease-out forwards'
        setTimeout(()=>{
            popup ? popup.remove() : null;
            closeButton ? closeButton.remove() : null;
            weatherBlock ? weatherBlock.remove() : null;
        }, 300)
    }, // Сброс поп-апа
    changeScroll(){
        if (document.body.style.overflow === 'hidden')
            document.body.style.overflow = 'unset'
        else document.body.style.overflow = 'hidden'
    }, // Запрет/разрешение на скролл ( прим. при открытии поп-апа )
    getUserAgent(){
            if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
                return('Opera');
            } else if (navigator.userAgent.indexOf("Edg") != -1) {
                return('Edge');
            } else if (navigator.userAgent.indexOf("Chrome") != -1) {
                return('Chrome');
            } else if (navigator.userAgent.indexOf("Safari") != -1) {
                return('Safari');
            } else if (navigator.userAgent.indexOf("Firefox") != -1) {
                return('Firefox');
            } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
            {
                return('IE');
            } else {
                return('unknown');
            }
    }, // Строкой получаем название браузера
    bookingClick() {
        let booking = document.querySelector('.znms-widget__widget-btn');
        if (booking) {
            booking.click()
        }
    },
    getHeaderHeight() {
        let nav = document.querySelector('nav');
        let hero  = document.getElementById('hero');
        let mobNav = document.getElementById('mobileNavStroke');
        let widgetBooking = document.querySelector('.znms-widget__module-form-block');
        if (mobNav.offsetHeight < 1) {
            let height = `calc(${window.innerHeight}px - ${nav.clientHeight}px - 3rem)`;
            let margin = `calc(${nav.clientHeight}px + 2rem)`
            hero.style.cssText += `min-height:${height}; margin-top: ${margin}`;
        } else {
            let height = `unset`;
            let margin = `calc(${nav.offsetHeight}px + 2rem)`
            hero.style.cssText += `min-height:${height}; margin-top: ${margin}`;
        }
    },
    hideMobileMenu() {
        let btn = document.getElementById('monMenuButton');
        if (btn.getBoundingClientRect().width > 0) return btn.click();
    },
    randomIng: function (max) {
        return  Math.floor(Math.random() * (max));
    },
    mobileBackImages: [
        'https://optim.tildacdn.com/tild3534-3435-4839-b839-366337373937/-/format/webp/IMAGE_2024-04-11_170.jpg',
        'https://optim.tildacdn.com/tild3837-6638-4535-a238-663235623730/-/format/webp/KIR_3052.jpg',
        'https://optim.tildacdn.com/tild3739-6138-4236-a436-313339626532/-/format/webp/IMAGE_2024-04-11_173.jpg',
        //'https://optim.tildacdn.com/tild3539-6266-4461-a633-376165353133/-/format/webp/IMAGE_2024-04-11_174.jpg',
    ],
    heroVideoStart: function () {
        const videoBlock = document.getElementById('heroVideo');
        const hero = document.getElementById('hero');
        if (hero.getAttribute('data-nomain')) return
        if (window.innerWidth > 600) {
            videoBlock.insertAdjacentHTML("beforeend",
                `<video style="opacity: 0" loop autoplay playsinline muted src="https://holyxey.github.io/public/Terruar/multipage/sources/video/Terruar%20Summer.mp4" title="Terruar hero video"></video>`)
            videoBlock.querySelector('video').oncanplay = function(e) {
                const videoPlayer = e.target;
                videoPlayer.play();
                videoPlayer.style.cssText += 'animation: showVideoOpacity 1s ease-out forwards'
                hero.style.cssText = `background: none`
                multipage.getHeaderHeight()
            };
        } else {
            hero.style.cssText = `background: url(${multipage.mobileBackImages[multipage.randomIng(multipage.mobileBackImages.length)]}) center / cover`
            multipage.getHeaderHeight()
        }
    },
    mobileMenu: {
        btnClck(el){
            let menuPoints = document.querySelectorAll('.navPCItem')
            let nav = document.querySelector('nav')
            let mainList = document.getElementById('menuList')
            let buttonLines = document.querySelectorAll('.menuButtonHR')
            if (el.getAttribute('data-clicked') === '0') {
                let tmt = 0;
                menuPoints.forEach(point => {
                    point.style.opacity = '0'
                        setTimeout(function () {point.style.opacity = 1}, tmt)
                        tmt+=20
                    point.style.display = 'block'
                    point.style.marginBlock = '.5rem'
                })
                el.style.backgroundColor = 'var(--white)'
                buttonLines.forEach(line => {
                    line.style.backgroundColor = 'var(--wine)'
                })

                el.setAttribute('data-clicked', '1')
            } else
            if (el.getAttribute('data-clicked') === '1') {
                menuPoints.forEach(point => {
                    point.style.display = 'none'
                })
                el.style.backgroundColor = 'var(--wine)'
                buttonLines.forEach(line => {
                    line.style.backgroundColor = 'var(--white)'
                })

                el.setAttribute('data-clicked', '0')
            }
        }
    },
    smoothShowHorizontal: function () {
        const parentElements = document.querySelectorAll('[data-smooth-mobile]')
        parentElements.forEach(parentElement => {
            const waitOnTheViewPort = setInterval(() => {
                if (parentElement.getBoundingClientRect().top + 250 > window.innerHeight) {

                } else {
                    parentElement.children[0].style.animation = `smoothShowHorizontal 3s ease-in-out`
                    clearInterval(waitOnTheViewPort);
                }
            }, 1000)
        })
    }
}

const checkInViewHorizontal = function (element) {
    return element.getBoundingClientRect().left > 0 && element.getBoundingClientRect().right < window.innerWidth;
} // Используется для назначения каунтера, который ниже рендерится
const renderCounter = function (where, max, whatIsScrolling, itemsList) {
    if (!itemsList) return (console.log('Нет элементов для renderCounter'))

    const counterChange = function (where, itemsList) {
        const items = itemsList
        const counterSpan = where.querySelector('.counterSpan');

        let count = 1;
        items.forEach((item, index) => {
            if (checkInViewHorizontal(item)) {
                counterSpan.textContent = (index + 1).toString();
            }
        })
    }
    where.insertAdjacentHTML("beforeend",
        `<div style="opacity: .8">
                <span class="counterSpan">1</span>
                <span> / </span>
                <span>${max}</span>
                </div>`)
    whatIsScrolling.addEventListener('scroll', () => {
        counterChange(where, itemsList)
    })
}
const whereToRenderCounter = function () {
    const where = document.querySelectorAll('[data-counter-where]')
    if (where.length === 0) return
    where.forEach(item => {
        const whatIsScrolling = (
            item.querySelector('[data-counter-scrollIt]')
            ? item.querySelector('[data-counter-scrollIt]')
            : item.parentNode.querySelector('[data-counter-scrollIt]')
        )
        const itemsList = (
            item.querySelectorAll('[data-counter-item]').length > 1
            ? item.querySelectorAll('[data-counter-item]')
            : item.parentNode.querySelectorAll('[data-counter-item]')
        )
        const max = itemsList.length;
        console.log(item, max, whatIsScrolling, itemsList)
        renderCounter(item, max, whatIsScrolling, itemsList)
    })
}
// аттрибуты data-counter(-where/-scrollIt/-item)

const mainPage = {
}
const servicesPage = {
}

window.addEventListener("resize", () => {
    multipage.getHeaderHeight()
})
window.addEventListener("load", () => {
    multipage.getHeaderHeight()

    if (window.innerWidth < 600) {
        multipage.smoothShowHorizontal()
    }
})
document.addEventListener("DOMContentLoaded", () => {
    // whatPageIs.data === 'main' ? SOMEFUNCTION() : null
    // whatPageIs.data === 'services' ? SOMEFUNCTION() : null
    needToRender()
    multipage.getHeaderHeight()
    multipage.heroVideoStart()
    multipage.popupButtonsInit()
    if (window.innerWidth < 600) {
        whereToRenderCounter()
    }
})

// Инициализация трансляции
function initPlayer() {
    setTimeout(() => {
        if (document.getElementById('video-stream')) {
            let getWidth = document.getElementById('video-stream').offsetWidth
            let getHeigth = getWidth * 9 / 16
            sldpPlayer = SLDP.init({
                container: 'streamPlayer',
                stream_url: 'wss://b2o-vcore156.video.goodline.info:443/main/linkvideo_125009',
                autoplay: true,
                muted: true,
                height: getHeigth,
                width: getWidth
            });
        }
    }, 100)
    return ''
}
// Инициализация трансляции

// Тестовый запуск записи стрима вместо трансляции
async function videoPlayBack() {
    try {
        const response = await fetch("https://api.b2o.goodline.info/ords/mobile/vc2/downloads", {
            "headers": {
                "accept": "application/json",
                "api_key": "86e3ff40ec2c52a8504c8669710b4394",
                "cache-control": "no-cache",
                "pragma": "no-cache",
                "priority": "u=1, i",
                "token": `${videoPlayBackToken}`
            },
            "referrer": "https://video.linkvideo.ru/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "omit"
        });
        const data = await response.json();
        const firstVideo = data[0].url;
        if (multipage.getUserAgent() === 'Safari') {
            document.getElementById('videoPlayBack').src = data[0].url;
            document.getElementById('videoPlayBack').parentNode.play()
        } else if (multipage.getUserAgent() !== 'Safari') {
            document.getElementById('videoPlayBack').parentNode.src = data[0].url;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
// !Тестовый запуск записи стрима вместо трансляции

// weather
const latitude = 54.702;
const longitude = 37.856;
const days = 3;
const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain&forecast_days=${days}`;
let hourlyList = {};
async function getWeatherForecast() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const { hourly } = data;
        const { temperature_2m, rain, time } = hourly;
        hourlyList = temperature_2m
        weatherTestRender(days);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
const weatherTestRender = (days) => {
    if (document.getElementById('weatherTest') && days > 0) {
        let b = document.getElementById('weatherTest')
        const today = (i) => {
            let q;
            switch(i) {
                case 0:
                    q = 'Сегодня'
                    break;
                case 1:
                    q = 'Завтра'
                    break;
                case 2:
                    q = 'Послезавтра'
                    break;
                default:
                    q = 'Погода'
                    break;
            }
            return q;
        };
        const getStrokeNumber = (day, hour) => {
            return (24 * day + hour)
        }
        for (let i = 0; i < days; i++) {
            b.insertAdjacentHTML(`beforeend`, `
                <article class="weatherDay">
                    <p class="todayHeader">${today(i)}</p>
                    <div class="hourly">
                        <p class="hour morning">Утром: ${hourlyList[(getStrokeNumber(i, 6))]}℃</p>
                        <p class="hour day">Днем: ${hourlyList[(getStrokeNumber(i, 14))]}℃</p>
                        <p class="hour evening">Вечером: ${hourlyList[(getStrokeNumber(i, 20))]}℃</p>
                    </div>
                </article>
            `)
        }
    } else return('Days is not defined')
}
// !weather