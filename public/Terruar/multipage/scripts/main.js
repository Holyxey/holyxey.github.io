'use strict';
const seasonTapes = [
    'Бассейн'
]
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
    offers: [
        {
            title: 'Скидка 10%',
            description: 'Для заездов с 19 июня по 26 июня',
            cover: 'https://thumb.tildacdn.com/tild3538-3836-4137-a136-646137323339/-/format/webp/1_service.png',
        },
        {
            title: '-15% именинникам',
            description: '4 дня до и 4 после вашего дня Рождения',
            cover: 'https://thumb.tildacdn.com/tild6434-6435-4738-b864-653834633537/-/format/webp/noroot.jpg',
        },
        {
            title: '-1000р на каждый день',
            description: 'При бронировании от трех дней',
            cover: 'https://thumb.tildacdn.com/tild3365-6633-4561-a437-653036303730/-/format/webp/main_offer.jpg',
        },
        {
            title: 'Романтическое путешествие',
            description: 'Скидка 5%',
            cover: 'https://thumb.tildacdn.com/tild6537-3530-4731-a637-303634346265/-/format/webp/rom.png',
            header: 'Домик на 2 ночи',
            highlights: [
                '2 часа чана',
                'завтрак',
                'проектор',
            ],
            info: [
                'Проведите время с любимыми! Глэмпинг Терруар прекрасно подходит для романтического отдыха.',
                'В каждом домике вас ждет панорамное окно рядом с двуспальной кроватью, чтобы любоваться природой в объятиях близкого, а уютный декор и свечи согреют даже холодное сердце.',
                'Для отличного завершения вечера предлагаем посетить баню и посмотреть фильм на проекторе.'
            ],
            price: 'от 13 823 р.',
            link: 'https://wa.me/79670655655?text=Здравствуйте, пишу с сайта по предложению %27Романтическое путешествие%27',
            percentage: '-5%'
        },
        {
            title: 'Активный отдых',
            description: 'Скидка 10%',
            // cover: 'https://thumb.tildacdn.com/tild6563-3566-4264-b733-383436336232/-/format/webp/active.jpg',
            cover: 'https://thumb.tildacdn.com/tild3064-3134-4361-a431-393232613639/-/format/webp/image_1.png',
            header: 'Домик на 2 ночи',
            highlights: [
                'завтрак',
                '2 часа квадроцикла',
                'джип-тур',
            ],
            info: [
                'Наше местоположение идеально для любителей активного отдыха: вы можете прокатиться на квадроцикле до местного пруда, съездить в контактный зоопарк или изучить живописные окрестности. ',
                'А если вам интересны более длительные поездки – мы организуем для вас джип-тур: путешествие по лесным дорогам с посещением Святого Источника.',
            ],
            price: 'от 22 320 р.',
            link: 'https://wa.me/79670655655?text=Здравствуйте, пишу с сайта по предложению %27Активный отдых%27',
            percentage: '-10%'
        },
        {
            title: 'Отдых с детьми',
            description: 'Скидка 5%',
            cover: 'https://thumb.tildacdn.com/tild6261-6633-4765-b435-656230326233/-/format/webp/kid3.jpg',
            header: 'Домик на 2 ночи',
            highlights: [
                'завтрак',
                '2 часа бани',
                '1 час квадроцикла',
                'сутки XBOX',
            ],
            info: [
                'В Терруаре есть чем заняться с детьми: вместе покататься на квадроцикле, отдохнуть в бане и всей семьей приготовить ужин на костре.',
                'А аренда XBOX, проектора и игра с котами нашего глэмпинга развлекут детей, когда родители будут наслаждаться тишиной и спокойствием природы &#x1F60C;',
            ],
            price: 'от 15 960 р.',
            link: 'https://wa.me/79670655655?text=Здравствуйте, пишу с сайта по предложению %27Отдых с детьми%27',
            percentage: '-5%'
        },
        {
            title: 'Отдых с друзьями',
            description: 'Скидка 15%',
            // cover: 'https://thumb.tildacdn.com/tild3130-3066-4432-a563-653332376334/-/format/webp/friends1.JPG',
            cover: 'https://thumb.tildacdn.com/tild3665-3365-4735-b764-653165653764/-/format/webp/IMG_7498_1.png',
            header: '2 домика на 2 ночи',
            highlights: [
                'завтрак',
                '2 часа бани',
                '2 часа квадроцикла',
                'сутки XBOX',
            ],
            info: [
                'Соберитесь с друзьями на яркий отдых за городом. Просторная беседка и мангальная зона у каждого домика станут отличным местом для встречи и общения.',
                'А еще вы можете прокатиться на квадроциклах, посетить банный чан, и все вместе поиграть в XBOX.',
            ],
            price: 'от 26 100 р.',
            link: 'https://wa.me/79670655655?text=Здравствуйте, пишу с сайта по предложению %27Отдых с друзьями%27',
            percentage: '-15%'
        },
    ],
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
            description: `Двух-местный уютный домик — Мендоза, повышенной категории (зеркальный)<br><br>В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.`,
            images: {
                summer: [
                    'https://thumb.tildacdn.com/tild3734-3333-4335-b235-623766363464/-/format/webp/KIR_3234.jpg',
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
            description: `Одномодульный уютный домик — Бургундия<br><br>В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.`,
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
            description: `Одномодульный уютный домик — Рейнау<br><br>В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.`,
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
            description: `Одномодульный уютный домик — Тоскана<br><br>В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.`,
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
            description: `Четырех-местный уютный домик — Шампань.<br><br>В доме на 4-х человек с большим панорамными окнами есть 2 комнаты: в одной из них находится двуспальная кровать, а в другой раздвижной диван, а также кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.<br><br>Домик оборудован электрическим конвектором, у вас всегда будет тепло!`,
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
            description: `Одномодульный уютный домик — Бордо<br><br>В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.`,
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
            description: `Одномодульный уютный домик — Прованс<br><br>В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.`,
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
            description: `Двух-местный уютный домик — Апулия, повышенной категории<br><br>В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю`,
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
            description: `Двух-местный уютный домик — Лаура, повышенной категории<br><br>В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.`,
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
            description: `Двух-местный уютный домик — Этна, повышенной категории<br><br>В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.`,
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
                '<br>20 кв.м - от 4 000 руб.',
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
                '<br>20 кв.м - от 4 000 руб.',
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
                '<br>20 кв.м - от 4 000 руб.',
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
    loyalty: [
        {
            render: true,
            id: 'loyaltyProgram',
            title: 'Программа лояльности',
            shortDescr: '',
            images: ['https://thumb.tildacdn.com/tild6366-3066-4538-b735-656366366266/-/format/webp/friends5.JPG'],
            readMoreText: 'Посмотреть предложение',
            innards: {
                "При заезде 3+ раз:": [
                    "Скидка 5% (суммируется и применяется автоматически в модуле бронирования)",
                    "1 час бани в подарок (из двух) или аренда проектора",
                ],
                "При заезде 6+ раз:": [
                    "Скидка 5% (суммируется и применяется автоматически в модуле бронирования) ",
                    "1 час бани в подарок (из двух) или аренда проектора",
                    "Бесплатное повышение категории (при наличии)",
                    "Дополнительная ночь на ДР",
                ],
                "При заезде 9+ раз:": [
                    "Скидка 5% (суммируется и применяется автоматически в модуле бронирования) ",
                    "2 часа бани с фуракко в подарок",
                    "Аренда проектора",
                    "Бесплатное повышение категории (при наличии)",
                    "Дополнительная ночь на ДР",
                    "Специальный подарок для каждого заезда (вино)",
                    "Брендированная майка Терруар",
                ],
            }
        },
        {
            render: true,
            id: 'certificates',
            title: 'Подарочные сертификаты',
            shortDescr: '',
            images: ['https://thumb.tildacdn.com/tild6566-3434-4432-b162-646637393438/-/format/webp/cert5500.png'],
            readMoreText: 'Варианты',
            cartIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none"><path d="M.912.535a.8.8 0 0 1 1.02-.49l.322.114c.657.23 1.216.427 1.655.643.47.23.873.514 1.177.958.3.44.425.923.482 1.453q.038.355.046.787h11.347c1.798 0 3.416 0 3.889.616.474.615.288 1.543-.082 3.398l-.533 2.586c-.336 1.63-.504 2.446-1.093 2.926-.588.48-1.42.48-3.086.48H10.4c-2.975 0-4.462 0-5.386-.975s-.992-2.01-.992-5.148V5.108c0-.79 0-1.318-.045-1.723-.042-.388-.116-.581-.212-.722-.094-.138-.237-.266-.56-.425-.345-.169-.813-.335-1.525-.585l-.278-.098a.8.8 0 0 1-.49-1.02M6.689 16.8a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2m9.6 0a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2" fill="#fff"/></svg>',
            innards: {
                "5000 рублей": {
                    paymentLink: 'https://c.cloudpayments.ru/payments/353af10fdb844fe5985a9dd15882418e',
                    qr: '<svg xmlns="http://www.w3.org/2000/svg" width="100" viewBox="0 0 81 81" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M.015 15.308h15.306V0H.015zM19.683 2.222l2.222.097V0h-2.32zm10.945.082h2.14v1.96l-2.058.098-.097 2.222h2.154v2.14h-2.14v8.724h-2.139V6.584h-2.14v-2.14h2.14v-2.32l-2.222.098-.098 2.058h-4.263v4.609h2.14v1.975h-2.14v11.028H19.78l-.097-2.222-4.362-.092v-2.134l-10.945.086-.097 2.058h-1.96v-2.14H.015v2.304h2.14v4.28H.015v2.305h2.14v2.14H.015v4.444h4.28v6.42H2.328l-.092-4.363H.097l-.044 3.334-.045 3.333h2.147v2.14h2.124l.097 2.222 2.222.097v1.945l-2.222.098-.097 2.047-4.182.092L0 52.51h4.294v2.14H.015v8.888h2.304v-6.584h1.966l.091 4.362 4.362.092v2.13h8.723v2.14h4.444v-2.14h4.444v-4.444h2.14v2.304h2.139v2.14h2.304v-2.304h-2.14v-2.14h2.14v-2.14h4.279v2.14h-2.32l.098 2.222 2.222.097v1.945l-2.222.098-.097 2.222h-8.708v2.14h-4.28V74.4h-2.139v-6.584h-2.31l.088 8.806 4.362.092V74.4h2.304v-4.28h4.28v1.96l-2.223.098-.097 2.222h2.32v2.14h-4.445v2.14h-6.583v2.304h6.748v-2.14h4.28v2.14h17.61v-2.14h1.975v2.14h13.33v-2.14h2.14V74.4h4.28v-2.14h2.14v2.14h2.139v2.14h-2.14v4.444h2.305v-2.14h2.14v2.14h6.582V74.4h-2.14v-2.14h2.14v-6.584h-2.14v-2.305h-2.139v-1.96l2.058-.097.097-2.222h2.124v-2.305h-4.269l-.092-4.197-2.222-.097v2.154h-2.14v-4.28h2.14v-4.264l2.222-.097.097-2.222h-2.319v-2.14h4.28v2.14h2.303V39.34h-2.14V37.2h2.14v-2.304h-6.583V37.2h-2.14v-4.28h2.14v-2.304h-4.28v-2.14h10.864v-6.584h-2.125l-.097-2.222-2.042-.098-.098-2.042-10.945-.087v2.145h-4.28v-1.975h2.14v-4.445h-2.14v-2.14h2.147l-.089-6.666-2.057-.098v-1.96h2.14V0H61.24v2.14H59.1v4.444h-4.278V0h-2.305v6.584h-4.264l-.097-2.222-4.362-.092V2.304h4.444V0h-4.444v2.14h-2.14V0h-2.303v2.304h2.14v1.96l-2.058.098-.097 2.222H37.21V4.28h-2.14V2.304h2.14V0h-2.304v2.14h-1.975V0h-2.304zm35.056 13.004h15.307V0H65.684zM2.32 13.173l10.78-.087.087-10.782H2.32zm65.587-.087 10.78.087V2.304H67.82zM4.369 4.487c-.045.118-.062 1.62-.037 3.337l.044 3.122 6.673.09-.09-6.674-3.253-.045c-2.554-.035-3.273.002-3.337.17m13.209-.105c-.065.065-.117 3.068-.117 6.674v6.557h2.308l-.086-13.251-.994-.048c-.547-.027-1.047.004-1.111.068m52.498.004c-.062.062-.113 1.584-.113 3.381v3.268l3.333-.044 3.333-.045V4.362l-3.22-.045c-1.77-.024-3.27.007-3.333.069M32.932 6.584h1.975v-2.14h-1.975zm-8.723 2.14h1.975v-2.14h-1.975zm15.224.082-4.362.092v1.966h2.14v4.444h-2.14v4.28h2.14v2.304h-4.28v8.724h2.14v2.14h2.14v-4.265l-2.222-.097v-4.28l2.222-.097v-2.125h4.444v2.305H37.21v1.975h4.444v2.304h6.583v4.273l6.501.09.098 2.042 2.042.097.091 4.527h-2.148v4.28h1.96l.097-2.223 2.222-.097V39.34h4.279V37.2H59.1v-6.404l-2.221-.097-.097-2.223h-1.945l-.098 2.223h-4.443l-.092-4.362h-4.27v-2.14h-2.14v-2.305h2.14v-2.14h-6.583v-2.304h2.14v-2.14h-2.14v-4.444h2.14v-4.28h-1.96zm6.583 2.14-4.361.092v4.27h2.14v-2.14h2.304v4.28h4.114v-2.14h-2.14V6.584h-1.965zm6.501-.097 2.222.097.092 4.347-2.231.097-.098 2.043 2.237.097.092 4.362h-4.453v2.14h4.444v2.14h1.975v-2.14H59.1v-2.14h2.14v-2.14H59.1v2.14h-2.32l.098-2.222 2.222-.097v-4.265h2.14v-2.14H59.1v2.14h-2.314l.092-4.362 4.361-.092V8.896l-6.5-.09-.098-2.222h-2.125zm-28.308 4.46h1.975v-4.28h-1.975zm26.169 0h2.14v-4.28h-2.14zm-17.446 0h1.975v-2.14h-1.975zM4.459 21.891h2.14v2.305h-2.14v1.975h2.14v4.444h4.443v2.14h2.14v-2.14h2.14v-2.14h-2.14v-2.14H8.738v-4.444h-2.14v-2.14h-2.14zm8.723 0h-2.14v2.14h2.14zh2.14v2.305h-2.14v1.975h8.723v-1.966l-4.362-.092-.097-2.222H15.32v-2.14h-2.14zm35.056 0h1.975v-2.14h-1.975zm17.446 0h-2.14v2.14h2.14zh4.444v4.28h8.558v-1.975h-2.14v-4.445H65.685zm-43.78 2.14h2.305v4.444h2.154l-.097 2.223h-2.14l-.097-2.223h-2.124v6.42h4.263l.098-2.058 4.362-.091V30.78h-2.14v-2.305h2.14v-2.14h-4.444v-2.304h4.444v-2.14h-8.723zm50.281.082 2.222.098v-2.32h-2.32zm-10.862 2.14-2.222.098v4.264h2.14v-2.14h2.303v2.14h4.28v-2.14h-2.14v-2.14H63.38v-2.14h-1.96zm4.361-1.07v.988h2.14v-1.975h-2.14zm2.222 3.21 2.057.098v-2.155h-2.155zM2.319 30.616h1.975v-2.14H2.32zm74.228 2.305h4.444v-2.305h-4.444zm-37.032-.165h2.14v2.305H37.21v2.14h-2.14v2.14h2.14V37.2h4.444v2.14h2.14V37.2h2.139v-2.14h-2.14v-4.28h-4.279zM6.598 39.34h2.13l.092-4.362 2.057-.098v-1.96H6.599zm6.584-4.444h2.14V37.2h-2.14v-2.14h-2.14v2.14h2.14v2.14h2.14V37.2h2.139v-4.28h-4.28zm17.61 0h4.115v-1.975h-4.115zM19.765 37.2H17.64l-.097 2.223-2.222.097v2.125H6.598v4.28h4.28v-2.14h6.747v2.14h1.969l.089-6.502 4.526-.092v2.15h4.28v2.304h2.303v2.14h1.975V37.2h-2.14v-2.14h-2.139v2.14h-6.583v-2.14h-2.14zm28.473 0h2.14v8.724h2.14v2.125l2.221.098.098 2.042 2.042.097.097 2.223h-2.154v2.14H59.1v2.14h2.14v-2.14h4.46l-.098-2.058-4.362-.092v-2.13H59.1v-2.305h2.14v-1.968l-6.5-.09-.098-2.221h-2.125V35.06h-4.279zm15.307 0h2.14v4.445h-4.28v2.14h6.419v2.304h-4.28v4.115h4.28v-2.14h4.279v-1.96l-2.057-.097-.098-2.222h-2.124V41.48h2.14v-1.975h-2.14V37.2h2.14v-2.14h-2.14v2.14h-2.14v-2.14h-2.14zm-17.529 2.223-2.222.097v1.96h4.28V37.2h-1.96zm24.112-.083h1.975V37.2h-1.975zm4.28 0h2.139V37.2h-2.14zm-69.95 2.14h2.14v-1.975h-2.14zm35.057.165h-4.444v4.28h2.14v-2.14h4.28v-4.28h-1.976zm30.613 2.14h1.975v-2.14h-1.975zm-48.223 4.264 2.222.098.097 2.222h-2.32v2.14h8.724v-2.14h-2.14v-2.125l-2.222-.097-.097-2.043-2.042-.097-.098-2.222h-2.124zm21.89-2.14 2.221.098.09 6.502h4.272v2.14h2.14v-2.14h2.139v-2.14h-2.14v-2.14h-2.14v2.14h-2.303v-6.584h-4.28zm28.472.015h2.14v-2.14h-2.14zm-59.085 1.153v.987h2.14V46.09h-2.14zm19.75.987h1.975V46.09h-1.975zm4.279 2.305h-2.14v4.28h2.14v2.14h4.444v2.304H37.21v2.14h4.444v2.14h6.419v-1.96l-2.058-.098-.097-2.222h-2.125v-2.305h2.14v-1.975H39.35v-2.304h4.443v-4.28h-2.14v2.14H39.35v-2.305h2.14V46.09h-4.28zm39.336 0h2.13l.092 4.362 2.221.097v-6.764h-4.443zm-58.921 0h-4.444v2.14h4.443v2.14h1.976v-6.42h-1.976zm-13.167 2.14h2.14v2.304h-2.14v1.975h2.14v2.305h2.304v2.14h1.974v-2.14h2.305v2.14h2.14v-2.14h2.139v-2.14h-2.14v2.14h-2.14v-2.305h2.14v-1.975h-2.124l-.098-2.222-2.222-.097v-2.125H8.904v2.14H6.598v-2.14h-2.14zm63.474.11c-.06.06-.11.541-.11 1.07v.96h2.14v-2.14h-.96c-.528 0-1.01.049-1.07.11m-43.724 4.17h1.975v-1.976h-1.975zm4.28 2.304h2.139v-4.28h-2.14zm19.75 2.14h4.278v-2.14h2.305v2.14h1.975V56.96l-6.501-.09-.098-2.057h-1.96zm17.445-4.445h2.14v-1.975h-2.14zm4.444.165h-2.304v2.14h-2.14v-2.14h-2.14v2.14h2.14v2.14h2.14v-2.14h2.304v2.14h1.975v-6.42h-1.975zm-48.223 2.14h-4.28v2.14h4.28zh2.14v-2.14h-2.14zm52.502 2.14h2.14v-4.28h-2.14zM52.6 65.595l2.057.097v-4.295h-2.15zm19.667-3.21v.987h2.14v-1.975h-2.14zm-32.752 5.432h2.14v2.14h2.14v2.14h2.139v-4.28h-2.14v-2.14H41.49v-2.14h-1.975zm8.723 0h4.28v-2.125l-2.223-.097-.097-2.058h-1.96zm8.723-2.14h2.14v2.14h-2.14v2.14h4.28v-4.28H59.1v-2.14h-2.14zm6.584 4.28h6.418v-6.42h-6.418zm10.862-4.28h-2.14v2.14h2.14v2.14h2.14v-2.14h-2.14zh2.14v-2.14h-2.14zM.015 80.985h15.306V65.677H.015zm65.67-13.168h2.139v-2.14h-2.14zm11.026 0h1.975v-2.14h-1.975zM2.32 78.68h10.867L13.1 67.899l-10.78-.087zm26.17-8.724h2.139v-2.14h-2.14zm4.443 0h4.279v-2.14h-4.28zm19.695-2.03c-.06.06-.11.541-.11 1.07v.96h2.14v-2.14h-.96c-.528 0-1.01.05-1.07.11m-48.26 2.24c-.044.116-.06 1.616-.035 3.334l.044 3.122h6.584l.044-3.333.045-3.333h-3.3c-2.531 0-3.32.049-3.381.21m26.425 1.93h1.975V70.12h-1.975zm6.419.164h-2.14v2.14h2.14v2.304h-2.14v1.976h6.42V74.4h-2.155l.097-2.222 2.057-.098v-1.96h-4.279zm11.027-.165h1.975V70.12H48.24zm6.501 4.527-2.222.097v1.96h4.28V74.4H59.1v4.28h2.14V74.4H59.1v-2.139h-2.304v-2.14h-1.968zM72.27 74.4h2.14v4.28h4.278V74.4h-2.14v-2.14h-2.139v-2.14h-2.14zm4.443-2.305h1.975V70.12h-1.975zM28.49 74.4h2.14v-2.14h-2.14zm13.167 0h2.14v2.14h2.139V74.4h-2.14v-2.14h-2.14zm8.723 0h-2.14v2.14h4.28v-4.28h-2.14zm11.027 0h1.975v-2.14h-1.975zM28.49 78.68h2.14v-1.976h-2.14zm37.196 2.304h2.14V78.68h-2.14z" fill="#EEF0F2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M.015 15.308h15.306V0H.015zM19.765 2.14h2.14V0h-2.14zm10.863 0h2.14V0h-2.14zm4.443 0h2.14V0h-2.14zM39.467.103c-.064.064-.116.549-.116 1.077v.96h2.32l-.1-2.058-.994-.048c-.547-.026-1.047.005-1.11.069m4.327 2.037h4.28V0h-4.28zm8.723 4.444h-4.279v8.724h2.155l-.098 2.222h-4.279l-.091-4.362h-2.13v2.14h-2.14v-4.28h4.279V6.584h2.14v-2.14h-4.28v-2.14h-2.14v2.14h-2.303v2.14h-2.14v-2.14h-2.14v-2.14h-2.14v2.14h2.14v2.14h-2.14V8.71l-2.221.097-.088 8.807h-2.134V6.584h-2.14v-2.14h2.14v-2.14h-2.14v2.14h-4.443v4.28h2.14v-2.14h2.303V8.71l-2.221.097v2.14l2.222.097v4.265h-2.305v-4.28h-2.14v10.864h-2.139v-2.14h-4.444v-2.14H4.46v2.14H2.32v4.265l-2.222.097v2.14l2.222.098v2.124h2.14v2.14H2.155v-2.14H.015v4.27l4.361.092.09 6.502h2.132v2.305H4.474l-.098-2.222-2.221-.098v-4.264H.008l.045 3.25.044 3.251 2.222.098v2.125h2.14v2.14h2.14v2.304h-2.14v2.14H.015v2.14h4.444v2.14h2.14v-2.14h2.139v-2.14h2.304v2.14h2.14v2.14h2.14v2.304h-2.14v2.14h-2.14v2.14H8.738v-2.14h-2.14v-2.14H4.474l-.098-2.222H.097l-.087 8.64h2.145v-6.42h2.304v4.28h4.279v2.135l8.805.088.098 2.222h4.264v-2.305h4.444v-4.28h2.14v2.14h2.139v2.14h2.14v-2.14h-2.14v-2.14h2.14v-2.14h4.443v2.14h-2.14v2.14h2.14v2.305h-2.14v2.14H26.35v2.14h-4.444V74.4h-2.14v-6.584h-2.14v8.724h4.28V74.4h2.13l.092-4.362 4.361-.092v2.314h-2.14v2.14h2.14v2.13l-4.361.092-.098 2.058h4.46v-2.14h2.139v2.304h-2.14v2.14H45.92l.097-2.222h2.14l.097 2.222H61.24v-2.14H59.1V74.4h2.14v4.28h2.14V74.4h-2.14v-2.14h2.304v2.14h4.28v-2.14h2.14v2.14h2.303v2.125l-2.221.097v4.28l2.221.097v-2.32h2.14V74.4h-2.14v-4.443h2.14v2.304h2.14v2.14h2.14v-2.14h-2.14v-2.32l2.222.098.097 2.222h2.124v-6.584h-2.14v2.14h-2.303v-2.14h2.14v-2.14h-2.14v2.14h-2.14v-2.14h-2.14v-2.304h2.14v2.14h2.14v-2.14h2.14v-2.14h2.303v-2.14h-4.443v-4.444h-2.14v2.14h-2.14v-4.28h2.14v-4.445h2.14v-2.14h-2.14v-2.14h4.444v2.14H81l-.092-4.361-2.222-.098V37.2h2.304v-2.14h-6.583v2.14h-2.14v-4.444h2.14v-2.14h-4.444v-2.14h11.028v-6.584h-2.305v-2.14h-2.14v-2.14H65.685v2.14h-4.459l.098-2.222 2.057-.098v-4.264h-2.14v-2.14h-4.279v4.28h2.14v4.444h-2.14v2.14h2.14v2.14h-2.125l-.097 2.222h-2.14l-.097-2.222h-4.264v-2.14h4.279v-4.28h-2.14v-2.304h2.14v-4.28h-2.14zh2.14v2.14h6.568l.098 2.222 2.057.098v-6.6h-2.14v-2.14H59.1v4.28h-4.443V0h-2.14zM61.24 2.14h2.14V0h-2.14zm4.444 13.168h15.307V0H65.684zM2.264 2.25c-.06.06-.11 2.541-.11 5.514v5.404h11.028V2.14H7.778c-2.972 0-5.453.05-5.514.11m65.56 10.918h11.031L78.77 2.222l-10.945-.087zM4.459 11.035l6.5-.089.09-6.502h-6.59zm13.167 6.413h2.14V4.444h-2.14zM30.627 6.584h2.14v-2.14h-2.14zm39.418 4.362 3.25.045 3.25.044v-6.59h-6.59zM39.35 8.724h-4.28v2.304h2.14v4.28h-2.14v-2.14h-2.304v2.14h2.304v4.444h2.14v2.14h-4.444v8.71l2.222.097.098 2.057h-4.46v-2.14h-2.139v-2.14h2.14v-2.14h-4.28v-2.304h4.28v-2.14h-8.723v2.14h-4.28v-2.14H15.32v-2.14h-2.14v2.14h-2.139v2.14h2.14v2.314l-4.362-.092-.092-4.362h-2.13v-2.14h-2.14v2.14h2.14v2.14h-2.14v2.305h2.14v4.27l4.362.092.098 2.057h-4.46v6.584h2.14v-4.28h2.304v2.14h2.14v2.14h2.14v2.305H6.597v4.28h4.444v-2.14h6.419v2.14h2.304V39.34h4.264l.098 2.222 4.361.092v2.13h2.14v2.14h2.124l.097 2.223h2.14l.097-2.223h2.125v4.445h-2.14v4.28h2.14v2.304h4.444v2.14H37.21v2.13l4.361.092.098 2.042-2.237.098-.092 4.346 2.231.098.098 2.058H37.21v-2.14h-4.444v2.14h-2.14v-2.14h-2.139v2.14h2.14v2.304h-2.14v2.14h2.14v-2.125l2.221-.097.098-2.222h4.264v2.304h-2.14v2.14h2.14v2.14h-2.14v2.311l6.502-.09.091-4.361h2.13v2.14h2.14V74.4h-2.14v-2.14h2.14v-4.444h-2.14v-2.14h-2.14v-2.14h6.42v4.28h4.443v2.14h2.14v6.584h-2.14v-4.28h-2.14v-2.32l-2.221.098v2.14l2.222.097V74.4h-2.304v2.14h4.443v2.314l4.362-.092.092-4.362h2.13v-2.14h-2.14v-2.304h4.28v-4.28H59.1v-2.305h-2.14v2.305h2.14v2.14h-2.14v2.14h-2.304v-2.14h-2.14v-2.14h2.13l.092-4.362 2.222-.097v-4.265h-6.583v-2.305h2.14v-2.14h2.139v2.14H59.1v2.305h2.124l.098-2.222 4.361-.092v2.314H63.38v2.14h2.304v2.14h2.14v-2.14h2.14v2.14h2.304v-6.585h-2.305v-2.14h-2.14v2.14h-2.139v-2.14H61.24v-2.14H59.1v-2.14h2.14v-2.304h-6.583v-2.14h2.304v-2.14h2.14V39.34h4.444V37.2h2.149l-.092 4.362-4.362.092v2.13h6.584v2.13l-4.362.093v4.28l4.362.091v-2.14l4.361-.091.097-2.223h2.125v-2.14h-2.14V41.66l-2.221-.098v-2.14l2.221-.097V37.2h-2.304v-2.14h-2.14v2.14h-2.139v-2.14H63.38v2.14H59.1v-6.584h2.14v-2.14h2.14v2.14h4.444v-2.14h2.14v-2.134l8.805-.088v-2.14l-2.222-.097v-4.265H65.684v2.14H63.38v2.14h-2.14v2.305H59.1v4.28h-2.139v-2.14h-2.304v2.14h-4.28v-4.27l-4.36-.093-.098-2.222h-2.125v-2.14h2.14V19.76l-6.501-.089-.098-2.042 2.237-.098.098-2.222h-2.32v-4.28h2.305V6.584H39.35zm11.027 6.584h2.14v-4.28h-2.14zm8.723 0h2.14v-2.14H59.1zM.015 19.752h2.14v-2.14H.015zm48.059 2.14h2.304v-2.14h-2.304zm11.027 0h2.14v-2.14H59.1zm-45.92 2.14h2.14v-2.14h-2.14zm24.03 0h-2.14v4.444h2.14v4.445h-2.14v2.14h-4.443v-2.14h-4.28v2.14h-4.443v-6.585h2.14v2.14h2.303v-2.14h-2.304v-4.444h-2.14v2.305h-8.722v2.14h2.14v2.14h-2.14v2.13l4.361.091.092 4.362h2.13v-2.14h2.14v2.14h6.583v-2.14h2.14v2.14h2.304v8.724h2.14v-4.28h4.264l.097-2.221 2.222-.098v4.46H37.21v2.14h4.444v2.14h2.14v4.434l-4.362.092-.098 2.057h6.599v2.305h-2.14v2.14h2.14v2.14h2.133l.089-6.502 2.222-.098V52.51h-4.444v-6.585h-2.14v-2.14h4.444v6.6l2.057-.098.098-2.222h2.124v-2.14h-2.14V37.2h-2.13l-.091 4.362-4.362.092V39.34h2.14V37.2h2.14v-2.14h4.443v8.725h2.13l.092-4.362 2.222-.098v-4.264h-2.304v-2.133l-6.501-.09-.092-4.362h-6.41v-2.14H37.21zh4.444v-2.14H37.21zm28.473 0h-2.14v2.305h2.14v2.14h2.14v-2.14h2.14v-4.445h-4.28zm6.584 0h2.14v-2.14h-2.14zm-6.584 1.152v1.153h2.14v-2.305h-2.14zm-26.251 7.654 2.237.098-.098 2.042-4.361.092v2.13h-2.14v2.14h2.14v-2.15l4.361.093.098 2.057h2.124V37.2h2.14v-2.14h-2.14v-4.444h-4.458zm37.223-2.112c-.06.06-.11.542-.11 1.07v.96h4.444v-2.14h-2.112c-1.162 0-2.161.05-2.222.11m-65.614 4.335h2.14v2.14h2.14v2.14h2.139V37.2h-2.14v-2.14h-2.14v-2.14h-2.139zm56.782 4.28h2.14V37.2h-2.14zm6.583 0h2.14V37.2h-2.14zm-6.583 4.444h2.14v2.14h2.303v-2.14h-2.304v-2.14h-2.14zm-45.92 4.444h2.14v2.14h-2.14v2.14h8.724v-2.14h-2.14v-2.305h-2.14v-2.14h-2.304v-2.14h-2.14zm-8.722-1.152v1.152h2.14v-2.305h-2.14zm4.396 1.09c-.065.064-.117.586-.117 1.16v1.042h-4.28v2.14h4.28v2.14h2.311l-.09-6.502-.993-.048c-.547-.027-1.047.004-1.111.068m21.855 2.12h2.14l.097-2.058h-2.335zm13.084.082h2.14v2.14h2.304v-2.14h-2.304v-2.14h-2.14zm24.112-.083 2.222.098v4.264h2.14v-6.42h-4.46zM4.459 52.51h2.14v-2.14h-2.14zm19.701 2.24c-.064.064-.117.586-.117 1.16v1.042h-2.14v2.14h-4.279v-2.14H15.32v2.14h-2.14v2.14h2.14v-2.14h2.14v2.14h4.444v-2.14h2.14v-2.125l2.221-.097v-2.14l-.994-.048c-.547-.027-1.047.004-1.111.068m4.327 4.342h2.14v-4.445h-2.14zM67.824 55.8v1.152h-2.14v2.14h2.14v-2.14h2.14v-2.305h-2.14zm6.583 5.432h2.14v-4.28h-2.14zm-21.89 0h-4.279v2.124l2.057.098.098 2.222h2.124zh2.14v-2.14h-2.14zm10.973 2.25c-.06.06-.11 1.54-.11 3.291v3.183h6.583v-6.585h-3.182c-1.75 0-3.231.05-3.291.11M.015 80.984h15.306V65.677H.015zm65.67-13.168h2.139v-2.14h-2.14zm6.582 0h2.14v2.14h2.14v-2.14h-2.14v-2.14h-2.14zM2.237 78.763l10.945.087V67.817H2.15zm2.222-2.222h6.59l-.045-3.251-.044-3.251-6.501-.09zm37.196-4.28H39.35v2.14h2.304zh2.154l-.097-2.222-2.057-.098zm37.114 6.502-4.362.092v2.13h6.584v-6.584h-2.13zm-61.143 2.222h6.419v-2.14h-6.42zm48.058 0h2.14v-2.14h-2.14z" fill="#EEF0F2"/></svg>',
                    imageLink: 'https://thumb.tildacdn.com/tild6566-3434-4432-b162-646637393438/-/format/webp/cert5500.png',
                },
                "16000 рублей": {
                    paymentLink: 'https://c.cloudpayments.ru/payments/119e012802a446f28debd6caea68a86a',
                    qr: '<svg xmlns="http://www.w3.org/2000/svg" width="100" viewBox="0 0 81 81" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M.015 15.32H15.32V.015H.015zM19.6 4.278l-2.057.098-.086 13.248h2.308V4.458h4.443V2.32h1.972l.085 15.223 8.64.088v1.964l-8.64.087-.097 2.222h2.32v2.14h-2.305v2.139h-2.14v2.304h-2.139v-4.264l2.222-.097.097-2.222h-2.319v2.14h-2.13l-.091-4.362h-2.14l-.097 2.222H13.18v-2.14h2.14v-2.308l-10.945.087-.097 2.057h-1.96v-2.14H.015v4.444h2.14v2.14H.015v2.303H2.32v-2.139H6.6v4.279h2.139v4.279h-4.28v-4.28H.016v4.444h2.14v1.96l-2.057.097L0 37.209h2.155v4.28H.015v2.303h2.14v2.14H.015v2.304h2.14v4.278H.015V63.54H2.32v-6.583h1.975v2.14h2.304v-2.305h-2.14v-2.14H2.32v-2.139h2.14v-2.139H6.6V48.07H4.46v-8.558H6.6v2.155l2.22-.098.093-4.36h2.13v-2.14h2.139v2.14h2.14v2.139h-2.14v2.304h2.14v2.14h-4.444v2.139H8.902v-2.14H6.598v2.304h2.14v6.418h2.304v-4.278h2.139v2.139h2.14v2.14h-2.14v2.303h2.14v1.975h-2.14v2.304h2.14v2.14h-4.28v-6.583H8.739v6.573l-4.362.092v2.14H8.82l.098-2.058h1.943l.098 2.058 4.361.091v-2.14l4.362-.091.097-2.222h-2.155v-2.14h6.419v2.14h-2.14v2.314l4.361-.092V50.292l-4.36-.092v-2.13h-2.14v-1.965l4.361-.092.097-2.222H17.63l-.088-8.804-4.361-.092v-1.966h6.418v4.28h2.304v2.124l-2.221.097v2.14l2.221.097v-2.155h2.14v2.14h4.459l-.098 2.057-2.231.097.091 4.346 4.362.092v1.965h-2.14v4.623l2.222-.097.092-4.361h1.965v6.418h-4.279V61.4h2.14v4.28h2.139v4.278h-1.96l-.097-2.057-2.222-.097v4.278l-2.222.098-.097 2.221h2.32v-2.139h2.139v2.14h6.582v-2.305H32.93v-1.974h2.139v-2.304h2.14v-4.28h4.278v2.14h-2.14v2.14h2.305v-2.14h2.14v2.14h2.313l-.092-4.361-2.222-.098V61.4h4.28v2.14h2.139v2.14h-2.14v2.139h2.14v2.14H39.348v2.303h6.583v2.14h-2.14v2.303h2.14v1.975h-2.14v2.304h2.304v-2.14h1.975v2.14h19.75v-4.443h-2.14v2.14h-6.583V74.4h2.125l.097 2.222h2.14l.097-2.222h4.264v-2.139h2.14v2.14h2.138v2.139h-2.139v4.443h2.304v-4.278h2.14v2.139h2.139v2.14h4.443V74.4H78.68v4.28h-1.959l-.098-2.058-2.222-.097v-4.249l2.222-.097v-2.14l-2.222-.097V67.82h2.305v-2.14H74.4v-2.304h-2.139v-2.14H65.68v-2.139h2.14v-2.14h4.278v2.14h2.305v2.32l2.221-.098.097-2.222h1.945l.098 2.222h2.14l.09-4.526h-4.452v2.304H74.4v-2.304h-2.139v-2.14h-2.14v-2.139h2.14v-2.139h2.14v-6.583h2.303v-2.14h1.975v2.14h2.304v-4.443h-2.14v-2.14H76.72l-.098-2.221-2.222-.098v2.32h-4.278v-2.14h2.14v-2.14H74.4v-2.304h-4.278v-2.14h2.14v-4.278H74.4v-4.443h2.14v4.443h2.14v1.975h-2.15l.092 4.526h4.28l.087-8.805h-2.13l-.097-2.222-2.042-.097-.098-2.042-10.944-.087v6.588h-2.304v2.303h2.304v2.14h2.14v4.279h-2.14v2.14h-2.14v-6.42h-2.13l-.09-4.36-4.527-.092v2.149h-1.974v-4.279h-6.583V15.32H50.2l.092 4.361 2.212.097.092-4.375 2.057-.098v2.32h4.443v4.278h4.444v-8.722H61.4v-2.14h2.14V6.598H61.4v-2.14h2.14V2.154h-2.124L61.318.097 59.096 0v2.319h2.14v1.975h-2.14v2.304h-4.263l-.098-2.222-2.221-.097V2.334l2.221-.097.098-2.222h-2.32v2.124l-2.221.098v2.14l2.221.096v2.125H48.25l-.098-2.222-2.057-.098V2.32h2.14V.015H45.93v2.14h-2.14v2.303h2.14v2.14h-2.14v2.14h-2.304v2.303h4.444v2.14h-2.14v2.14h-2.14v-2.14h-2.139V6.598h2.155l-.097-2.222h-2.14l-.097 2.222h-2.125V4.294H35.07V.015h-4.443v4.443h2.139v2.14h-2.14v2.14h-2.139V.014H19.6zM65.68 15.32h15.305V.015H65.68zM2.32 13.185l10.78-.087.086-10.779H2.32zm65.582-.087 10.78.087V2.32H67.813zM4.369 4.501c-.045.118-.062 1.62-.037 3.336l.044 3.122 6.673.09-.09-6.673-3.254-.044c-2.553-.036-3.272.001-3.336.17m65.702-.1c-.062.061-.113 1.583-.113 3.38v3.267l6.665-.089V4.376l-3.22-.044c-1.77-.025-3.27.006-3.332.068M32.93 10.876h1.974v-4.28H32.93zm13.165-2.14h1.975v-2.14h-1.975zm6.419 2.14h2.139v-4.28h-2.14zm6.582-1.975h-2.139v1.975h4.279v-4.28h-2.14zm-8.722 6.418h2.14V11.04h-2.14zm4.444 0h1.974V11.04h-1.974zm-32.915 0h2.304v-2.14h-2.304zm6.583 0h2.14v-2.14h-2.14zm4.444 0h1.974v-2.14H32.93zm4.278 0H35.07v2.14h2.14zh2.139v-2.14h-2.14zm8.887 0h1.975v-2.14h-1.975zm13.001 0h2.14v-2.14h-2.14zm-37.193 4.444h2.32l-.098-2.222-2.222-.097zm15.305 0H35.07v2.139h4.264l.097-2.222 2.057-.098v-1.959h-4.279zm6.583-.165h2.14v-1.975h-2.14zM4.46 21.903H6.6v2.14h2.139v-2.14h2.139v-2.14H4.459zm37.193 0h2.14v2.14h2.139v-2.14h-2.14v-2.14h-2.14zm-30.61 2.14h2.139v-2.14h-2.14zm19.748 0h1.975v-2.14H30.79zm37.029.164h-2.14v1.975h2.125l.097 2.222 2.057.098v-4.46h2.14v-2.139h-4.28zM8.902 26.182h1.975v-1.975H8.902zm4.279-.01 4.361.092.097 2.222h1.96v-4.279h-6.418zm15.305.01h2.14v-1.975h-2.14zm6.583-.987v.987h6.418v-1.975H35.07zm15.305 1.151h-6.583v2.14h2.304v6.418h4.115V32.93h-2.14v-2.304h2.14v-2.14h2.303v-4.278h-2.139zm-39.332 6.419h2.139v-2.14h4.279v-2.14h-4.28v-2.139h-2.14zm8.722 0h4.279V30.79h-2.14v-2.304h-2.14zm4.443-2.14h1.975v-2.14h-1.975zm10.862 6.583h4.264l.097-2.221h2.14l.097 2.221h-2.155v4.444h-2.32l.099 2.057 4.36.092v2.13h6.42v-2.14h-2.14v-2.14h-2.14v-2.318l2.222.097.098 2.057h1.96v-2.14h2.139v-2.139h-6.42V30.79h-2.14v2.14h-2.303v-4.444h-4.279zm19.666-6.5-4.36.091v1.966h6.417v-4.28h-1.96zm4.361-.083h2.14v-2.14h-2.14zm-32.75 2.304h-2.139v2.14h-2.304v2.14h2.304v2.132l6.5.089.089 8.64h1.969v-2.14h2.13l.092-4.36 2.221-.098v-1.95l-4.36-.092-.098-2.222h-2.14l.098-2.221 2.057-.098v-1.96h-2.14v-2.14h-4.278zm52.334 2.14h2.304v-2.304H78.68zm-69.778-.165h1.975V32.93H8.902zm17.39.11c-.06.06-.11.579-.11 1.152v1.042h2.304v-2.304h-1.042c-.573 0-1.092.05-1.152.11m24.082 2.194h2.14v-2.14h-2.14zm4.444 0h4.278v-2.14h-4.278zm10.861 0H61.4v2.14h4.28v2.304H61.4v2.14h6.419v2.303h-4.28v4.114h2.14V48.07h6.418v-1.96l-2.057-.097-.092-4.361h-2.13v-2.304h2.14v-2.14h-2.14v-2.14H65.68zm-13.056.11c-.06.06-.11.542-.11 1.07v.96h2.14v-2.14h-.96c-.528 0-1.01.05-1.07.11m2.195 4.334h-4.444v4.279h2.14v2.124l2.221.097.098 2.057h1.944l.098-2.057 4.36-.092v-4.269h-2.139v2.314l-4.36-.092-.098-2.222h2.14l.097-2.222 4.36-.091v-1.966h-6.417zm15.305-.165h6.418v-1.975h-6.418zm8.557 6.583h-2.14v2.304h2.14v2.14h-4.279v2.313l4.362-.092.097-2.222h2.124V50.21h-2.14v-1.974h2.14V45.93H78.68zm-65.499 0h2.14v-1.975h-2.14zm21.888 0h2.14v-1.975h-2.14zm4.443 2.124 2.058.098.097 2.221h2.124v2.14h2.14v-2.14h-2.14V48.25l-2.221-.097-.098-2.057h-1.96zm8.723 0 2.057.098.097 2.221h-2.154v2.14h2.14v2.14h2.139v-4.28h2.139v-2.139h-2.14v-2.14h-4.278zm10.861 2.32h-4.278v2.139h2.139v2.14h2.14v-2.155l2.221.097.098 2.057h1.96v-2.14h4.443v-2.139h-6.583v-2.139h-2.14zm-41.472 2.139H19.6v-2.14h-1.975zm19.694-2.03c-.06.06-.11.579-.11 1.152v1.042H35.07v1.975h2.14v2.304h-2.14v4.28h2.14v-2.14h4.278v-2.14h-2.14v-4.443h2.14v-2.14h-2.03c-1.116 0-2.079.05-2.139.11m4.334 4.17h2.14v-1.976h-2.14zm2.14 2.303h2.139v-2.14h-2.14zm4.443 2.14h2.14v2.14H52.5l.097 2.22 2.222.098v2.125h1.974v-2.14h2.304v2.14h-2.139v2.14h4.279v-4.28h-2.14v-2.14h-4.443V61.4h-2.14v-2.304h2.305v2.14h1.974v-4.28h-4.279v2.14H50.21v-2.14h-1.975zm10.861-2.14h2.14v-2.14h-2.14zm4.444 0h2.14v-2.14h-2.14zM17.46 65.68h4.443v-2.304H17.46zm8.832-2.194c-.06.06-.11.579-.11 1.152v1.042h-2.14v4.28h-2.139v-2.14h-4.449l.088 8.804 2.057.098v1.96h-2.14v2.303h8.888v-2.14h4.279v2.14h2.304v-4.443h-6.748v2.14h-4.279v-2.14h-2.14V74.4h4.444v-4.278h2.14v-4.444h2.14v-2.304h-1.043c-.573 0-1.092.05-1.152.11m52.47 6.555 2.222.098v-6.763h-2.31zM32.93 65.68h1.974v-2.14H32.93zm30.61 4.278h6.418V63.54H63.54zM.015 80.984H15.32V65.68H.015zm50.36-13.165h2.139v-2.14h-2.14zm15.304 0h2.14v-2.14h-2.14zm6.583 0h2.14v-2.14h-2.14zM2.32 78.68h10.866L13.1 67.9l-10.78-.086zm50.304-10.752c-.06.06-.11.542-.11 1.07v.96h2.14v-2.14h-.96c-.528 0-1.01.05-1.07.11m-48.255 2.24c-.045.117-.061 1.616-.036 3.333l.044 3.122h6.583l.09-6.665h-3.3c-2.531 0-3.32.05-3.381.21m50.45 2.094h-2.304v2.14h2.303v4.278h1.975v-8.557h-1.974zm17.444-1.152v.987h2.14v-1.974h-2.14zm-24.027 5.43h1.974v-4.278h-1.974zM61.4 74.402h1.975v-2.139H61.4zm-21.97 2.222h2.14l.097-2.222h-2.334zm-4.454.133c-.045.119-.062 1.1-.036 2.18l.047 1.966 6.665.09V78.68h-4.444v-2.14h-1.074c-.734 0-1.102.07-1.158.216m15.398 1.924h2.14v-1.974h-2.14z" fill="#EEF0F2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M.015 15.32H15.32V.015H.015zM19.764 4.458h-2.14V17.46h2.14zh4.279V2.154h2.304V17.46h8.738l-.098-2.058-2.222-.097v-2.124h2.304v2.14h2.14v2.139h4.443v2.32l2.057-.099.097-2.221h2.125v2.304h-2.14v2.139h-2.304v-2.14h-1.975v2.14H35.07v-2.14h2.14v-2.139h-2.14v2.14h-8.722v2.139h2.14v2.14h2.139v-2.14h2.318l-.097 2.222-2.221.097v2.124h-2.14v-2.139h-2.14v2.14h-2.139v2.139h2.14v2.14h4.279v2.124l2.221.097.097 2.222h-2.318v2.14h2.304v2.139h4.278v2.14h2.14v-4.28H35.07v-8.722h4.443v4.279h1.96l.098-2.057 2.221-.098v6.598h6.583v2.304h-2.14v2.14h-2.319l.098 2.057 2.222.097v2.125h-6.583v2.139h2.14v4.443h-2.14v2.14h2.14v-2.14h2.139v2.304h-2.14v1.975h2.14v2.304h-2.14v-2.124l-2.221-.097-.098-2.058h-1.96v4.28h2.14v2.13l-4.361.091-.098 2.057h4.459v2.304h2.14v2.14h2.139v-4.28h-2.14v-2.303h4.27l.091-4.361 2.222-.098v-1.945l-2.222-.097-.097-2.222h2.32v-2.139h-2.32l.097-2.222 4.361-.092v-2.13h-2.139v-4.443h4.279v-1.975h-2.14v-2.304h2.14v-2.14h4.443v2.14h-4.278v2.14h6.418v-2.14h4.443v-2.14h2.14v2.14h2.14v-2.124l2.22-.098.098-2.221h2.124v-2.14h-4.443v-2.14h-2.14v-2.139H65.68v2.14h2.14v4.443h-2.14v2.14h-2.304v-6.583h-2.14v-4.279h-4.278v2.14h-2.304v-4.444H48.07V15.32h-2.14v-2.14h-2.139v2.14h-2.304v-2.14h-1.975v2.14h-2.304v-2.14h2.14V6.599h-2.14v-2.14h-2.13l-.091-4.36h-4.28v4.278l2.223.097v2.125h2.139v4.443h-2.304V6.598h-2.14v2.14h-2.139V.014h-8.722zM46.04.125c-.06.06-.11.541-.11 1.07v.96h2.14V.014h-.96c-.529 0-1.01.05-1.07.11m6.473 2.03h2.139V.014h-2.14zm6.582 0h2.14V.014h-2.14zM65.68 15.32h15.305V.015H65.68zM2.264 2.264c-.06.06-.11 2.541-.11 5.513v5.404h11.027V2.154H7.778c-2.972 0-5.453.05-5.513.11M67.82 13.181h11.03l-.086-10.944L67.82 2.15zM43.79 4.458h2.14v2.14h-2.14v2.14h-2.14v2.139h4.265l.097 2.221 2.222.098v2.124h2.14v4.444h2.139V15.32h2.139v-4.279h-2.14v4.28h-2.139v-4.444h2.14v-4.28h2.139V4.459h-2.14V2.32h-2.139v2.14h2.14v2.139h-4.28v2.14H45.93v-2.14h2.14v-2.14h-2.14V2.32h-2.14zm17.527-.082 2.057.098V2.32H61.22zm-56.86 6.5h6.419V4.459H4.459zm35.054-4.278h1.975v-2.14h-1.975zm19.584 0h-4.278v4.279h1.959l.098-2.057 2.221-.098zh2.14v4.279h2.14v-4.28h-2.14V4.459h-2.14zm11.027 4.279h6.418V4.458h-6.418zM56.957 15.32h-2.14v2.14h4.28v4.443h4.278v-8.722h-2.14v-2.14h-4.278zm-35.054 0h2.14v-2.14h-2.14zm6.583 0h2.14v-2.14h-2.14zm30.61 0h2.14v-2.14h-2.14zM.016 21.903h2.303v2.14H6.6v-2.14H4.46v-2.14h6.583v2.14h2.139v2.14h6.583v-4.28h-2.14v2.14h-4.443v-2.14h2.14v-2.139H4.458v2.14H2.155v-2.14H.015zm21.887-2.14h2.14v-2.139h-2.14zm43.776 4.28h2.14v-2.14h4.443v2.14h2.14v-4.28h2.139v4.28h2.304v2.303H76.54v4.28h4.443v-8.723H78.68v-2.14h-2.14v-2.139H65.68zm-56.941 0h2.139v-2.14h-2.14zm13.165 0h2.14v-2.14h-2.14zm21.888.164h2.14v-2.304h-2.14zm-8.722.988v1.151h6.583v-2.303h-6.583zm15.305.987h-6.583v2.304h2.14v6.583h4.443v2.14h2.14v-2.14h-2.14v-2.14h6.583v-4.443h-2.304v2.14h-4.279v-2.14h2.14v-4.443h-2.14zM.015 25.195v.987h2.14v-1.975H.015zm6.583 3.29h2.14v4.28h2.139v-6.419h-2.14v-2.139H6.599zm4.444-2.303h2.139v-1.975h-2.14zm8.722 2.304h-2.14v2.14h-4.443v2.139h6.583zh2.14v2.14h2.139v-2.14h-2.14v-4.278h-2.14zm43.776-2.304h2.14v-1.975h-2.14zm6.583 2.32 2.057-.098.092-4.197h-2.15zm-56.942-.016h4.279v-2.14h-4.28zM.015 32.75l2.222.097.097 2.222H.015v2.14H2.32v4.443H.015v2.14H2.32v2.124l-2.221.097L0 48.055l2.237.097.092 4.361h2.13v-2.139h2.14v-2.14h-2.14v-8.886h2.14v2.14h2.139v-4.28h2.139v-2.14h-2.14V32.93H4.46v-4.443H.015zm59.081-2.125h2.14v-2.14h-2.14zm-34.889 2.14h1.975v-2.14h-1.975zm24.028 0h2.155l-.098-2.057-2.057-.098zm-37.193 2.32 2.057-.099.098-2.057h-2.155zm8.722 2.123h2.14v2.14h2.139v-2.14h-2.14v-2.14h2.14V32.93h-4.28zm59.08-2.124 2.058-.098L81 32.93h-2.155zm-65.663 2.124h2.14v2.304h-2.14v1.975h2.14v2.304h-4.28v2.125l-2.221.097-.09 6.5h2.137l.092-4.36 2.222-.098v-2.124h2.14v2.304h-2.14v2.139h2.14v2.14h-2.14v2.139h2.14v2.304h-2.14v2.14h2.14v2.139h-4.28v2.14h4.28v-2.14h4.443v-2.14h-2.32l.098-2.221h6.583l.097 2.221h-2.319v2.14h4.28V50.374h-4.28v-2.14h-2.14v-2.303h4.28v-2.14H17.46V35.07h-4.28zm13.166 0h2.14v-2.14h-2.14zm13.165 0h1.975v-2.14h-1.975zm34.89 0h-4.28v2.14h6.419v2.124l2.222.097.097 2.222h2.124v-4.264l-2.221-.097-.098-2.222h-2.124v-2.14H74.4zm-54.638 4.28h2.14v-1.976h-2.14zm4.443 0h4.28v2.303h-2.14v4.279h4.279v-8.558h-6.419zm19.584 0h2.14v-1.976h-2.14zm17.445 0h4.443v-1.976h-4.443zm6.583-.988v.987h2.14v-1.975h-2.14zm-32.75 5.43h2.14v2.305h-2.125l-.097-2.222-2.042-.098-.098 2.237-2.237.098.098 2.042 2.222.097v6.568h-4.444v4.279h2.13l.092 4.36 2.042.099.097-2.237 2.222-.098v-4.264h2.14v-2.14h-2.14v-2.303h2.14v-2.14h4.278v-2.139h-2.14v-4.443h2.14v-2.14h-4.279v-2.14H35.07zm21.888-2.139h-2.14v2.14h4.28v-2.14h2.139v4.444h-4.279v2.139h-2.14v2.14h4.28v-2.14h2.139v2.14h6.583v2.303h-4.28v1.975h2.14v2.304h-2.304v-2.14h-2.14v2.14h-2.139v-2.14h-2.139v4.28h-2.14v2.14h4.28v2.303h-2.14v2.14h2.14v-2.14h2.139v4.444h-4.279v8.722h-2.304v-4.443h-2.14v-2.14h2.14v-2.14h-2.14V67.82h2.14v-2.14h-2.14v-2.14h-2.139v2.14h-2.14v2.14h2.14v2.304H39.512v2.14h6.419V74.4h-2.14v2.14h2.14v2.124l2.221.098.098 2.221h19.569V76.54h-2.14v2.304h-6.583v-4.443h2.14v2.139h2.14V74.4h-2.14v-2.139h2.304v2.14h4.279v-2.14h2.304v2.14h2.14v2.139H74.4v2.14h2.14v-2.14H74.4v-4.279h2.14v-2.14H74.4v2.14h-2.139v-2.304h2.14v-2.14h2.139V65.68H74.4v-2.14h-2.124l-.097-2.221-6.5-.09v-2.132h2.139v-2.304h4.443v-1.96l-2.222-.097-.097-2.222h2.32v-2.139H74.4v-6.583h2.14v-2.14h-6.418v4.28h2.14v2.304h-6.584v2.139h-2.304v-4.443h4.444v-2.14h-6.583v-2.14h-4.279zm-50.359 2.14h2.14v-2.14h-2.14zm72.247 2.139H81l-.098-2.057-2.057-.098zm-26.25 2.222 2.058.098v-2.155h-2.155zm24.028 0 2.057.098v-2.155h-2.155zm-48.137 4.36h2.14v-4.278h-2.14zm50.359-2.139h2.14v-2.139h-2.14zM.015 63.375h2.133l.089-6.5 2.222-.098v-1.945l-2.222-.097-.097-2.222H.015zm17.527-8.64 2.222.097v-2.319h-2.32zm34.972 2.057h4.278v-1.959l-2.057-.098-.097-2.222h-2.124zm21.887-2.14h4.28v-2.139H74.4zM8.739 61.237h-4.28v2.14h4.28zh2.139v-6.419h-2.14zm50.358-4.444h2.14v-1.975h-2.14zM4.46 59.096H6.6v-2.14H4.46zm45.915 0h2.14v2.14h2.139v-2.14h-2.14v-2.14h-2.139zm21.888 0h2.14v2.14h2.139v-2.14h2.304v2.14h2.14v-4.28H76.54v2.14H74.4v-2.14h-2.139zm-24.027 4.28h2.155l-.098-2.058-2.057-.098zm15.215.207c-.045.117-.062 1.619-.037 3.336l.045 3.121h6.582v-6.583l-3.254-.044c-2.553-.035-3.272.001-3.336.17m-45.826 2.096h4.28v-2.14h-4.28zm8.723 0h2.14v-2.14h-2.14zm8.722 0h-2.14v4.28h2.14v-2.14h2.14v-4.28h-2.14zm43.776 4.28h2.14v-6.42h-2.14zM.015 80.983H15.32V65.68H.015zm24.192-11.026h1.975V65.68h-1.975zm15.305-2.14h1.975V65.68h-1.975zm10.862 0h2.14V65.68h-2.14zm15.305 0h2.14V65.68h-2.14zm6.583 0h2.14V65.68h-2.14zM2.237 78.764l10.944.086V67.82H2.151zm15.387-2.222h2.14v2.304h-2.14v2.14h8.558v-2.14h-4.279V76.54h-2.14V74.4h4.28v-4.278h-2.14v-2.304h-4.279zm10.862-4.279h-2.14v2.14h2.14zh2.14v2.14h6.582v-2.14h-4.443v-2.124l-2.057-.098-.097-2.221h-2.125zm26.332-2.304h1.974v-2.14h-1.974zm-50.36 6.583h6.419v-6.418H4.459zm43.612-.015 2.222.097.097 2.222h2.124V76.54h-2.139v-4.279H48.07zm-8.558.015h1.975V74.4h-1.975zm39.25 2.222-2.236.097.097 2.042 4.361.092V74.4h-2.13zm-52.415-.083h4.264l.097 2.222 2.057.098v-4.46h-6.418zm8.722 2.304h6.418v-2.14h-4.279v-2.303H35.07zM70.123 81l2.057-.098v-4.279l-2.057-.098zm-26.332-.016h2.14v-2.14h-2.14z" fill="#EEF0F2"/></svg>',
                    imageLink: 'https://thumb.tildacdn.com/tild3764-3535-4365-b636-376132373930/-/format/webp/cert16000.png',
                },
                "20000 рублей": {
                    paymentLink: 'https://c.cloudpayments.ru/payments/dac0c0ee44674e7d8f4e591c9131ff58',
                    qr: '<svg xmlns="http://www.w3.org/2000/svg" width="100" viewBox="0 0 81 81" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M.016 15.308h15.306V0H.016zM19.602 4.264l-2.058.098-.086 13.25h2.308v-4.444h2.14v4.445h2.14v4.28h-4.444v4.279h-1.975v-4.28h-4.444v-2.14h2.14v-2.309l-10.946.087-.098 2.058H2.32v-2.14H.017v2.304h2.14v4.28H.015v2.304h2.13l.092 4.362 2.042.098.097 2.042 2.222.097V37.2h2.304v-4.28h2.14v-2.14h2.14v2.14h2.14v1.966l-4.362.092v4.444l2.222.098v1.96H8.919l-.098-2.058-2.222-.097v4.46H4.295v4.279H2.32v-6.42h2.146l-.089-6.666-2.057-.098v-2.124H.016V37.2h2.14v4.28H.015v6.748h2.14v2.14h2.139v2.14H.015v11.028H2.32v-6.584H6.6v2.14H4.28l.097 2.222 4.362.092v2.13h8.723v2.14h2.304v-2.304h-2.14v-1.975h6.42v1.975h-2.14v2.304h2.14v6.42h-2.14v-2.14h-2.14v-2.14h-2.31l.088 8.806h2.14l.097-2.222h4.265v2.14h-2.14v2.14h-4.444v2.304h6.748v-4.28h1.975v4.28h2.304V76.72l2.222-.098.098-2.222h6.404v-2.304h-2.14v-2.14h-2.14v-2.14h4.28v-2.14h-4.28v-2.14h6.42v4.28h2.304v-2.14h2.14v2.14h2.313l-.092-4.362-2.222-.097v-1.96h4.28v2.14h2.14v2.14h-2.14v2.14h2.14v2.139H39.351v2.304h6.584v2.14h-2.14v2.305h2.14v1.975h-2.14v2.304H46.1v-2.14h1.975v2.14h2.305v-2.14h2.14v2.14h8.887v-2.14h6.419V76.54h-4.28V74.4h4.28v-2.14h2.14v2.14h2.304v-4.28h2.14v2.155l2.222-.097v-2.14l-2.222-.097v-2.125h4.279V74.4h-4.28v2.14h-4.443v4.444h2.304v-2.14h2.14v2.14h6.583V65.676H74.41v-2.14h6.583v-6.754l-8.805.088-.092 4.362H70.13v-2.14h-2.304v-2.14h2.304v-2.14h2.14v-4.444h2.14v-4.264l2.222-.098.097-2.222h-2.32v-4.459l-2.221.097-.092 4.362H70.13V39.34h-2.304v4.444h-4.28v-2.14h2.14V37.2h6.584v-4.28h2.14v-2.304h-4.28v-2.14h2.14v-2.14h2.14v2.14h2.124l.097 2.222 2.058.098v1.96h-2.14v2.14h-2.14V37.2h2.14v4.444h2.14v2.14h2.304V39.34h-2.14V37.2h2.14v-6.584h-2.14v-2.14h2.14v-6.584h-2.125l-.097-2.222-2.042-.098-.097-2.042-10.946-.087v2.31h2.14v2.14h-2.14v2.139h-2.14v-2.14h-4.443v2.14h-2.304v2.14h-4.28v-1.96l2.222-.098.092-4.362h8.714v-6.584h-2.14v-2.14h2.14V6.584h-2.14v-2.14h2.14V2.14h-4.444V0h-2.32l.098 2.222 2.222.097v4.265h-4.459l.097 2.222 4.362.092V6.584h2.14v4.28h-2.14v2.304h-2.304v4.28h-2.14v2.14h-2.15l.093-4.198 2.23-.097-.09-4.347-2.223-.097V8.724h-2.14v-2.14h-2.124l-.097-2.222-2.058-.098V2.31l8.641-.088L54.84 0h-8.903v2.14h-2.14v2.304h2.14v2.14h-2.14v2.14h-2.304v2.304h4.444v2.14h-2.14v2.14h-2.14v-2.14h-2.14V6.584h2.156l-.098-2.222h-2.14l-.097 2.222h-2.124v6.584h-2.305v2.14h-1.975v-2.14H30.63v2.14h-2.14v-6.41l4.362-.092.092-4.362h2.13V2.14h-2.14V0H30.63v2.14h-2.14V0h-4.443v2.14h-2.14V0h-2.304zm46.084 11.044h15.307V0H65.686zM2.32 13.173l10.78-.087.087-10.782H2.32zM30.794 4.28h1.975V2.304h-1.975zm37.114 8.806 10.78.087V2.304H67.823zM4.37 4.487c-.046.118-.062 1.62-.038 3.337l.045 3.122 6.673.09-.09-6.674-3.254-.045c-2.553-.035-3.272.002-3.336.17m65.709-.101c-.062.062-.113 1.584-.113 3.381v3.268l6.666-.089V4.362l-3.22-.045c-1.771-.024-3.271.007-3.333.069M21.906 8.889h-2.14v1.975h2.14v2.304h2.14v-2.304h2.14v-1.96l-2.058-.098-.092-4.362h-2.13zm4.444-2.305h2.14v-2.14h-2.14zm19.75 4.28h1.975v-4.28H46.1zm2.14 2.304h2.14v2.14h2.14v-4.28h-4.28zm-24.03 2.14h1.975v-2.14H24.21zm13.003 0h2.14v-2.14h-2.14zm8.887 0h1.975v-2.14H46.1zm13.003 0h2.14v-2.14h-2.14zm-32.753 4.28h2.14v2.304h2.304v2.14h1.975v-4.28h-2.14v-2.14h-2.125l-.097-2.222-2.057-.098zm4.444-2.14h1.975v-2.14h-1.975zm17.446 4.444h1.975v-6.584H48.24zm-11.027-2.14h-2.14v2.14h4.264l.097-2.222 2.058-.098v-1.96h-4.28zm6.583-.164h2.14v-1.976h-2.14zm-2.14 2.304h2.14v2.14h2.14v-2.14h-2.14v-2.14h-2.14zm28.474 0h4.28v4.28h4.279v-1.976h-2.14v-4.444H70.13zm-65.67 4.28H6.6v-2.14h4.279v-2.14h-6.42zm19.75.164h-4.444v2.14h2.14v4.28h2.14v-4.28h2.124l.097-2.222 2.222-.097V24.21l-2.222-.097-.097-2.222h-1.96zm26.17-2.304h2.14v-2.14h-2.14zm-37.197 1.152v.988h2.14v-1.976h-2.14zm21.89 0v.988h6.419v-1.976h-6.42zm30.613.988h2.14v-1.976h-2.14zm4.444 0h1.975v-1.976H70.13zM6.6 28.476H4.46v2.14H6.6zh2.303v2.14h1.976v-4.28h-4.28zm8.805-.082 2.057.098v-2.156h-2.155zm15.306 2.304-4.361.092v1.966h6.419v-2.14h4.444v2.304h-4.28v1.96l2.058.098.097 2.222h4.249l.097-2.222h2.14l.098 2.222h-2.155v4.444h-2.32l.098 2.058 2.222.097v2.125h8.558v-2.14h-2.14v-2.14h-2.139v-2.319l2.222.097.098 2.058h1.96v-2.14h2.14V37.2h-6.42v-6.42h-2.14v2.14h-2.304v-4.444H32.77v-2.14h-1.966zm13.085-2.222H46.1v6.42h4.115V32.92h-2.14v-2.304h2.14v-2.14h2.304v-2.14h-8.723zm17.611 0h2.14v2.14h4.279v-2.14h-2.14v-2.14h-4.279zm6.501-.082 2.058.098v-2.156H67.81zm-54.725 2.222h2.14v-2.14h-2.14zm4.444 0h1.975v-2.14h-1.975zm37.197 0h1.975v-2.14h-1.975zm4.279 0h2.14v-2.14h-2.14zm-8.723 2.14h4.279V30.78h-4.28zm6.583 0h2.14V30.78h-2.14zm-2.14 2.14H56.8V32.92h-1.975zm8.724 2.304h2.14v-4.28h-2.14zm-39.337 0h4.28v2.305h-2.14v8.723h-2.14v2.15l-4.526-.092-.098-2.058h-2.124v-2.304h2.14v-4.28h-1.975v2.14h-2.305v-2.14h-2.14v2.14H6.6v2.125l2.222.097v2.14l-2.222.097v4.265H4.46v2.14H6.6v-2.14h2.125l.097-2.222 2.042-.098.098-2.042 4.361-.092v2.314h-4.279v2.14h4.28v2.305h-4.28v2.14h-2.14v2.14h4.28v2.14h2.14v-2.14h-2.14v-2.315l4.361.092.098 2.222h1.945l.097-2.222 2.222-.097v2.32h2.304v2.14h1.975v-4.28h-2.14v-2.134l-6.5-.089-.098-2.222H30.63v-2.14h-2.14v-2.304h2.14v-1.975h-2.14v-2.305h2.14v-2.32l2.222.098.09 6.502h1.952l.098-2.058 2.222-.097V43.8l-2.222-.097v-2.14l2.222-.097v-1.96H30.63V37.2h2.14v-2.14h-8.56zm26.17 0h2.14v-2.14h-2.14zm6.583 0h2.14v2.14h4.28V37.2h-4.28v-2.14h-2.14zm-43.78 2.14h2.14v2.14h2.139V37.2h-4.28zm6.583 2.14h2.14V37.2h-2.14zm32.863-4.17c-.06.06-.11.542-.11 1.07v.96h2.14V37.2h-.96c-.528 0-1.01.05-1.07.11m-2.25 4.17h2.14v-1.975h-2.14zm4.445.164h-2.305v2.14h-2.14v2.14h2.14v2.14h2.14v-4.28h2.125l.097-2.222 2.222-.097v-1.96h-4.28zm-32.918 6.42h2.14v-6.42h-2.14zm-8.723-1.975h2.14v-2.305h-2.14zm54.643 0h-4.28v6.42h2.14v-2.305h2.14v-2.14h4.28v-1.96l-2.058-.098-.097-2.222h-2.125zm4.444-.165h2.14v-2.14h-2.14zm-15.307 2.304h-2.14v2.14H52.52v-2.14h-4.28v1.96l2.057.098.098 2.222H48.24v2.14h4.28v-2.14h4.264l.097-2.222 2.222-.097v-2.125h2.14v-1.975h-4.28zm19.586 4.28h-2.14v2.305h6.584v-6.749H76.55zm-41.476 0h2.14v-4.28h-2.14zm4.444-2.32 2.057.098.098 2.222h2.124v2.14h2.14v-2.14h-2.14v-4.28h-4.28zm19.586 2.32h-2.14v2.14h2.14v2.14h2.14v-2.14h2.14v-2.14h-2.14v-2.14h-2.14zM30.71 56.87l-2.222.097v2.125h2.305v4.28h1.975V52.508h-1.966zm6.611-4.252c-.06.06-.11.579-.11 1.152v1.043h-2.14v1.975h2.14v2.304h-2.14v2.14h4.28v-2.14h2.14v-2.14h-2.14v-2.304h2.14v-2.14h-2.03c-1.117 0-2.08.05-2.14.11m30.614 0c-.06.06-.11.542-.11 1.07v.96h2.14v-2.14h-.96c-.528 0-1.01.05-1.07.11m-41.586 4.17h2.14v-1.975h-2.14zm15.307 0h2.14v-1.975h-2.14zm10.862.164H48.24v4.28h2.14v2.14h2.124l.098 2.222 2.222.097v2.11l-2.222.097-.093 4.198h2.15v-2.14h2.14v-2.14h2.304v2.14h2.14v-4.28h-2.14v-2.14h-4.444v-2.14h-2.14v-2.304h2.305v2.14h1.975v-4.28h-2.14v-2.14h-2.14zm11.028 0h-2.14v2.14h4.28v2.14h2.139v-2.14h-2.14v-2.304h2.14v-1.975h-4.28zm-19.75 2.14h2.139v-2.14h-2.14zm30.613 2.14h4.279v-2.14h-4.28zm-34.893 2.14h1.975v-1.975h-1.975zm32.753 0h2.14v-1.975h-2.14zm-45.92 8.724h2.14v-2.14h2.14v-4.28h-2.14v-2.14h-2.14zm37.197-2.14h6.419v-6.42h-6.42zM.016 80.984h15.306V65.676H.016zM50.38 67.816h2.14v-2.14h-2.14zm15.306 0h2.14v-2.14h-2.14zm6.584 0h2.14v-2.14h-2.14zM2.32 78.68h10.867L13.1 67.898l-10.78-.086zm2.048-8.513c-.044.116-.06 1.616-.036 3.333l.045 3.122h6.584l.089-6.666h-3.3c-2.531 0-3.32.05-3.382.21m52.595 1.929h2.14V70.12h-2.14zM28.49 74.4h-2.14v2.14h2.14zh2.14v-2.14h-2.14zm19.751 2.14h6.584v2.14H56.8v-6.42h-1.975v2.14h-4.609v-2.14H48.24zm13.167-2.14h1.975v-2.14h-1.975zm-21.972 2.222h2.14l.096-2.222h-2.334zm19.668 2.058h2.14V74.4h-2.14zm-24.127-1.915c-.047.124-.064.624-.036 1.111l.05.886 2.223.097v2.125h2.319l-.097-2.222-2.222-.097V76.54h-1.075c-.758 0-1.1.067-1.162.225M74.41 78.68h4.279v-1.975h-4.28zm-43.78 2.304h2.303V78.68H30.63z" fill="#EEF0F2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M.016 15.308h15.306V0H.016zm19.75-10.864h-2.14v13.004h2.14v-4.28h2.14v4.265l2.222.097.092 4.362h2.13v2.14h2.14v2.304h-2.14v2.14h-2.13l-.092 4.362-2.222.097v-4.459h-2.14v-2.14h-2.14v2.14h2.14v2.14h-2.304v-2.14h-2.14v-2.14h-2.14v-2.304h2.14v2.14h2.14v-4.28h-4.28v-2.14h2.14v-2.14H4.46v2.14H2.33l-.092 4.362-2.222.098v1.945l2.222.097.091 4.362h2.13v2.14H6.6V37.2h2.14v-4.444h2.14v-2.14H8.74v-2.14H6.6v-2.14H4.46v-4.444h6.599l-.097 2.222-4.362.092v1.956l4.362.092.092 4.362h2.13v2.14h2.14v2.304h-4.28v4.28h2.14V37.2h4.444v4.28h2.14V37.2h2.139v4.265l2.222.097.089 6.502h1.963l.087-8.642 2.222-.097V37.2h-4.443v-2.14h8.723v-2.133l-6.501-.089v-2.14l4.361-.091v-4.45l2.222.097.097 2.222h6.569v4.28h1.96l.097-2.058 2.222-.097v6.6h6.584v2.139h2.14V37.2h2.303v2.14h4.28V37.2h4.27l.091-4.362 2.222-.097v4.46h-2.124l-.098 2.221-4.361.092v2.13h-2.14v2.14h-2.14v4.28h1.96l.098-2.058 4.361-.092v2.314h-2.14v2.14h-2.139v2.14h2.14v-2.14h2.14v2.14h2.14v-6.584h4.443v-2.14h2.14v-4.28h-2.14v4.28h-4.459l.097-2.222 2.222-.097V37.2h6.584v-4.444h2.14v-2.14h-4.444v-2.14h-2.14v-2.14h-2.14v2.14h2.14v2.14h-4.444v-2.14h-2.14v-2.304h4.444v-1.96l-2.222-.098-.097-2.222h-4.264v2.305h-2.14v2.14H52.52v2.14h-2.14v2.139h4.28v-2.14h2.304v2.14h2.14v2.304h-2.14v2.14h2.14v2.14H56.8v-2.14h-2.14v-2.14h-4.28v2.14h-4.443v-6.584h-2.14v-2.304h8.723v-1.976h-2.14v-2.304h2.14v2.14h2.14v-4.28h-2.14v-4.444h2.14v-4.28h-2.14v4.28h-2.14v-2.14h-2.14v2.14h2.14v6.584h-2.305v-6.584h-2.14v-2.14h-2.139v2.14h-2.304v-2.14h-1.975v2.14h-2.304v-2.14h2.14V6.584h-2.14v6.584h-2.14v2.14h-2.125l-.097 2.222-2.237.098.097 2.042 2.232.098-.092 4.346h-2.14l-.097-2.222H28.49v-2.14h-2.304v-4.444h-2.14v-2.14h-2.14v-2.14h-2.139V8.724h2.14v-4.28h2.304v4.28h2.14v2.304h-2.14v2.14h2.14v2.14h2.14v2.14h2.14v-2.14h2.139v-2.14h-2.14v2.14h-2.14V8.724h4.28v-4.28h-2.14v-2.14h-2.14V0h-4.264l-.097 2.222-2.222.097V0h-2.14zM30.74.11c-.06.06-.11.541-.11 1.07v.96h2.14V0h-.96c-.529 0-1.01.05-1.07.11m15.307 0c-.06.06-.11.541-.11 1.07v.96h8.723V0h-4.252c-2.338 0-4.301.05-4.361.11m10.917 2.03h2.14V0h-2.14zm8.723 13.168h15.307V0H65.686zM2.266 2.25c-.061.06-.11 2.541-.11 5.514v5.404h11.027V2.14H7.779c-2.973 0-5.454.05-5.514.11m65.56 10.918h11.032L78.77 2.222l-10.945-.087zM32.933 4.46l2.058-.098.098-2.058h-2.156zm10.863-.016h2.14v2.14h-2.14v2.14h-2.14v2.14h4.28v-4.28h2.14v-2.14h-2.14v-2.14h-2.14zm15.307 2.14h-4.28v2.14h4.28zh2.14v4.28h2.14v-4.28h-2.14v-2.14h2.14v-2.14h-4.28zM4.46 10.864h6.419v-6.42h-6.42zm21.725-4.28h2.304v-2.14h-2.304zm13.332 0h1.975v-2.14h-1.975zm30.613 4.28h6.42v-6.42h-6.42zm-21.89 0h4.28v-2.14h-2.14v-2.14h-2.14zm-2.222 2.222 2.057.098v-2.156H45.92zm13.085.082h-2.14v4.445h-2.14v2.14h8.56v-6.585h-2.14v-2.14h-2.14zm0 2.14h2.14v-2.14h-2.14zm-21.89 4.444h-2.14v2.14h4.444v-2.14h1.975v2.14h2.304v2.305h2.14v-2.305h-2.14v-2.14h2.14v-2.304H43.81l-.097 2.222-2.057.098v-2.32h-4.444zM.098 19.67l2.057.098v-2.155H0zm65.588.082h2.14v2.14h-2.14v2.14h2.14v2.14h2.14v-2.14h2.304v2.14h2.14v-4.28h-4.444v-2.14h6.583v4.28h2.304v2.304H74.41v2.14h2.14v2.14h2.139v-2.14h2.304v-6.584H78.69v-2.14h-2.14v-2.14H65.686zm-45.92 6.42h4.28v-4.28h-4.28zm15.307-.988v1.152h6.584v-2.304h-6.584zm35.057 3.308 2.058-.098.097-2.058H70.13zM4.46 30.616H6.6v-2.14H4.46zm8.723 0h2.14v-2.14h-2.14zm45.92 0h2.14v-2.14h-2.14zm-26.17 2.14h4.28v-2.14h-4.28zm15.307 0h2.155l-.098-2.058-2.057-.098zm6.584 0h1.975v-2.14h-1.975zm23.947.082-2.222.097v2.125h-2.14v2.14h2.14v4.265l2.222.097.097 2.222h2.125V39.52l-2.222-.098-.097-2.222H81l-.09-6.502-2.041-.097zM.016 37.2H2.32v4.28h2.14v-6.42H2.155v-2.14H.015zm32.917-.015-2.222.097-.098 2.058h6.6v2.14h2.14V37.2h-4.28v-2.14h-2.14zm6.584.015h1.975v-2.14h-1.975zm10.863 0h2.14v-2.14h-2.14zM6.6 43.784H4.46v4.444H2.32v2.14h2.14v2.14H6.6v2.305H4.474l-.098-2.223-4.36-.09v10.873h2.132l.09-6.502 4.361-.092v2.314H4.46v2.14h4.28v2.14h8.723v-2.14h6.584v-2.14h-2.14v-2.14h-2.14v2.14h-2.304v-2.14h-4.28v2.14H8.74v-2.304h2.124l.098-2.058 4.361-.092v-2.13H10.88v-2.14H8.74v2.14H6.6v-4.444h2.14v-2.14H6.6zh6.584v2.14h2.14v-2.14h2.139v-2.14h-2.14v2.14h-2.14v-2.14H8.74v-2.14H6.6zm6.583-2.304h2.14v-1.975h-2.14zm30.613 0h2.14v-1.975h-2.14zm4.444.164h-2.32l.098 2.058 2.222.097v2.125h-8.888v-2.14h-2.14v-2.14h-2.14v2.14h2.14v2.14h-2.14v2.14h2.14v4.444h-2.14v-4.265l-2.221-.097-.09-6.502H30.63v2.14h-2.14v2.14h2.14v2.304h-2.14v2.14h2.14v2.14H17.627v2.133l6.5.09.099 2.057h1.944l.097-2.058 2.222-.097v2.155h2.14v-4.28h2.304v10.864h6.42v-2.14h-4.28v-2.14h2.14v-2.14h-2.14v-2.304h2.14v-2.14h4.279v-2.14h-2.14v-2.304h4.444v4.444h-2.14v2.14h2.14v-2.14h2.14v2.305h-2.14v1.975h2.14v2.304h-2.14v-2.14h-2.14v2.14h-2.14v2.14h2.14v2.304h-2.14v4.28h1.976v-2.14h2.304v2.14h2.14v-4.28h-2.14v-2.304h4.27l.092-4.362 4.361-.092v-1.956l-4.361-.092-.098-2.222h2.32v-2.14h-2.32l.098-2.222 4.361-.092v-2.13h-2.14v-2.14h2.14v-2.14h-2.14v-2.14H48.24zm4.28-.164h2.139v-1.975h-2.14zm19.75 2.304h-2.14v2.14h2.14v2.304h-4.444v2.14h-2.14v2.14h-2.14v2.14h4.28v-2.14h2.304v2.14h2.14v-4.28h2.14v-4.444h2.14v-2.14h-2.14v-4.28h-2.14zM.016 44.854v3.21h2.14v-6.42H.015zm19.75 1.07h-2.14v2.14h2.14v2.304h4.28v-2.14h-2.14v-6.584h-2.14zm52.504 0h2.14v-2.14h-2.14zm-61.227 4.444h4.28v-2.14h-4.28zm41.559-.082 2.057.098v-2.156h-2.155zm23.947 2.222h-2.14v2.14h6.584v-6.42H76.55zm-24.03 2.125 2.222.097.098 2.043 2.042.097.092 4.362h-2.15v2.14h4.28v2.304h2.14v4.445h-2.14v2.14h-2.14v6.584H54.66V76.54h-6.584v-4.28h2.305v2.14h4.279v-2.14h-2.14v-4.444h2.14v-2.14h-2.14v-2.14h-2.14v2.14h-2.14v2.14h2.14v2.305H39.517v2.14h6.419v2.14h-2.14v2.14h2.14v2.124l2.222.097.097 2.238 2.042-.098.098-2.222h2.124v2.304h8.724v-2.14h-2.14V74.4h2.14v4.28h6.583v-2.14h-4.444V74.4h-2.14v-2.14h2.305v2.14h4.279v-2.14h2.304v2.14h2.14v-4.444h2.14v-2.14h4.443V74.4H74.41v2.14h-4.28V81l2.058-.098.097-2.222h2.125v-2.14h4.458l-.097 2.222-4.361.092v2.13h6.583V65.676H74.41v-2.14h-2.125l-.097-2.222-2.222-.097v-2.125h-2.14v-2.14h-2.14v2.14h-4.444v-2.14h-2.14v-2.124l-2.221-.098-.097-2.222h-4.265zm-13.002 2.155h1.975v-1.975h-1.975zm21.725 0h2.14v-1.975h-2.14zm6.584 0h2.14v-1.975h-2.14zM26.35 61.232h-2.125l-.097 2.222-2.222.097v2.125h2.311l-.09 6.502-2.221.097v-2.154H19.78l-.097-2.222-2.057-.099v8.74h2.14V74.4h4.443v2.14h1.975V74.4h2.304v2.14h-2.14v4.444h2.14V76.54h2.14V74.4h6.584v-2.14h-2.14v-2.124l-2.222-.098-.097-2.222h4.459v-2.14h-4.444v-2.14h-2.14v-4.444h-2.14v-2.14h-2.14zm45.92 0h2.14v2.14h6.583v-6.42H72.27zm-59.087 0h2.14v-2.14h-2.14zm39.336 0h2.14v-2.14h-2.14zm13.167 0h2.14v-2.14h-2.14zm8.724 0h4.443v-2.14H74.41zm-26.17 2.14h2.155l-.098-2.058-2.057-.098zm-21.945.11c-.06.06-.11 2.06-.11 4.444v4.334h2.304v2.14h2.14v-2.14h-2.14v-2.14h2.14v-4.444h-2.14v-2.304h-1.042c-.573 0-1.092.05-1.152.11m37.162.097c-.045.118-.062 1.62-.038 3.337l.045 3.122h6.584v-6.584l-3.254-.044c-2.554-.035-3.273.001-3.337.17m-45.83 2.113 2.057-.098.098-2.057h-2.155zM.016 80.984h15.306V65.676H.016zM50.38 67.816h2.14v-2.14h-2.14zm15.306 0h2.14v-2.14h-2.14zm6.584 0h2.14v-2.14h-2.14zM2.238 78.762l10.945.087V67.816H2.15zm54.725-8.806h2.14v-2.14h-2.14zM4.46 76.54h6.419v-6.42h-6.42zm50.364-4.28h1.975v-2.14h-1.975zm19.586 0h2.14v-2.14h-2.14zm-34.893 4.28h1.975V74.4h-1.975zm-17.611 2.304h-4.28v2.14h6.42V76.54h-2.14zm13.167-.164h2.14v-2.14h-2.14zm-4.362 2.222L32.77 81v-2.156h-2.156zm6.502.082h2.14v-2.14h-2.14zm6.583 0h2.14v-2.14h-2.14z" fill="#EEF0F2"/></svg>',
                    imageLink: 'https://thumb.tildacdn.com/tild3235-6135-4138-b865-346162663830/-/format/webp/cert20000.png',
                },
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
                ${item.readMoreLink ? `style="border: 1px solid var(--holyxey-white-oo)" onclick="this.querySelector('a').click()"` : ''}
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
                    <div class="popUpDescr">
                        ${element.description ? element.description : ''}
                        ${preview 
                            ? `<div class="variantPopUpButtons"><a class="classic-header-button-first" href="/variants">Смотреть все</a><a class="classic-header-button-first" onclick="multipage.bookingClick(); multipage.remPopup()">Выбрать даты</a></div>` 
                            : `<div class="variantPopUpButtons"><a class="classic-header-button-first" onclick="multipage.bookingClick(); multipage.remPopup()">Выбрать даты</a></div>`}
                    </div>
                    <article id="pop-up-gallery" onclick="event.stopPropagation();"></article>
                </div>`) // Рендер поп-апа
    images.forEach(image => {
        document.getElementById('pop-up-gallery').insertAdjacentHTML('afterbegin', `<img onclick="multipage.openFullScreenPhoto(this)" src="${image}" alt="Фотографии ${element.title}">`)
    })
    showHideChats()
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

const openOffersPopup = (element, index) => {
    multipage.changeScroll()
    const multiPage = document.getElementById('multi-page')
    const object = lists.offers[index]
    multiPage.insertAdjacentHTML('afterbegin', `
                <div style="animation: showpopup .3s 1s ease-out forwards" id="close-popup" onclick="multipage.remPopup()">
                    <svg width="50px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10m-2.83-7.17 5.66-5.66m0 5.66L9.17 9.17" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div class="blur" id="popup-block"> <!--тело поп-апа-->
                    <h2 class="popUpHeader">${object.title}</h2> 
                    <div class="offerPopupBlock">
                    <div class="preview" style="background-image: url(${object.cover})">
                        <p class="percentage">${object.percentage}</p>
                    </div>
                    <div class="info">
                        <p class="infoTitle">${object.header}</p>
                        <div id="infoHL"> </div>
                        <div id="infoText"> </div>
                        <div id="infoFooter">
                            <a href="${object.link}" class="button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1485.66 345.24">
                              <path d="M172.51 0C78.22 0 1.47 76.74 1.43 171.06c-.01 30.15 7.87 59.58 22.84 85.52L0 345.24l90.69-23.79c24.99 13.63 53.12 20.81 81.75 20.82h.07c94.28 0 171.03-76.75 171.07-171.07.02-45.71-17.76-88.69-50.06-121.02C261.22 17.84 218.27.02 172.51 0m0 313.38h-.06c-25.51 0-50.54-6.87-72.37-19.82l-5.19-3.08-53.81 14.12 14.36-52.47-3.38-5.38c-14.23-22.64-21.75-48.81-21.74-75.67.03-78.4 63.82-142.18 142.25-142.18 37.98.01 73.68 14.82 100.52 41.7 26.85 26.87 41.62 62.6 41.61 100.59-.03 78.4-63.82 142.19-142.19 142.19m77.99-106.49c-4.27-2.14-25.29-12.48-29.21-13.91s-6.77-2.14-9.62 2.14-11.04 13.91-13.53 16.76c-2.49 2.86-4.99 3.21-9.26 1.07s-18.05-6.66-34.37-21.22c-12.71-11.33-21.29-25.33-23.78-29.61s-.27-6.59 1.88-8.72c1.92-1.91 4.27-4.99 6.41-7.49s2.85-4.28 4.27-7.14c1.42-2.85.71-5.35-.36-7.49s-9.62-23.18-13.18-31.74c-3.47-8.33-6.99-7.21-9.62-7.34-2.49-.13-5.34-.15-8.19-.15s-7.48 1.07-11.4 5.35-14.96 14.62-14.96 35.66 15.32 41.37 17.45 44.22c2.14 2.85 30.14 46.03 73.02 64.54 10.2 4.4 18.16 7.03 24.37 9 10.24 3.25 19.56 2.79 26.92 1.69 8.21-1.23 25.29-10.34 28.85-20.33 3.56-9.98 3.56-18.54 2.49-20.33-1.07-1.78-3.92-2.85-8.19-4.99Zm302.64-2.61h-.46L524.32 89.86h-34.18l-28.83 113.02h-.46L434.58 89.86h-36.5l43.94 166.05h36.97l27.66-113.03h.47l28.13 113.03h36.27l44.64-166.05h-35.8l-27.21 114.42Zm174.37-58.26c-3.25-4.26-7.71-7.59-13.36-10-5.66-2.39-12.91-3.59-21.74-3.59-6.2 0-12.55 1.58-19.07 4.77-6.51 3.17-11.85 8.25-16.04 15.23h-.7V89.86h-33.01V255.9h33.01v-63.02c0-12.25 2.01-21.04 6.05-26.4 4.03-5.34 10.54-8.02 19.53-8.02 7.9 0 13.4 2.44 16.51 7.33q4.65 7.32 4.65 22.2v67.91h33.02v-73.95c0-7.44-.67-14.22-1.98-20.35-1.32-6.11-3.6-11.31-6.86-15.58Zm136.01 83.14v-62.55c0-7.3-1.62-13.15-4.89-17.56q-4.875-6.63-12.54-10.35c-5.12-2.48-10.78-4.15-16.98-5s-12.32-1.28-18.36-1.28c-6.66 0-13.29.65-19.87 1.98-6.6 1.32-12.52 3.53-17.79 6.63s-9.62 7.21-13.01 12.32c-3.42 5.12-5.36 11.55-5.82 19.31h33.01c.62-6.51 2.8-11.17 6.52-13.96s8.83-4.18 15.34-4.18c2.94 0 5.69.19 8.25.58 2.55.39 4.8 1.15 6.74 2.32q2.91 1.74 4.65 4.89c1.16 2.09 1.74 4.93 1.74 8.48.15 3.42-.86 6-3.02 7.79-2.18 1.79-5.12 3.15-8.84 4.07-3.72.94-7.98 1.64-12.79 2.09-4.81.48-9.69 1.11-14.64 1.87-4.97.78-9.89 1.82-14.76 3.14-4.88 1.31-9.24 3.3-13.03 5.92-3.8 2.65-6.9 6.17-9.31 10.59-2.4 4.42-3.6 10.05-3.6 16.86 0 6.2 1.05 11.55 3.14 16.04 2.09 4.51 5 8.22 8.72 11.17s8.06 5.12 13.02 6.52c4.95 1.39 10.31 2.09 16.04 2.09 7.44 0 14.73-1.09 21.85-3.25 7.13-2.19 13.34-5.97 18.61-11.41.15 2.02.42 4 .81 5.93s.89 3.84 1.51 5.69h33.48c-1.55-2.47-2.64-6.19-3.26-11.16-.63-4.96-.94-10.14-.94-15.58Zm-33.01-19.77c0 1.88-.19 4.36-.58 7.45-.38 3.11-1.43 6.16-3.14 9.19-1.71 3.02-4.35 5.63-7.91 7.79-3.56 2.18-8.6 3.26-15.12 3.26-2.63 0-5.19-.23-7.67-.71-2.48-.46-4.65-1.28-6.51-2.44s-3.33-2.75-4.42-4.77c-1.08-2.02-1.63-4.49-1.63-7.43 0-3.1.55-5.67 1.63-7.68 1.09-2.01 2.52-3.68 4.31-5 1.77-1.32 3.87-2.36 6.27-3.14 2.4-.77 4.84-1.39 7.33-1.86 2.63-.46 5.27-.86 7.9-1.16 2.65-.3 5.16-.7 7.56-1.16 2.41-.47 4.65-1.05 6.75-1.75 2.09-.7 3.83-1.65 5.23-2.9v12.32Zm94.63-109.76h-33.02v36.04h-19.99v22.09h19.99v70.94c0 6.05 1.02 10.93 3.03 14.65 2.02 3.72 4.77 6.6 8.25 8.61 3.49 2.02 7.52 3.37 12.1 4.06 4.56.69 9.42 1.05 14.53 1.05 3.27 0 6.59-.08 10.01-.22 3.4-.16 6.5-.46 9.3-.94v-25.58c-1.56.31-3.18.56-4.89.7q-2.55.24-5.34.24c-5.57 0-9.3-.94-11.16-2.8-1.85-1.86-2.78-5.58-2.78-11.17v-59.54h24.18v-22.09h-24.18V99.63Zm136.46 103.61c-2.17-3.8-5.04-6.98-8.6-9.54-3.56-2.55-7.64-4.61-12.2-6.17-4.58-1.54-9.27-2.85-14.07-3.94-4.65-1.09-9.21-2.1-13.71-3.03s-8.49-1.98-11.98-3.13c-3.48-1.17-6.3-2.67-8.47-4.54-2.18-1.86-3.25-4.25-3.25-7.21 0-2.48.6-4.46 1.85-5.93 1.24-1.47 2.76-2.59 4.54-3.38 1.79-.77 3.75-1.27 5.92-1.51 2.17-.23 4.19-.34 6.04-.34 5.89 0 11.01 1.12 15.36 3.37 4.33 2.25 6.74 6.55 7.19 12.9h31.39c-.62-7.44-2.52-13.6-5.69-18.49-3.17-4.88-7.17-8.79-11.97-11.74s-10.26-5.04-16.4-6.28q-9.18-1.86-18.93-1.86c-9.75 0-12.88.58-19.06 1.73q-9.315 1.755-16.74 6.06c-4.97 2.87-8.95 6.78-11.98 11.74s-4.54 11.32-4.54 19.07c0 5.27 1.09 9.74 3.27 13.38 2.15 3.65 5.03 6.66 8.58 9.07 3.58 2.4 7.65 4.35 12.22 5.81 4.57 1.49 9.26 2.76 14.06 3.85 11.79 2.48 20.98 4.96 27.56 7.45 6.59 2.48 9.88 6.2 9.88 11.16 0 2.95-.69 5.37-2.09 7.31-1.4 1.95-3.14 3.49-5.23 4.65-2.1 1.17-4.43 2.03-6.98 2.56-2.56.55-5.01.82-7.33.82-3.26 0-6.39-.39-9.41-1.16-3.03-.78-5.7-1.98-8.03-3.61-2.32-1.63-4.23-3.72-5.7-6.28-1.46-2.56-2.21-5.61-2.21-9.19h-31.38c.32 8.06 2.13 14.77 5.47 20.12 3.32 5.35 7.58 9.65 12.78 12.91 5.19 3.25 11.13 5.58 17.8 6.98 6.65 1.39 13.47 2.09 20.44 2.09s13.53-.66 20.12-1.97q9.885-1.98 17.55-6.87c5.13-3.25 9.25-7.55 12.44-12.9 3.17-5.36 4.76-11.98 4.76-19.89 0-5.59-1.08-10.27-3.25-14.06Zm65.56-113.38-62.77 166.05h36.73l13.01-36.98h62.08l12.54 36.98h37.91l-62.07-166.05h-37.44Zm-3.48 101.87 21.62-60.93h.46l20.93 60.93zm217.14-39.77c-4.49-5.89-10.15-10.62-16.97-14.18-6.82-3.57-14.95-5.35-24.4-5.35-7.45 0-14.26 1.47-20.46 4.41-6.22 2.95-11.32 7.68-15.34 14.19h-.47v-15.36h-31.4v162.34h33.04v-56.98h.45c4.03 5.9 9.19 10.35 15.48 13.36 6.26 3.02 13.13 4.54 20.57 4.54 8.84 0 16.55-1.72 23.13-5.12 6.59-3.41 12.09-7.99 16.51-13.73s7.7-12.32 9.89-19.76c2.15-7.45 3.25-15.2 3.25-23.26 0-8.53-1.1-16.7-3.25-24.54-2.19-7.82-5.51-14.69-10.01-20.58Zm-21.15 58.37c-.94 4.66-2.53 8.72-4.77 12.21-2.25 3.49-5.19 6.33-8.85 8.49-3.63 2.17-8.17 3.27-13.59 3.27s-9.75-1.09-13.47-3.27c-3.72-2.16-6.71-5-8.96-8.49s-3.87-7.55-4.88-12.21c-1.01-4.65-1.5-9.38-1.5-14.17s.45-9.78 1.38-14.42c.94-4.65 2.52-8.76 4.78-12.34 2.23-3.56 5.19-6.46 8.84-8.71 3.64-2.25 8.16-3.39 13.59-3.39s9.74 1.14 13.37 3.39c3.64 2.24 6.63 5.18 8.95 8.83s3.98 7.8 5 12.44c1.02 4.65 1.5 9.39 1.5 14.2s-.45 9.53-1.38 14.17Zm162.73-37.79c-2.17-7.82-5.5-14.69-10-20.58s-10.14-10.62-16.96-14.18c-6.83-3.57-14.97-5.35-24.42-5.35-7.43 0-14.26 1.47-20.45 4.41-6.2 2.95-11.32 7.68-15.35 14.19h-.45v-15.36h-31.39v162.34h33.01v-56.98h.47c4.03 5.9 9.19 10.35 15.46 13.36 6.27 3.02 13.14 4.54 20.58 4.54 8.83 0 16.53-1.72 23.13-5.12 6.58-3.41 12.09-7.99 16.5-13.73 4.43-5.74 7.71-12.32 9.88-19.76 2.18-7.45 3.26-15.2 3.26-23.26 0-8.53-1.08-16.7-3.26-24.54Zm-31.16 37.79c-.92 4.66-2.51 8.72-4.76 12.21-2.26 3.49-5.2 6.33-8.84 8.49-3.64 2.17-8.17 3.27-13.6 3.27s-9.77-1.09-13.49-3.27c-3.73-2.16-6.7-5-8.96-8.49-2.24-3.49-3.87-7.55-4.88-12.21-1.01-4.65-1.51-9.38-1.51-14.17s.47-9.78 1.4-14.42c.93-4.65 2.52-8.76 4.77-12.34 2.24-3.56 5.19-6.46 8.84-8.71 3.63-2.25 8.17-3.39 13.6-3.39s9.72 1.14 13.36 3.39c3.65 2.24 6.63 5.18 8.96 8.83s4 7.8 5 12.44c1.02 4.65 1.51 9.39 1.51 14.2s-.47 9.53-1.4 14.17" style="fill:#25d366"/>
                            </svg>
                            </a>
                            <div class="price">${object.price}</div>
                        </div>
                    </div>
                    </div>
                </div>`) // Рендер поп-апа
    object.highlights.forEach(hl => {
        document.getElementById('infoHL').insertAdjacentHTML('beforeend', `<div class="hl">${hl}</div>`)
    })
    object.info.forEach(text => {
        document.getElementById('infoText').insertAdjacentHTML('beforeend', `<p class="infoText">${text}</p>`)
    })
    showHideChats()
}
const renderOffers = () => {
    const offersNode = document.getElementById('offers');
    if (offersNode) {
        offersNode.insertAdjacentHTML('beforeend', `<div class="classic-ip" data-counter-scrollit></div>`)
        const whereTo = offersNode.querySelector('.classic-ip')
        lists.offers.forEach((offer, index) => {
            whereTo.insertAdjacentHTML('beforeend',
                `<article data-counter-item class="offer ${offer.link ? 'active' : ''}" ${offer.link ? `onclick="openOffersPopup(this, ${index})"` : ''} data-offer-id="${index}" style="background-image: url(${offer.cover})">
                <div class="offerTitleBlock">
                    <h4 class="offerTitle">${offer.title}</h4>
                    <p class="offerDescription">${offer.description}</p>
                    ${offer.link
                    ? `<svg class="infoIcon" xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                      <g clip-path="url(#a)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.843.746C8.027.936 4.483 2.9 2.258 6.054 1.015 7.816.274 9.825.04 12.058c-.054.524-.055 1.826-.001 2.364a12.56 12.56 0 0 0 5.274 9.06c1.762 1.242 3.771 1.984 6.004 2.216.525.055 1.827.056 2.364.002a12.56 12.56 0 0 0 9.06-5.274c1.243-1.762 1.984-3.772 2.217-6.004.054-.525.055-1.827.001-2.364a12.56 12.56 0 0 0-5.274-9.06A12.5 12.5 0 0 0 11.843.746m-.319 2.536c-2.004.237-3.749.945-5.253 2.13-.357.282-1.312 1.235-1.582 1.58a10.26 10.26 0 0 0-2.083 4.754c-.098.613-.098 2.385 0 2.976.295 1.783.993 3.384 2.067 4.747.281.357 1.235 1.312 1.58 1.582a10.26 10.26 0 0 0 4.754 2.083c.612.098 2.384.098 2.975 0 1.783-.296 3.376-.989 4.747-2.067.412-.323 1.404-1.336 1.712-1.748a10.2 10.2 0 0 0 1.953-4.586c.098-.612.098-2.384 0-2.975-.295-1.783-.992-3.384-2.067-4.747-.282-.357-1.235-1.312-1.58-1.582a10.3 10.3 0 0 0-4.727-2.08c-.36-.058-2.16-.107-2.496-.067m.624 3.75c-1.104.354-1.215 1.845-.173 2.339.175.083.257.097.544.097.275 0 .37-.017.511-.087.28-.138.469-.325.604-.598.108-.22.123-.287.123-.552 0-.253-.017-.335-.104-.513a1.36 1.36 0 0 0-.617-.621 1.4 1.4 0 0 0-.888-.065m0 3.753a1.25 1.25 0 0 0-.884 1.034c-.054.328-.053 6.27 0 6.598.122.753.851 1.24 1.553 1.035.514-.149.834-.511.92-1.039.053-.328.052-6.27-.001-6.598a1.28 1.28 0 0 0-.419-.77c-.299-.27-.795-.38-1.169-.26" fill="#1E1B23"/>
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="#fff" d="M0 .73h25v25H0z"/>
                        </clipPath>
                      </defs>
                    </svg>`
                    : ''}
                </div>
            </article>`)
        })
    }
}
const showHideChats = () => {
    try {
        const jivo = document.querySelectorAll('jdiv')
        if (jivo) {
            for (let i = 0; i < jivo.length; i++) {
                jivo[i].classList.toggle('hideIfPopUp')
            }
            document.getElementById('CalltouchWidgetFrame').classList.toggle('hideIfPopUp')
        }
        else new Error('Не найдено блоков Jivo')
    }
    catch (e) {
        console.error("showHideChats() => ", e.message)
    }
} // прячет и показывает кнопки чатов (живо и тп)

const loyaltyWorker = () => {
    const popUp = (nodeElement) => {
        const multiPage = document.getElementById('multi-page')
        const title = nodeElement.getAttribute('title')
        const el = lists.loyalty.find((element) => element.title === title);

        // popup render
        multiPage.insertAdjacentHTML('afterbegin', `
                <div style="animation: showpopup .3s 1s ease-out forwards" id="close-popup" onclick="multipage.remPopup()">
                    <svg width="50px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10m-2.83-7.17 5.66-5.66m0 5.66L9.17 9.17" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div class="blur" id="popup-block">
                    <section id="loyaltyPopUp"></section>
                </div>`)
        const loyaltyPopUp = document.getElementById('loyaltyPopUp')
        loyaltyPopUp.insertAdjacentHTML('beforeend',
            `<h3>${el.title}</h3><article id="${el.id}"></article>` )
        const inTo = loyaltyPopUp.querySelector('article')

        // info render
        let tmt = 0
        switch (el.id) {
            case("loyaltyProgram"):
                for (const param of Object.entries(el.innards)) {
                    inTo.insertAdjacentHTML('beforeend', `<div style="animation: showpopup .4s ${tmt}s ease-out forwards" data-param="${param[0]}"><h4>${param[0]}</h4></div>`)
                    param[1].forEach((el, ind) => {
                        tmt += .1
                        inTo.querySelector(`[data-param="${param[0]}"]`).insertAdjacentHTML('beforeend', `<p style="animation: showpopup .4s ${tmt}s ease-out forwards" >${el}</p>`)
                    })
                }
                inTo.insertAdjacentHTML('beforeend', `<div style="animation: showpopup .4s ${tmt}s ease-out forwards"  id="loyaltyButtons">
                    <a class="classic-header-button-first" target="_blank" href="tel:+7 (499) 495-12-45">+7 (499) 495-12-45</a>
                    <a class="classic-header-button-first" target="_blank" href="https://wa.me/79670655655?text=Добрый день! Подскажите, какая у меня категория лояльности?">WhatsApp</a>
                </div>`)
                break
            case("certificates"):
                for (const certificate of Object.entries(el.innards)) {
                    const name = certificate[0]
                    const values = certificate[1]
                    inTo.insertAdjacentHTML('beforeend',
                        `<div style="animation: showpopup .4s ${tmt}s ease-out forwards" data-cert="${name}">
                                <img src="${values.imageLink}" alt="Терруар подарочный сертификат на ${name}">
                            <section>
                                <a href="${values.paymentLink}" target="_blank">${el.cartIcon}</a>
                                <a href="${values.paymentLink}" target="_blank">${values.qr}</a>
                            </section>
                        </div>`)
                    tmt += .3
                }
                inTo.insertAdjacentHTML('afterbegin', `<p style="opacity: 0; animation: showpopup .4s ${tmt}s ease-out forwards">После оплаты сертификат с номером придет вам на указанную почту в течение суток.<br><br>Если нужно быстрее, <a onclick="multipage.remPopup()" href="#contacts" class="faqbtn" >свяжитесь с нами</a>, все сделаем!:)</p>`)
                break
        }
    }
    const loyaltySection = document.getElementById('loyalty')
    const elements = loyaltySection.querySelectorAll('article')
    for (const element of elements)
        element.onclick = (e) => {
            multipage.changeScroll()
            popUp(element)
            showHideChats()
        }
}

const seasonTapesRender = () => {
    const renderATape = (el) => {
        el.insertAdjacentHTML('beforeend', '<div class="a-tape"><p>Закрыто на сезон</p><p>Закрыто на сезон</p><p>Закрыто на сезон</p></div>')
    }
    const articles = Array.from(document.querySelectorAll('article[data-list]'))
    const elForTapping = articles.filter(el => {
        return seasonTapes.some(text => el.title === text)
    })
    elForTapping.forEach(el => {
        renderATape(el)
    })
}

const showAboutBlock = (bttn) => {
    const whyBlock = document.querySelector('.whyTerruar')
    //
    whyBlock.style.transition = 'all ease-out 1s'
    whyBlock.style.opacity = '1'
    whyBlock.style.height = '100%'
    if ( window.innerWidth > 600 ) {
        whyBlock.style.padding = '2rem'
    }
    else {
        whyBlock.style.padding = '.5rem'
    }
    //
    bttn.style.transition = 'all ease-out .5s'
    bttn.style.translate = '10px 0'
    bttn.style.height = '0'
    bttn.style.padding = '0'
    bttn.style.opacity = '0'
    bttn.style.marginInline = '-1rem'
}
const openFullVideo = (element) => {
    multipage.changeScroll()
    const link = element.getAttribute('data-frame-link')
    const multiPage = document.getElementById('multi-page')
    multiPage.insertAdjacentHTML('afterbegin', `
                <div style="animation: showpopup .3s 1s ease-out forwards" id="close-popup" onclick="multipage.remPopup()">
                    <svg width="50px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10m-2.83-7.17 5.66-5.66m0 5.66L9.17 9.17" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div class="blur" id="popup-block"> <!--тело поп-апа-->
                    <iframe src="${link}" allowfullscreen class="${element.getAttribute('class')}" id="popUpVideo"></iframe>
                </div>`) // Рендер поп-апа
    // console.log(link)
    showHideChats()
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
                showHideChats()
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
                q += `<img src="${img}" onclick="this.scrollIntoView()" alt="Фотографии ресторана">`
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

        getWeatherForecast().then()
        dataPopup === 'online' ? videoPlayBack() : ''
        multiPage.insertAdjacentHTML('afterbegin', `
                <div style="animation: showpopup .3s 1s ease-out forwards" id="close-popup" onclick="multipage.remPopup()">
                        <svg width="50px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10m-2.83-7.17 5.66-5.66m0 5.66L9.17 9.17" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                <div class="blur" id="popup-block"> <!--тело поп-апа-->
                    ${dataPopup === 'online' ? `<article id="weatherTest"></article>` : ''}
                    <h2 class="popUpHeader">${dataHeader}</h2> 
                    ${getGallery(target)}
                    ${dataPopup === 'team' ? getTeam(target) : ''}
                    ${dataPopup === 'restaurant' ? getMenu(target) : ''}
                    ${dataType === 'service' ? getService(target) : ''}
                </div>`) // Рендер поп-апа
    }, // Показ поп-апа
    remPopup(){
        this.changeScroll()
        showHideChats()
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
                el.style.backgroundColor = 'var(--holyxey-white)'
                buttonLines.forEach(line => {
                    line.style.backgroundColor = 'var(--holyxey-wine)'
                })

                el.setAttribute('data-clicked', '1')
            } else
            if (el.getAttribute('data-clicked') === '1') {
                menuPoints.forEach(point => {
                    point.style.display = 'none'
                })
                el.style.backgroundColor = 'var(--holyxey-wine)'
                buttonLines.forEach(line => {
                    line.style.backgroundColor = 'var(--holyxey-white)'
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
                </article>`)
        showHideChats()
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
        showHideChats()
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

// Запуск записи стрима вместо трансляции
async function videoPlayBack() {
    try {
        const response = await fetch('https://api.holyxey.com/terruar/downloads')
        const data = await response.json();
        console.log('data', data[0])
        document.getElementById('popup-block').insertAdjacentHTML('beforeend', `<article id="video-stream" >
                <video controls autoplay muted playsinline loop style="width: 100%">
                    <source id="videoPlayBack" src="${data[0].url}" type="video/mp4">
                </video></article>`)
    } catch (error) {
        console.error('Error getting token:', error.message);
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
    multipage.getHeaderHeight()
        .then( () => {
            if (window.innerWidth < 600) {
                multipage.smoothShowHorizontal()
            }
        })
    seasonTapesRender()
})
document.addEventListener("DOMContentLoaded", async () => {

    needToRender()
    multipage.popupButtonsInit()

    multipage.getHeaderHeight()
        .then(multipage.modulePosition)
        .then(renderVariantsPreview)
        .then(whereToRenderCounter)
        .then(multipage.renderFAQ)
        .then(renderOffers)
        .then(loyaltyWorker)

    console.log('Designed by Holyxey at AdsTarget')
})