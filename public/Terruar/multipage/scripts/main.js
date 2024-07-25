// 'use strict';
const videoPlayBackToken = ''
const whatPageIs = {
    mainPageBlock: document.getElementById('multi-page'),
    data: document.getElementById('multi-page').getAttribute('data-page')
}
const lists = {
    servicesList: [
        {
            render: true,
            id: 'bath',
            title: 'Баня',
            header: '',
            price: '',
            shortDescr: 'От 1500р/час',
            fullDescr: 'Наша первая баня, отличается большой парилкой и комфортной зоной отдыха на несколько человек. Собрала кучу позитивных отзывов про качества пара. Минимальная бронь от двух часов.',
            benefits: ['Комфортный отдых', 'Настоящая баня', ''],
            images: ['https://thumb.tildacdn.com/tild3933-6233-4938-b230-643539623531/-/format/webp/511.jpg'],
            popUp: true,
            popUpType: 'service',
            readMoreLink: '',
            readMoreText: 'Подробнее',
            withGallery: false,
        },
        {
            render: true,
            id: 'bathvat',
            title: 'Банный чан',
            header: '',
            price: '',
            shortDescr: 'От 1500р/час',
            fullDescr: 'Банный чан до 3х-4 человек под навесом, чтобы можно было наслаждаться им в любую погоду. Находится недалеко от нашей первой бани, удобно арендовать баню и чан как вместе так и отдельно. Минимальная бронь от двух часов.',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild3435-6233-4833-b861-366330383062/-/format/webp/KIR_5744_1.jpg'],
            popUp: true,
            popUpType: 'service',
            readMoreLink: '',
            readMoreText: 'Подробнее',
            withGallery: false,
        },
        {
            render: true,
            id: 'furako',
            title: 'Баня с фурако и холодной купелью',
            header: '',
            price: '',
            shortDescr: 'От 3500р/час',
            fullDescr: 'Наша новая баня, отличается от первой наличием санузла и душа. В стоимость бани также входит горячая купель фурако и холодная купель. Целый СПА-комплекс. Минимальная бронь от двух часов.',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild6630-3034-4132-a532-653463626536/-/format/webp/305A0845.JPG'],
            popUp: true,
            popUpType: 'service',
            readMoreLink: '',
            readMoreText: 'Подробнее',
            withGallery: false,
        },
        {
            render: true,
            id: 'pool',
            title: 'Бассейн',
            header: '',
            price: '',
            shortDescr: 'Бесплатно',
            fullDescr: 'Летний плавательный бассейн доступен для всех гостей Терруар. Рядом с бассейном предусмотрены зоны для приема солнечных ванн. А у администратора можно получить надувной диван (ламзак). ',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild6363-3437-4238-b031-663535363161/-/format/webp/IMG_4025.JPG'],
            popUp: true,
            popUpType: 'service',
            readMoreLink: '',
            readMoreText: 'Подробнее',
            withGallery: false,
        },
        {
            render: true,
            id: 'path',
            title: 'Эко-Тропа',
            header: '',
            price: '',
            shortDescr: 'Бесплатно',
            fullDescr: 'Лесная тропа длинной 500м, в конце которой вас ждет полноценная зона отдыха с креслами и костровой зоной, а также потрясающим видом на закат. Путь обратно освещается. ',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild3162-3733-4263-b164-623962383030/-/format/webp/path.jpeg'],
            popUp: true,
            popUpType: 'service',
            readMoreLink: '',
            readMoreText: 'Подробнее',
            withGallery: false,
        },
        {
            render: true,
            id: 'photoSession',
            title: 'Фотосессия',
            header: '',
            price: '',
            shortDescr: 'От 7000р',
            fullDescr: 'Наши фотографы помогут запечатлеть памятную дату или просто создать настроение с помощью фотосессии. Кстати, мы излюбленное место для предложений. Бронировать время фотосессии лучше заранее, так можно будет выбрать из нескольких фотографов.',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild3765-6264-4537-b535-616564323736/-/format/webp/photoSession.jpeg'],
            popUp: true,
            popUpType: 'service',
            readMoreLink: '',
            readMoreText: 'Подробнее',
            withGallery: false,
        },
        {
            render: true,
            id: 'bicycle',
            title: 'Велосипед',
            header: '',
            price: '',
            shortDescr: '500р/час',
            fullDescr: 'Исследуйте местные окрестности на велосипеде – это особенно приятно, можно съездить на эко-ферму или прокатиться до местных прудов',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild6465-6438-4934-b630-616231316662/-/format/webp/image.png',
            ],
            popUp: true,
            popUpType: 'service',
            readMoreLink: '',
            readMoreText: 'Подробнее',
            withGallery: false,
        },
        {
            render: true,
            id: 'quadbike',
            title: 'Квадроцикл',
            header: '',
            price: '',
            shortDescr: '3000р/час',
            fullDescr: 'Отличный вариант для любителей активного отдыха, идеален для бездорожья. Доступен специальный маршрут на нашей карте мимо прудов по березовому лесу.',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild6230-3462-4431-b436-386138613338/-/format/webp/photo.jpg',
            ],
            popUp: true,
            popUpType: 'service',
            readMoreLink: '',
            readMoreText: 'Подробнее',
            withGallery: false,
        },
        {
            render: true,
            id: 'buggy',
            title: 'Багги',
            header: '',
            price: '',
            shortDescr: '4000р/час',
            fullDescr: 'Необычный вид внедорожной техники для искушенных водителей. Удивить близких точно получится.',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild3037-3938-4762-a537-653161623934/-/format/webp/buggy.jpeg'],
            popUp: true,
            popUpType: 'service',
            readMoreLink: '',
            readMoreText: 'Подробнее',
            withGallery: false,
        },
        {
            render: true,
            id: 'jeeptour',
            title: 'Джип-тур',
            header: '',
            price: '',
            shortDescr: 'От 8000р',
            fullDescr: 'Заезд по бездорожью с профессиональным водителем. Вас ждут маршруты по лесу, переезд реки вброд, высокие подъемы и не менее экстремальные спуски',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild3264-6431-4131-a234-663461616431/-/format/webp/c45331ec-7b02-4c17-8.jpg',
            ],
            popUp: true,
            popUpType: 'service',
            readMoreLink: '',
            readMoreText: 'Подробнее',
            withGallery: false,
        },
        {
            render: true,
            id: 'kayaking',
            title: 'Сплав на кайаках',
            header: '',
            price: '',
            shortDescr: 'От 9000р',
            fullDescr: 'Хотите отправиться на настоящий сплав? Это возможно в Терруаре! Выдается вся экипировка, трансфер до реки Беспута. Дополнительно можно организовать инструктора. ',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild3437-3936-4332-b834-373032333562/-/format/webp/kayaking.jpeg'],
            popUp: true,
            popUpType: 'service',
            readMoreLink: '',
            readMoreText: 'Подробнее',
            withGallery: false,
        },
        {
            render: true,
            id: 'sapBoards',
            title: 'Пруд и Сап-борды',
            header: '',
            price: '',
            shortDescr: 'Рядом с нами',
            fullDescr: 'Всего в 30 минутах ходьбы от нас есть оборудованный платный пляж с сап-бордами, лодками и катамаранами',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild3737-3861-4463-b662-316337623966/-/format/webp/Paddleboards.jpeg'],
            popUp: true,
            popUpType: 'service',
            readMoreLink: '',
            readMoreText: 'Подробнее',
            withGallery: false,
        },
        {
            render: true,
            id: 'horseriding',
            title: 'Конные прогулки',
            header: '',
            price: '',
            shortDescr: 'Рядом с нами',
            fullDescr: 'Всего в 20 минутах на машине от нас есть конная ферма, где можно записаться на конную прогулку как для начинающих, так и для опытных наездников. А еще очень рекомендуем попробовать там фермерские продукты – сыр, хлеб, домашнюю пиццу',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild3433-3561-4364-b363-643465653962/-/format/webp/tim-schmidbauer-7RdZ.jpg',
            ],
            popUp: true,
            popUpType: 'service',
            readMoreLink: '',
            readMoreText: 'Подробнее',
            withGallery: false,
        },
        {
            render: true,
            id: 'zoo',
            title: 'Контактный зоопарк',
            header: '',
            price: '',
            shortDescr: 'Рядом с нами',
            fullDescr: 'Всего в 15 минутах ходьбы от нас есть контактный зоопарк как с животными скотного двора, так и с дикими животными',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild3336-3536-4639-a534-643362313163/-/format/webp/pettingzoo.jpeg'],
            popUp: true,
            popUpType: 'service',
            readMoreLink: '',
            readMoreText: 'Подробнее',
            withGallery: false,
        },
        {
            render: true,
            id: 'xbox',
            title: 'Xbox',
            header: '',
            price: '',
            shortDescr: 'от 900 р',
            fullDescr: 'У нас можно арендовать игровую консоль, чтобы поиграть вечером через проектор, или устроить соревнования с друзьями!',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild3630-3036-4563-b134-326462623439/-/format/webp/jose-gil-2pNdTBn4C7U.jpg',
            ],
            popUp: true,
            popUpType: 'service',
            readMoreLink: '',
            readMoreText: 'Подробнее',
            withGallery: false,
        },
        {
            render: true,
            id: 'projector',
            title: 'Проектор',
            header: '',
            price: '',
            shortDescr: 'от 700 р',
            fullDescr: 'Для просмотра фильмов, или игр на Xbox',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild3337-3031-4236-a638-363235343733/-/format/webp/600A3332.png'],
            popUp: true,
            popUpType: 'service',
            readMoreLink: '',
            readMoreText: 'Подробнее',
            withGallery: false,
        },
    ],
    servicesListPreview: [
        {
            render: true,
            id: 'pool',
            title: 'Бассейн',
            header: '',
            price: '',
            shortDescr: 'Бесплатно',
            fullDescr: 'Летний плавательный бассейн доступен для всех гостей Терруар. Рядом с бассейном предусмотрены зоны для приема солнечных ванн. А у администратора можно получить надувной диван (ламзак). ',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild6363-3437-4238-b031-663535363161/-/format/webp/IMG_4025.JPG'],
            popUp: true,
            popUpType: 'service',
            readMoreLink: '',
            readMoreText: 'Подробнее',
            withGallery: false,
        },
        {
            render: true,
            id: 'bathvat',
            title: 'Банный чан',
            header: '',
            price: '',
            shortDescr: 'От 1500 р',
            fullDescr: 'Банный чан до 3х-4 человек под навесом, чтобы можно было наслаждаться им в любую погоду. Находится недалеко от нашей первой бани, удобно арендовать баню и чан как вместе так и отдельно. Минимальная бронь от двух часов.',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild3435-6233-4833-b861-366330383062/-/format/webp/KIR_5744_1.jpg'],
            popUp: true,
            popUpType: 'service',
            readMoreLink: '',
            readMoreText: 'Подробнее',
            withGallery: false,
        },
        {
            render: true,
            id: 'furako',
            title: 'Баня с фурако и холодной купелью',
            header: '',
            price: '',
            shortDescr: 'От 3500р/час',
            fullDescr: 'Наша новая баня, отличается от первой наличием санузла и душа. В стоимость бани также входит горячая купель фурако и холодная купель. Целый СПА-комплекс. Минимальная бронь от двух часов.',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild6630-3034-4132-a532-653463626536/-/format/webp/305A0845.JPG'],
            popUp: true,
            popUpType: 'service',
            readMoreLink: '',
            readMoreText: 'Подробнее',
            withGallery: false,
        },
        {
            render: true,
            id: 'more',
            title: 'Посмотреть все',
            header: '',
            price: '',
            shortDescr: ``,
            fullDescr: '',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild3661-3564-4437-a630-383931616632/-/format/webp/AllServices.png'],
            popUp: false,
            popUpType: 'service',
            readMoreLink: '/services',
            readMoreText: 'Страница с услугами',
            withGallery: false,
        },
    ],
    offersList: [],
    other: [
        {
            render: true,
            id: 'online',
            title: 'Терруар онлайн',
            header: '',
            price: '',
            shortDescr: 'Трансляция с камеры нашей территории, и прогноз погоды на пару дней',
            fullDescr: '',
            benefits: ['', '', ''],
            images: ['https://optim.tildacdn.com/tild3530-3138-4862-a135-633935343735/-/format/webp/heroImg.png'],
            icon: 'https://static.tildacdn.com/tild6139-3036-4063-b835-343664383336/camera.svg',
            popUp: true,
            readMoreLink: '',
            readMoreText: 'Подробнее',
            withGallery: false,
        },
        {
            render: true,
            id: 'restaurant',
            title: 'Ресторан',
            header: '',
            price: '',
            shortDescr: 'Ресторан в 3х минутах ходьбы, со специальным предложением для наших гостей',
            fullDescr: '',
            benefits: ['', '', ''],
            images: [
                // "https://optim.tildacdn.com/tild3862-3466-4135-a662-666565663861/-/format/webp/DSC_4429-2_.JPG",
                // "https://optim.tildacdn.com/tild3437-3138-4262-b363-626433353334/-/format/webp/DSC_4434-2_.JPG",
                // "https://optim.tildacdn.com/tild6664-3532-4735-b462-633139333135/-/format/webp/DSC_4440-2_.JPG",
                // "https://optim.tildacdn.com/tild3433-3235-4663-b232-643536333365/-/format/webp/DSC_4443-2_.JPG",
                // "https://optim.tildacdn.com/tild6162-6562-4463-a437-636434366233/-/format/webp/DSC_4445-2_.JPG",
                // "https://optim.tildacdn.com/tild6336-3166-4539-b933-646265376165/-/format/webp/DSC_4878-2_.JPG",
                // "https://optim.tildacdn.com/tild6633-3865-4561-b134-376231613366/-/format/webp/DSC_4575-2_.JPG",
                // "https://optim.tildacdn.com/tild3661-6230-4561-a565-376134643135/-/format/webp/DSC_4453-2_.JPG",
                // "https://optim.tildacdn.com/tild6334-3865-4563-b063-353037343638/-/format/webp/DSC_4902-2_.JPG",
                // "https://optim.tildacdn.com/tild3134-3434-4562-a631-316133326565/-/format/webp/DSC_4454-2_.JPG",
                // "https://optim.tildacdn.com/tild3837-3564-4233-b164-306238613366/-/format/webp/DSC_4638-2_.JPG",
                // "https://optim.tildacdn.com/tild6635-3839-4761-a336-323563613861/-/format/webp/DSC_4462-2_.JPG",
                // "https://optim.tildacdn.com/tild6538-3838-4332-b963-333761386339/-/format/webp/DSC_4611-2_.JPG",
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
            ],
            icon: 'https://static.tildacdn.com/tild6234-3863-4337-b562-633532656234/restaurant.svg',
            popUp: true,
            readMoreLink: '',
            readMoreText: 'Подробнее',
            withGallery: true,
        },
        {
            render: true,
            id: 'team',
            title: 'Наша команда',
            header: '',
            price: '',
            shortDescr: 'Небольшие рассказы о каждом из нас!',
            fullDescr: '',
            benefits: ['', '', ''],
            images: ['https://optim.tildacdn.com/tild6631-6137-4133-b161-336134656332/-/format/webp/main.jpg'],
            icon: 'https://static.tildacdn.com/tild3930-3739-4666-b961-643738633932/team.svg',
            popUp: true,
            readMoreLink: '',
            readMoreText: 'Подробнее',
            withGallery: false,
        },
    ],
    team: [
        {
            name: 'Маша',
            photo: ['https://thumb.tildacdn.com/tild6238-6563-4363-a361-353138383736/-/format/webp/image_5.jpg'
            ],
            position: 'Менеджер по бронированию',
            about: 'Любит людей и давать скидки, за что находится под пристальным вниманием руководителя.'
        },
        {
            name: 'Лена',
            photo: ['https://thumb.tildacdn.com/tild6463-3632-4739-a238-643861303266/-/format/webp/image_6.jpg'
            ],
            position: 'Администратор',
            about: 'Накормит, заселит, поможет. Перфекционистка: любит, чтобы все работало как швейцарские часы (четко, безотказно и по расписанию).'
        },
        {
            name: 'Нурали',
            photo: ['https://thumb.tildacdn.com/tild6330-3161-4064-b063-386662646232/-/format/webp/image_12.jpg'
            ],
            position: 'Хаус-мен',
            about: 'Напарит, нагреет, починит. Крепкий хозяйственник. Не успокоится пока у вас не будет идеальная температура в бане.'
        },
        {
            name: 'Ксюша',
            photo: ['https://thumb.tildacdn.com/tild6137-3132-4636-b863-643633363534/-/format/webp/image_7.jpg'
            ],
            position: 'SMM-отдел',
            about: 'Любит красивые фотки, продающие тексты и выбирать смайлики. Не любит ВК.'
        },
        {
            name: 'Илья',
            photo: ['https://thumb.tildacdn.com/tild6666-6433-4364-b233-653839346236/-/format/webp/image_8.jpg'
            ],
            position: 'Старпом',
            about: 'Любит экстремальные виды спорта и Авито. Следит за тем, чтобы мы хоть что-то заработали.'
        },
        {
            name: 'Ярослав',
            photo: ['https://thumb.tildacdn.com/tild3965-6562-4962-b564-346138643566/-/format/webp/image_9.jpg'
            ],
            position: 'Начальник',
            about: 'Он тут все придумал (ну почти). Любит работать менеджером по бронированию, администратором и хаус-меном, но не успевает. Если Маша вдруг отвечает вам «забронировал» - знайте, с вами уже переписывается Ярослав.'
        },
    ],
    faq: {
            'Сколько стоит размещение?': `Цена сильно зависит от многих факторов: сезона, дня недели, домика и т.д. Минимальная стоимость начинается от 5000р в сутки, не считая <a href="/#offers" class="faqbtn"> акций </a>, которые у нас регулярно проходят.
<br>Чтобы узнать стоимость на интересующие вас даты, воспользуйтесь <span class="faqbtn" onclick="multipage.bookingClick()"> модулем бронирования.</span> Чтобы быть в курсе скидок и акций, подписывайтесь на нас в соц.сетях.`,
            'Как до нас добраться?': `Удобнее всего на машине по скоростным трассам М4 или M2 – просто наберите «Терруар» в<a target="_blank" href="https://yandex.ru/maps/?ll=37.859024%2C54.715259&mode=routes&rtext=~54.704664%2C37.859803&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D195423529395&z=10" class="faqbtn"> Я.Картах </a> или Навигаторе.
<br>Общественным траснпортом также можно добраться – электричкой с Павелецкого вокзала до станции Кашира и далее на такси (телефон местного таксиста всегда подскажем или работает Я.Такси). У станции Кашира есть сетевой магазин, продукты удобно купить там &#x1F60A;`,
            'Какое питание у нас предусмотрено?': `У нас множество вариантов питания &#x1F60A; Не так давно рядом с нами открылся партнерский ресторан (всего в 3х минутах ходьбы), где действует специальное предложение для наших гостей (спрашивайте у администратора!), а меню уже доступно на нашем сайте <span onclick="document.querySelector('[data-popup=\\'restaurant\\']').click()" class="faqbtn"> по этой кнопке </span>или в меню "Ресторан".
            <br>У нас все также можно приобрести небольшой завтрак или пиццу, если не хочется идти в ресторан. А еще при бронировании можно заказать продукты, которые будут ждать вас в холодильнике в домике (в т.ч. готовую еду, например, суп). Или можно заказать бесплатную доставку из ВкусВилл, если что-то забыли.
            <br>Напоминаем, что для каждого домика предусмотрена мангальная зона и небольшая кухня со всеми принадлежностями – если вдруг захочется приготовить самим. Голодными вы точно не останетесь &#x1F60A;`,
            'Какие удобства есть в домиках?': `Мы постарались учесть все пожелания, чтобы ваш отдых принес максимум комфорта.
<br>Каждый домик оборудован санузлом со всеми принадлежностями: зубные щетки, мыло, шампунь, одноразовые тапочки и конечно полотенца.
<br>В каждом домике своя кухня с плиткой и чайником, а также всей посудой (включая бокалы и рюмки). Есть обеденный стол (как внутри, так и снаружи). А самое главное удобная кровать с панорамным видом на лес &#x1F60A;`,
            'Что необходимо взять с собой?': `Хорошее настроение &#x1F60A; запасы еды, сменную одежду для леса (или вдруг захочется покататься на квадроцикле), купальные принадлежности (вдруг захочется в баню или чан), флешку с любимыми фильмами (если захочется посмотреть их на проекторе).
<br>Можно взять домашние тапочки (мы предоставляем одноразовые, но в своих же уютнее?). Многое есть в домиках, многое мы уже учли, многое есть у Администратора, обращайтесь &#x1F60A;`,
            'Можно ли приехать с животными?': `Мы всегда рады вашим четвероногим друзьям. Доплата составляет 1000р на весь срок проживания.`,
            'Какие развлечения есть на территории?': `Как нам кажется, самое главное – побыть наедине с собой и природой &#x1F60A; но, конечно, мы стараемся привнести в отдых ярких красок.
<br>Для любителей активности у нас можно <a href="/#services" class="faqbtn"> взять в аренду </a> велосипеды, квадроциклы, лыжи или снегоступы. А можем организовать для вас целый джип-тур по местному бездорожью.
<br>Любителям более спокойного отдыха – рекомендуем баню или подогреваемый чан (а лучше все сразу), аренду проектора для просмотра любимых фильмов или Xbox для любимых игр. А еще мы можем организовать фотоссесию для вас!`,
            'Сколько спальных мест в домиках?': `Наши домики рассчитаны на двоих (за исключением домика Шампань – там максимум 4 человека).
<br>Если вам будет удобно, то за дополнительную плату можем предоставить дополнительно одноместную раскладушку.`,
            'Как забронировать домик?': `Для бронирования воспользуйтесь сайтом,<span onclick="multipage.bookingClick()"> кнопкой забронировать </span>, необходимо будет внести предоплату – 50% (если что-то изменится и вы сообщите нам за 10 дней до заезда, мы вернем стоимость).
<br>Если ничего с этим сайтом не получается, <a href="https://wa.me/79670655655?text=Здравствуйте,%20пишу%20с%20сайта" class="faqbtn" target="_blank"> напишите нам</a>, мы все забронируем и пришлем ссылку на предоплату! <br>А если что-то не работает на сайте - напишите пожалуйста <a href="https://holyxey.ru" target="_blank" class="faqbtn"> Алексею</a>`,
            'Как устроить корпоратив / тимбилдинг?': `Напишите нам на почту<a href="mail:Terruar.msk@gmail.com" class="faqbtn"> Terruar.msk@gmail.com </a> поможем реализовать любую идею! У нас есть ведущие, фотографы, можем организовать лазертаг, джип-тур, банную программу с профессиональным банщиком, а также сделать специальную скидку для вас!`,
        },
    houses: [
        {
            title: 'Mendoza',
            description: [
                "Двух-местный уютный домик — Мендоза, повышенной категории (зеркальный)",
                "В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.",
            ],
            images: {
                summer: [
                    'https://thumb.tildacdn.com/tild6464-6334-4638-b462-373132393762/-/format/webp/KIR_3234.jpg',
                    'https://thumb.tildacdn.com/tild6264-6533-4566-b038-333564646639/-/format/webp/KIR_3064.jpg',
                    'https://thumb.tildacdn.com/tild6633-3266-4833-b062-323538313130/-/format/webp/DSC08079.jpg',
                    'https://thumb.tildacdn.com/tild3963-3437-4164-a136-353865343163/-/format/webp/DSC08081.jpg',
                    'https://thumb.tildacdn.com/tild3866-3830-4665-b936-623536663465/-/format/webp/KIR_3274.jpg',
                    'https://thumb.tildacdn.com/tild6636-3830-4365-b361-393239396233/-/format/webp/KIR_3068.jpg',
                ],
                winter: [
                    'https://thumb.tildacdn.com/tild6338-3131-4939-b866-303330343831/-/format/webp/DSC08073.jpg',
                    'https://thumb.tildacdn.com/tild3431-3530-4030-b134-316561393735/-/format/webp/DSC08075.jpg',
                    'https://thumb.tildacdn.com/tild6666-6236-4632-b231-336333663637/-/format/webp/DSC08080.jpg',
                    'https://thumb.tildacdn.com/tild6131-6266-4133-a561-326364366237/-/format/webp/DSC08083.jpg',
                    'https://thumb.tildacdn.com/tild3963-3437-4164-a136-353865343163/-/format/webp/DSC08081.jpg',
                    'https://thumb.tildacdn.com/tild3434-3939-4165-b831-616531373261/-/format/webp/DSC08076.jpg',
                ]
            }
        },
        {
            title: 'Bourgogne',
            description: [''],
            images: {
                summer: [
                    'https://thumb.tildacdn.com/tild3166-3130-4965-a432-373332373130/-/format/webp/5ZN_1819.jpg',
                    'https://thumb.tildacdn.com/tild6137-6264-4630-a133-623239656131/-/format/webp/5ZN_1573.jpg',
                    'https://thumb.tildacdn.com/tild6565-6365-4139-b133-336630323961/-/format/webp/5ZN_1925.jpg',
                    'https://thumb.tildacdn.com/tild3866-6263-4563-a435-353463663330/-/format/webp/5ZN_1953.jpg',
                    'https://thumb.tildacdn.com/tild3333-3630-4534-a562-383736616333/-/format/webp/5ZN_2095.jpg',
                    'https://thumb.tildacdn.com/tild6165-6263-4563-a361-303035613136/-/format/webp/5ZN_2421.jpg',
                ],
                winter: [
                    'https://thumb.tildacdn.com/tild3863-3632-4537-a534-613231373433/-/format/webp/20211212_160540.jpg',
                    'https://thumb.tildacdn.com/tild3037-6562-4636-a364-366138316134/-/format/webp/KIR_5752.jpg',
                    'https://thumb.tildacdn.com/tild6534-3135-4937-b635-633931353835/-/format/webp/KIR_5748.jpg',
                    'https://thumb.tildacdn.com/tild3066-3566-4338-b564-663832633966/-/format/webp/5ZN_2454.jpg',
                    'https://thumb.tildacdn.com/tild6439-6265-4239-b165-666465323063/-/format/webp/KIR_5746.jpg',
                ]
            }
        },
        {
            title: 'Rheingau',
            description: [''],
            images: {
                summer: [
                    'https://thumb.tildacdn.com/tild6136-3837-4665-b735-616235316331/-/format/webp/5ZN_1605.jpg',
                    'https://thumb.tildacdn.com/tild3130-3431-4361-b736-306233303835/-/format/webp/5ZN_1558.jpg',
                    'https://thumb.tildacdn.com/tild6364-3930-4565-b333-633336633561/-/format/webp/5ZN_1586.jpg',
                    'https://thumb.tildacdn.com/tild3337-6634-4935-a163-326132616432/-/format/webp/5ZN_1606.jpg',
                    'https://thumb.tildacdn.com/tild3938-3132-4335-a635-653433656233/-/format/webp/5ZN_2441.jpg',
                    'https://thumb.tildacdn.com/tild6639-6664-4433-a439-356338656465/-/format/webp/5ZN_2466.jpg',
                ],
                winter: [
                    'https://thumb.tildacdn.com/tild3331-6364-4131-b461-353238653931/-/format/webp/KIR_5644.jpg',
                    'https://thumb.tildacdn.com/tild6239-3765-4834-b164-636466393030/-/format/webp/5ZN_1520.jpg',
                    'https://thumb.tildacdn.com/tild6132-3632-4830-b431-333463616664/-/format/webp/5ZN_1558.jpg',
                    'https://thumb.tildacdn.com/tild3061-6132-4765-b932-623633623236/-/format/webp/KIR_5651.jpg',
                    'https://thumb.tildacdn.com/tild6138-3334-4963-a135-383633346564/-/format/webp/KIR_5652.jpg',
                    'https://thumb.tildacdn.com/tild6334-6362-4639-a535-643965366538/-/format/webp/KIR_5637_1.jpg',
                    'https://thumb.tildacdn.com/tild6161-3364-4030-b363-303931616664/-/format/webp/5ZN_2466.jpg',
                    'https://thumb.tildacdn.com/tild6335-6231-4134-b437-313832303765/-/format/webp/KIR_5636.jpg',
                    'https://thumb.tildacdn.com/tild6138-6164-4165-b436-376464383361/-/format/webp/KIR_5635.jpg',
                ]
            }
        },
        {
            title: 'Toscana',
            description: [''],
            images: {
                summer: [
                    'https://thumb.tildacdn.com/tild3532-3038-4362-a631-653933616333/-/format/webp/5ZN_2021.jpg',
                    'https://thumb.tildacdn.com/tild3837-6338-4530-b131-333937336535/-/format/webp/5ZN_2027.jpg',
                    'https://thumb.tildacdn.com/tild6231-3036-4036-b364-643730343736/-/format/webp/5ZN_1918-HDR.jpg',
                    'https://thumb.tildacdn.com/tild6637-3638-4539-a334-313234323162/-/format/webp/5ZN_2483.jpg',
                    'https://thumb.tildacdn.com/tild6266-6637-4530-b866-613065663066/-/format/webp/5ZN_2428.jpg',
                ],
                winter: [
                    'https://thumb.tildacdn.com/tild3939-3864-4263-a439-643564633439/-/format/webp/DSC08058.jpg',
                    'https://thumb.tildacdn.com/tild6265-6366-4566-a439-653930343434/-/format/webp/KIR_5601.jpg',
                    'https://thumb.tildacdn.com/tild6634-6161-4564-b237-623565383563/-/format/webp/DSC08015.jpg',
                    'https://thumb.tildacdn.com/tild3961-3836-4363-a635-316533303763/-/format/webp/5ZN_2483.jpg',
                    'https://thumb.tildacdn.com/tild3838-3262-4364-b632-646265303264/-/format/webp/DSC08020.jpg',
                    'https://thumb.tildacdn.com/tild6166-6138-4437-b433-323261366166/-/format/webp/KIR_5587.jpg',
                ]
            }
        },
        {
            title: 'Champagne',
            description: [''],
            images: {
                summer: [
                    'https://thumb.tildacdn.com/tild3363-3663-4634-b264-613966303437/-/format/webp/5ZN_2532.jpg',
                    'https://thumb.tildacdn.com/tild3638-3838-4033-b430-323730366234/-/format/webp/5ZN_2536.jpg',
                    'https://thumb.tildacdn.com/tild6135-6462-4332-b337-306532633332/-/format/webp/5ZN_2546.jpg',
                    'https://thumb.tildacdn.com/tild3337-6137-4636-b763-376232353831/-/format/webp/5ZN_2570.jpg',
                    'https://thumb.tildacdn.com/tild6166-3664-4361-b836-366133353735/-/format/webp/5ZN_2576.jpg',
                    'https://thumb.tildacdn.com/tild3361-6266-4634-a239-306134396661/-/format/webp/5ZN_2592.jpg',
                    'https://thumb.tildacdn.com/tild3161-3362-4439-a236-316363366362/-/format/webp/5ZN_2613.jpg',
                    'https://thumb.tildacdn.com/tild3335-6365-4564-b639-333062663937/-/format/webp/5ZN_2626.jpg',
                ],
                winter: [
                    'https://thumb.tildacdn.com/tild3639-6639-4634-b939-323636636462/-/format/webp/KIR_5372.jpg',
                    'https://thumb.tildacdn.com/tild3135-3734-4462-b331-633064306531/-/format/webp/DSC08003.jpg',
                    'https://thumb.tildacdn.com/tild6666-6138-4131-b333-343866313037/-/format/webp/5ZN_2532_1.jpg',
                    'https://thumb.tildacdn.com/tild6339-6133-4432-b335-396239393063/-/format/webp/5ZN_2536.jpg',
                    'https://thumb.tildacdn.com/tild3036-3763-4339-a164-336534386630/-/format/webp/KIR_5368.jpg',
                    'https://thumb.tildacdn.com/tild6661-6336-4231-b266-626564666633/-/format/webp/5ZN_2592.jpg',
                    'https://thumb.tildacdn.com/tild3839-6262-4466-b461-343132316563/-/format/webp/5ZN_2613.jpg',
                    'https://thumb.tildacdn.com/tild3863-6533-4139-b866-653263333730/-/format/webp/5ZN_2626.jpg',
                ]
            }
        },
        {
            title: 'Bordeaux',
            description: [''],
            images: {
                summer: [
                    'https://thumb.tildacdn.com/tild3062-6437-4539-a431-303937616539/-/format/webp/5ZN_2444.jpg',
                    'https://thumb.tildacdn.com/tild6430-6236-4664-a236-346432656638/-/format/5ZN_2078.jpg',
                    'https://thumb.tildacdn.com/tild6466-3461-4636-b330-356163653834/-/format/5ZN_2117-HDR.jpg',
                    'https://thumb.tildacdn.com/tild6239-3635-4039-b737-363362653934/-/format/5ZN_2128-HDR.jpg',
                ],
                winter: [
                    'https://thumb.tildacdn.com/tild3865-6539-4639-b834-623639646531/-/format/IMG_3370.jpeg',
                    'https://thumb.tildacdn.com/tild6130-3333-4635-b734-643164666466/-/format/DSC08015.jpg',
                    'https://thumb.tildacdn.com/tild6339-3366-4237-a233-656438663238/-/format/DSC08011.jpg',
                    'https://thumb.tildacdn.com/tild6234-6432-4061-b432-613761393733/-/format/KIR_5391.jpg',
                    'https://thumb.tildacdn.com/tild3534-3632-4039-b837-313362613363/-/format/IMG_3371.jpeg',
                    'https://thumb.tildacdn.com/tild3739-6535-4065-a334-613531313434/-/format/KIR_5431.jpg',
                    'https://thumb.tildacdn.com/tild3064-6364-4632-a563-343633353936/-/format/KIR_5747.jpg',
                ]
            }
        },
        {
            title: 'Provence',
            description: [''],
            images: {
                summer: [
                    'https://thumb.tildacdn.com/tild3961-6162-4533-b464-633961303838/-/format/webp/5ZN_1417-HDR.jpg',
                    'https://thumb.tildacdn.com/tild6539-3733-4133-b338-363831333233/-/format/webp/5ZN_1511-HDR.jpg',
                    'https://thumb.tildacdn.com/tild3733-3435-4230-a132-333036393337/-/format/webp/5ZN_1411-HDR.jpg',
                    'https://thumb.tildacdn.com/tild6366-3633-4335-b437-326239323838/-/format/webp/5ZN_1715.jpg',
                    'https://thumb.tildacdn.com/tild3764-3531-4639-a333-333031353131/-/format/webp/5ZN_1788.jpg',
                    'https://thumb.tildacdn.com/tild6363-3936-4236-b034-383535366336/-/format/webp/5ZN_1493.jpg',
                ],
                winter: [
                    'https://thumb.tildacdn.com/tild3536-3939-4135-b531-383261343631/-/format/webp/DSC08053.jpg',
                    'https://thumb.tildacdn.com/tild6237-6330-4237-b638-363134643663/-/format/webp/KIR_5466.jpg',
                    'https://thumb.tildacdn.com/tild6162-6139-4137-a530-323734376339/-/format/webp/KIR_5467.jpg',
                    'https://thumb.tildacdn.com/tild6165-6534-4762-a435-353333323732/-/format/webp/DSC08024.jpg',
                    'https://thumb.tildacdn.com/tild6130-6264-4466-a530-633237306130/-/format/webp/KIR_5468.jpg',
                    'https://thumb.tildacdn.com/tild3333-6337-4432-b966-613965626164/-/format/webp/KIR_5460.jpg',
                ]
            }
        },
        {
            title: 'Apulia',
            description: [''],
            images: {
                summer: [
                    'https://thumb.tildacdn.com/tild3236-6666-4835-b131-633436663939/-/format/webp/IMG_1647.jpg',
                    'https://thumb.tildacdn.com/tild3032-3838-4362-b863-356233313433/-/format/webp/IMG_1660.jpg',
                    'https://thumb.tildacdn.com/tild3535-6439-4162-b530-353434623762/-/format/webp/IMG_1673.jpg',
                    'https://thumb.tildacdn.com/tild3035-6161-4361-b262-646630336538/-/format/webp/KIR_3061.jpg',
                    'https://thumb.tildacdn.com/tild3736-3764-4566-b664-666265663061/-/format/webp/IMG_1675.jpg',
                    'https://thumb.tildacdn.com/tild3430-6136-4831-a662-613432323963/-/format/webp/KIR_3062.jpg',
                ],
                winter: [
                    'https://thumb.tildacdn.com/tild6232-3666-4963-a464-363263633338/-/format/webp/DSC08067.jpg',
                    'https://thumb.tildacdn.com/tild6465-3862-4465-b535-373037333533/-/format/webp/DSC08063.jpg',
                    'https://thumb.tildacdn.com/tild3835-3136-4433-b362-663334383863/-/format/webp/DSC08039.jpg',
                    'https://thumb.tildacdn.com/tild6237-6433-4937-a633-343064323939/-/format/webp/DSC08040.jpg',
                    'https://thumb.tildacdn.com/tild3564-6562-4865-a566-333336393266/-/format/webp/DSC08068.jpg',
                    'https://thumb.tildacdn.com/tild6364-6236-4961-b836-376539613131/-/format/webp/KIR_3133.jpg',
                ]
            }
        },
        {
            title: 'Laura',
            description: [''],
            images: {
                summer: [
                    'https://thumb.tildacdn.com/tild3163-6164-4838-b635-323066326164/-/format/webp/KIR_3063.jpg',
                    'https://thumb.tildacdn.com/tild3533-3866-4536-a162-653330643537/-/format/webp/IMG_1666.jpg',
                    'https://thumb.tildacdn.com/tild6437-3661-4033-b763-363636313739/-/format/webp/IMG_1666.jpg',
                    'https://thumb.tildacdn.com/tild3031-3232-4431-b537-303731386566/-/format/webp/DSC04369.jpg',
                    'https://thumb.tildacdn.com/tild6230-3133-4035-b865-373233306530/-/format/webp/DSC08032.jpg',
                    'https://thumb.tildacdn.com/tild3463-6664-4334-a163-383962656332/-/format/webp/DSC08033.jpg',
                    'https://thumb.tildacdn.com/tild3764-6539-4062-b061-623632653833/-/format/webp/DSC04378.jpg',
                ],
                winter: [
                    'https://thumb.tildacdn.com/tild3730-6364-4461-b235-393839613434/-/format/webp/DSC08062.jpg',
                    'https://thumb.tildacdn.com/tild3463-6664-4334-a163-383962656332/-/format/webp/DSC08033.jpg',
                    'https://thumb.tildacdn.com/tild6230-3133-4035-b865-373233306530/-/format/webp/DSC08032.jpg',
                    'https://thumb.tildacdn.com/tild3137-6566-4265-a132-386464613535/-/format/webp/DSC08029.jpg',
                    'https://thumb.tildacdn.com/tild3935-3634-4331-b336-313333623539/-/format/webp/DSC08031.jpg',
                    'https://thumb.tildacdn.com/tild3163-6336-4334-b537-323534323865/-/format/webp/DSC08028.jpg',
                ]
            }
        },
        {
            title: 'Etna',
            description: [''],
            images: {
                summer: [
                    'https://thumb.tildacdn.com/tild6132-6330-4630-b061-613733313137/-/format/webp/IMG_1679.jpg',
                    'https://thumb.tildacdn.com/tild3034-3139-4130-a230-396539373239/-/format/webp/IMG_1911.jpg',
                    'https://thumb.tildacdn.com/tild3137-3735-4266-b131-646637326335/-/format/webp/KIR_3098.jpg',
                    'https://thumb.tildacdn.com/tild3062-6432-4133-a562-383264363065/-/format/webp/KIR_3101.jpg',
                    'https://thumb.tildacdn.com/tild3133-6138-4436-a335-613266343636/-/format/webp/KIR_3102.jpg',
                    'https://thumb.tildacdn.com/tild6565-3864-4266-a432-343932643966/-/format/webp/KIR_3105.jpg',
                ],
                winter: [
                    'https://thumb.tildacdn.com/tild3561-3366-4136-b430-376634626535/-/format/webp/DSC08065.jpg',
                    'https://thumb.tildacdn.com/tild3832-6465-4334-a162-333431326135/-/format/webp/DSC08035.jpg',
                    'https://thumb.tildacdn.com/tild3932-3036-4139-b235-333637656537/-/format/webp/DSC08037.jpg',
                    'https://thumb.tildacdn.com/tild6565-6465-4330-b134-616637343433/-/format/webp/KIR_3100.jpg',
                    'https://thumb.tildacdn.com/tild3537-3737-4564-a239-326537333662/-/format/webp/DSC08064.jpg',
                    'https://thumb.tildacdn.com/tild3066-3334-4537-b331-316336653164/-/format/webp/DSC08066.jpg',
                ]
            }
        },
    ],
    glamping: [
        {
            title: 'Malbec',
            description: [
                'Двух-местная уютная палатка — Мальбек',
                ' 20 кв.м - от 4 000 руб.',
            ],
            images: {
                summer: [
                    'https://thumb.tildacdn.com/tild3166-3636-4836-b966-323164343030/-/format/webp/image_11.png',
                    'https://thumb.tildacdn.com/tild3736-3530-4962-a637-353266633861/-/format/webp/DSC_9025.jpg',
                    'https://thumb.tildacdn.com/tild6435-6436-4365-b430-376161343030/-/format/webp/DSC_9030.jpg',
                    'https://thumb.tildacdn.com/tild3037-3164-4663-b138-343863323338/-/format/webp/DSC_9046.jpg',
                    'https://thumb.tildacdn.com/tild3764-3761-4665-a131-633433653734/-/format/webp/DSC_9005.jpg',
                    'https://thumb.tildacdn.com/tild3531-3961-4035-b461-316530323761/-/format/webp/DSC_9061.jpg',
                ]
            }
        },
        {
            title: 'Riesling',
            description: [
                'Двух-местная уютная палатка — Рислинг',
                ' 20 кв.м - от 4 000 руб.',
            ],
            images: {
                summer: [
                    'https://thumb.tildacdn.com/tild6565-3466-4531-b236-653333623036/-/format/webp/image_12.png',
                    'https://thumb.tildacdn.com/tild3037-3164-4663-b138-343863323338/-/format/webp/DSC_9046.jpg',
                    'https://thumb.tildacdn.com/tild3764-3761-4665-a131-633433653734/-/format/webp/DSC_9005.jpg',
                    'https://thumb.tildacdn.com/tild3736-3530-4962-a637-353266633861/-/format/webp/DSC_9025.jpg',
                    'https://thumb.tildacdn.com/tild6435-6436-4365-b430-376161343030/-/format/webp/DSC_9030.jpg',
                    'https://thumb.tildacdn.com/tild3531-3961-4035-b461-316530323761/-/format/webp/DSC_9061.jpg',
                ]
            }
        },
        {
            title: 'Merlot',
            description: [
                'Двух-местная уютная палатка — Мерло',
                ' 20 кв.м - от 4 000 руб.',
            ],
            images: {
                summer: [
                    'https://thumb.tildacdn.com/tild3031-6561-4762-b561-383939303839/-/format/webp/image_13.png',
                    'https://thumb.tildacdn.com/tild3736-3530-4962-a637-353266633861/-/format/webp/DSC_9025.jpg',
                    'https://thumb.tildacdn.com/tild3037-3164-4663-b138-343863323338/-/format/webp/DSC_9046.jpg',
                    'https://thumb.tildacdn.com/tild3764-3761-4665-a131-633433653734/-/format/webp/DSC_9005.jpg',
                    'https://thumb.tildacdn.com/tild3531-3961-4035-b461-316530323761/-/format/webp/DSC_9061.jpg',
                    'https://thumb.tildacdn.com/tild6435-6436-4365-b430-376161343030/-/format/webp/DSC_9030.jpg',
                ]
            }
        },
    ],
}
const styleClassLists = [
    {
        needHeader: true,
        needCounter: false,
        needToSmooth: true,
        needIcon: false,
        section: 'classic-sec',
        headBlock: 'classic-hb w-btn',
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
        needHeader: false,
        needCounter: true,
        needToSmooth: true,
        needIcon: false,
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
    }, // design #2 ()
    {
        needHeader: true,
        needCounter: true,
        needToSmooth: true,
        needIcon: false,
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
    } // design #3 (Same like 2 but with section header)
]

