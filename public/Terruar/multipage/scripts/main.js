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
            shortDescr: 'От 1500 р',
            fullDescr: 'Наша первая баня, отличается большой парилкой и комфортной зоной отдыха на несколько человек. Собрала кучу позитивных отзывов про качества пара. Минимальная бронь от двух часов. ',
            benefits: ['', '', ''],
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
            render: false,
            id: 'furako',
            title: 'Баня с фурако и холодной купелью',
            header: '',
            price: '',
            shortDescr: 'От 3500р/час',
            fullDescr: 'Наша новая баня, отличается от первой наличием санузла и душа. В стоимость бани также входит горячая купель фурако и холодная купель. Целый СПА-комплекс. Минимальная бронь от двух часов.',
            benefits: ['', '', ''],
            images: [''],
            popUp: true,
            popUpType: 'service',
            readMoreLink: '',
            readMoreText: 'Подробнее',
            withGallery: false,
        },
        {
            render: false,
            id: 'pool',
            title: 'Бассейн',
            header: '',
            price: '',
            shortDescr: 'Бесплатно',
            fullDescr: 'Летний плавательный бассейн доступен для всех гостей Терруар. Рядом с бассейном предусмотрены зоны для приема солнечных ванн. А у администратора можно получить надувной диван (ламзак). ',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild6265-6563-4665-b139-343737353365/-/format/webp/pool.jpeg'],
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
            fullDescr: '',
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
            fullDescr: '',
            benefits: ['', '', ''],
            images: ['https://thumb.tildacdn.com/tild3337-3031-4236-a638-363235343733/-/format/webp/600A3332.png',
            ],
            popUp: true,
            popUpType: 'service',
            readMoreLink: '',
            readMoreText: 'Подробнее',
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
            'Сколько стоит размещение?': `Цена сильно зависит от многих факторов: сезона, дня недели, домика и т.д. Минимальная стоимость начинается от 5000р в сутки, не считая <a href="#offers" class="faqbtn"> акций </a>, которые у нас регулярно проходят.
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
<br>Для любителей активности у нас можно <a href="#services" class="faqbtn"> взять в аренду </a> велосипеды, квадроциклы, лыжи или снегоступы. А можем организовать для вас целый джип-тур по местному бездорожью.
<br>Любителям более спокойного отдыха – рекомендуем баню или подогреваемый чан (а лучше все сразу), аренду проектора для просмотра любимых фильмов или Xbox для любимых игр. А еще мы можем организовать фотоссесию для вас!`,
            'Сколько спальных мест в домиках?': `Наши домики рассчитаны на двоих (за исключением домика Шампань – там максимум 4 человека).
<br>Если вам будет удобно, то за дополнительную плату можем предоставить дополнительно одноместную раскладушку.`,
            'Как забронировать домик?': `Для бронирования воспользуйтесь сайтом,<span onclick="multipage.bookingClick()"> кнопкой забронировать </span>, необходимо будет внести предоплату – 50% (если что-то изменится и вы сообщите нам за 10 дней до заезда, мы вернем стоимость).
<br>Если ничего с этим сайтом не получается, <a href="https://wa.me/79670655655?text=Здравствуйте,%20пишу%20с%20сайта" class="faqbtn" target="_blank"> напишите нам</a>, мы все забронируем и пришлем ссылку на предоплату! <br>А если что-то не работает на сайте - напишите пожалуйста <a href="https://t.me/holyxey" target="_blank" class="faqbtn"> Алексею</a>`,
            'Как устроить корпоратив / тимбилдинг?': `Напишите нам на почту<a href="mail:Terruar.msk@gmail.com" class="faqbtn"> Terruar.msk@gmail.com </a> поможем реализовать любую идею! У нас есть ведущие, фотографы, можем организовать лазертаг, джип-тур, банную программу с профессиональным банщиком, а также сделать специальную скидку для вас!`,
        }
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
        needHeader: false,
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
    }, // design #2 ()
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
    } // design #3 (Same like 2 but with section header)
]
const whatIsMax = function(img) {
    if (img.width / img.height <= img.parentNode.clientWidth / img.parentNode.clientHeight) {
        img.style.cssText = 'max-height: unset; max-width: 100%'
    } else {
        img.style.cssText = 'max-height: 100%; max-width: unset'
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
                ${design.needCounter ? 'data-counter-item' : ''}>
                    ${design.artHeads 
                    ? `<div class="${design.artHeads}">
                            <h4 class="${design.artHeader}">${item.title}</h4>
                            <p class="${design.artDescr}">${item.shortDescr}</p>
                        </div>` 
                    : ''}
                    ${design.artImgBlck 
                    ? `<div class="${design.artImgBlck}"><img onload="whatIsMax(this)" class="${design.artImg}" src="${item.images[0]}" alt="${item.title}"></div>` 
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
    //
    hideLoadingImitator: function () {
        document.getElementById('loadingImitator').style.animation = 'hidepopup .3s ease-out'
        setTimeout(()=>{document.getElementById('loadingImitator').remove()},300)
    },
    loadingImitator: function () {
        const initButtons = document.querySelectorAll('button[type="submit"].znms-widget__v-color8');
        initButtons.forEach(button => {
            button.addEventListener('click', e => {
                document.body.insertAdjacentHTML('beforeend',
                    `<div id="loadingImitator">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><path d="M12 21a9 9 0 0 0 6.708-15L16 3m-4 0a9 9 0 0 0-6.708 15L8 21M21 3h-5m0 0v5M3 21h5m0 0v-5" stroke="var(--yellow)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>`)
                document.getElementById('loadingImitator').addEventListener('click', e => {multipage.hideLoadingImitator()})
                document.getElementById('loadingImitator').addEventListener("touchstart", e => {multipage.hideLoadingImitator()})
                setTimeout(()=>{
                    multipage.hideLoadingImitator()
                },2200)
            })
        })
    },
    //
    getHeaderHeight() {
        let nav = document.querySelector('nav');
        let hero  = document.getElementById('hero');
        let mobNav = document.getElementById('mobileNavStroke');
        let widgetBooking = document.querySelector('.znms-widget__module-form-block');
        if (mobNav.offsetHeight < 1) {
            let height = `calc(${window.innerHeight}px - ${nav.clientHeight}px - 3rem)`;
            let margin = `calc(${nav.clientHeight}px + 2rem)`
            hero.style.cssText += `height:${height}; margin-top: ${margin}`;
        } else {
            let height = `unset`;
            let margin = `calc(${nav.offsetHeight}px + 2rem)`
            hero.style.cssText += `height:${height}; margin-top: ${margin}`;
        }
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
                if (parentElement.getBoundingClientRect().top + 250 > window.innerHeight) {

                } else {
                    parentElement.children[0].style.animation = `smoothShowHorizontal 3s ease-in-out`
                    clearInterval(waitOnTheViewPort);
                }
            }, 1000)
        })
    },
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

window.addEventListener("resize", () => {
    multipage.getHeaderHeight()
})
window.addEventListener("load", () => {
    multipage.getHeaderHeight()
    multipage.loadingImitator()
    setTimeout(multipage.loadingImitator, 1500)
    if (window.innerWidth < 600) {
        multipage.smoothShowHorizontal()
    }
})
document.addEventListener("DOMContentLoaded", () => {
    whatPageIs.data === 'main' ? multipage.heroVideoStart() : null
    multipage.loadingImitator()
    // whatPageIs.data === 'services' ? SOMEFUNCTION() : null
    needToRender()
    multipage.getHeaderHeight()
    multipage.popupButtonsInit()
    multipage.renderFAQ()
    if (window.innerWidth < 600) {
        whereToRenderCounter()
    }
    console.clear();
})