//
const whatIsMax = function(img) {
    if (img.width / img.height <= img.parentNode.clientWidth / img.parentNode.clientHeight) {
        img.style.maxHeight = 'unset'
        img.style.maxWidth = '100%'
    } else {
        img.style.maxHeight = '100%'
        img.style.maxWidth = 'unset'
    }
}
const needToRender = function (where) {
    const sections = document.querySelectorAll('[data-need-to-render]')

    const renderNow = function (where, what, design, listName, maxOf) {
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
        }// Рендерим (или нет) заголовок из аттрибута тайтл из "where" и основное тело

        const itemsParent = where.querySelector(`[class="${design.itemsParent}"]`)
        let number = 0
        what.forEach(function (item) {
            if (!item.render) return;
            if (maxOf && number >= maxOf) return
            itemsParent.insertAdjacentHTML('beforeend',
                `
                <article class="${design.article}"
                ${item.popUp ? `data-popup="${item.id}"` : ''}
                ${item.title ? `title="${item.title}"` : ''}
                ${design.needCounter ? 'data-counter-item' : ''}
                ${item.readMoreLink ? `style="border: 1px solid var(--white-oo)" onclick="this.querySelector('a').click()"` : ''}
                >
                    ${design.artHeads 
                    ? `<div class="${design.artHeads}">
                            ${item.icon ? `<img class="classic-art-icon" src="${item.icon}" alt="icon">` : ''}
                            <h4 class="${design.artHeader}" ${item.icon ? `style="padding-left: 2.5rem"` : ''}>${item.title}</h4>
                            <p class="${design.artDescr}">${item.shortDescr}</p>
                        </div>` 
                    : ''}
                    ${design.artImgBlck 
                        ? `<div class="${design.artImgBlck}"><img loading="lazy" class="${design.artImg}" src="${item.images[0]}" alt="${item.title}" onload="whatIsMax(this)"></div>` 
                        : ''}
                    ${design.artLink 
                        ? `<a class="${design.artLink}" ${item.readMoreLink ? `href="${item.readMoreLink}"` : ''}>${item.readMoreText}</a>` 
                        : ''}
                </article>
                `)
            number++
        })
    }
    const getData = function (section) {
        const data = section.getAttribute('data-need-to-render')
        const title = section.getAttribute('title')
        const setups = data.split(',')
        const listName = setups[0]
        const styleNumber = setups[1] - 1
        const maxOf = setups[2]
        const design = styleClassLists[styleNumber]
        const elements = lists[listName]

        console.log(`Rendering "${title}":"${listName}, ${styleNumber + 1}"...`)
        renderNow(section, elements, design, listName, maxOf ? maxOf : null)

    }
    sections.forEach(section => {
        getData(section)
    })
}

const openVariantGallery = (list, index, preview = false) => {
    multipage.changeScroll()
    const element = lists[list][index]
    const images = lists[list][index].images.summer
    const multiPage = document.getElementById('multi-page')
    multiPage.insertAdjacentHTML('afterbegin', `
                <div style="animation: showpopup .3s 1s ease-out forwards" id="close-popup" onclick="multipage.remPopup()">
                    <svg width="50px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10m-2.83-7.17 5.66-5.66m0 5.66L9.17 9.17" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div class="blur" id="popup-block"> <!--тело поп-апа-->
                    <h2 class="popUpHeader">${element.title}</h2> 
                    ${element.description ? `<div class="popUpDescr">${element.description}</div>` : null}
                    <article id="pop-up-gallery" onclick="event.stopPropagation();">
                        
                    </article>
                    ${preview ? '<a class="classic-header-button-first" href="/variants">Смотреть все</a><a class="classic-header-button-first" onclick="multipage.bookingClick(); multipage.remPopup()">Забронировать</a>' : '<a class="classic-header-button-first" onclick="multipage.bookingClick(); multipage.remPopup()">Забронировать</a>'}
                </div>`) // Рендер поп-апа
    images.forEach(image => {
        document.getElementById('pop-up-gallery').insertAdjacentHTML('afterbegin', `<img src="${image}" alt="Фотографии ${element.title}">`)
    })
}
const renderVariantsPreview = () => {
    const varNode = document.querySelectorAll('[data-variants]')
    if (varNode) {
        varNode.forEach(node => {
            node.insertAdjacentHTML('beforeend',
                `<div class="classic-ip" data-smooth-mobile data-counter-scrollIt></div>`)
            const where = node.querySelector('.classic-ip')
            if (node.getAttribute('data-variants') === 'preview') {
                for (let i = 0; i < 3; i++) {
                    where.insertAdjacentHTML('beforeend',
                        `<article id="${lists.houses[i].title}" class="variantBlock" onclick="openVariantGallery('houses', ${i}, true)" data-counter-item>
                        <div class="variantHeader" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6466 0.580368C10.8358 0.727346 10.153 1.04482 9.48132 1.58705C9.3163 1.7203 8.91006 2.10524 8.57856 2.44251C7.74781 3.28774 0.220585 11.6613 0.127462 11.8438C0.0241016 12.0464 -0.0269037 12.3933 0.0142757 12.6138C0.172092 13.4585 1.0061 13.8901 1.80123 13.5383C1.90537 13.4923 2.07478 13.3565 2.23008 13.1945C2.32311 13.0975 2.48688 13.1634 2.4869 13.2977L2.4874 16.0546C2.48803 19.8271 2.51695 20.488 2.71673 21.2974C3.01339 22.4994 3.8774 23.6089 5.03046 24.2687C5.59546 24.592 6.26374 24.781 7.13732 24.8646C7.7612 24.9244 14.8866 24.9563 16.5883 24.907C18.0395 24.865 18.4841 24.8193 19.0569 24.6536C20.5465 24.2226 21.8952 22.8371 22.2734 21.3493C22.4759 20.5525 22.4845 20.3715 22.5032 16.5064L22.5187 13.2931C22.5193 13.1616 22.6798 13.098 22.7703 13.1932C23.0531 13.4906 23.2321 13.5942 23.5516 13.6457C24.5482 13.8062 25.2985 12.8092 24.8832 11.8761C24.8122 11.7167 24.7154 11.6037 23.3203 10.0538L23.0413 9.74385C22.7136 9.37989 22.5309 8.90838 22.5278 8.4187L22.4967 3.59241C22.4957 3.43666 22.4595 3.28316 22.3909 3.14335C22.2568 2.87032 22.0242 2.63795 21.7639 2.51677C21.5978 2.43951 21.4989 2.42054 21.2569 2.41949C20.9912 2.41832 20.927 2.43254 20.7053 2.54164C20.4324 2.6759 20.2419 2.86769 20.1045 3.14665C20.0221 3.31395 20.0194 3.35622 20.0012 4.83125C19.9945 5.37033 19.3299 5.62117 18.9687 5.22093L18.3462 4.53122C16.6145 2.61233 15.8433 1.82437 15.2977 1.41659C14.7199 0.98466 14.0402 0.698243 13.3132 0.58033C12.8936 0.512261 12.0222 0.512298 11.6466 0.580368ZM11.875 3.11166C11.5519 3.19634 11.4658 3.23891 11.1554 3.46746C10.7506 3.76546 10.1709 4.3803 7.53996 7.3022L5.51341 9.55287C5.18264 9.92022 4.99963 10.3971 4.99969 10.8914L5.00012 14.578C5.00065 19.0511 5.02262 20.0403 5.13322 20.5758C5.24214 21.103 5.56587 21.5897 6.02608 21.9181C6.51851 22.2695 6.83369 22.3439 7.971 22.377C8.39703 22.3894 8.74946 22.0481 8.75078 21.6219L8.76805 16.0311C8.76851 15.8839 8.80457 15.7391 8.87315 15.6089C9.07567 15.2245 9.41085 14.9897 9.85576 14.9204C9.9892 14.8996 11.1609 14.8897 12.6706 14.8964C15.0176 14.907 15.272 14.9141 15.4204 14.9729C15.7723 15.1125 16.0436 15.3875 16.1743 15.7368C16.2491 15.9366 16.2508 16.0126 16.2508 19.1707V21.6216C16.2508 22.0477 16.603 22.3895 17.029 22.3767C18.1721 22.3422 18.483 22.269 18.9747 21.9181C19.425 21.5968 19.7483 21.1178 19.8657 20.5979C19.9778 20.1015 20.0001 19.1106 20.0006 14.5969L20.0011 10.8917C20.0011 10.3974 19.8181 9.92056 19.4874 9.55322L17.6297 7.4899C16.3254 6.0412 15.0842 4.67028 14.8716 4.44338C14.3889 3.92827 13.8963 3.48448 13.6195 3.31534C13.1816 3.04786 12.4461 2.96198 11.875 3.11166ZM11.2628 21.1514C11.2628 21.8349 11.8169 22.389 12.5004 22.389C13.1839 22.389 13.738 21.8349 13.738 21.1514V18.6761C13.738 17.9926 13.1839 17.4385 12.5004 17.4385C11.8169 17.4385 11.2628 17.9926 11.2628 18.6761V21.1514Z" fill="#EEF0F2" fill-opacity="0.85"/>
                            </svg>
                            <p class="variantTitle classic-art-header">${lists.houses[i].title}</p>
                            <div class="openVariantGallery">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                              <rect x="0.5" y="1.23022" width="49" height="49" rx="24.5" stroke="#EEF0F2" stroke-opacity="0.15"/>
                              <g opacity="0.8">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.8753 16.029C27.6694 16.0414 27.3823 16.0797 27.2373 16.1142C26.4168 16.3091 25.7035 16.8915 25.3034 17.6933C25.1517 17.9973 25.0716 18.2832 25.027 18.6796L24.9922 18.9884L21.4243 19.0013C17.6621 19.0148 17.6153 19.0165 17.1148 19.1577C16.2197 19.4102 15.4525 20.1572 15.1774 21.0444C15.0132 21.5738 15.0184 21.4111 15.0046 26.5256C14.9893 32.2138 14.9996 32.5123 15.2323 33.1301C15.466 33.7503 16.018 34.3425 16.6583 34.6598C17.007 34.8326 17.3 34.9129 17.7459 34.9581C17.9691 34.9808 20.2334 34.9875 25.2246 34.9804C32.369 34.9703 32.3837 34.9701 32.6527 34.9075C33.4371 34.7248 34.0453 34.3064 34.4877 33.645C34.8227 33.1441 34.93 32.7497 34.9773 31.8447C35.0214 30.9999 34.9957 21.9355 34.9482 21.6135C34.8423 20.8947 34.5845 20.3659 34.1077 19.889C33.9828 19.7642 33.7964 19.6052 33.6933 19.5357C33.4959 19.4028 33.1005 19.2023 33.0354 19.2023C33.0144 19.2023 32.9971 19.1788 32.9971 19.1499C32.9971 18.992 32.9288 18.4123 32.891 18.249C32.7497 17.6382 32.3191 17.0043 31.7676 16.5954C31.512 16.4059 31.0667 16.1931 30.7665 16.1169C30.3438 16.0098 28.9139 15.9663 27.8753 16.029ZM27.7705 18.0614C27.3948 18.1291 27.0833 18.4598 27.0449 18.8318L27.0283 18.9927H30.9681L30.9477 18.8388C30.907 18.532 30.6963 18.2514 30.4063 18.118C30.2587 18.0502 30.2396 18.0491 29.0734 18.0445C28.4227 18.042 27.8364 18.0496 27.7705 18.0614ZM17.8001 21.0624C17.5248 21.1026 17.2685 21.2853 17.1407 21.5325C17.0342 21.7384 17.0296 21.993 17.0387 27.1546C17.0469 31.7755 17.052 32.2278 17.0971 32.3455C17.2112 32.6427 17.4159 32.8352 17.6998 32.9121C17.7945 32.9377 18.0842 32.9613 18.4329 32.9717L19.0095 32.9891V21.0294L18.4928 21.0331C18.2087 21.0351 17.8969 21.0483 17.8001 21.0624ZM21.0163 32.982L26.5949 32.9735C31.7224 32.9657 32.1852 32.9609 32.3186 32.9148C32.6185 32.8111 32.8383 32.5852 32.9131 32.3038C32.97 32.0897 32.9708 21.8545 32.914 21.6672C32.8628 21.4986 32.7115 21.3048 32.542 21.1907C32.4396 21.1218 32.3438 21.0885 32.1749 21.0634C32.0109 21.039 30.4031 21.0294 26.4813 21.0294H21.0163V32.982ZM26.3478 23.0504C25.0742 23.266 23.9829 24.0789 23.3998 25.2463C22.627 26.7935 22.9855 28.7235 24.2681 29.9213C24.8105 30.4278 25.4709 30.7681 26.2296 30.9319C26.6221 31.0167 27.401 31.0097 27.815 30.9177C28.6296 30.7367 29.2868 30.3706 29.8618 29.7777C30.3866 29.2366 30.7111 28.645 30.9048 27.8764C30.9926 27.528 31.0147 26.7486 30.9478 26.3609C30.6536 24.6554 29.3519 23.3432 27.6679 23.0546C27.3321 22.9971 26.6752 22.995 26.3478 23.0504ZM26.5342 25.069C26.1508 25.1667 25.8851 25.3199 25.5978 25.6092C25.1892 26.0206 25.0192 26.4313 25.0202 27.0049C25.0209 27.3655 25.0793 27.6059 25.2427 27.9205C25.5872 28.5838 26.2327 28.9737 26.9918 28.9769C27.5573 28.9793 27.9767 28.8056 28.3878 28.3984C28.5976 28.1906 28.6686 28.0956 28.7688 27.8885C29.0561 27.294 29.0526 26.6952 28.7584 26.0991C28.5258 25.6278 28.1343 25.2897 27.6204 25.1165C27.2989 25.008 26.8504 24.9884 26.5342 25.069Z" fill="#EEF0F2"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.7256 16.0466C27.6844 16.0526 27.552 16.0721 27.4314 16.09C26.5136 16.2255 25.6448 16.9159 25.2488 17.8245C25.1299 18.0973 25.0621 18.3886 25.0351 18.7422L25.0149 19.0077L21.3308 19.0248C18.1248 19.0397 17.6167 19.0481 17.4151 19.0896C16.7574 19.225 16.3 19.4805 15.8332 19.9731C15.4382 20.39 15.2125 20.8258 15.0946 21.3993C15.0491 21.6208 15.0434 22.1179 15.0332 26.7503C15.0215 32.0588 15.027 32.3513 15.1457 32.8155C15.403 33.8214 16.29 34.6693 17.3095 34.8838C17.7882 34.9845 18.3026 34.9907 25.3144 34.9808C31.9228 34.9714 32.2773 34.9682 32.5479 34.9157C33.176 34.7937 33.6474 34.5486 34.0782 34.12C34.62 33.581 34.862 33.0642 34.9412 32.2777C34.9855 31.8375 34.987 22.1376 34.9429 21.7246C34.8811 21.1473 34.7115 20.6727 34.4216 20.2664C34.131 19.8593 33.6205 19.45 33.1663 19.2602L32.9822 19.1832L32.9612 18.8499C32.9025 17.9166 32.5079 17.1642 31.7959 16.6277C31.3655 16.3034 30.901 16.1209 30.3464 16.0583C30.1007 16.0306 27.9016 16.0207 27.7256 16.0466ZM27.9321 18.0356C27.7661 18.0504 27.6296 18.0814 27.5488 18.1226C27.2565 18.2717 27.0616 18.546 27.0211 18.8654L27.0011 19.0226H30.9687L30.9529 18.8482C30.9337 18.6368 30.8487 18.4617 30.6866 18.2995C30.5167 18.1297 30.3458 18.0626 30.0055 18.0322C29.659 18.0012 28.2929 18.0034 27.9321 18.0356ZM18.051 21.0303C17.6136 21.0642 17.5291 21.0963 17.318 21.3091C17.0999 21.529 17.069 21.6143 17.0311 22.1037C16.9947 22.5746 16.9961 31.4552 17.0328 31.9263C17.0644 32.3327 17.1119 32.4785 17.2721 32.661C17.5 32.9205 17.7284 32.9788 18.5228 32.9797L19.0095 32.9803V20.9995L18.6726 21.0038C18.4872 21.0062 18.2075 21.0181 18.051 21.0303ZM21.0163 32.9803L26.4901 32.9797C29.9964 32.9794 32.0387 32.9683 32.1721 32.949C32.4104 32.9146 32.5843 32.8244 32.7278 32.661C32.888 32.4785 32.9355 32.3327 32.9671 31.9263C33.0037 31.4557 33.0052 22.5749 32.9688 22.1045C32.9298 21.6004 32.9048 21.5303 32.6875 21.3148C32.4676 21.0966 32.3823 21.0658 31.8929 21.0279C31.7013 21.013 29.1756 21.0006 26.2804 21.0002L21.0163 20.9995V32.9803ZM26.3927 23.0511C25.1046 23.258 24.0015 24.0713 23.4147 25.2466C23.1334 25.8098 23.0138 26.3411 23.0151 27.0198C23.0183 28.6251 23.9552 30.0331 25.4486 30.6769C25.6011 30.7427 25.8624 30.8296 26.0293 30.87C27.4135 31.2057 28.8116 30.8178 29.8085 29.8214C30.3924 29.2378 30.7604 28.5508 30.9212 27.7441C31.0022 27.338 30.9943 26.5865 30.9049 26.1812C30.6085 24.8376 29.6606 23.7365 28.3849 23.2539C27.8265 23.0427 26.9809 22.9566 26.3927 23.0511ZM26.525 25.0586C26.1485 25.1501 25.7501 25.3901 25.4952 25.6791C25.3173 25.8808 25.1009 26.3162 25.0447 26.5855C24.8935 27.3104 25.1571 28.0639 25.7291 28.5416C25.9341 28.7128 26.3189 28.8975 26.5914 28.9556C27.0557 29.0545 27.6242 28.9555 28.0398 28.7033C28.2658 28.5662 28.5786 28.2523 28.7086 28.032C28.9597 27.607 29.0481 27.0434 28.9401 26.5577C28.7811 25.8433 28.209 25.254 27.4977 25.0721C27.2259 25.0026 26.7811 24.9965 26.525 25.0586Z" fill="#EEF0F2"/>
                              </g>
                            </svg>
                            </div>
                        </div>
                        <div class="variantPreviewImage" style="background-image: url(${lists.houses[i].images.summer[0]})"></div>
                    </article>`)
                    where.insertAdjacentHTML('beforeend',
                        `<article id="${lists.glamping[i].title}" class="variantBlock" onclick="openVariantGallery('glamping', ${i})" data-counter-item>
                        <div class="variantHeader" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0289 0.346096C11.9061 0.397843 11.7695 0.471621 11.7253 0.510059C11.2792 0.897651 2.46445 9.1561 2.36115 9.28319C2.01846 9.70482 1.74935 10.2262 1.61908 10.7208C1.50021 11.1723 0.0279468 20.1212 0.00557251 20.5282C-0.0223093 21.0358 0.0526921 21.4045 0.270048 21.8284C0.649684 22.5688 1.33449 23.0444 2.19328 23.164C2.56332 23.2155 22.4858 23.2147 22.8426 23.1631C23.8942 23.0111 24.7401 22.2304 24.9547 21.214C25.0644 20.694 25.0269 20.4034 24.2435 15.7064C23.8417 13.2979 23.4803 11.17 23.4401 10.9779C23.3099 10.3542 23.0337 9.7669 22.6469 9.29107C22.5673 9.1932 20.4223 7.17109 17.8802 4.79743C14.5515 1.68943 13.203 0.45353 13.0611 0.380862C12.7697 0.231661 12.3352 0.217013 12.0289 0.346096ZM8.23625 7.25841C4.0793 11.1445 4.29807 10.9335 4.18566 11.165C4.10366 11.3339 3.9677 12.0903 3.32247 15.9659C2.90126 18.4961 2.55662 20.583 2.55662 20.6033C2.55662 20.6269 4.1221 20.6403 6.8785 20.6403H11.2004V12.5702C11.2004 8.1317 11.196 4.50133 11.1908 4.50274C11.1856 4.50416 9.856 5.74419 8.23625 7.25841ZM13.8011 11.3925L19.5814 20.6403H21.0131C21.9092 20.6403 22.4449 20.6264 22.4449 20.6033C22.4449 20.583 22.1002 18.4976 21.679 15.9692C20.9169 11.3951 20.8685 11.1486 20.6936 10.9495C20.6576 10.9084 19.2083 9.55 17.4728 7.93067C15.7374 6.31131 14.2013 4.87316 14.0593 4.73475L13.8011 4.48312V11.3925ZM13.8011 20.6403H15.1803C16.1228 20.6403 16.5516 20.6277 16.5349 20.6006C16.5214 20.5788 15.9008 19.5857 15.1558 18.3938L13.8011 16.2266V20.6403Z" fill="#EEF0F2" fill-opacity="0.85"/>
                            </svg>
                            <p class="variantTitle classic-art-header">${lists.glamping[i].title}</p>
                            <div class="openVariantGallery">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                              <rect x="0.5" y="1.23022" width="49" height="49" rx="24.5" stroke="#EEF0F2" stroke-opacity="0.15"/>
                              <g opacity="0.8">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.8753 16.029C27.6694 16.0414 27.3823 16.0797 27.2373 16.1142C26.4168 16.3091 25.7035 16.8915 25.3034 17.6933C25.1517 17.9973 25.0716 18.2832 25.027 18.6796L24.9922 18.9884L21.4243 19.0013C17.6621 19.0148 17.6153 19.0165 17.1148 19.1577C16.2197 19.4102 15.4525 20.1572 15.1774 21.0444C15.0132 21.5738 15.0184 21.4111 15.0046 26.5256C14.9893 32.2138 14.9996 32.5123 15.2323 33.1301C15.466 33.7503 16.018 34.3425 16.6583 34.6598C17.007 34.8326 17.3 34.9129 17.7459 34.9581C17.9691 34.9808 20.2334 34.9875 25.2246 34.9804C32.369 34.9703 32.3837 34.9701 32.6527 34.9075C33.4371 34.7248 34.0453 34.3064 34.4877 33.645C34.8227 33.1441 34.93 32.7497 34.9773 31.8447C35.0214 30.9999 34.9957 21.9355 34.9482 21.6135C34.8423 20.8947 34.5845 20.3659 34.1077 19.889C33.9828 19.7642 33.7964 19.6052 33.6933 19.5357C33.4959 19.4028 33.1005 19.2023 33.0354 19.2023C33.0144 19.2023 32.9971 19.1788 32.9971 19.1499C32.9971 18.992 32.9288 18.4123 32.891 18.249C32.7497 17.6382 32.3191 17.0043 31.7676 16.5954C31.512 16.4059 31.0667 16.1931 30.7665 16.1169C30.3438 16.0098 28.9139 15.9663 27.8753 16.029ZM27.7705 18.0614C27.3948 18.1291 27.0833 18.4598 27.0449 18.8318L27.0283 18.9927H30.9681L30.9477 18.8388C30.907 18.532 30.6963 18.2514 30.4063 18.118C30.2587 18.0502 30.2396 18.0491 29.0734 18.0445C28.4227 18.042 27.8364 18.0496 27.7705 18.0614ZM17.8001 21.0624C17.5248 21.1026 17.2685 21.2853 17.1407 21.5325C17.0342 21.7384 17.0296 21.993 17.0387 27.1546C17.0469 31.7755 17.052 32.2278 17.0971 32.3455C17.2112 32.6427 17.4159 32.8352 17.6998 32.9121C17.7945 32.9377 18.0842 32.9613 18.4329 32.9717L19.0095 32.9891V21.0294L18.4928 21.0331C18.2087 21.0351 17.8969 21.0483 17.8001 21.0624ZM21.0163 32.982L26.5949 32.9735C31.7224 32.9657 32.1852 32.9609 32.3186 32.9148C32.6185 32.8111 32.8383 32.5852 32.9131 32.3038C32.97 32.0897 32.9708 21.8545 32.914 21.6672C32.8628 21.4986 32.7115 21.3048 32.542 21.1907C32.4396 21.1218 32.3438 21.0885 32.1749 21.0634C32.0109 21.039 30.4031 21.0294 26.4813 21.0294H21.0163V32.982ZM26.3478 23.0504C25.0742 23.266 23.9829 24.0789 23.3998 25.2463C22.627 26.7935 22.9855 28.7235 24.2681 29.9213C24.8105 30.4278 25.4709 30.7681 26.2296 30.9319C26.6221 31.0167 27.401 31.0097 27.815 30.9177C28.6296 30.7367 29.2868 30.3706 29.8618 29.7777C30.3866 29.2366 30.7111 28.645 30.9048 27.8764C30.9926 27.528 31.0147 26.7486 30.9478 26.3609C30.6536 24.6554 29.3519 23.3432 27.6679 23.0546C27.3321 22.9971 26.6752 22.995 26.3478 23.0504ZM26.5342 25.069C26.1508 25.1667 25.8851 25.3199 25.5978 25.6092C25.1892 26.0206 25.0192 26.4313 25.0202 27.0049C25.0209 27.3655 25.0793 27.6059 25.2427 27.9205C25.5872 28.5838 26.2327 28.9737 26.9918 28.9769C27.5573 28.9793 27.9767 28.8056 28.3878 28.3984C28.5976 28.1906 28.6686 28.0956 28.7688 27.8885C29.0561 27.294 29.0526 26.6952 28.7584 26.0991C28.5258 25.6278 28.1343 25.2897 27.6204 25.1165C27.2989 25.008 26.8504 24.9884 26.5342 25.069Z" fill="#EEF0F2"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.7256 16.0466C27.6844 16.0526 27.552 16.0721 27.4314 16.09C26.5136 16.2255 25.6448 16.9159 25.2488 17.8245C25.1299 18.0973 25.0621 18.3886 25.0351 18.7422L25.0149 19.0077L21.3308 19.0248C18.1248 19.0397 17.6167 19.0481 17.4151 19.0896C16.7574 19.225 16.3 19.4805 15.8332 19.9731C15.4382 20.39 15.2125 20.8258 15.0946 21.3993C15.0491 21.6208 15.0434 22.1179 15.0332 26.7503C15.0215 32.0588 15.027 32.3513 15.1457 32.8155C15.403 33.8214 16.29 34.6693 17.3095 34.8838C17.7882 34.9845 18.3026 34.9907 25.3144 34.9808C31.9228 34.9714 32.2773 34.9682 32.5479 34.9157C33.176 34.7937 33.6474 34.5486 34.0782 34.12C34.62 33.581 34.862 33.0642 34.9412 32.2777C34.9855 31.8375 34.987 22.1376 34.9429 21.7246C34.8811 21.1473 34.7115 20.6727 34.4216 20.2664C34.131 19.8593 33.6205 19.45 33.1663 19.2602L32.9822 19.1832L32.9612 18.8499C32.9025 17.9166 32.5079 17.1642 31.7959 16.6277C31.3655 16.3034 30.901 16.1209 30.3464 16.0583C30.1007 16.0306 27.9016 16.0207 27.7256 16.0466ZM27.9321 18.0356C27.7661 18.0504 27.6296 18.0814 27.5488 18.1226C27.2565 18.2717 27.0616 18.546 27.0211 18.8654L27.0011 19.0226H30.9687L30.9529 18.8482C30.9337 18.6368 30.8487 18.4617 30.6866 18.2995C30.5167 18.1297 30.3458 18.0626 30.0055 18.0322C29.659 18.0012 28.2929 18.0034 27.9321 18.0356ZM18.051 21.0303C17.6136 21.0642 17.5291 21.0963 17.318 21.3091C17.0999 21.529 17.069 21.6143 17.0311 22.1037C16.9947 22.5746 16.9961 31.4552 17.0328 31.9263C17.0644 32.3327 17.1119 32.4785 17.2721 32.661C17.5 32.9205 17.7284 32.9788 18.5228 32.9797L19.0095 32.9803V20.9995L18.6726 21.0038C18.4872 21.0062 18.2075 21.0181 18.051 21.0303ZM21.0163 32.9803L26.4901 32.9797C29.9964 32.9794 32.0387 32.9683 32.1721 32.949C32.4104 32.9146 32.5843 32.8244 32.7278 32.661C32.888 32.4785 32.9355 32.3327 32.9671 31.9263C33.0037 31.4557 33.0052 22.5749 32.9688 22.1045C32.9298 21.6004 32.9048 21.5303 32.6875 21.3148C32.4676 21.0966 32.3823 21.0658 31.8929 21.0279C31.7013 21.013 29.1756 21.0006 26.2804 21.0002L21.0163 20.9995V32.9803ZM26.3927 23.0511C25.1046 23.258 24.0015 24.0713 23.4147 25.2466C23.1334 25.8098 23.0138 26.3411 23.0151 27.0198C23.0183 28.6251 23.9552 30.0331 25.4486 30.6769C25.6011 30.7427 25.8624 30.8296 26.0293 30.87C27.4135 31.2057 28.8116 30.8178 29.8085 29.8214C30.3924 29.2378 30.7604 28.5508 30.9212 27.7441C31.0022 27.338 30.9943 26.5865 30.9049 26.1812C30.6085 24.8376 29.6606 23.7365 28.3849 23.2539C27.8265 23.0427 26.9809 22.9566 26.3927 23.0511ZM26.525 25.0586C26.1485 25.1501 25.7501 25.3901 25.4952 25.6791C25.3173 25.8808 25.1009 26.3162 25.0447 26.5855C24.8935 27.3104 25.1571 28.0639 25.7291 28.5416C25.9341 28.7128 26.3189 28.8975 26.5914 28.9556C27.0557 29.0545 27.6242 28.9555 28.0398 28.7033C28.2658 28.5662 28.5786 28.2523 28.7086 28.032C28.9597 27.607 29.0481 27.0434 28.9401 26.5577C28.7811 25.8433 28.209 25.254 27.4977 25.0721C27.2259 25.0026 26.7811 24.9965 26.525 25.0586Z" fill="#EEF0F2"/>
                              </g>
                            </svg>
                            </div>
                        </div>
                        <div class="variantPreviewImage" style="background-image: url(${lists.glamping[i].images.summer[0]})"></div>
                    </article>`)
                }
            }
            else if (node.getAttribute('data-variants') === 'houses') {
                for (let i = 0; i < lists.houses.length; i++) {
                    where.insertAdjacentHTML('beforeend',
                        `<article id="${lists.houses[i].title}" class="variantBlock" onclick="openVariantGallery('houses', ${i})" data-counter-item>
                        <div class="variantHeader" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6466 0.580368C10.8358 0.727346 10.153 1.04482 9.48132 1.58705C9.3163 1.7203 8.91006 2.10524 8.57856 2.44251C7.74781 3.28774 0.220585 11.6613 0.127462 11.8438C0.0241016 12.0464 -0.0269037 12.3933 0.0142757 12.6138C0.172092 13.4585 1.0061 13.8901 1.80123 13.5383C1.90537 13.4923 2.07478 13.3565 2.23008 13.1945C2.32311 13.0975 2.48688 13.1634 2.4869 13.2977L2.4874 16.0546C2.48803 19.8271 2.51695 20.488 2.71673 21.2974C3.01339 22.4994 3.8774 23.6089 5.03046 24.2687C5.59546 24.592 6.26374 24.781 7.13732 24.8646C7.7612 24.9244 14.8866 24.9563 16.5883 24.907C18.0395 24.865 18.4841 24.8193 19.0569 24.6536C20.5465 24.2226 21.8952 22.8371 22.2734 21.3493C22.4759 20.5525 22.4845 20.3715 22.5032 16.5064L22.5187 13.2931C22.5193 13.1616 22.6798 13.098 22.7703 13.1932C23.0531 13.4906 23.2321 13.5942 23.5516 13.6457C24.5482 13.8062 25.2985 12.8092 24.8832 11.8761C24.8122 11.7167 24.7154 11.6037 23.3203 10.0538L23.0413 9.74385C22.7136 9.37989 22.5309 8.90838 22.5278 8.4187L22.4967 3.59241C22.4957 3.43666 22.4595 3.28316 22.3909 3.14335C22.2568 2.87032 22.0242 2.63795 21.7639 2.51677C21.5978 2.43951 21.4989 2.42054 21.2569 2.41949C20.9912 2.41832 20.927 2.43254 20.7053 2.54164C20.4324 2.6759 20.2419 2.86769 20.1045 3.14665C20.0221 3.31395 20.0194 3.35622 20.0012 4.83125C19.9945 5.37033 19.3299 5.62117 18.9687 5.22093L18.3462 4.53122C16.6145 2.61233 15.8433 1.82437 15.2977 1.41659C14.7199 0.98466 14.0402 0.698243 13.3132 0.58033C12.8936 0.512261 12.0222 0.512298 11.6466 0.580368ZM11.875 3.11166C11.5519 3.19634 11.4658 3.23891 11.1554 3.46746C10.7506 3.76546 10.1709 4.3803 7.53996 7.3022L5.51341 9.55287C5.18264 9.92022 4.99963 10.3971 4.99969 10.8914L5.00012 14.578C5.00065 19.0511 5.02262 20.0403 5.13322 20.5758C5.24214 21.103 5.56587 21.5897 6.02608 21.9181C6.51851 22.2695 6.83369 22.3439 7.971 22.377C8.39703 22.3894 8.74946 22.0481 8.75078 21.6219L8.76805 16.0311C8.76851 15.8839 8.80457 15.7391 8.87315 15.6089C9.07567 15.2245 9.41085 14.9897 9.85576 14.9204C9.9892 14.8996 11.1609 14.8897 12.6706 14.8964C15.0176 14.907 15.272 14.9141 15.4204 14.9729C15.7723 15.1125 16.0436 15.3875 16.1743 15.7368C16.2491 15.9366 16.2508 16.0126 16.2508 19.1707V21.6216C16.2508 22.0477 16.603 22.3895 17.029 22.3767C18.1721 22.3422 18.483 22.269 18.9747 21.9181C19.425 21.5968 19.7483 21.1178 19.8657 20.5979C19.9778 20.1015 20.0001 19.1106 20.0006 14.5969L20.0011 10.8917C20.0011 10.3974 19.8181 9.92056 19.4874 9.55322L17.6297 7.4899C16.3254 6.0412 15.0842 4.67028 14.8716 4.44338C14.3889 3.92827 13.8963 3.48448 13.6195 3.31534C13.1816 3.04786 12.4461 2.96198 11.875 3.11166ZM11.2628 21.1514C11.2628 21.8349 11.8169 22.389 12.5004 22.389C13.1839 22.389 13.738 21.8349 13.738 21.1514V18.6761C13.738 17.9926 13.1839 17.4385 12.5004 17.4385C11.8169 17.4385 11.2628 17.9926 11.2628 18.6761V21.1514Z" fill="#EEF0F2" fill-opacity="0.85"/>
                            </svg>
                            <p class="variantTitle classic-art-header">${lists.houses[i].title}</p>
                            <div class="openVariantGallery">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                              <rect x="0.5" y="1.23022" width="49" height="49" rx="24.5" stroke="#EEF0F2" stroke-opacity="0.15"/>
                              <g opacity="0.8">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.8753 16.029C27.6694 16.0414 27.3823 16.0797 27.2373 16.1142C26.4168 16.3091 25.7035 16.8915 25.3034 17.6933C25.1517 17.9973 25.0716 18.2832 25.027 18.6796L24.9922 18.9884L21.4243 19.0013C17.6621 19.0148 17.6153 19.0165 17.1148 19.1577C16.2197 19.4102 15.4525 20.1572 15.1774 21.0444C15.0132 21.5738 15.0184 21.4111 15.0046 26.5256C14.9893 32.2138 14.9996 32.5123 15.2323 33.1301C15.466 33.7503 16.018 34.3425 16.6583 34.6598C17.007 34.8326 17.3 34.9129 17.7459 34.9581C17.9691 34.9808 20.2334 34.9875 25.2246 34.9804C32.369 34.9703 32.3837 34.9701 32.6527 34.9075C33.4371 34.7248 34.0453 34.3064 34.4877 33.645C34.8227 33.1441 34.93 32.7497 34.9773 31.8447C35.0214 30.9999 34.9957 21.9355 34.9482 21.6135C34.8423 20.8947 34.5845 20.3659 34.1077 19.889C33.9828 19.7642 33.7964 19.6052 33.6933 19.5357C33.4959 19.4028 33.1005 19.2023 33.0354 19.2023C33.0144 19.2023 32.9971 19.1788 32.9971 19.1499C32.9971 18.992 32.9288 18.4123 32.891 18.249C32.7497 17.6382 32.3191 17.0043 31.7676 16.5954C31.512 16.4059 31.0667 16.1931 30.7665 16.1169C30.3438 16.0098 28.9139 15.9663 27.8753 16.029ZM27.7705 18.0614C27.3948 18.1291 27.0833 18.4598 27.0449 18.8318L27.0283 18.9927H30.9681L30.9477 18.8388C30.907 18.532 30.6963 18.2514 30.4063 18.118C30.2587 18.0502 30.2396 18.0491 29.0734 18.0445C28.4227 18.042 27.8364 18.0496 27.7705 18.0614ZM17.8001 21.0624C17.5248 21.1026 17.2685 21.2853 17.1407 21.5325C17.0342 21.7384 17.0296 21.993 17.0387 27.1546C17.0469 31.7755 17.052 32.2278 17.0971 32.3455C17.2112 32.6427 17.4159 32.8352 17.6998 32.9121C17.7945 32.9377 18.0842 32.9613 18.4329 32.9717L19.0095 32.9891V21.0294L18.4928 21.0331C18.2087 21.0351 17.8969 21.0483 17.8001 21.0624ZM21.0163 32.982L26.5949 32.9735C31.7224 32.9657 32.1852 32.9609 32.3186 32.9148C32.6185 32.8111 32.8383 32.5852 32.9131 32.3038C32.97 32.0897 32.9708 21.8545 32.914 21.6672C32.8628 21.4986 32.7115 21.3048 32.542 21.1907C32.4396 21.1218 32.3438 21.0885 32.1749 21.0634C32.0109 21.039 30.4031 21.0294 26.4813 21.0294H21.0163V32.982ZM26.3478 23.0504C25.0742 23.266 23.9829 24.0789 23.3998 25.2463C22.627 26.7935 22.9855 28.7235 24.2681 29.9213C24.8105 30.4278 25.4709 30.7681 26.2296 30.9319C26.6221 31.0167 27.401 31.0097 27.815 30.9177C28.6296 30.7367 29.2868 30.3706 29.8618 29.7777C30.3866 29.2366 30.7111 28.645 30.9048 27.8764C30.9926 27.528 31.0147 26.7486 30.9478 26.3609C30.6536 24.6554 29.3519 23.3432 27.6679 23.0546C27.3321 22.9971 26.6752 22.995 26.3478 23.0504ZM26.5342 25.069C26.1508 25.1667 25.8851 25.3199 25.5978 25.6092C25.1892 26.0206 25.0192 26.4313 25.0202 27.0049C25.0209 27.3655 25.0793 27.6059 25.2427 27.9205C25.5872 28.5838 26.2327 28.9737 26.9918 28.9769C27.5573 28.9793 27.9767 28.8056 28.3878 28.3984C28.5976 28.1906 28.6686 28.0956 28.7688 27.8885C29.0561 27.294 29.0526 26.6952 28.7584 26.0991C28.5258 25.6278 28.1343 25.2897 27.6204 25.1165C27.2989 25.008 26.8504 24.9884 26.5342 25.069Z" fill="#EEF0F2"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.7256 16.0466C27.6844 16.0526 27.552 16.0721 27.4314 16.09C26.5136 16.2255 25.6448 16.9159 25.2488 17.8245C25.1299 18.0973 25.0621 18.3886 25.0351 18.7422L25.0149 19.0077L21.3308 19.0248C18.1248 19.0397 17.6167 19.0481 17.4151 19.0896C16.7574 19.225 16.3 19.4805 15.8332 19.9731C15.4382 20.39 15.2125 20.8258 15.0946 21.3993C15.0491 21.6208 15.0434 22.1179 15.0332 26.7503C15.0215 32.0588 15.027 32.3513 15.1457 32.8155C15.403 33.8214 16.29 34.6693 17.3095 34.8838C17.7882 34.9845 18.3026 34.9907 25.3144 34.9808C31.9228 34.9714 32.2773 34.9682 32.5479 34.9157C33.176 34.7937 33.6474 34.5486 34.0782 34.12C34.62 33.581 34.862 33.0642 34.9412 32.2777C34.9855 31.8375 34.987 22.1376 34.9429 21.7246C34.8811 21.1473 34.7115 20.6727 34.4216 20.2664C34.131 19.8593 33.6205 19.45 33.1663 19.2602L32.9822 19.1832L32.9612 18.8499C32.9025 17.9166 32.5079 17.1642 31.7959 16.6277C31.3655 16.3034 30.901 16.1209 30.3464 16.0583C30.1007 16.0306 27.9016 16.0207 27.7256 16.0466ZM27.9321 18.0356C27.7661 18.0504 27.6296 18.0814 27.5488 18.1226C27.2565 18.2717 27.0616 18.546 27.0211 18.8654L27.0011 19.0226H30.9687L30.9529 18.8482C30.9337 18.6368 30.8487 18.4617 30.6866 18.2995C30.5167 18.1297 30.3458 18.0626 30.0055 18.0322C29.659 18.0012 28.2929 18.0034 27.9321 18.0356ZM18.051 21.0303C17.6136 21.0642 17.5291 21.0963 17.318 21.3091C17.0999 21.529 17.069 21.6143 17.0311 22.1037C16.9947 22.5746 16.9961 31.4552 17.0328 31.9263C17.0644 32.3327 17.1119 32.4785 17.2721 32.661C17.5 32.9205 17.7284 32.9788 18.5228 32.9797L19.0095 32.9803V20.9995L18.6726 21.0038C18.4872 21.0062 18.2075 21.0181 18.051 21.0303ZM21.0163 32.9803L26.4901 32.9797C29.9964 32.9794 32.0387 32.9683 32.1721 32.949C32.4104 32.9146 32.5843 32.8244 32.7278 32.661C32.888 32.4785 32.9355 32.3327 32.9671 31.9263C33.0037 31.4557 33.0052 22.5749 32.9688 22.1045C32.9298 21.6004 32.9048 21.5303 32.6875 21.3148C32.4676 21.0966 32.3823 21.0658 31.8929 21.0279C31.7013 21.013 29.1756 21.0006 26.2804 21.0002L21.0163 20.9995V32.9803ZM26.3927 23.0511C25.1046 23.258 24.0015 24.0713 23.4147 25.2466C23.1334 25.8098 23.0138 26.3411 23.0151 27.0198C23.0183 28.6251 23.9552 30.0331 25.4486 30.6769C25.6011 30.7427 25.8624 30.8296 26.0293 30.87C27.4135 31.2057 28.8116 30.8178 29.8085 29.8214C30.3924 29.2378 30.7604 28.5508 30.9212 27.7441C31.0022 27.338 30.9943 26.5865 30.9049 26.1812C30.6085 24.8376 29.6606 23.7365 28.3849 23.2539C27.8265 23.0427 26.9809 22.9566 26.3927 23.0511ZM26.525 25.0586C26.1485 25.1501 25.7501 25.3901 25.4952 25.6791C25.3173 25.8808 25.1009 26.3162 25.0447 26.5855C24.8935 27.3104 25.1571 28.0639 25.7291 28.5416C25.9341 28.7128 26.3189 28.8975 26.5914 28.9556C27.0557 29.0545 27.6242 28.9555 28.0398 28.7033C28.2658 28.5662 28.5786 28.2523 28.7086 28.032C28.9597 27.607 29.0481 27.0434 28.9401 26.5577C28.7811 25.8433 28.209 25.254 27.4977 25.0721C27.2259 25.0026 26.7811 24.9965 26.525 25.0586Z" fill="#EEF0F2"/>
                              </g>
                            </svg>
                            </div>
                        </div>
                        <div class="variantPreviewImage" style="background-image: url(${lists.houses[i].images.summer[0]})"></div>
                    </article>`)
                }
            }
            else if (node.getAttribute('data-variants') === 'glamping') {
                for (let i = 0; i < lists.glamping.length; i++) {
                    where.insertAdjacentHTML('beforeend',
                        `<article id="${lists.glamping[i].title}" class="variantBlock" onclick="openVariantGallery('glamping', ${i})" data-counter-item>
                        <div class="variantHeader" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6466 0.580368C10.8358 0.727346 10.153 1.04482 9.48132 1.58705C9.3163 1.7203 8.91006 2.10524 8.57856 2.44251C7.74781 3.28774 0.220585 11.6613 0.127462 11.8438C0.0241016 12.0464 -0.0269037 12.3933 0.0142757 12.6138C0.172092 13.4585 1.0061 13.8901 1.80123 13.5383C1.90537 13.4923 2.07478 13.3565 2.23008 13.1945C2.32311 13.0975 2.48688 13.1634 2.4869 13.2977L2.4874 16.0546C2.48803 19.8271 2.51695 20.488 2.71673 21.2974C3.01339 22.4994 3.8774 23.6089 5.03046 24.2687C5.59546 24.592 6.26374 24.781 7.13732 24.8646C7.7612 24.9244 14.8866 24.9563 16.5883 24.907C18.0395 24.865 18.4841 24.8193 19.0569 24.6536C20.5465 24.2226 21.8952 22.8371 22.2734 21.3493C22.4759 20.5525 22.4845 20.3715 22.5032 16.5064L22.5187 13.2931C22.5193 13.1616 22.6798 13.098 22.7703 13.1932C23.0531 13.4906 23.2321 13.5942 23.5516 13.6457C24.5482 13.8062 25.2985 12.8092 24.8832 11.8761C24.8122 11.7167 24.7154 11.6037 23.3203 10.0538L23.0413 9.74385C22.7136 9.37989 22.5309 8.90838 22.5278 8.4187L22.4967 3.59241C22.4957 3.43666 22.4595 3.28316 22.3909 3.14335C22.2568 2.87032 22.0242 2.63795 21.7639 2.51677C21.5978 2.43951 21.4989 2.42054 21.2569 2.41949C20.9912 2.41832 20.927 2.43254 20.7053 2.54164C20.4324 2.6759 20.2419 2.86769 20.1045 3.14665C20.0221 3.31395 20.0194 3.35622 20.0012 4.83125C19.9945 5.37033 19.3299 5.62117 18.9687 5.22093L18.3462 4.53122C16.6145 2.61233 15.8433 1.82437 15.2977 1.41659C14.7199 0.98466 14.0402 0.698243 13.3132 0.58033C12.8936 0.512261 12.0222 0.512298 11.6466 0.580368ZM11.875 3.11166C11.5519 3.19634 11.4658 3.23891 11.1554 3.46746C10.7506 3.76546 10.1709 4.3803 7.53996 7.3022L5.51341 9.55287C5.18264 9.92022 4.99963 10.3971 4.99969 10.8914L5.00012 14.578C5.00065 19.0511 5.02262 20.0403 5.13322 20.5758C5.24214 21.103 5.56587 21.5897 6.02608 21.9181C6.51851 22.2695 6.83369 22.3439 7.971 22.377C8.39703 22.3894 8.74946 22.0481 8.75078 21.6219L8.76805 16.0311C8.76851 15.8839 8.80457 15.7391 8.87315 15.6089C9.07567 15.2245 9.41085 14.9897 9.85576 14.9204C9.9892 14.8996 11.1609 14.8897 12.6706 14.8964C15.0176 14.907 15.272 14.9141 15.4204 14.9729C15.7723 15.1125 16.0436 15.3875 16.1743 15.7368C16.2491 15.9366 16.2508 16.0126 16.2508 19.1707V21.6216C16.2508 22.0477 16.603 22.3895 17.029 22.3767C18.1721 22.3422 18.483 22.269 18.9747 21.9181C19.425 21.5968 19.7483 21.1178 19.8657 20.5979C19.9778 20.1015 20.0001 19.1106 20.0006 14.5969L20.0011 10.8917C20.0011 10.3974 19.8181 9.92056 19.4874 9.55322L17.6297 7.4899C16.3254 6.0412 15.0842 4.67028 14.8716 4.44338C14.3889 3.92827 13.8963 3.48448 13.6195 3.31534C13.1816 3.04786 12.4461 2.96198 11.875 3.11166ZM11.2628 21.1514C11.2628 21.8349 11.8169 22.389 12.5004 22.389C13.1839 22.389 13.738 21.8349 13.738 21.1514V18.6761C13.738 17.9926 13.1839 17.4385 12.5004 17.4385C11.8169 17.4385 11.2628 17.9926 11.2628 18.6761V21.1514Z" fill="#EEF0F2" fill-opacity="0.85"/>
                            </svg>
                            <p class="variantTitle classic-art-header">${lists.glamping[i].title}</p>
                            <div class="openVariantGallery">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                              <rect x="0.5" y="1.23022" width="49" height="49" rx="24.5" stroke="#EEF0F2" stroke-opacity="0.15"/>
                              <g opacity="0.8">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.8753 16.029C27.6694 16.0414 27.3823 16.0797 27.2373 16.1142C26.4168 16.3091 25.7035 16.8915 25.3034 17.6933C25.1517 17.9973 25.0716 18.2832 25.027 18.6796L24.9922 18.9884L21.4243 19.0013C17.6621 19.0148 17.6153 19.0165 17.1148 19.1577C16.2197 19.4102 15.4525 20.1572 15.1774 21.0444C15.0132 21.5738 15.0184 21.4111 15.0046 26.5256C14.9893 32.2138 14.9996 32.5123 15.2323 33.1301C15.466 33.7503 16.018 34.3425 16.6583 34.6598C17.007 34.8326 17.3 34.9129 17.7459 34.9581C17.9691 34.9808 20.2334 34.9875 25.2246 34.9804C32.369 34.9703 32.3837 34.9701 32.6527 34.9075C33.4371 34.7248 34.0453 34.3064 34.4877 33.645C34.8227 33.1441 34.93 32.7497 34.9773 31.8447C35.0214 30.9999 34.9957 21.9355 34.9482 21.6135C34.8423 20.8947 34.5845 20.3659 34.1077 19.889C33.9828 19.7642 33.7964 19.6052 33.6933 19.5357C33.4959 19.4028 33.1005 19.2023 33.0354 19.2023C33.0144 19.2023 32.9971 19.1788 32.9971 19.1499C32.9971 18.992 32.9288 18.4123 32.891 18.249C32.7497 17.6382 32.3191 17.0043 31.7676 16.5954C31.512 16.4059 31.0667 16.1931 30.7665 16.1169C30.3438 16.0098 28.9139 15.9663 27.8753 16.029ZM27.7705 18.0614C27.3948 18.1291 27.0833 18.4598 27.0449 18.8318L27.0283 18.9927H30.9681L30.9477 18.8388C30.907 18.532 30.6963 18.2514 30.4063 18.118C30.2587 18.0502 30.2396 18.0491 29.0734 18.0445C28.4227 18.042 27.8364 18.0496 27.7705 18.0614ZM17.8001 21.0624C17.5248 21.1026 17.2685 21.2853 17.1407 21.5325C17.0342 21.7384 17.0296 21.993 17.0387 27.1546C17.0469 31.7755 17.052 32.2278 17.0971 32.3455C17.2112 32.6427 17.4159 32.8352 17.6998 32.9121C17.7945 32.9377 18.0842 32.9613 18.4329 32.9717L19.0095 32.9891V21.0294L18.4928 21.0331C18.2087 21.0351 17.8969 21.0483 17.8001 21.0624ZM21.0163 32.982L26.5949 32.9735C31.7224 32.9657 32.1852 32.9609 32.3186 32.9148C32.6185 32.8111 32.8383 32.5852 32.9131 32.3038C32.97 32.0897 32.9708 21.8545 32.914 21.6672C32.8628 21.4986 32.7115 21.3048 32.542 21.1907C32.4396 21.1218 32.3438 21.0885 32.1749 21.0634C32.0109 21.039 30.4031 21.0294 26.4813 21.0294H21.0163V32.982ZM26.3478 23.0504C25.0742 23.266 23.9829 24.0789 23.3998 25.2463C22.627 26.7935 22.9855 28.7235 24.2681 29.9213C24.8105 30.4278 25.4709 30.7681 26.2296 30.9319C26.6221 31.0167 27.401 31.0097 27.815 30.9177C28.6296 30.7367 29.2868 30.3706 29.8618 29.7777C30.3866 29.2366 30.7111 28.645 30.9048 27.8764C30.9926 27.528 31.0147 26.7486 30.9478 26.3609C30.6536 24.6554 29.3519 23.3432 27.6679 23.0546C27.3321 22.9971 26.6752 22.995 26.3478 23.0504ZM26.5342 25.069C26.1508 25.1667 25.8851 25.3199 25.5978 25.6092C25.1892 26.0206 25.0192 26.4313 25.0202 27.0049C25.0209 27.3655 25.0793 27.6059 25.2427 27.9205C25.5872 28.5838 26.2327 28.9737 26.9918 28.9769C27.5573 28.9793 27.9767 28.8056 28.3878 28.3984C28.5976 28.1906 28.6686 28.0956 28.7688 27.8885C29.0561 27.294 29.0526 26.6952 28.7584 26.0991C28.5258 25.6278 28.1343 25.2897 27.6204 25.1165C27.2989 25.008 26.8504 24.9884 26.5342 25.069Z" fill="#EEF0F2"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.7256 16.0466C27.6844 16.0526 27.552 16.0721 27.4314 16.09C26.5136 16.2255 25.6448 16.9159 25.2488 17.8245C25.1299 18.0973 25.0621 18.3886 25.0351 18.7422L25.0149 19.0077L21.3308 19.0248C18.1248 19.0397 17.6167 19.0481 17.4151 19.0896C16.7574 19.225 16.3 19.4805 15.8332 19.9731C15.4382 20.39 15.2125 20.8258 15.0946 21.3993C15.0491 21.6208 15.0434 22.1179 15.0332 26.7503C15.0215 32.0588 15.027 32.3513 15.1457 32.8155C15.403 33.8214 16.29 34.6693 17.3095 34.8838C17.7882 34.9845 18.3026 34.9907 25.3144 34.9808C31.9228 34.9714 32.2773 34.9682 32.5479 34.9157C33.176 34.7937 33.6474 34.5486 34.0782 34.12C34.62 33.581 34.862 33.0642 34.9412 32.2777C34.9855 31.8375 34.987 22.1376 34.9429 21.7246C34.8811 21.1473 34.7115 20.6727 34.4216 20.2664C34.131 19.8593 33.6205 19.45 33.1663 19.2602L32.9822 19.1832L32.9612 18.8499C32.9025 17.9166 32.5079 17.1642 31.7959 16.6277C31.3655 16.3034 30.901 16.1209 30.3464 16.0583C30.1007 16.0306 27.9016 16.0207 27.7256 16.0466ZM27.9321 18.0356C27.7661 18.0504 27.6296 18.0814 27.5488 18.1226C27.2565 18.2717 27.0616 18.546 27.0211 18.8654L27.0011 19.0226H30.9687L30.9529 18.8482C30.9337 18.6368 30.8487 18.4617 30.6866 18.2995C30.5167 18.1297 30.3458 18.0626 30.0055 18.0322C29.659 18.0012 28.2929 18.0034 27.9321 18.0356ZM18.051 21.0303C17.6136 21.0642 17.5291 21.0963 17.318 21.3091C17.0999 21.529 17.069 21.6143 17.0311 22.1037C16.9947 22.5746 16.9961 31.4552 17.0328 31.9263C17.0644 32.3327 17.1119 32.4785 17.2721 32.661C17.5 32.9205 17.7284 32.9788 18.5228 32.9797L19.0095 32.9803V20.9995L18.6726 21.0038C18.4872 21.0062 18.2075 21.0181 18.051 21.0303ZM21.0163 32.9803L26.4901 32.9797C29.9964 32.9794 32.0387 32.9683 32.1721 32.949C32.4104 32.9146 32.5843 32.8244 32.7278 32.661C32.888 32.4785 32.9355 32.3327 32.9671 31.9263C33.0037 31.4557 33.0052 22.5749 32.9688 22.1045C32.9298 21.6004 32.9048 21.5303 32.6875 21.3148C32.4676 21.0966 32.3823 21.0658 31.8929 21.0279C31.7013 21.013 29.1756 21.0006 26.2804 21.0002L21.0163 20.9995V32.9803ZM26.3927 23.0511C25.1046 23.258 24.0015 24.0713 23.4147 25.2466C23.1334 25.8098 23.0138 26.3411 23.0151 27.0198C23.0183 28.6251 23.9552 30.0331 25.4486 30.6769C25.6011 30.7427 25.8624 30.8296 26.0293 30.87C27.4135 31.2057 28.8116 30.8178 29.8085 29.8214C30.3924 29.2378 30.7604 28.5508 30.9212 27.7441C31.0022 27.338 30.9943 26.5865 30.9049 26.1812C30.6085 24.8376 29.6606 23.7365 28.3849 23.2539C27.8265 23.0427 26.9809 22.9566 26.3927 23.0511ZM26.525 25.0586C26.1485 25.1501 25.7501 25.3901 25.4952 25.6791C25.3173 25.8808 25.1009 26.3162 25.0447 26.5855C24.8935 27.3104 25.1571 28.0639 25.7291 28.5416C25.9341 28.7128 26.3189 28.8975 26.5914 28.9556C27.0557 29.0545 27.6242 28.9555 28.0398 28.7033C28.2658 28.5662 28.5786 28.2523 28.7086 28.032C28.9597 27.607 29.0481 27.0434 28.9401 26.5577C28.7811 25.8433 28.209 25.254 27.4977 25.0721C27.2259 25.0026 26.7811 24.9965 26.525 25.0586Z" fill="#EEF0F2"/>
                              </g>
                            </svg>
                            </div>
                        </div>
                        <div class="variantPreviewImage" style="background-image: url(${lists.glamping[i].images.summer[0]})"></div>
                    </article>`)
                }
            }
        })
    }
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
const multipage = {
    popupButtonsInit: function () {
        document.querySelectorAll("[data-popup]").forEach(bttn => {
            const data = bttn.getAttribute("data-popup")
            bttn.addEventListener('click', (e) => {
                multipage.popup(e.target)
            })
            bttn.querySelectorAll('*').forEach(button => {
                button.setAttribute('data-popup', data)
            })
        })
        const buttons = document.querySelectorAll("[data-popup]")

        buttons.forEach(button => {
            const id = button.getAttribute("data-popup")
            const listName = this.findListNameById(id)
            const obj = this.findObjectById(id);
            button.setAttribute('data-list', listName)
            button.setAttribute('data-popup-type', obj.popUpType)
            button.setAttribute('data-header', obj.title)
        })
    },
    findListNameById: function (id) {
        for (const listName in lists) {
            if (lists[listName].some(service => service.id === id)) {
                return listName
            }
        }
    },
    findObjectById: function (id) {
        for (const listName in lists) {
            if (lists[listName].find(service => service.id === id)) {
                return lists[listName].find(service => service.id === id)
            }
        }
    },
    //
    popup(target){
        const dataPopup= (target.getAttribute('data-popup') ? target.getAttribute('data-popup') : '')
        const dataHeader = target.getAttribute('data-header') ? target.getAttribute('data-header') : ''
        const dataType = target.getAttribute('data-popup-type') ? target.getAttribute('data-popup-type') : ''
        const dataList = this.findListNameById(dataPopup)
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
        const getGallery = (service) => {
            if (service.id === 'showAllButton') return
            let q = '';
            const id = service.getAttribute('data-popup')
            const obj = this.findObjectById(id)
            if (!obj.withGallery) return q;

            for (const img of obj.images) {
                q += `<img src="${img}" alt="Фотографии ресторана">`
            }
            return `<article id="pop-up-gallery">${q}</article>`;
        }
        const getTeam = (target) => {
            let q = ''
            lists.team.forEach(person => {
                q += `<article class="team-person">
                <div class="person-photo-block">
                    <img onload="whatIsMax(this)" class="shadow person-photo" src="${person.photo[0]}" alt="${person.name}">
                </div>
                <div class="person-text-content">
                    <p class="person-name">${person.name}</p>
                    <p class="person-about">${person.about}</p>
                    <p class="person-position">${person.position}</p>
                </div>
                </article>`
            })
            return `<section id="team" data-smooth-mobile>${q}</section>`
        }
        const getService = (target) => {
            const name = target.getAttribute('data-popup')
            const list = target.getAttribute('data-list')
            const obj = lists[list].find((service, id) => service.id === name)

            return `
            <section data-ip-service="${obj.id}" id="popup-service">
            <div class="popup-service-imgblock">
                <img onload="whatIsMax(this)" src="${obj.images[0]}" alt="${obj.fullDescr}" class="popup-service-img">
            </div>
            <div class="popup-service-textblock">
                <h3 class="popup-service-header">${obj.shortDescr}</h3>
                <p class="popup-service-fulldescr">${obj.fullDescr}</p>
            <div class="popup-service-buttons">
                    <a href="https://wa.me/79670655655?text=Здравствуйте, пишу с сайта по предложению '${obj.title}'" target="_blank" class="hxSpecialItemColumnFooterWhatsApp" rel="noopener">
                        <svg viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.799 11.61c-.039-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.074c-.197 0-.362.098-.49.29-.146.217-.587.733-.724.886-.017.02-.042.045-.056.045-.013 0-.239-.093-.307-.122-1.564-.68-2.752-2.314-2.914-2.59-.024-.039-.025-.057-.025-.057a.48.48 0 0 1 .086-.1c.08-.08.165-.183.248-.283l.118-.14c.12-.14.175-.25.237-.376l.033-.065a.68.68 0 0 0-.02-.64c-.035-.07-.65-1.555-.716-1.711-.157-.377-.365-.552-.654-.552l-.113.004c-.137.006-.882.104-1.212.312-.35.22-.941.923-.941 2.16 0 1.111.705 2.162 1.009 2.561l.041.06c1.16 1.695 2.607 2.95 4.074 3.537 1.412.564 2.08.629 2.46.629.16 0 .289-.013.401-.024l.072-.006c.488-.044 1.56-.6 1.803-1.277.193-.533.243-1.117.115-1.328-.087-.144-.238-.216-.429-.308Z"></path><path d="M10.178.119C4.76.119.354 4.492.354 9.869c0 1.738.465 3.44 1.347 4.93L.014 19.776a.26.26 0 0 0 .324.33l5.19-1.649a9.89 9.89 0 0 0 4.65 1.16c5.416 0 9.822-4.374 9.822-9.749 0-5.376-4.406-9.75-9.822-9.75Zm0 17.467a7.783 7.783 0 0 1-4.282-1.277.26.26 0 0 0-.221-.03l-2.6.826.84-2.476a.26.26 0 0 0-.037-.236 7.613 7.613 0 0 1-1.481-4.525c0-4.256 3.49-7.718 7.78-7.718s7.78 3.462 7.78 7.718-3.49 7.718-7.78 7.718Z"></path></svg>
                        WhatsApp
                    </a>
                </div>
            </div>
            </section>
            `
        }

        multiPage.insertAdjacentHTML('afterbegin', `
                <div style="animation: showpopup .3s 1s ease-out forwards" id="close-popup" onclick="multipage.remPopup()">
                        <svg width="50px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10m-2.83-7.17 5.66-5.66m0 5.66L9.17 9.17" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                <div class="blur" id="popup-block"> <!--тело поп-апа-->
                    ${dataPopup === 'online' ? `<article id="weatherTest"></article>` : ''}
                    <h2 class="popUpHeader">${dataHeader}</h2> 
                    ${getGallery(target)}
                    ${dataPopup === 'online' ? getVideoStream() : ''}
                    ${dataPopup === 'team' ? getTeam(target) : ''}
                    ${dataPopup === 'online' ? initPlayer() : ''}
                    ${dataPopup === 'restaurant' ? getMenu(target) : ''}
                    ${dataType === 'service' ? getService(target) : ''}
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

    //
    getHeaderHeight: async () => {
        const nav = document.querySelector('nav');
        const hero  = document.getElementById('hero');
        const mobNav = document.getElementById('mobileNavStroke');

        if (mobNav.offsetHeight < 1) {
            let height = `calc(${window.innerHeight}px - ${nav.clientHeight}px - 3rem)`;
            let margin = `calc(${nav.clientHeight}px + 5rem)`
            hero.style.cssText += `margin-top: ${margin}`; //height:${height};
        } // для пк
        else {
            let height = `unset`;
            let margin = `calc(${nav.offsetHeight}px + 1rem)`
            hero.style.cssText += `margin-top: ${margin}`; //height:${height};
        } // для мобильных
    },
    modulePosition() {
        let module;
        const hero = document.getElementById('hero');
        const findModule = setInterval(() => {
            if (document.querySelector('.znms-widget__module-form-block')) {
                // clearInterval(findModule)
                module = document.querySelector('.znms-widget__module-form-block')
                let topPosition = hero.offsetTop + hero.offsetHeight;
                module.style.cssText = `top: ${topPosition}px !important;`
                hero.style.marginBottom = module.offsetHeight + 100 + 'px'
            }
        }, 300)
    },
    hideMobileMenu() {
        let btn = document.getElementById('monMenuButton');
        if (btn.getBoundingClientRect().width > 0) return btn.click();
    },
    mobileBackImages: [
        'https://optim.tildacdn.com/tild3534-3435-4839-b839-366337373937/-/format/webp/IMAGE_2024-04-11_170.jpg',
        'https://optim.tildacdn.com/tild3837-6638-4535-a238-663235623730/-/format/webp/KIR_3052.jpg',
        'https://optim.tildacdn.com/tild3739-6138-4236-a436-313339626532/-/format/webp/IMAGE_2024-04-11_173.jpg',
        //'https://optim.tildacdn.com/tild3539-6266-4461-a633-376165353133/-/format/webp/IMAGE_2024-04-11_174.jpg',
    ],
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
    //
    renderFAQ: function () {
        const section = document.getElementById('faq')
        const list = lists.faq;
        section.insertAdjacentHTML('beforeend', `<ul id="faq-list" class="classic-ip"></ul>`)
        const whereTo = document.getElementById('faq-list')
        for ( const [key, value] of Object.entries(list)) {
            whereTo.insertAdjacentHTML('beforeend',
                `<li class="faq-item" onclick="multipage.clickFAQ(this)">
                    <div class="faq-item-header-block">
                        <div class="faq-item-header-icon"></div>
                        <h5 class="faq-item-header">${key}</h5>
                    </div>
                    <div class="faq-item-body">
                        <p class="faq-item-text">${value}</p>
                    </div>
                    </li>`)
        }
        multipage.checkFAQlinks()
    },
    clickFAQ: function (li) {
        li.parentNode.querySelectorAll('.faq-item-body').forEach(item => {
            item.style.height = '0';
            item.style.opacity = `0`;
            item.style.translate = `0 40px`
        })
        li.parentNode.querySelectorAll('.faq-item-header-icon').forEach(item => {
            item.style.top = '50%';
            item.style.left = '1rem';
            item.style.translate = '0 -50%';
            item.style.width = '.5rem'
            item.style.height = '.5rem'
        })
        const textBlock = li.querySelector('.faq-item-body')
        const textInBlock = li.querySelector('.faq-item-text')
        const bullet = li.querySelector('.faq-item-header-icon')

        if (textBlock.clientHeight <= 0) {
            bullet.style.top = '1rem';
            bullet.style.left = '-1rem';
            bullet.style.width = '2px'
            bullet.style.height = '2px'

            textBlock.style.height = `calc(${textInBlock.getBoundingClientRect().height + 10}px`
            setTimeout(() => {
                textBlock.style.translate = `0 10px`
                textBlock.style.opacity = `1`
            },70)
        }
    },
    //
    openFullScreenPhoto: function (el) {
        this.changeScroll()
        const multiPage = document.getElementById('multi-page')
        multiPage.insertAdjacentHTML('afterbegin', `
                <div style="animation: showpopup .3s 1s ease-out forwards" id="fullScreenPhotoButton" onclick="multipage.closeFullScreenPhoto()">
                    <svg width="50px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10m-2.83-7.17 5.66-5.66m0 5.66L9.17 9.17" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <article id="fullScreenPhoto">
                    <img src="${el.src}" alt="${el.alt}">
                </article>`
        )
    },
    closeFullScreenPhoto: function () {
        this.changeScroll()
        const button = document.querySelector('#fullScreenPhotoButton')
        const img = document.querySelector('#fullScreenPhoto')
        img.style.animation = 'hidepopup .3s ease-out forwards'
        button.style.animation = 'hidepopup .3s ease-out forwards'
        setTimeout(()=>{
            img.remove()
            button.remove()
        }, 300)
    },
    //
    randomIng: function (max) {
        return  Math.floor(Math.random() * (max));
    },
    smoothShowHorizontal: function () {
        const parentElements = document.querySelectorAll('[data-smooth-mobile]')
        parentElements.forEach(parentElement => {
            parentElement.addEventListener('touchmove', e => {
                parentElement.children[0].style.animation = ``
            })
            const waitOnTheViewPort = setInterval(() => {
                if (parentElement.getBoundingClientRect().top + 250 < window.innerHeight) {
                    parentElement.children[0].style.animation = `smoothShowHorizontal 3s ease-in-out`
                    clearInterval(waitOnTheViewPort);
                } else {
                }
            }, 1000)
        })
    },
    changeScroll(){
        if (document.body.style.overflow === 'hidden')
            document.body.style.overflow = 'unset'
        else document.body.style.overflow = 'hidden'
    }, // Запрет/разрешение на скролл body ( прим. при открытии поп-апа )
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
    }, // Строкой получаем название браузера ( для трансляции )
    bookingClick() {
        let booking = document.querySelector('.znms-widget__widget-btn');
        if (booking) {
            booking.click()
        }
    },
    clickAndCopy: function (el) {
        if (confirm(`Скопировать 
"${el.textContent}"?`)) {
            navigator.clipboard.writeText(el.textContent);
        }
    },
    checkFAQlinks: function () {
        let links = document.querySelectorAll('.faqbtn')
        links.forEach(link => {
            if (link.getAttribute('href')) {
                const href = link.getAttribute('href')
                const sharp = href.split('#')[1]
                if (!document.getElementById(sharp)) {
                    return ''
                } else {
                    link.href = `#${sharp}`
                }
            }
        })
    },
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
        `<div class="counterBlock" style="opacity: .8">
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
        renderCounter(item, max, whatIsScrolling, itemsList)
    })
} // аттрибуты data-counter(-where/-scrollIt/-item)
// ------------------------------------------------

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
// !Инициализация трансляции

// Запуск записи стрима вместо трансляции
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
// !Запуск записи стрима вместо трансляции

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

window.addEventListener("resize", () => {
    multipage.getHeaderHeight()
        .then(multipage.modulePosition)
})
window.addEventListener("load", () => {
    // whatPageIs.data === 'main' ? multipage.heroVideoStart() : null
    multipage.getHeaderHeight()
        .then( () => {
            if (window.innerWidth < 600) {
                multipage.smoothShowHorizontal()
            }
        })
})
document.addEventListener("DOMContentLoaded", async () => {

    needToRender()
    multipage.popupButtonsInit()

    multipage.getHeaderHeight()
        .then(renderVariantsPreview)
        .then(whereToRenderCounter)
        .then(multipage.modulePosition)
        .then(multipage.renderFAQ)

    // console.clear();
    console.log('Designed by Holyxey at AdsTarget');
})