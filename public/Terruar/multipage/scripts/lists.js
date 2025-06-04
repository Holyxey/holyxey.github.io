const lists = {
  servicesList: [
    // Баня
    {
      render: true,
      id: "bath",
      title: "Баня",
      header: "",
      price: "",
      shortDescr: "От 2000р/час",
      fullDescr:
        "Наша первая баня, отличается большой парилкой и комфортной зоной отдыха на несколько человек. Собрала кучу позитивных отзывов про качества пара. Минимальная бронь от двух часов.",
      benefits: ["Комфортный отдых", "Настоящая баня", ""],
      images: [
        "https://thumb.tildacdn.com/tild3933-6233-4938-b230-643539623531/-/format/webp/511.jpg",
      ],
      popUp: true,
      popUpType: "service",
      readMoreLink: "",
      readMoreText: "Подробнее",
      withGallery: false,
    },
    // Банный чан
    {
      render: true,
      id: "bathvat",
      title: "Банный чан",
      header: "",
      price: "",
      shortDescr: "От 2000р/час",
      fullDescr:
        "Банный чан до 3х-4 человек под навесом, чтобы можно было наслаждаться им в любую погоду. Находится недалеко от нашей первой бани, удобно арендовать баню и чан как вместе так и отдельно. Минимальная бронь от двух часов.",
      benefits: ["", "", ""],
      images: [
        "https://thumb.tildacdn.com/tild3435-6233-4833-b861-366330383062/-/format/webp/KIR_5744_1.jpg",
      ],
      popUp: true,
      popUpType: "service",
      readMoreLink: "",
      readMoreText: "Подробнее",
      withGallery: false,
    },
    {
      render: true,
      id: "furako",
      title: "Баня с фурако и холодной купелью",
      header: "",
      price: "",
      shortDescr: "От 3500р/час",
      fullDescr:
        "Наша новая баня, отличается от первой наличием санузла и душа. В стоимость бани также входит горячая купель фурако и холодная купель. Целый СПА-комплекс. Минимальная бронь от двух часов.",
      benefits: ["", "", ""],
      images: [
        "https://thumb.tildacdn.com/tild6630-3034-4132-a532-653463626536/-/format/webp/305A0845.JPG",
      ],
      popUp: true,
      popUpType: "service",
      readMoreLink: "",
      readMoreText: "Подробнее",
      withGallery: false,
    },
    {
      render: true,
      id: "pool",
      title: "Бассейн",
      header: "",
      price: "",
      shortDescr: "Бесплатно",
      fullDescr:
        "Летний плавательный бассейн доступен для всех гостей Терруар. Рядом с бассейном предусмотрены зоны для приема солнечных ванн. А у администратора можно получить надувной диван (ламзак). ",
      benefits: ["", "", ""],
      images: [
        "https://thumb.tildacdn.com/tild6363-3437-4238-b031-663535363161/-/format/webp/IMG_4025.JPG",
      ],
      popUp: true,
      popUpType: "service",
      readMoreLink: "",
      readMoreText: "Подробнее",
      withGallery: false,
    },
    {
      render: true,
      id: "path",
      title: "Эко-Тропа",
      header: "",
      price: "",
      shortDescr: "Бесплатно",
      fullDescr:
        "Лесная тропа длинной 500м, в конце которой вас ждет полноценная зона отдыха с креслами и костровой зоной, а также потрясающим видом на закат. Путь обратно освещается. ",
      benefits: ["", "", ""],
      images: {
        summer: [
          "https://thumb.tildacdn.com/tild3162-3733-4263-b164-623962383030/-/format/webp/path.jpeg",
        ],
        winter: [
          "https://static.tildacdn.com/tild6362-6161-4065-b664-366466393761/pexels-photo-688660.jpeg",
        ],
      },
      popUp: true,
      popUpType: "service",
      readMoreLink: "",
      readMoreText: "Подробнее",
      withGallery: false,
    },
    {
      render: true,
      id: "photoSession",
      title: "Фотосессия",
      header: "",
      price: "",
      shortDescr: "От 7000р",
      fullDescr:
        "Наши фотографы помогут запечатлеть памятную дату или просто создать настроение с помощью фотосессии. Кстати, мы излюбленное место для предложений. Бронировать время фотосессии лучше заранее, так можно будет выбрать из нескольких фотографов.",
      benefits: ["", "", ""],
      images: {
        summer: [
          "https://thumb.tildacdn.com/tild3765-6264-4537-b535-616564323736/-/format/webp/photoSession.jpeg",
        ],
        winter: [
          "https://thumb.tildacdn.com/tild3735-3330-4034-a133-343665313739/-/format/webp/pexels-photo-7507966.jpeg",
        ],
      },
      popUp: true,
      popUpType: "service",
      readMoreLink: "",
      readMoreText: "Подробнее",
      withGallery: false,
    },
    {
      render: true,
      id: "bicycle",
      title: "Велосипед",
      header: "",
      price: "",
      shortDescr: "500р/час",
      fullDescr:
        "Исследуйте местные окрестности на велосипеде – это особенно приятно, можно съездить на эко-ферму или прокатиться до местных прудов",
      benefits: ["", "", ""],
      images: [
        "https://thumb.tildacdn.com/tild6465-6438-4934-b630-616231316662/-/format/webp/image.png",
      ],
      popUp: true,
      popUpType: "service",
      readMoreLink: "",
      readMoreText: "Подробнее",
      withGallery: false,
    },
    {
      render: true,
      id: "skis",
      title: "Лыжи",
      header: "",
      price: "",
      shortDescr: "500р/час",
      fullDescr:
        "Исследуйте местные окрестности на лыжах – это особенно приятно, по зимнему лесу",
      benefits: ["", "", ""],
      images: [
        "https://thumb.tildacdn.com/tild3335-3365-4063-a239-646365313532/-/format/webp/Frame_8.png",
      ],
      popUp: true,
      popUpType: "service",
      readMoreLink: "",
      readMoreText: "Подробнее",
      withGallery: false,
    },
    // Квадроцикл
    {
      render: true,
      id: "quadbike",
      title: "Квадроцикл",
      header: "",
      price: "",
      shortDescr: "5000р/час",
      fullDescr:
        "Отличный вариант для любителей активного отдыха, идеален для бездорожья. Доступен специальный маршрут на нашей карте мимо прудов по березовому лесу.",
      benefits: ["", "", ""],
      images: {
        summer: [
          "https://thumb.tildacdn.com/tild6230-3462-4431-b436-386138613338/-/format/webp/photo.jpg",
        ],
        winter: [
          "https://thumb.tildacdn.com/tild3734-3931-4465-a133-613035393531/-/format/webp/quadbike.png",
        ],
      },
      popUp: true,
      popUpType: "service",
      readMoreLink: "",
      readMoreText: "Подробнее",
      withGallery: false,
    },
    // Багги
    {
      render: true,
      id: "buggy",
      title: "Багги",
      header: "",
      price: "",
      shortDescr: "4000р/час",
      fullDescr:
        "Необычный вид внедорожной техники для искушенных водителей. Удивить близких точно получится.",
      benefits: ["", "", ""],
      images: [
        "https://thumb.tildacdn.com/tild3037-3938-4762-a537-653161623934/-/format/webp/buggy.jpeg",
      ],
      popUp: true,
      popUpType: "service",
      readMoreLink: "",
      readMoreText: "Подробнее",
      withGallery: false,
    },
    // Джип-тур
    {
      render: true,
      id: "jeeptour",
      title: "Джип-тур",
      header: "",
      price: "",
      shortDescr: "От 8000р",
      fullDescr:
        "Заезд по бездорожью с профессиональным водителем. Вас ждут маршруты по лесу, переезд реки вброд, высокие подъемы и не менее экстремальные спуски",
      benefits: ["", "", ""],
      images: {
        summer: [
          "https://thumb.tildacdn.com/tild3264-6431-4131-a234-663461616431/-/format/webp/c45331ec-7b02-4c17-8.jpg",
        ],
        winter: [
          "https://thumb.tildacdn.com/tild3862-6339-4735-a539-356335633039/-/format/webp/tour.png",
        ],
      },
      popUp: true,
      popUpType: "service",
      readMoreLink: "",
      readMoreText: "Подробнее",
      withGallery: false,
    },
    {
      render: true,
      id: "kayaking",
      title: "Сплав на кайаках",
      header: "",
      price: "",
      shortDescr: "От 9000р",
      fullDescr:
        "Хотите отправиться на настоящий сплав? Это возможно в Терруаре! Выдается вся экипировка, трансфер до реки Беспута. Дополнительно можно организовать инструктора. ",
      benefits: ["", "", ""],
      images: [
        "https://thumb.tildacdn.com/tild3437-3936-4332-b834-373032333562/-/format/webp/kayaking.jpeg",
      ],
      popUp: true,
      popUpType: "service",
      readMoreLink: "",
      readMoreText: "Подробнее",
      withGallery: false,
    },
    {
      render: true,
      id: "sapBoards",
      title: "Пруд и Сап-борды",
      header: "",
      price: "",
      shortDescr: "Рядом с нами",
      fullDescr:
        "Всего в 30 минутах ходьбы от нас есть оборудованный платный пляж с сап-бордами, лодками и катамаранами",
      benefits: ["", "", ""],
      images: [
        "https://thumb.tildacdn.com/tild3737-3861-4463-b662-316337623966/-/format/webp/Paddleboards.jpeg",
      ],
      popUp: true,
      popUpType: "service",
      readMoreLink: "",
      readMoreText: "Подробнее",
      withGallery: false,
    },
    {
      render: true,
      id: "horseriding",
      title: "Конные прогулки",
      header: "",
      price: "",
      shortDescr: "Рядом с нами",
      fullDescr:
        "Всего в 20 минутах на машине от нас есть конная ферма, где можно записаться на конную прогулку как для начинающих, так и для опытных наездников. А еще очень рекомендуем попробовать там фермерские продукты – сыр, хлеб, домашнюю пиццу",
      benefits: ["", "", ""],
      images: [
        "https://thumb.tildacdn.com/tild3433-3561-4364-b363-643465653962/-/format/webp/tim-schmidbauer-7RdZ.jpg",
      ],
      popUp: true,
      popUpType: "service",
      readMoreLink: "",
      readMoreText: "Подробнее",
      withGallery: false,
    },
    {
      render: true,
      id: "zoo",
      title: "Контактный зоопарк",
      header: "",
      price: "",
      shortDescr: "Рядом с нами",
      fullDescr:
        "Всего в 15 минутах ходьбы от нас есть контактный зоопарк как с животными скотного двора, так и с дикими животными",
      benefits: ["", "", ""],
      images: [
        "https://thumb.tildacdn.com/tild3336-3536-4639-a534-643362313163/-/format/webp/pettingzoo.jpeg",
      ],
      popUp: true,
      popUpType: "service",
      readMoreLink: "",
      readMoreText: "Подробнее",
      withGallery: false,
    },
    {
      render: true,
      id: "xbox",
      title: "Xbox",
      header: "",
      price: "",
      shortDescr: "от 1200 р",
      fullDescr:
        "У нас можно арендовать игровую консоль, чтобы поиграть вечером через проектор, или устроить соревнования с друзьями!",
      benefits: ["", "", ""],
      images: [
        "https://thumb.tildacdn.com/tild3630-3036-4563-b134-326462623439/-/format/webp/jose-gil-2pNdTBn4C7U.jpg",
      ],
      popUp: true,
      popUpType: "service",
      readMoreLink: "",
      readMoreText: "Подробнее",
      withGallery: false,
    },
    {
      render: true,
      id: "projector",
      title: "Проектор",
      header: "",
      price: "",
      shortDescr: "от 1000 р",
      fullDescr: "Для просмотра фильмов, или игр на Xbox",
      benefits: ["", "", ""],
      images: [
        "https://thumb.tildacdn.com/tild3337-3031-4236-a638-363235343733/-/format/webp/600A3332.png",
      ],
      popUp: true,
      popUpType: "service",
      readMoreLink: "",
      readMoreText: "Подробнее",
      withGallery: false,
    },
  ],
  servicesListPreview: [
    // Банный чан
    {
      render: true,
      id: "bathvat",
      title: "Банный чан",
      header: "",
      price: "",
      shortDescr: "От 2000р/час",
      fullDescr:
        "Банный чан до 3х-4 человек под навесом, чтобы можно было наслаждаться им в любую погоду. Находится недалеко от нашей первой бани, удобно арендовать баню и чан как вместе так и отдельно. Минимальная бронь от двух часов.",
      benefits: ["", "", ""],
      images: {
        summer: [
          "https://thumb.tildacdn.com/tild3435-6233-4833-b861-366330383062/-/format/webp/KIR_5744_1.jpg",
        ],
        winter: [
          "https://thumb.tildacdn.com/tild3435-6233-4833-b861-366330383062/-/format/webp/KIR_5744_1.jpg",
        ],
      },
      popUp: true,
      popUpType: "service",
      readMoreLink: "",
      readMoreText: "Подробнее",
      withGallery: false,
    },
    {
      render: true,
      id: "furako",
      title: "Баня с фурако и холодной купелью",
      header: "",
      price: "",
      shortDescr: "От 3500р/час",
      fullDescr:
        "Наша новая баня, отличается от первой наличием санузла и душа. В стоимость бани также входит горячая купель фурако и холодная купель. Целый СПА-комплекс. Минимальная бронь от двух часов.",
      benefits: ["", "", ""],
      images: {
        summer: [
          "https://thumb.tildacdn.com/tild6630-3034-4132-a532-653463626536/-/format/webp/305A0845.JPG",
        ],
        winter: [
          "https://thumb.tildacdn.com/tild6630-3034-4132-a532-653463626536/-/format/webp/305A0845.JPG",
        ],
      },
      popUp: true,
      popUpType: "service",
      readMoreLink: "",
      readMoreText: "Подробнее",
      withGallery: false,
    },
    {
      render: true,
      id: "quadbike",
      title: "Квадроцикл",
      header: "",
      price: "",
      shortDescr: "5000р/час",
      fullDescr:
        "Отличный вариант для любителей активного отдыха, идеален для бездорожья. Доступен специальный маршрут на нашей карте мимо прудов по березовому лесу.",
      benefits: ["", "", ""],
      images: {
        summer: [
          "https://thumb.tildacdn.com/tild6230-3462-4431-b436-386138613338/-/format/webp/photo.jpg",
        ],
        winter: [
          "https://thumb.tildacdn.com/tild3734-3931-4465-a133-613035393531/-/format/webp/quadbike.png",
        ],
      },
      popUp: true,
      popUpType: "service",
      readMoreLink: "",
      readMoreText: "Подробнее",
      withGallery: false,
    },
    {
      render: true,
      id: "more",
      title: "Посмотреть все",
      header: "",
      price: "",
      shortDescr: ``,
      fullDescr: "",
      benefits: ["", "", ""],
      images: {
        summer: [
          "https://thumb.tildacdn.com/tild3661-3564-4437-a630-383931616632/-/format/webp/AllServices.png",
        ],
        winter: [
          "https://thumb.tildacdn.com/tild3661-3564-4437-a630-383931616632/-/format/webp/AllServices.png",
        ],
      },
      popUp: false,
      popUpType: "service",
      readMoreLink: "/services",
      readMoreText: "Страница с услугами",
      withGallery: false,
    },
  ],
  offers: [
    {
      title: "-20% + Баня в подарок",
      description: "При заезде в течение 3х дней после брони на 2 ночи и более",
      cover: {
        summer:
          "https://thumb.tildacdn.com/tild3538-3836-4137-a136-646137323339/-/format/webp/1_service.png",
        winter:
          "https://thumb.tildacdn.com/tild6232-3666-4963-a464-363263633338/-/format/webp/DSC08067.jpg",
      },
    },
    {
      title: "-15% именинникам",
      description: "4 дня до и 4 после вашего дня Рождения",
      cover: {
        summer:
          "https://thumb.tildacdn.com/tild6434-6435-4738-b864-653834633537/-/format/webp/noroot.jpg",
        winter:
          "https://thumb.tildacdn.com/tild6434-6435-4738-b864-653834633537/-/format/webp/noroot.jpg",
      },
    },
    {
      title: "-1000р на каждый день",
      description: "При бронировании от трех дней",
      cover: {
        summer:
          "https://thumb.tildacdn.com/tild3365-6633-4561-a437-653036303730/-/format/webp/main_offer.jpg",
        winter:
          "https://thumb.tildacdn.com/tild3365-6633-4561-a437-653036303730/-/format/webp/main_offer.jpg",
      },
    },
    {
      title: "Романтическое путешествие",
      description: "Скидка 5%",
      cover: {
        summer:
          "https://thumb.tildacdn.com/tild6537-3530-4731-a637-303634346265/-/format/webp/rom.png",
        winter:
          "https://thumb.tildacdn.com/tild6166-3466-4336-b438-373333633030-/format/webp/Frame_7.png",
      },
      header: "Домик на 2 ночи",
      highlights: ["2 часа чана", "завтрак", "проектор"],
      info: [
        "Проведите время с любимыми! Глэмпинг Терруар прекрасно подходит для романтического отдыха.",
        "В каждом домике вас ждет панорамное окно рядом с двуспальной кроватью, чтобы любоваться природой в объятиях близкого, а уютный декор и свечи согреют даже холодное сердце.",
        "Для отличного завершения вечера предлагаем посетить баню и посмотреть фильм на проекторе.",
      ],
      price: "от 13 823 р.",
      link: "https://wa.me/79670655655?text=Здравствуйте, пишу с сайта по предложению %27Романтическое путешествие%27",
      percentage: "-5%",
    },
    {
      title: "Активный отдых",
      description: "Скидка 10%",
      cover: {
        summer:
          "https://thumb.tildacdn.com/tild3064-3134-4361-a431-393232613639/-/format/webp/image_1.png",
        winter:
          "https://thumb.tildacdn.com/tild3335-3365-4063-a239-646365313532/-/format/webp/Frame_8.png",
      },
      header: "Домик на 2 ночи",
      highlights: ["завтрак", "2 часа квадроцикла", "джип-тур"],
      info: [
        "Наше местоположение идеально для любителей активного отдыха: вы можете прокатиться на квадроцикле до местного пруда, съездить в контактный зоопарк или изучить живописные окрестности. ",
        "А если вам интересны более длительные поездки – мы организуем для вас джип-тур: путешествие по лесным дорогам с посещением Святого Источника.",
      ],
      price: "от 22 320 р.",
      link: "https://wa.me/79670655655?text=Здравствуйте, пишу с сайта по предложению %27Активный отдых%27",
      percentage: "-10%",
    },
    {
      title: "Отдых с детьми",
      description: "Скидка 5%",
      cover: {
        summer:
          "https://thumb.tildacdn.com/tild6261-6633-4765-b435-656230326233/-/format/webp/kid3.jpg",
        winter:
          "https://thumb.tildacdn.com/tild3734-6461-4230-a562-333430316632/-/format/webp/Frame_9.png",
      },
      header: "Домик на 2 ночи",
      highlights: ["завтрак", "2 часа бани", "1 час квадроцикла", "сутки XBOX"],
      info: [
        "В Терруаре есть чем заняться с детьми: вместе покататься на квадроцикле, отдохнуть в бане и всей семьей приготовить ужин на костре.",
        "А аренда XBOX, проектора и игра с котами нашего глэмпинга развлекут детей, когда родители будут наслаждаться тишиной и спокойствием природы &#x1F60C;",
      ],
      price: "от 15 960 р.",
      link: "https://wa.me/79670655655?text=Здравствуйте, пишу с сайта по предложению %27Отдых с детьми%27",
      percentage: "-5%",
    },
    {
      title: "Отдых с друзьями",
      description: "Скидка 15%",
      cover: {
        summer:
          "https://thumb.tildacdn.com/tild3665-3365-4735-b764-653165653764/-/format/webp/IMG_7498_1.png",
        winter:
          "https://thumb.tildacdn.com/tild3636-3035-4064-a163-323036353261-/format/webp/Frame_10.png",
      },
      header: "2 домика на 2 ночи",
      highlights: [
        "завтрак",
        "2 часа бани",
        "2 часа квадроцикла",
        "сутки XBOX",
      ],
      info: [
        "Соберитесь с друзьями на яркий отдых за городом. Просторная беседка и мангальная зона у каждого домика станут отличным местом для встречи и общения.",
        "А еще вы можете прокатиться на квадроциклах, посетить банный чан, и все вместе поиграть в XBOX.",
      ],
      price: "от 26 100 р.",
      link: "https://wa.me/79670655655?text=Здравствуйте, пишу с сайта по предложению %27Отдых с друзьями%27",
      percentage: "-15%",
    },
  ],
  other: [
    {
      render: true,
      id: "online",
      title: "Терруар онлайн",
      header: "",
      price: "",
      shortDescr:
        "Трансляция с камеры нашей территории, и прогноз погоды на пару дней",
      fullDescr: "",
      benefits: ["", "", ""],
      images: {
        summer: [
          "https://optim.tildacdn.com/tild3530-3138-4862-a135-633935343735/-/format/webp/heroImg.png",
        ],
        winter: [
          "https://static.tildacdn.com/tild3833-3736-4030-b937-353336636234/image.jpg",
        ],
      },
      icon: "https://static.tildacdn.com/tild6139-3036-4063-b835-343664383336/camera.svg",
      popUp: true,
      readMoreLink: "",
      readMoreText: "Подробнее",
      withGallery: false,
    },
    {
      render: true,
      id: "restaurant",
      title: "Ресторан",
      header: "",
      price: "",
      shortDescr:
        "Ресторан в 3х минутах ходьбы, со специальным предложением для наших гостей",
      fullDescr: "",
      benefits: ["", "", ""],
      images: {
        summer: [
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
        winter: [
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
      },
      icon: "https://static.tildacdn.com/tild6234-3863-4337-b562-633532656234/restaurant.svg",
      popUp: true,
      readMoreLink: "",
      readMoreText: "Подробнее",
      withGallery: true,
    },
    {
      render: true,
      id: "team",
      title: "Наша команда",
      header: "",
      price: "",
      shortDescr: "Небольшие рассказы о каждом из нас!",
      fullDescr: "",
      benefits: ["", "", ""],
      images: {
        summer: [
          "https://optim.tildacdn.com/tild6631-6137-4133-b161-336134656332/-/format/webp/main.jpg",
        ],
        winter: [
          "https://optim.tildacdn.com/tild6631-6137-4133-b161-336134656332/-/format/webp/main.jpg",
        ],
      },
      icon: "https://static.tildacdn.com/tild3930-3739-4666-b961-643738633932/team.svg",
      popUp: true,
      readMoreLink: "",
      readMoreText: "Подробнее",
      withGallery: false,
    },
  ],
  team: [
    {
      name: "Маша",
      photo: [
        "https://thumb.tildacdn.com/tild6238-6563-4363-a361-353138383736/-/format/webp/image_5.jpg",
      ],
      position: "Менеджер по бронированию",
      about:
        "Любит людей и давать скидки, за что находится под пристальным вниманием руководителя.",
    },
    {
      name: "Лена",
      photo: [
        "https://thumb.tildacdn.com/tild6463-3632-4739-a238-643861303266/-/format/webp/image_6.jpg",
      ],
      position: "Администратор",
      about:
        "Накормит, заселит, поможет. Перфекционистка: любит, чтобы все работало как швейцарские часы (четко, безотказно и по расписанию).",
    },
    {
      name: "Нурали",
      photo: [
        "https://thumb.tildacdn.com/tild6330-3161-4064-b063-386662646232/-/format/webp/image_12.jpg",
      ],
      position: "Хаус-мен",
      about:
        "Напарит, нагреет, починит. Крепкий хозяйственник. Не успокоится пока у вас не будет идеальная температура в бане.",
    },
    {
      name: "Ксюша",
      photo: [
        "https://thumb.tildacdn.com/tild6137-3132-4636-b863-643633363534/-/format/webp/image_7.jpg",
      ],
      position: "SMM-отдел",
      about:
        "Любит красивые фотки, продающие тексты и выбирать смайлики. Не любит ВК.",
    },
    {
      name: "Илья",
      photo: [
        "https://thumb.tildacdn.com/tild6666-6433-4364-b233-653839346236/-/format/webp/image_8.jpg",
      ],
      position: "Старпом",
      about:
        "Любит экстремальные виды спорта и Авито. Следит за тем, чтобы мы хоть что-то заработали.",
    },
    {
      name: "Ярослав",
      photo: [
        "https://thumb.tildacdn.com/tild3965-6562-4962-b564-346138643566/-/format/webp/image_9.jpg",
      ],
      position: "Начальник",
      about:
        "Он тут все придумал (ну почти). Любит работать менеджером по бронированию, администратором и хаус-меном, но не успевает. Если Маша вдруг отвечает вам «забронировал» - знайте, с вами уже переписывается Ярослав.",
    },
  ],
  faq: {
    "Сколько стоит размещение?": `Цена сильно зависит от многих факторов: сезона, дня недели, домика и т.д. Минимальная стоимость начинается от 5000р в сутки, не считая <a href="/#offers" class="faqbtn"> акций </a>, которые у нас регулярно проходят.
<br>Чтобы узнать стоимость на интересующие вас даты, воспользуйтесь <span class="faqbtn" onclick="multipage.bookingClick()"> модулем бронирования.</span> Чтобы быть в курсе скидок и акций, подписывайтесь на нас в соц.сетях.`,
    "Как до нас добраться?": `Удобнее всего на машине по скоростным трассам М4 или M2 – просто наберите «Терруар» в<a target="_blank" href="https://yandex.ru/maps/?ll=37.859024%2C54.715259&mode=routes&rtext=~54.704664%2C37.859803&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D195423529395&z=10" class="faqbtn"> Я.Картах </a> или Навигаторе.
<br>Общественным транспортом также можно добраться – электричкой с Павелецкого вокзала до станции Кашира и далее на такси (телефон местного таксиста всегда подскажем или работает Я.Такси). У станции Кашира есть сетевой магазин, продукты удобно купить там &#x1F60A;`,
    "Какое питание у нас предусмотрено?": `У нас множество вариантов питания &#x1F60A; Не так давно рядом с нами открылся партнерский ресторан (всего в 3х минутах ходьбы), где действует специальное предложение для наших гостей (спрашивайте у администратора!), а меню уже доступно на нашем сайте <span onclick="document.querySelector('[data-popup=\\'restaurant\\']').click()" class="faqbtn"> по этой кнопке </span>или в меню "Ресторан".
            <br>У нас все также можно приобрести небольшой завтрак или пиццу, если не хочется идти в ресторан. А еще при бронировании можно заказать продукты, которые будут ждать вас в холодильнике в домике (в т.ч. готовую еду, например, суп). Или можно заказать бесплатную доставку из ВкусВилл, если что-то забыли.
            <br>Напоминаем, что для каждого домика предусмотрена мангальная зона и небольшая кухня со всеми принадлежностями – если вдруг захочется приготовить самим. Голодными вы точно не останетесь &#x1F60A;`,
    "Какие удобства есть в домиках?": `Мы постарались учесть все пожелания, чтобы ваш отдых принес максимум комфорта.
<br>Каждый домик оборудован санузлом со всеми принадлежностями: зубные щетки, мыло, шампунь, одноразовые тапочки и конечно полотенца.
<br>В каждом домике своя кухня с плиткой и чайником, а также всей посудой (включая бокалы и рюмки). Есть обеденный стол (как внутри, так и снаружи). А самое главное удобная кровать с панорамным видом на лес &#x1F60A;`,
    "Что необходимо взять с собой?": `Хорошее настроение &#x1F60A; запасы еды, сменную одежду для леса (или вдруг захочется покататься на квадроцикле), купальные принадлежности (вдруг захочется в баню или чан), флешку с любимыми фильмами (если захочется посмотреть их на проекторе).
<br>Можно взять домашние тапочки (мы предоставляем одноразовые, но в своих же уютнее?). Многое есть в домиках, многое мы уже учли, многое есть у Администратора, обращайтесь &#x1F60A;`,
    "Можно ли приехать с животными?": `Мы всегда рады вашим четвероногим друзьям. Доплата составляет 1000р за каждого питомца на весь срок проживания.`,
    "Какие развлечения есть на территории?": `Как нам кажется, самое главное – побыть наедине с собой и природой &#x1F60A; но, конечно, мы стараемся привнести в отдых ярких красок.
<br>Для любителей активности у нас можно <a href="/#services" class="faqbtn"> взять в аренду </a> велосипеды, квадроциклы, лыжи или снегоступы. А можем организовать для вас целый джип-тур по местному бездорожью.
<br>Любителям более спокойного отдыха – рекомендуем баню или подогреваемый чан (а лучше все сразу), аренду проектора для просмотра любимых фильмов или Xbox для любимых игр. А еще мы можем организовать фотоссесию для вас!`,
    "Сколько спальных мест в домиках?": `Наши домики рассчитаны на двоих (за исключением домика Шампань – там максимум 4 человека).
<br>Если вам будет удобно, то за дополнительную плату можем предоставить дополнительно одноместную раскладушку.`,
    "Как забронировать домик?": `Для бронирования воспользуйтесь сайтом,<span onclick="multipage.bookingClick()"> кнопкой забронировать </span>, необходимо будет внести предоплату – 50% (если что-то изменится и вы сообщите нам за 10 дней до заезда, мы вернем стоимость).
<br>Если ничего с этим сайтом не получается, <a href="https://wa.me/79670655655?text=Здравствуйте,%20пишу%20с%20сайта" class="faqbtn" target="_blank"> напишите нам</a>, мы все забронируем и пришлем ссылку на предоплату!`,
    "Как устроить корпоратив / тимбилдинг?": `Напишите нам на почту<a href="mail:Terruar.msk@gmail.com" class="faqbtn"> Terruar.msk@gmail.com </a> поможем реализовать любую идею! У нас есть ведущие, фотографы, можем организовать лазертаг, джип-тур, банную программу с профессиональным банщиком, а также сделать специальную скидку для вас!`,
  },
  houses: [
    // Mendoza
    {
      title: "Mendoza",
      description: `Двух-местный уютный домик — Мендоза, повышенной категории (зеркальный)<br><br>В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.`,
      images: {
        summer: [
          "https://thumb.tildacdn.com/tild6636-3830-4365-b361-393239396233/-/format/webp/KIR_3068.jpg",
          "https://thumb.tildacdn.com/tild3734-3333-4335-b235-623766363464/-/format/webp/KIR_3234.jpg",
          "https://thumb.tildacdn.com/tild6264-6533-4566-b038-333564646639/-/format/webp/KIR_3064.jpg",
          "https://thumb.tildacdn.com/tild3139-3865-4464-a262-626639303062/-/format/webp/Mendoza_11.jpeg",
          "https://thumb.tildacdn.com/tild6633-3266-4833-b062-323538313130/-/format/webp/DSC08079.jpg",
          "https://thumb.tildacdn.com/tild3963-3437-4164-a136-353865343163/-/format/webp/DSC08081.jpg",
          "https://thumb.tildacdn.com/tild6430-3862-4230-b666-363337623437/-/format/webp/Mendoza_26.jpeg",
          "https://thumb.tildacdn.com/tild3866-3830-4665-b936-623536663465/-/format/webp/KIR_3274.jpg",
        ],
        winter: [
          "https://thumb.tildacdn.com/tild3434-3939-4165-b831-616531373261/-/format/webp/DSC08076.jpg",
          "https://thumb.tildacdn.com/tild6338-3131-4939-b866-303330343831/-/format/webp/DSC08073.jpg",
          "https://thumb.tildacdn.com/tild3139-3865-4464-a262-626639303062/-/format/webp/Mendoza_11.jpeg",
          "https://thumb.tildacdn.com/tild3431-3530-4030-b134-316561393735/-/format/webp/DSC08075.jpg",
          "https://thumb.tildacdn.com/tild6666-6236-4632-b231-336333663637/-/format/webp/DSC08080.jpg",
          "https://thumb.tildacdn.com/tild6430-3862-4230-b666-363337623437/-/format/webp/Mendoza_26.jpeg",
          "https://thumb.tildacdn.com/tild6131-6266-4133-a561-326364366237/-/format/webp/DSC08083.jpg",
          "https://thumb.tildacdn.com/tild3963-3437-4164-a136-353865343163/-/format/webp/DSC08081.jpg",
        ],
      },
    },
    // Provence
    {
      title: "Provence",
      description: `Одномодульный уютный домик — Прованс<br><br>В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.`,
      images: {
        summer: [
          "https://thumb.tildacdn.com/tild3961-6162-4533-b464-633961303838/-/format/webp/5ZN_1417-HDR.jpg",
          "https://thumb.tildacdn.com/tild6539-3733-4133-b338-363831333233/-/format/webp/5ZN_1511-HDR.jpg",
          "https://thumb.tildacdn.com/tild3733-3435-4230-a132-333036393337/-/format/webp/5ZN_1411-HDR.jpg",
          "https://thumb.tildacdn.com/tild6133-3762-4538-b638-353632313137/-/format/webp/Provance_8.jpeg",
          "https://thumb.tildacdn.com/tild6630-3732-4862-b233-313065643138/-/format/webp/Provance_9.jpeg",
          "https://thumb.tildacdn.com/tild6366-3633-4335-b437-326239323838/-/format/webp/5ZN_1715.jpg",
          "https://thumb.tildacdn.com/tild3764-3531-4639-a333-333031353131/-/format/webp/5ZN_1788.jpg",
          "https://thumb.tildacdn.com/tild6363-3936-4236-b034-383535366336/-/format/webp/5ZN_1493.jpg",
        ],
        winter: [
          "https://thumb.tildacdn.com/tild3536-3939-4135-b531-383261343631/-/format/webp/DSC08053.jpg",
          "https://thumb.tildacdn.com/tild6237-6330-4237-b638-363134643663/-/format/webp/KIR_5466.jpg",
          "https://thumb.tildacdn.com/tild6162-6139-4137-a530-323734376339/-/format/webp/KIR_5467.jpg",
          "https://thumb.tildacdn.com/tild6165-6534-4762-a435-353333323732/-/format/webp/DSC08024.jpg",
          "https://thumb.tildacdn.com/tild6133-3762-4538-b638-353632313137/-/format/webp/Provance_8.jpeg",
          "https://thumb.tildacdn.com/tild6630-3732-4862-b233-313065643138/-/format/webp/Provance_9.jpeg",
          "https://thumb.tildacdn.com/tild6130-6264-4466-a530-633237306130/-/format/webp/KIR_5468.jpg",
          "https://thumb.tildacdn.com/tild3333-6337-4432-b966-613965626164/-/format/webp/KIR_5460.jpg",
        ],
      },
    },
    // Champagne
    {
      title: "Champagne",
      description: `Четырех-местный уютный домик — Шампань.<br><br>В доме на 4-х человек с большим панорамными окнами есть 2 комнаты: в одной из них находится двуспальная кровать, а в другой раздвижной диван, а также кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.<br><br>Домик оборудован электрическим конвектором, у вас всегда будет тепло!`,
      images: {
        summer: [
          "https://thumb.tildacdn.com/tild3363-3663-4634-b264-613966303437/-/format/webp/5ZN_2532.jpg",
          "https://thumb.tildacdn.com/tild3638-3838-4033-b430-323730366234/-/format/webp/5ZN_2536.jpg",
          "https://thumb.tildacdn.com/tild6135-6462-4332-b337-306532633332/-/format/webp/5ZN_2546.jpg",
          "https://thumb.tildacdn.com/tild3337-6137-4636-b763-376232353831/-/format/webp/5ZN_2570.jpg",
          "https://thumb.tildacdn.com/tild6166-3664-4361-b836-366133353735/-/format/webp/5ZN_2576.jpg",
          "https://thumb.tildacdn.com/tild3361-6266-4634-a239-306134396661/-/format/webp/5ZN_2592.jpg",
          "https://thumb.tildacdn.com/tild3161-3362-4439-a236-316363366362/-/format/webp/5ZN_2613.jpg",
          "https://thumb.tildacdn.com/tild3335-6365-4564-b639-333062663937/-/format/webp/5ZN_2626.jpg",
        ],
        winter: [
          "https://thumb.tildacdn.com/tild3639-6639-4634-b939-323636636462/-/format/webp/KIR_5372.jpg",
          "https://thumb.tildacdn.com/tild3036-3763-4339-a164-336534386630/-/format/webp/KIR_5368.jpg",
          "https://thumb.tildacdn.com/tild3839-6262-4466-b461-343132316563/-/format/webp/5ZN_2613.jpg",
          "https://thumb.tildacdn.com/tild3135-3734-4462-b331-633064306531/-/format/webp/DSC08003.jpg",
          "https://thumb.tildacdn.com/tild6666-6138-4131-b333-343866313037/-/format/webp/5ZN_2532_1.jpg",
          "https://thumb.tildacdn.com/tild6339-6133-4432-b335-396239393063/-/format/webp/5ZN_2536.jpg",
          "https://thumb.tildacdn.com/tild6661-6336-4231-b266-626564666633/-/format/webp/5ZN_2592.jpg",
          "https://thumb.tildacdn.com/tild3863-6533-4139-b866-653263333730/-/format/webp/5ZN_2626.jpg",
        ],
      },
    },
    // Bourgogne
    {
      title: "Bourgogne",
      description: `Одномодульный уютный домик — Бургундия<br><br>В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.`,
      images: {
        summer: [
          "https://thumb.tildacdn.com/tild3734-3737-4664-a534-386234386332/-/format/webp/Bourgogne_8.jpeg",
          "https://thumb.tildacdn.com/tild3166-3130-4965-a432-373332373130/-/format/webp/5ZN_1819.jpg",
          "https://thumb.tildacdn.com/tild6137-6264-4630-a133-623239656131/-/format/webp/5ZN_1573.jpg",
          "https://thumb.tildacdn.com/tild6565-6365-4139-b133-336630323961/-/format/webp/5ZN_1925.jpg",
          "https://thumb.tildacdn.com/tild3866-6263-4563-a435-353463663330/-/format/webp/5ZN_1953.jpg",
          "https://thumb.tildacdn.com/tild3333-3630-4534-a562-383736616333/-/format/webp/5ZN_2095.jpg",
          "https://thumb.tildacdn.com/tild6165-6263-4563-a361-303035613136/-/format/webp/5ZN_2421.jpg",
        ],
        winter: [
          "https://thumb.tildacdn.com/tild3863-3632-4537-a534-613231373433/-/format/webp/20211212_160540.jpg",
          "https://thumb.tildacdn.com/tild3037-6562-4636-a364-366138316134/-/format/webp/KIR_5752.jpg",
          "https://thumb.tildacdn.com/tild6534-3135-4937-b635-633931353835/-/format/webp/KIR_5748.jpg",
          "https://thumb.tildacdn.com/tild3066-3566-4338-b564-663832633966/-/format/webp/5ZN_2454.jpg",
          "https://thumb.tildacdn.com/tild6439-6265-4239-b165-666465323063/-/format/webp/KIR_5746.jpg",
        ],
      },
    },
    // Rheingau
    {
      title: "Rheingau",
      description: `Одномодульный уютный домик — Рейнау<br><br>В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.`,
      images: {
        summer: [
          "https://thumb.tildacdn.com/tild6136-3837-4665-b735-616235316331/-/format/webp/5ZN_1605.jpg",
          "https://thumb.tildacdn.com/tild3863-3566-4731-a434-373631393132/-/format/webp/Rheingau_7.jpeg",
          "https://thumb.tildacdn.com/tild6161-3961-4332-b233-363866306266/-/format/webp/Rheingau_13.jpeg",
          "https://thumb.tildacdn.com/tild3337-6634-4935-a163-326132616432/-/format/webp/5ZN_1606.jpg",
          "https://thumb.tildacdn.com/tild3938-3132-4335-a635-653433656233/-/format/webp/5ZN_2441.jpg",
          "https://thumb.tildacdn.com/tild6639-6664-4433-a439-356338656465/-/format/webp/5ZN_2466.jpg",
          "https://thumb.tildacdn.com/tild6630-6538-4465-b762-313235653334/-/format/webp/Rheingau_11.jpeg",
        ],
        winter: [
          "https://thumb.tildacdn.com/tild3331-6364-4131-b461-353238653931/-/format/webp/KIR_5644.jpg",
          "https://thumb.tildacdn.com/tild6239-3765-4834-b164-636466393030/-/format/webp/5ZN_1520.jpg",
          "https://thumb.tildacdn.com/tild6132-3632-4830-b431-333463616664/-/format/webp/5ZN_1558.jpg",
          "https://thumb.tildacdn.com/tild3061-6132-4765-b932-623633623236/-/format/webp/KIR_5651.jpg",
          "https://thumb.tildacdn.com/tild6138-3334-4963-a135-383633346564/-/format/webp/KIR_5652.jpg",
          "https://thumb.tildacdn.com/tild6334-6362-4639-a535-643965366538/-/format/webp/KIR_5637_1.jpg",
          "https://thumb.tildacdn.com/tild6161-3364-4030-b363-303931616664/-/format/webp/5ZN_2466.jpg",
          "https://thumb.tildacdn.com/tild6335-6231-4134-b437-313832303765/-/format/webp/KIR_5636.jpg",
          "https://thumb.tildacdn.com/tild6138-6164-4165-b436-376464383361/-/format/webp/KIR_5635.jpg",
        ],
      },
    },
    // Toscana
    {
      title: "Toscana",
      description: `Одномодульный уютный домик — Тоскана<br><br>В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.`,
      images: {
        summer: [
          "https://thumb.tildacdn.com/tild3532-3038-4362-a631-653933616333/-/format/webp/5ZN_2021.jpg",
          "https://thumb.tildacdn.com/tild3235-6665-4132-b135-616635376331/-/format/webp/Toskana_10.jpeg",
          "https://thumb.tildacdn.com/tild3838-3133-4439-b439-666230376436/-/format/webp/Toskana_7.jpeg",
          "https://thumb.tildacdn.com/tild6538-3135-4635-a237-333839303363/-/format/webp/Toskana_8.jpeg",
          "https://thumb.tildacdn.com/tild6231-3036-4036-b364-643730343736/-/format/webp/5ZN_1918-HDR.jpg",
          "https://thumb.tildacdn.com/tild6637-3638-4539-a334-313234323162/-/format/webp/5ZN_2483.jpg",
          "https://thumb.tildacdn.com/tild3837-6338-4530-b131-333937336535/-/format/webp/5ZN_2027.jpg",
        ],
        winter: [
          "https://thumb.tildacdn.com/tild3939-3864-4263-a439-643564633439/-/format/webp/DSC08058.jpg",
          "https://thumb.tildacdn.com/tild6265-6366-4566-a439-653930343434/-/format/webp/KIR_5601.jpg",
          "https://thumb.tildacdn.com/tild6634-6161-4564-b237-623565383563/-/format/webp/DSC08015.jpg",
          "https://thumb.tildacdn.com/tild3961-3836-4363-a635-316533303763/-/format/webp/5ZN_2483.jpg",
          "https://thumb.tildacdn.com/tild3838-3262-4364-b632-646265303264/-/format/webp/DSC08020.jpg",
          "https://thumb.tildacdn.com/tild6166-6138-4437-b433-323261366166/-/format/webp/KIR_5587.jpg",
        ],
      },
    },
    // Bordeaux
    {
      title: "Bordeaux",
      description: `Одномодульный уютный домик — Бордо<br><br>В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.`,
      images: {
        summer: [
          "https://thumb.tildacdn.com/tild6263-6436-4338-b365-633562613833/-/format/webp/Bordeaux_8.jpeg",
          "https://thumb.tildacdn.com/tild3761-3038-4561-b531-343631323431/-/format/webp/Bordeaux_5.jpeg",
          "https://thumb.tildacdn.com/tild3062-6437-4539-a431-303937616539/-/format/webp/5ZN_2444.jpg",
          "https://thumb.tildacdn.com/tild6430-6236-4664-a236-346432656638/-/format/5ZN_2078.jpg",
          "https://thumb.tildacdn.com/tild6466-3461-4636-b330-356163653834/-/format/5ZN_2117-HDR.jpg",
          "https://thumb.tildacdn.com/tild6239-3635-4039-b737-363362653934/-/format/5ZN_2128-HDR.jpg",
        ],
        winter: [
          "https://thumb.tildacdn.com/tild3865-6539-4639-b834-623639646531/-/format/IMG_3370.jpeg",
          "https://thumb.tildacdn.com/tild6130-3333-4635-b734-643164666466/-/format/DSC08015.jpg",
          "https://thumb.tildacdn.com/tild6339-3366-4237-a233-656438663238/-/format/DSC08011.jpg",
          "https://thumb.tildacdn.com/tild6234-6432-4061-b432-613761393733/-/format/KIR_5391.jpg",
          "https://thumb.tildacdn.com/tild3534-3632-4039-b837-313362613363/-/format/IMG_3371.jpeg",
          "https://thumb.tildacdn.com/tild3739-6535-4065-a334-613531313434/-/format/KIR_5431.jpg",
          "https://thumb.tildacdn.com/tild3064-6364-4632-a563-343633353936/-/format/KIR_5747.jpg",
        ],
      },
    },
    // Apulia
    {
      title: "Apulia",
      description: `Двух-местный уютный домик — Апулия, повышенной категории<br><br>В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю`,
      images: {
        summer: [
          "https://thumb.tildacdn.com/tild3236-6666-4835-b131-633436663939/-/format/webp/IMG_1647.jpg",
          "https://thumb.tildacdn.com/tild3032-3838-4362-b863-356233313433/-/format/webp/IMG_1660.jpg",
          "https://thumb.tildacdn.com/tild3365-6239-4036-b664-653765363765/-/format/webp/Apulia_2.jpeg",
          "https://thumb.tildacdn.com/tild6162-3664-4836-a132-626338663362/-/format/webp/Apulia_13.jpeg",
          "https://thumb.tildacdn.com/tild3361-3231-4636-a236-613633383932/-/format/webp/Apulia_15.jpeg",
          "https://thumb.tildacdn.com/tild6530-6437-4163-a139-326563313366/-/format/webp/Apulia_19.jpeg",
          "https://thumb.tildacdn.com/tild3136-3132-4031-b664-636431653738/-/format/webp/Apulia_21.jpeg",
          "https://thumb.tildacdn.com/tild3535-6439-4162-b530-353434623762/-/format/webp/IMG_1673.jpg",
          "https://thumb.tildacdn.com/tild3035-6161-4361-b262-646630336538/-/format/webp/KIR_3061.jpg",
          "https://thumb.tildacdn.com/tild3736-3764-4566-b664-666265663061/-/format/webp/IMG_1675.jpg",
          "https://thumb.tildacdn.com/tild3430-6136-4831-a662-613432323963/-/format/webp/KIR_3062.jpg",
        ],
        winter: [
          "https://thumb.tildacdn.com/tild6232-3666-4963-a464-363263633338/-/format/webp/DSC08067.jpg",
          "https://thumb.tildacdn.com/tild6465-3862-4465-b535-373037333533/-/format/webp/DSC08063.jpg",
          "https://thumb.tildacdn.com/tild3835-3136-4433-b362-663334383863/-/format/webp/DSC08039.jpg",
          "https://thumb.tildacdn.com/tild6237-6433-4937-a633-343064323939/-/format/webp/DSC08040.jpg",
          "https://thumb.tildacdn.com/tild3564-6562-4865-a566-333336393266/-/format/webp/DSC08068.jpg",
          "https://thumb.tildacdn.com/tild6364-6236-4961-b836-376539613131/-/format/webp/KIR_3133.jpg",
        ],
      },
    },
    // Laura
    {
      title: "Laura",
      description: `Двух-местный уютный домик — Лаура, повышенной категории<br><br>В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.`,
      images: {
        summer: [
          "https://thumb.tildacdn.com/tild3163-6164-4838-b635-323066326164/-/format/webp/KIR_3063.jpg",
          "https://thumb.tildacdn.com/tild6437-3661-4033-b763-363636313739/-/format/webp/IMG_1666.jpg",
          "https://thumb.tildacdn.com/tild3632-3033-4961-b537-616633393739/-/format/webp/Laura_1.jpeg",
          "https://thumb.tildacdn.com/tild3630-6534-4339-a238-353834626631/-/format/webp/Laura_17.jpeg",
          "https://thumb.tildacdn.com/tild6430-3635-4333-a438-353632326533/-/format/webp/Laura_7.jpeg",
          "https://thumb.tildacdn.com/tild3733-6639-4062-a432-353437316663/-/format/webp/Laura_10.jpeg",
          "https://thumb.tildacdn.com/tild6335-6433-4038-a531-333536363031/-/format/webp/Laura_13.jpeg",
          "https://thumb.tildacdn.com/tild3031-3232-4431-b537-303731386566/-/format/webp/DSC04369.jpg",
          "https://thumb.tildacdn.com/tild3463-6664-4334-a163-383962656332/-/format/webp/DSC08033.jpg",
          "https://thumb.tildacdn.com/tild3764-6539-4062-b061-623632653833/-/format/webp/DSC04378.jpg",
          "https://thumb.tildacdn.com/tild6230-3133-4035-b865-373233306530/-/format/webp/DSC08032.jpg",
        ],
        winter: [
          "https://thumb.tildacdn.com/tild3730-6364-4461-b235-393839613434/-/format/webp/DSC08062.jpg",
          "https://thumb.tildacdn.com/tild3463-6664-4334-a163-383962656332/-/format/webp/DSC08033.jpg",
          "https://thumb.tildacdn.com/tild6230-3133-4035-b865-373233306530/-/format/webp/DSC08032.jpg",
          "https://thumb.tildacdn.com/tild3137-6566-4265-a132-386464613535/-/format/webp/DSC08029.jpg",
          "https://thumb.tildacdn.com/tild3935-3634-4331-b336-313333623539/-/format/webp/DSC08031.jpg",
          "https://thumb.tildacdn.com/tild3163-6336-4334-b537-323534323865/-/format/webp/DSC08028.jpg",
        ],
      },
    },
    // Etna
    {
      title: "Etna",
      description: `Двух-местный уютный домик — Этна, повышенной категории<br><br>В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.`,
      images: {
        summer: [
          "https://thumb.tildacdn.com/tild3836-3937-4732-a536-626634396436/-/format/Etna_33.jpeg",
          "https://thumb.tildacdn.com/tild6132-6330-4630-b061-613733313137/-/format/webp/IMG_1679.jpg",
          "https://thumb.tildacdn.com/tild3034-3139-4130-a230-396539373239/-/format/webp/IMG_1911.jpg",
          "https://thumb.tildacdn.com/tild3436-3262-4361-a131-363833653831/-/format/Etna_31.jpeg",
          "https://thumb.tildacdn.com/tild3964-3736-4838-b835-303965353034/-/format/Etna_34.jpeg",
          "https://thumb.tildacdn.com/tild3137-3735-4266-b131-646637326335/-/format/webp/KIR_3098.jpg",
          "https://thumb.tildacdn.com/tild3062-6432-4133-a562-383264363065/-/format/webp/KIR_3101.jpg",
          "https://thumb.tildacdn.com/tild3133-6138-4436-a335-613266343636/-/format/webp/KIR_3102.jpg",
        ],
        winter: [
          "https://thumb.tildacdn.com/tild3561-3366-4136-b430-376634626535/-/format/webp/DSC08065.jpg",
          "https://thumb.tildacdn.com/tild3832-6465-4334-a162-333431326135/-/format/webp/DSC08035.jpg",
          "https://thumb.tildacdn.com/tild3932-3036-4139-b235-333637656537/-/format/webp/DSC08037.jpg",
          "https://thumb.tildacdn.com/tild6565-6465-4330-b134-616637343433/-/format/webp/KIR_3100.jpg",
          "https://thumb.tildacdn.com/tild3537-3737-4564-a239-326537333662/-/format/webp/DSC08064.jpg",
          "https://thumb.tildacdn.com/tild3066-3334-4537-b331-316336653164/-/format/webp/DSC08066.jpg",
        ],
      },
    },
  ],
  glamping: [
    {
      title: "Malbec",
      description: [
        "Двух-местная уютная палатка — Мальбек",
        "<br>20 кв.м - от 4 000 руб.",
      ],
      images: {
        summer: [
          "https://thumb.tildacdn.com/tild3166-3636-4836-b966-323164343030/-/format/webp/image_11.png",
          "https://thumb.tildacdn.com/tild3736-3530-4962-a637-353266633861/-/format/webp/DSC_9025.jpg",
          "https://thumb.tildacdn.com/tild6435-6436-4365-b430-376161343030/-/format/webp/DSC_9030.jpg",
          "https://thumb.tildacdn.com/tild3037-3164-4663-b138-343863323338/-/format/webp/DSC_9046.jpg",
          "https://thumb.tildacdn.com/tild3764-3761-4665-a131-633433653734/-/format/webp/DSC_9005.jpg",
          "https://thumb.tildacdn.com/tild3531-3961-4035-b461-316530323761/-/format/webp/DSC_9061.jpg",
        ],
        winter: [
          "https://thumb.tildacdn.com/tild3166-3636-4836-b966-323164343030/-/format/webp/image_11.png",
          "https://thumb.tildacdn.com/tild3736-3530-4962-a637-353266633861/-/format/webp/DSC_9025.jpg",
          "https://thumb.tildacdn.com/tild6435-6436-4365-b430-376161343030/-/format/webp/DSC_9030.jpg",
          "https://thumb.tildacdn.com/tild3037-3164-4663-b138-343863323338/-/format/webp/DSC_9046.jpg",
          "https://thumb.tildacdn.com/tild3764-3761-4665-a131-633433653734/-/format/webp/DSC_9005.jpg",
          "https://thumb.tildacdn.com/tild3531-3961-4035-b461-316530323761/-/format/webp/DSC_9061.jpg",
        ],
      },
    },
    {
      title: "Riesling",
      description: [
        "Двух-местная уютная палатка — Рислинг",
        "<br>20 кв.м - от 4 000 руб.",
      ],
      images: {
        summer: [
          "https://thumb.tildacdn.com/tild6565-3466-4531-b236-653333623036/-/format/webp/image_12.png",
          "https://thumb.tildacdn.com/tild3037-3164-4663-b138-343863323338/-/format/webp/DSC_9046.jpg",
          "https://thumb.tildacdn.com/tild3764-3761-4665-a131-633433653734/-/format/webp/DSC_9005.jpg",
          "https://thumb.tildacdn.com/tild3736-3530-4962-a637-353266633861/-/format/webp/DSC_9025.jpg",
          "https://thumb.tildacdn.com/tild6435-6436-4365-b430-376161343030/-/format/webp/DSC_9030.jpg",
          "https://thumb.tildacdn.com/tild3531-3961-4035-b461-316530323761/-/format/webp/DSC_9061.jpg",
        ],
        winter: [
          "https://thumb.tildacdn.com/tild6565-3466-4531-b236-653333623036/-/format/webp/image_12.png",
          "https://thumb.tildacdn.com/tild3037-3164-4663-b138-343863323338/-/format/webp/DSC_9046.jpg",
          "https://thumb.tildacdn.com/tild3764-3761-4665-a131-633433653734/-/format/webp/DSC_9005.jpg",
          "https://thumb.tildacdn.com/tild3736-3530-4962-a637-353266633861/-/format/webp/DSC_9025.jpg",
          "https://thumb.tildacdn.com/tild6435-6436-4365-b430-376161343030/-/format/webp/DSC_9030.jpg",
          "https://thumb.tildacdn.com/tild3531-3961-4035-b461-316530323761/-/format/webp/DSC_9061.jpg",
        ],
      },
    },
    {
      title: "Merlot",
      description: [
        "Двух-местная уютная палатка — Мерло",
        "<br>20 кв.м - от 4 000 руб.",
      ],
      images: {
        summer: [
          "https://thumb.tildacdn.com/tild3031-6561-4762-b561-383939303839/-/format/webp/image_13.png",
          "https://thumb.tildacdn.com/tild3736-3530-4962-a637-353266633861/-/format/webp/DSC_9025.jpg",
          "https://thumb.tildacdn.com/tild3037-3164-4663-b138-343863323338/-/format/webp/DSC_9046.jpg",
          "https://thumb.tildacdn.com/tild3764-3761-4665-a131-633433653734/-/format/webp/DSC_9005.jpg",
          "https://thumb.tildacdn.com/tild3531-3961-4035-b461-316530323761/-/format/webp/DSC_9061.jpg",
          "https://thumb.tildacdn.com/tild6435-6436-4365-b430-376161343030/-/format/webp/DSC_9030.jpg",
        ],
        winter: [
          "https://thumb.tildacdn.com/tild3031-6561-4762-b561-383939303839/-/format/webp/image_13.png",
          "https://thumb.tildacdn.com/tild3736-3530-4962-a637-353266633861/-/format/webp/DSC_9025.jpg",
          "https://thumb.tildacdn.com/tild3037-3164-4663-b138-343863323338/-/format/webp/DSC_9046.jpg",
          "https://thumb.tildacdn.com/tild3764-3761-4665-a131-633433653734/-/format/webp/DSC_9005.jpg",
          "https://thumb.tildacdn.com/tild3531-3961-4035-b461-316530323761/-/format/webp/DSC_9061.jpg",
          "https://thumb.tildacdn.com/tild6435-6436-4365-b430-376161343030/-/format/webp/DSC_9030.jpg",
        ],
      },
    },
  ],
  loyalty: [
    {
      render: true,
      id: "loyaltyProgram",
      title: "Программа лояльности",
      shortDescr: "",
      images: {
        summer: [
          "https://thumb.tildacdn.com/tild6366-3066-4538-b735-656366366266/-/format/webp/friends5.JPG",
        ],
        winter: [
          "https://thumb.tildacdn.com/tild3466-3635-4464-b365-383731633031/-/format/webp/loyal.png",
        ],
      },
      readMoreText: "Посмотреть предложение",
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
      },
    },
    {
      render: true,
      id: "certificates",
      title: "Подарочные сертификаты",
      shortDescr: "",
      images: {
        summer: [
          "https://thumb.tildacdn.com/tild6566-3434-4432-b162-646637393438/-/format/webp/cert5500.png",
        ],
        winter: [
          "https://thumb.tildacdn.com/tild6566-3434-4432-b162-646637393438/-/format/webp/cert5500.png",
        ],
      },
      readMoreText: "Варианты",
      cartIcon:
        '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none"><path d="M.912.535a.8.8 0 0 1 1.02-.49l.322.114c.657.23 1.216.427 1.655.643.47.23.873.514 1.177.958.3.44.425.923.482 1.453q.038.355.046.787h11.347c1.798 0 3.416 0 3.889.616.474.615.288 1.543-.082 3.398l-.533 2.586c-.336 1.63-.504 2.446-1.093 2.926-.588.48-1.42.48-3.086.48H10.4c-2.975 0-4.462 0-5.386-.975s-.992-2.01-.992-5.148V5.108c0-.79 0-1.318-.045-1.723-.042-.388-.116-.581-.212-.722-.094-.138-.237-.266-.56-.425-.345-.169-.813-.335-1.525-.585l-.278-.098a.8.8 0 0 1-.49-1.02M6.689 16.8a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2m9.6 0a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2" fill="#fff"/></svg>',
      innards: {
        "5000 рублей": {
          paymentLink:
            "https://c.cloudpayments.ru/payments/353af10fdb844fe5985a9dd15882418e",
          qr: '<svg xmlns="http://www.w3.org/2000/svg" width="100" viewBox="0 0 81 81" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M.015 15.308h15.306V0H.015zM19.683 2.222l2.222.097V0h-2.32zm10.945.082h2.14v1.96l-2.058.098-.097 2.222h2.154v2.14h-2.14v8.724h-2.139V6.584h-2.14v-2.14h2.14v-2.32l-2.222.098-.098 2.058h-4.263v4.609h2.14v1.975h-2.14v11.028H19.78l-.097-2.222-4.362-.092v-2.134l-10.945.086-.097 2.058h-1.96v-2.14H.015v2.304h2.14v4.28H.015v2.305h2.14v2.14H.015v4.444h4.28v6.42H2.328l-.092-4.363H.097l-.044 3.334-.045 3.333h2.147v2.14h2.124l.097 2.222 2.222.097v1.945l-2.222.098-.097 2.047-4.182.092L0 52.51h4.294v2.14H.015v8.888h2.304v-6.584h1.966l.091 4.362 4.362.092v2.13h8.723v2.14h4.444v-2.14h4.444v-4.444h2.14v2.304h2.139v2.14h2.304v-2.304h-2.14v-2.14h2.14v-2.14h4.279v2.14h-2.32l.098 2.222 2.222.097v1.945l-2.222.098-.097 2.222h-8.708v2.14h-4.28V74.4h-2.139v-6.584h-2.31l.088 8.806 4.362.092V74.4h2.304v-4.28h4.28v1.96l-2.223.098-.097 2.222h2.32v2.14h-4.445v2.14h-6.583v2.304h6.748v-2.14h4.28v2.14h17.61v-2.14h1.975v2.14h13.33v-2.14h2.14V74.4h4.28v-2.14h2.14v2.14h2.139v2.14h-2.14v4.444h2.305v-2.14h2.14v2.14h6.582V74.4h-2.14v-2.14h2.14v-6.584h-2.14v-2.305h-2.139v-1.96l2.058-.097.097-2.222h2.124v-2.305h-4.269l-.092-4.197-2.222-.097v2.154h-2.14v-4.28h2.14v-4.264l2.222-.097.097-2.222h-2.319v-2.14h4.28v2.14h2.303V39.34h-2.14V37.2h2.14v-2.304h-6.583V37.2h-2.14v-4.28h2.14v-2.304h-4.28v-2.14h10.864v-6.584h-2.125l-.097-2.222-2.042-.098-.098-2.042-10.945-.087v2.145h-4.28v-1.975h2.14v-4.445h-2.14v-2.14h2.147l-.089-6.666-2.057-.098v-1.96h2.14V0H61.24v2.14H59.1v4.444h-4.278V0h-2.305v6.584h-4.264l-.097-2.222-4.362-.092V2.304h4.444V0h-4.444v2.14h-2.14V0h-2.303v2.304h2.14v1.96l-2.058.098-.097 2.222H37.21V4.28h-2.14V2.304h2.14V0h-2.304v2.14h-1.975V0h-2.304zm35.056 13.004h15.307V0H65.684zM2.32 13.173l10.78-.087.087-10.782H2.32zm65.587-.087 10.78.087V2.304H67.82zM4.369 4.487c-.045.118-.062 1.62-.037 3.337l.044 3.122 6.673.09-.09-6.674-3.253-.045c-2.554-.035-3.273.002-3.337.17m13.209-.105c-.065.065-.117 3.068-.117 6.674v6.557h2.308l-.086-13.251-.994-.048c-.547-.027-1.047.004-1.111.068m52.498.004c-.062.062-.113 1.584-.113 3.381v3.268l3.333-.044 3.333-.045V4.362l-3.22-.045c-1.77-.024-3.27.007-3.333.069M32.932 6.584h1.975v-2.14h-1.975zm-8.723 2.14h1.975v-2.14h-1.975zm15.224.082-4.362.092v1.966h2.14v4.444h-2.14v4.28h2.14v2.304h-4.28v8.724h2.14v2.14h2.14v-4.265l-2.222-.097v-4.28l2.222-.097v-2.125h4.444v2.305H37.21v1.975h4.444v2.304h6.583v4.273l6.501.09.098 2.042 2.042.097.091 4.527h-2.148v4.28h1.96l.097-2.223 2.222-.097V39.34h4.279V37.2H59.1v-6.404l-2.221-.097-.097-2.223h-1.945l-.098 2.223h-4.443l-.092-4.362h-4.27v-2.14h-2.14v-2.305h2.14v-2.14h-6.583v-2.304h2.14v-2.14h-2.14v-4.444h2.14v-4.28h-1.96zm6.583 2.14-4.361.092v4.27h2.14v-2.14h2.304v4.28h4.114v-2.14h-2.14V6.584h-1.965zm6.501-.097 2.222.097.092 4.347-2.231.097-.098 2.043 2.237.097.092 4.362h-4.453v2.14h4.444v2.14h1.975v-2.14H59.1v-2.14h2.14v-2.14H59.1v2.14h-2.32l.098-2.222 2.222-.097v-4.265h2.14v-2.14H59.1v2.14h-2.314l.092-4.362 4.361-.092V8.896l-6.5-.09-.098-2.222h-2.125zm-28.308 4.46h1.975v-4.28h-1.975zm26.169 0h2.14v-4.28h-2.14zm-17.446 0h1.975v-2.14h-1.975zM4.459 21.891h2.14v2.305h-2.14v1.975h2.14v4.444h4.443v2.14h2.14v-2.14h2.14v-2.14h-2.14v-2.14H8.738v-4.444h-2.14v-2.14h-2.14zm8.723 0h-2.14v2.14h2.14zh2.14v2.305h-2.14v1.975h8.723v-1.966l-4.362-.092-.097-2.222H15.32v-2.14h-2.14zm35.056 0h1.975v-2.14h-1.975zm17.446 0h-2.14v2.14h2.14zh4.444v4.28h8.558v-1.975h-2.14v-4.445H65.685zm-43.78 2.14h2.305v4.444h2.154l-.097 2.223h-2.14l-.097-2.223h-2.124v6.42h4.263l.098-2.058 4.362-.091V30.78h-2.14v-2.305h2.14v-2.14h-4.444v-2.304h4.444v-2.14h-8.723zm50.281.082 2.222.098v-2.32h-2.32zm-10.862 2.14-2.222.098v4.264h2.14v-2.14h2.303v2.14h4.28v-2.14h-2.14v-2.14H63.38v-2.14h-1.96zm4.361-1.07v.988h2.14v-1.975h-2.14zm2.222 3.21 2.057.098v-2.155h-2.155zM2.319 30.616h1.975v-2.14H2.32zm74.228 2.305h4.444v-2.305h-4.444zm-37.032-.165h2.14v2.305H37.21v2.14h-2.14v2.14h2.14V37.2h4.444v2.14h2.14V37.2h2.139v-2.14h-2.14v-4.28h-4.279zM6.598 39.34h2.13l.092-4.362 2.057-.098v-1.96H6.599zm6.584-4.444h2.14V37.2h-2.14v-2.14h-2.14v2.14h2.14v2.14h2.14V37.2h2.139v-4.28h-4.28zm17.61 0h4.115v-1.975h-4.115zM19.765 37.2H17.64l-.097 2.223-2.222.097v2.125H6.598v4.28h4.28v-2.14h6.747v2.14h1.969l.089-6.502 4.526-.092v2.15h4.28v2.304h2.303v2.14h1.975V37.2h-2.14v-2.14h-2.139v2.14h-6.583v-2.14h-2.14zm28.473 0h2.14v8.724h2.14v2.125l2.221.098.098 2.042 2.042.097.097 2.223h-2.154v2.14H59.1v2.14h2.14v-2.14h4.46l-.098-2.058-4.362-.092v-2.13H59.1v-2.305h2.14v-1.968l-6.5-.09-.098-2.221h-2.125V35.06h-4.279zm15.307 0h2.14v4.445h-4.28v2.14h6.419v2.304h-4.28v4.115h4.28v-2.14h4.279v-1.96l-2.057-.097-.098-2.222h-2.124V41.48h2.14v-1.975h-2.14V37.2h2.14v-2.14h-2.14v2.14h-2.14v-2.14h-2.14zm-17.529 2.223-2.222.097v1.96h4.28V37.2h-1.96zm24.112-.083h1.975V37.2h-1.975zm4.28 0h2.139V37.2h-2.14zm-69.95 2.14h2.14v-1.975h-2.14zm35.057.165h-4.444v4.28h2.14v-2.14h4.28v-4.28h-1.976zm30.613 2.14h1.975v-2.14h-1.975zm-48.223 4.264 2.222.098.097 2.222h-2.32v2.14h8.724v-2.14h-2.14v-2.125l-2.222-.097-.097-2.043-2.042-.097-.098-2.222h-2.124zm21.89-2.14 2.221.098.09 6.502h4.272v2.14h2.14v-2.14h2.139v-2.14h-2.14v-2.14h-2.14v2.14h-2.303v-6.584h-4.28zm28.472.015h2.14v-2.14h-2.14zm-59.085 1.153v.987h2.14V46.09h-2.14zm19.75.987h1.975V46.09h-1.975zm4.279 2.305h-2.14v4.28h2.14v2.14h4.444v2.304H37.21v2.14h4.444v2.14h6.419v-1.96l-2.058-.098-.097-2.222h-2.125v-2.305h2.14v-1.975H39.35v-2.304h4.443v-4.28h-2.14v2.14H39.35v-2.305h2.14V46.09h-4.28zm39.336 0h2.13l.092 4.362 2.221.097v-6.764h-4.443zm-58.921 0h-4.444v2.14h4.443v2.14h1.976v-6.42h-1.976zm-13.167 2.14h2.14v2.304h-2.14v1.975h2.14v2.305h2.304v2.14h1.974v-2.14h2.305v2.14h2.14v-2.14h2.139v-2.14h-2.14v2.14h-2.14v-2.305h2.14v-1.975h-2.124l-.098-2.222-2.222-.097v-2.125H8.904v2.14H6.598v-2.14h-2.14zm63.474.11c-.06.06-.11.541-.11 1.07v.96h2.14v-2.14h-.96c-.528 0-1.01.049-1.07.11m-43.724 4.17h1.975v-1.976h-1.975zm4.28 2.304h2.139v-4.28h-2.14zm19.75 2.14h4.278v-2.14h2.305v2.14h1.975V56.96l-6.501-.09-.098-2.057h-1.96zm17.445-4.445h2.14v-1.975h-2.14zm4.444.165h-2.304v2.14h-2.14v-2.14h-2.14v2.14h2.14v2.14h2.14v-2.14h2.304v2.14h1.975v-6.42h-1.975zm-48.223 2.14h-4.28v2.14h4.28zh2.14v-2.14h-2.14zm52.502 2.14h2.14v-4.28h-2.14zM52.6 65.595l2.057.097v-4.295h-2.15zm19.667-3.21v.987h2.14v-1.975h-2.14zm-32.752 5.432h2.14v2.14h2.14v2.14h2.139v-4.28h-2.14v-2.14H41.49v-2.14h-1.975zm8.723 0h4.28v-2.125l-2.223-.097-.097-2.058h-1.96zm8.723-2.14h2.14v2.14h-2.14v2.14h4.28v-4.28H59.1v-2.14h-2.14zm6.584 4.28h6.418v-6.42h-6.418zm10.862-4.28h-2.14v2.14h2.14v2.14h2.14v-2.14h-2.14zh2.14v-2.14h-2.14zM.015 80.985h15.306V65.677H.015zm65.67-13.168h2.139v-2.14h-2.14zm11.026 0h1.975v-2.14h-1.975zM2.32 78.68h10.867L13.1 67.899l-10.78-.087zm26.17-8.724h2.139v-2.14h-2.14zm4.443 0h4.279v-2.14h-4.28zm19.695-2.03c-.06.06-.11.541-.11 1.07v.96h2.14v-2.14h-.96c-.528 0-1.01.05-1.07.11m-48.26 2.24c-.044.116-.06 1.616-.035 3.334l.044 3.122h6.584l.044-3.333.045-3.333h-3.3c-2.531 0-3.32.049-3.381.21m26.425 1.93h1.975V70.12h-1.975zm6.419.164h-2.14v2.14h2.14v2.304h-2.14v1.976h6.42V74.4h-2.155l.097-2.222 2.057-.098v-1.96h-4.279zm11.027-.165h1.975V70.12H48.24zm6.501 4.527-2.222.097v1.96h4.28V74.4H59.1v4.28h2.14V74.4H59.1v-2.139h-2.304v-2.14h-1.968zM72.27 74.4h2.14v4.28h4.278V74.4h-2.14v-2.14h-2.139v-2.14h-2.14zm4.443-2.305h1.975V70.12h-1.975zM28.49 74.4h2.14v-2.14h-2.14zm13.167 0h2.14v2.14h2.139V74.4h-2.14v-2.14h-2.14zm8.723 0h-2.14v2.14h4.28v-4.28h-2.14zm11.027 0h1.975v-2.14h-1.975zM28.49 78.68h2.14v-1.976h-2.14zm37.196 2.304h2.14V78.68h-2.14z" fill="#EEF0F2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M.015 15.308h15.306V0H.015zM19.765 2.14h2.14V0h-2.14zm10.863 0h2.14V0h-2.14zm4.443 0h2.14V0h-2.14zM39.467.103c-.064.064-.116.549-.116 1.077v.96h2.32l-.1-2.058-.994-.048c-.547-.026-1.047.005-1.11.069m4.327 2.037h4.28V0h-4.28zm8.723 4.444h-4.279v8.724h2.155l-.098 2.222h-4.279l-.091-4.362h-2.13v2.14h-2.14v-4.28h4.279V6.584h2.14v-2.14h-4.28v-2.14h-2.14v2.14h-2.303v2.14h-2.14v-2.14h-2.14v-2.14h-2.14v2.14h2.14v2.14h-2.14V8.71l-2.221.097-.088 8.807h-2.134V6.584h-2.14v-2.14h2.14v-2.14h-2.14v2.14h-4.443v4.28h2.14v-2.14h2.303V8.71l-2.221.097v2.14l2.222.097v4.265h-2.305v-4.28h-2.14v10.864h-2.139v-2.14h-4.444v-2.14H4.46v2.14H2.32v4.265l-2.222.097v2.14l2.222.098v2.124h2.14v2.14H2.155v-2.14H.015v4.27l4.361.092.09 6.502h2.132v2.305H4.474l-.098-2.222-2.221-.098v-4.264H.008l.045 3.25.044 3.251 2.222.098v2.125h2.14v2.14h2.14v2.304h-2.14v2.14H.015v2.14h4.444v2.14h2.14v-2.14h2.139v-2.14h2.304v2.14h2.14v2.14h2.14v2.304h-2.14v2.14h-2.14v2.14H8.738v-2.14h-2.14v-2.14H4.474l-.098-2.222H.097l-.087 8.64h2.145v-6.42h2.304v4.28h4.279v2.135l8.805.088.098 2.222h4.264v-2.305h4.444v-4.28h2.14v2.14h2.139v2.14h2.14v-2.14h-2.14v-2.14h2.14v-2.14h4.443v2.14h-2.14v2.14h2.14v2.305h-2.14v2.14H26.35v2.14h-4.444V74.4h-2.14v-6.584h-2.14v8.724h4.28V74.4h2.13l.092-4.362 4.361-.092v2.314h-2.14v2.14h2.14v2.13l-4.361.092-.098 2.058h4.46v-2.14h2.139v2.304h-2.14v2.14H45.92l.097-2.222h2.14l.097 2.222H61.24v-2.14H59.1V74.4h2.14v4.28h2.14V74.4h-2.14v-2.14h2.304v2.14h4.28v-2.14h2.14v2.14h2.303v2.125l-2.221.097v4.28l2.221.097v-2.32h2.14V74.4h-2.14v-4.443h2.14v2.304h2.14v2.14h2.14v-2.14h-2.14v-2.32l2.222.098.097 2.222h2.124v-6.584h-2.14v2.14h-2.303v-2.14h2.14v-2.14h-2.14v2.14h-2.14v-2.14h-2.14v-2.304h2.14v2.14h2.14v-2.14h2.14v-2.14h2.303v-2.14h-4.443v-4.444h-2.14v2.14h-2.14v-4.28h2.14v-4.445h2.14v-2.14h-2.14v-2.14h4.444v2.14H81l-.092-4.361-2.222-.098V37.2h2.304v-2.14h-6.583v2.14h-2.14v-4.444h2.14v-2.14h-4.444v-2.14h11.028v-6.584h-2.305v-2.14h-2.14v-2.14H65.685v2.14h-4.459l.098-2.222 2.057-.098v-4.264h-2.14v-2.14h-4.279v4.28h2.14v4.444h-2.14v2.14h2.14v2.14h-2.125l-.097 2.222h-2.14l-.097-2.222h-4.264v-2.14h4.279v-4.28h-2.14v-2.304h2.14v-4.28h-2.14zh2.14v2.14h6.568l.098 2.222 2.057.098v-6.6h-2.14v-2.14H59.1v4.28h-4.443V0h-2.14zM61.24 2.14h2.14V0h-2.14zm4.444 13.168h15.307V0H65.684zM2.264 2.25c-.06.06-.11 2.541-.11 5.514v5.404h11.028V2.14H7.778c-2.972 0-5.453.05-5.514.11m65.56 10.918h11.031L78.77 2.222l-10.945-.087zM4.459 11.035l6.5-.089.09-6.502h-6.59zm13.167 6.413h2.14V4.444h-2.14zM30.627 6.584h2.14v-2.14h-2.14zm39.418 4.362 3.25.045 3.25.044v-6.59h-6.59zM39.35 8.724h-4.28v2.304h2.14v4.28h-2.14v-2.14h-2.304v2.14h2.304v4.444h2.14v2.14h-4.444v8.71l2.222.097.098 2.057h-4.46v-2.14h-2.139v-2.14h2.14v-2.14h-4.28v-2.304h4.28v-2.14h-8.723v2.14h-4.28v-2.14H15.32v-2.14h-2.14v2.14h-2.139v2.14h2.14v2.314l-4.362-.092-.092-4.362h-2.13v-2.14h-2.14v2.14h2.14v2.14h-2.14v2.305h2.14v4.27l4.362.092.098 2.057h-4.46v6.584h2.14v-4.28h2.304v2.14h2.14v2.14h2.14v2.305H6.597v4.28h4.444v-2.14h6.419v2.14h2.304V39.34h4.264l.098 2.222 4.361.092v2.13h2.14v2.14h2.124l.097 2.223h2.14l.097-2.223h2.125v4.445h-2.14v4.28h2.14v2.304h4.444v2.14H37.21v2.13l4.361.092.098 2.042-2.237.098-.092 4.346 2.231.098.098 2.058H37.21v-2.14h-4.444v2.14h-2.14v-2.14h-2.139v2.14h2.14v2.304h-2.14v2.14h2.14v-2.125l2.221-.097.098-2.222h4.264v2.304h-2.14v2.14h2.14v2.14h-2.14v2.311l6.502-.09.091-4.361h2.13v2.14h2.14V74.4h-2.14v-2.14h2.14v-4.444h-2.14v-2.14h-2.14v-2.14h6.42v4.28h4.443v2.14h2.14v6.584h-2.14v-4.28h-2.14v-2.32l-2.221.098v2.14l2.222.097V74.4h-2.304v2.14h4.443v2.314l4.362-.092.092-4.362h2.13v-2.14h-2.14v-2.304h4.28v-4.28H59.1v-2.305h-2.14v2.305h2.14v2.14h-2.14v2.14h-2.304v-2.14h-2.14v-2.14h2.13l.092-4.362 2.222-.097v-4.265h-6.583v-2.305h2.14v-2.14h2.139v2.14H59.1v2.305h2.124l.098-2.222 4.361-.092v2.314H63.38v2.14h2.304v2.14h2.14v-2.14h2.14v2.14h2.304v-6.585h-2.305v-2.14h-2.14v2.14h-2.139v-2.14H61.24v-2.14H59.1v-2.14h2.14v-2.304h-6.583v-2.14h2.304v-2.14h2.14V39.34h4.444V37.2h2.149l-.092 4.362-4.362.092v2.13h6.584v2.13l-4.362.093v4.28l4.362.091v-2.14l4.361-.091.097-2.223h2.125v-2.14h-2.14V41.66l-2.221-.098v-2.14l2.221-.097V37.2h-2.304v-2.14h-2.14v2.14h-2.139v-2.14H63.38v2.14H59.1v-6.584h2.14v-2.14h2.14v2.14h4.444v-2.14h2.14v-2.134l8.805-.088v-2.14l-2.222-.097v-4.265H65.684v2.14H63.38v2.14h-2.14v2.305H59.1v4.28h-2.139v-2.14h-2.304v2.14h-4.28v-4.27l-4.36-.093-.098-2.222h-2.125v-2.14h2.14V19.76l-6.501-.089-.098-2.042 2.237-.098.098-2.222h-2.32v-4.28h2.305V6.584H39.35zm11.027 6.584h2.14v-4.28h-2.14zm8.723 0h2.14v-2.14H59.1zM.015 19.752h2.14v-2.14H.015zm48.059 2.14h2.304v-2.14h-2.304zm11.027 0h2.14v-2.14H59.1zm-45.92 2.14h2.14v-2.14h-2.14zm24.03 0h-2.14v4.444h2.14v4.445h-2.14v2.14h-4.443v-2.14h-4.28v2.14h-4.443v-6.585h2.14v2.14h2.303v-2.14h-2.304v-4.444h-2.14v2.305h-8.722v2.14h2.14v2.14h-2.14v2.13l4.361.091.092 4.362h2.13v-2.14h2.14v2.14h6.583v-2.14h2.14v2.14h2.304v8.724h2.14v-4.28h4.264l.097-2.221 2.222-.098v4.46H37.21v2.14h4.444v2.14h2.14v4.434l-4.362.092-.098 2.057h6.599v2.305h-2.14v2.14h2.14v2.14h2.133l.089-6.502 2.222-.098V52.51h-4.444v-6.585h-2.14v-2.14h4.444v6.6l2.057-.098.098-2.222h2.124v-2.14h-2.14V37.2h-2.13l-.091 4.362-4.362.092V39.34h2.14V37.2h2.14v-2.14h4.443v8.725h2.13l.092-4.362 2.222-.098v-4.264h-2.304v-2.133l-6.501-.09-.092-4.362h-6.41v-2.14H37.21zh4.444v-2.14H37.21zm28.473 0h-2.14v2.305h2.14v2.14h2.14v-2.14h2.14v-4.445h-4.28zm6.584 0h2.14v-2.14h-2.14zm-6.584 1.152v1.153h2.14v-2.305h-2.14zm-26.251 7.654 2.237.098-.098 2.042-4.361.092v2.13h-2.14v2.14h2.14v-2.15l4.361.093.098 2.057h2.124V37.2h2.14v-2.14h-2.14v-4.444h-4.458zm37.223-2.112c-.06.06-.11.542-.11 1.07v.96h4.444v-2.14h-2.112c-1.162 0-2.161.05-2.222.11m-65.614 4.335h2.14v2.14h2.14v2.14h2.139V37.2h-2.14v-2.14h-2.14v-2.14h-2.139zm56.782 4.28h2.14V37.2h-2.14zm6.583 0h2.14V37.2h-2.14zm-6.583 4.444h2.14v2.14h2.303v-2.14h-2.304v-2.14h-2.14zm-45.92 4.444h2.14v2.14h-2.14v2.14h8.724v-2.14h-2.14v-2.305h-2.14v-2.14h-2.304v-2.14h-2.14zm-8.722-1.152v1.152h2.14v-2.305h-2.14zm4.396 1.09c-.065.064-.117.586-.117 1.16v1.042h-4.28v2.14h4.28v2.14h2.311l-.09-6.502-.993-.048c-.547-.027-1.047.004-1.111.068m21.855 2.12h2.14l.097-2.058h-2.335zm13.084.082h2.14v2.14h2.304v-2.14h-2.304v-2.14h-2.14zm24.112-.083 2.222.098v4.264h2.14v-6.42h-4.46zM4.459 52.51h2.14v-2.14h-2.14zm19.701 2.24c-.064.064-.117.586-.117 1.16v1.042h-2.14v2.14h-4.279v-2.14H15.32v2.14h-2.14v2.14h2.14v-2.14h2.14v2.14h4.444v-2.14h2.14v-2.125l2.221-.097v-2.14l-.994-.048c-.547-.027-1.047.004-1.111.068m4.327 4.342h2.14v-4.445h-2.14zM67.824 55.8v1.152h-2.14v2.14h2.14v-2.14h2.14v-2.305h-2.14zm6.583 5.432h2.14v-4.28h-2.14zm-21.89 0h-4.279v2.124l2.057.098.098 2.222h2.124zh2.14v-2.14h-2.14zm10.973 2.25c-.06.06-.11 1.54-.11 3.291v3.183h6.583v-6.585h-3.182c-1.75 0-3.231.05-3.291.11M.015 80.984h15.306V65.677H.015zm65.67-13.168h2.139v-2.14h-2.14zm6.582 0h2.14v2.14h2.14v-2.14h-2.14v-2.14h-2.14zM2.237 78.763l10.945.087V67.817H2.15zm2.222-2.222h6.59l-.045-3.251-.044-3.251-6.501-.09zm37.196-4.28H39.35v2.14h2.304zh2.154l-.097-2.222-2.057-.098zm37.114 6.502-4.362.092v2.13h6.584v-6.584h-2.13zm-61.143 2.222h6.419v-2.14h-6.42zm48.058 0h2.14v-2.14h-2.14z" fill="#EEF0F2"/></svg>',
          imageLink:
            "https://thumb.tildacdn.com/tild6566-3434-4432-b162-646637393438/-/format/webp/cert5500.png",
        },
        "16000 рублей": {
          paymentLink:
            "https://c.cloudpayments.ru/payments/119e012802a446f28debd6caea68a86a",
          qr: '<svg xmlns="http://www.w3.org/2000/svg" width="100" viewBox="0 0 81 81" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M.015 15.32H15.32V.015H.015zM19.6 4.278l-2.057.098-.086 13.248h2.308V4.458h4.443V2.32h1.972l.085 15.223 8.64.088v1.964l-8.64.087-.097 2.222h2.32v2.14h-2.305v2.139h-2.14v2.304h-2.139v-4.264l2.222-.097.097-2.222h-2.319v2.14h-2.13l-.091-4.362h-2.14l-.097 2.222H13.18v-2.14h2.14v-2.308l-10.945.087-.097 2.057h-1.96v-2.14H.015v4.444h2.14v2.14H.015v2.303H2.32v-2.139H6.6v4.279h2.139v4.279h-4.28v-4.28H.016v4.444h2.14v1.96l-2.057.097L0 37.209h2.155v4.28H.015v2.303h2.14v2.14H.015v2.304h2.14v4.278H.015V63.54H2.32v-6.583h1.975v2.14h2.304v-2.305h-2.14v-2.14H2.32v-2.139h2.14v-2.139H6.6V48.07H4.46v-8.558H6.6v2.155l2.22-.098.093-4.36h2.13v-2.14h2.139v2.14h2.14v2.139h-2.14v2.304h2.14v2.14h-4.444v2.139H8.902v-2.14H6.598v2.304h2.14v6.418h2.304v-4.278h2.139v2.139h2.14v2.14h-2.14v2.303h2.14v1.975h-2.14v2.304h2.14v2.14h-4.28v-6.583H8.739v6.573l-4.362.092v2.14H8.82l.098-2.058h1.943l.098 2.058 4.361.091v-2.14l4.362-.091.097-2.222h-2.155v-2.14h6.419v2.14h-2.14v2.314l4.361-.092V50.292l-4.36-.092v-2.13h-2.14v-1.965l4.361-.092.097-2.222H17.63l-.088-8.804-4.361-.092v-1.966h6.418v4.28h2.304v2.124l-2.221.097v2.14l2.221.097v-2.155h2.14v2.14h4.459l-.098 2.057-2.231.097.091 4.346 4.362.092v1.965h-2.14v4.623l2.222-.097.092-4.361h1.965v6.418h-4.279V61.4h2.14v4.28h2.139v4.278h-1.96l-.097-2.057-2.222-.097v4.278l-2.222.098-.097 2.221h2.32v-2.139h2.139v2.14h6.582v-2.305H32.93v-1.974h2.139v-2.304h2.14v-4.28h4.278v2.14h-2.14v2.14h2.305v-2.14h2.14v2.14h2.313l-.092-4.361-2.222-.098V61.4h4.28v2.14h2.139v2.14h-2.14v2.139h2.14v2.14H39.348v2.303h6.583v2.14h-2.14v2.303h2.14v1.975h-2.14v2.304h2.304v-2.14h1.975v2.14h19.75v-4.443h-2.14v2.14h-6.583V74.4h2.125l.097 2.222h2.14l.097-2.222h4.264v-2.139h2.14v2.14h2.138v2.139h-2.139v4.443h2.304v-4.278h2.14v2.139h2.139v2.14h4.443V74.4H78.68v4.28h-1.959l-.098-2.058-2.222-.097v-4.249l2.222-.097v-2.14l-2.222-.097V67.82h2.305v-2.14H74.4v-2.304h-2.139v-2.14H65.68v-2.139h2.14v-2.14h4.278v2.14h2.305v2.32l2.221-.098.097-2.222h1.945l.098 2.222h2.14l.09-4.526h-4.452v2.304H74.4v-2.304h-2.139v-2.14h-2.14v-2.139h2.14v-2.139h2.14v-6.583h2.303v-2.14h1.975v2.14h2.304v-4.443h-2.14v-2.14H76.72l-.098-2.221-2.222-.098v2.32h-4.278v-2.14h2.14v-2.14H74.4v-2.304h-4.278v-2.14h2.14v-4.278H74.4v-4.443h2.14v4.443h2.14v1.975h-2.15l.092 4.526h4.28l.087-8.805h-2.13l-.097-2.222-2.042-.097-.098-2.042-10.944-.087v6.588h-2.304v2.303h2.304v2.14h2.14v4.279h-2.14v2.14h-2.14v-6.42h-2.13l-.09-4.36-4.527-.092v2.149h-1.974v-4.279h-6.583V15.32H50.2l.092 4.361 2.212.097.092-4.375 2.057-.098v2.32h4.443v4.278h4.444v-8.722H61.4v-2.14h2.14V6.598H61.4v-2.14h2.14V2.154h-2.124L61.318.097 59.096 0v2.319h2.14v1.975h-2.14v2.304h-4.263l-.098-2.222-2.221-.097V2.334l2.221-.097.098-2.222h-2.32v2.124l-2.221.098v2.14l2.221.096v2.125H48.25l-.098-2.222-2.057-.098V2.32h2.14V.015H45.93v2.14h-2.14v2.303h2.14v2.14h-2.14v2.14h-2.304v2.303h4.444v2.14h-2.14v2.14h-2.14v-2.14h-2.139V6.598h2.155l-.097-2.222h-2.14l-.097 2.222h-2.125V4.294H35.07V.015h-4.443v4.443h2.139v2.14h-2.14v2.14h-2.139V.014H19.6zM65.68 15.32h15.305V.015H65.68zM2.32 13.185l10.78-.087.086-10.779H2.32zm65.582-.087 10.78.087V2.32H67.813zM4.369 4.501c-.045.118-.062 1.62-.037 3.336l.044 3.122 6.673.09-.09-6.673-3.254-.044c-2.553-.036-3.272.001-3.336.17m65.702-.1c-.062.061-.113 1.583-.113 3.38v3.267l6.665-.089V4.376l-3.22-.044c-1.77-.025-3.27.006-3.332.068M32.93 10.876h1.974v-4.28H32.93zm13.165-2.14h1.975v-2.14h-1.975zm6.419 2.14h2.139v-4.28h-2.14zm6.582-1.975h-2.139v1.975h4.279v-4.28h-2.14zm-8.722 6.418h2.14V11.04h-2.14zm4.444 0h1.974V11.04h-1.974zm-32.915 0h2.304v-2.14h-2.304zm6.583 0h2.14v-2.14h-2.14zm4.444 0h1.974v-2.14H32.93zm4.278 0H35.07v2.14h2.14zh2.139v-2.14h-2.14zm8.887 0h1.975v-2.14h-1.975zm13.001 0h2.14v-2.14h-2.14zm-37.193 4.444h2.32l-.098-2.222-2.222-.097zm15.305 0H35.07v2.139h4.264l.097-2.222 2.057-.098v-1.959h-4.279zm6.583-.165h2.14v-1.975h-2.14zM4.46 21.903H6.6v2.14h2.139v-2.14h2.139v-2.14H4.459zm37.193 0h2.14v2.14h2.139v-2.14h-2.14v-2.14h-2.14zm-30.61 2.14h2.139v-2.14h-2.14zm19.748 0h1.975v-2.14H30.79zm37.029.164h-2.14v1.975h2.125l.097 2.222 2.057.098v-4.46h2.14v-2.139h-4.28zM8.902 26.182h1.975v-1.975H8.902zm4.279-.01 4.361.092.097 2.222h1.96v-4.279h-6.418zm15.305.01h2.14v-1.975h-2.14zm6.583-.987v.987h6.418v-1.975H35.07zm15.305 1.151h-6.583v2.14h2.304v6.418h4.115V32.93h-2.14v-2.304h2.14v-2.14h2.303v-4.278h-2.139zm-39.332 6.419h2.139v-2.14h4.279v-2.14h-4.28v-2.139h-2.14zm8.722 0h4.279V30.79h-2.14v-2.304h-2.14zm4.443-2.14h1.975v-2.14h-1.975zm10.862 6.583h4.264l.097-2.221h2.14l.097 2.221h-2.155v4.444h-2.32l.099 2.057 4.36.092v2.13h6.42v-2.14h-2.14v-2.14h-2.14v-2.318l2.222.097.098 2.057h1.96v-2.14h2.139v-2.139h-6.42V30.79h-2.14v2.14h-2.303v-4.444h-4.279zm19.666-6.5-4.36.091v1.966h6.417v-4.28h-1.96zm4.361-.083h2.14v-2.14h-2.14zm-32.75 2.304h-2.139v2.14h-2.304v2.14h2.304v2.132l6.5.089.089 8.64h1.969v-2.14h2.13l.092-4.36 2.221-.098v-1.95l-4.36-.092-.098-2.222h-2.14l.098-2.221 2.057-.098v-1.96h-2.14v-2.14h-4.278zm52.334 2.14h2.304v-2.304H78.68zm-69.778-.165h1.975V32.93H8.902zm17.39.11c-.06.06-.11.579-.11 1.152v1.042h2.304v-2.304h-1.042c-.573 0-1.092.05-1.152.11m24.082 2.194h2.14v-2.14h-2.14zm4.444 0h4.278v-2.14h-4.278zm10.861 0H61.4v2.14h4.28v2.304H61.4v2.14h6.419v2.303h-4.28v4.114h2.14V48.07h6.418v-1.96l-2.057-.097-.092-4.361h-2.13v-2.304h2.14v-2.14h-2.14v-2.14H65.68zm-13.056.11c-.06.06-.11.542-.11 1.07v.96h2.14v-2.14h-.96c-.528 0-1.01.05-1.07.11m2.195 4.334h-4.444v4.279h2.14v2.124l2.221.097.098 2.057h1.944l.098-2.057 4.36-.092v-4.269h-2.139v2.314l-4.36-.092-.098-2.222h2.14l.097-2.222 4.36-.091v-1.966h-6.417zm15.305-.165h6.418v-1.975h-6.418zm8.557 6.583h-2.14v2.304h2.14v2.14h-4.279v2.313l4.362-.092.097-2.222h2.124V50.21h-2.14v-1.974h2.14V45.93H78.68zm-65.499 0h2.14v-1.975h-2.14zm21.888 0h2.14v-1.975h-2.14zm4.443 2.124 2.058.098.097 2.221h2.124v2.14h2.14v-2.14h-2.14V48.25l-2.221-.097-.098-2.057h-1.96zm8.723 0 2.057.098.097 2.221h-2.154v2.14h2.14v2.14h2.139v-4.28h2.139v-2.139h-2.14v-2.14h-4.278zm10.861 2.32h-4.278v2.139h2.139v2.14h2.14v-2.155l2.221.097.098 2.057h1.96v-2.14h4.443v-2.139h-6.583v-2.139h-2.14zm-41.472 2.139H19.6v-2.14h-1.975zm19.694-2.03c-.06.06-.11.579-.11 1.152v1.042H35.07v1.975h2.14v2.304h-2.14v4.28h2.14v-2.14h4.278v-2.14h-2.14v-4.443h2.14v-2.14h-2.03c-1.116 0-2.079.05-2.139.11m4.334 4.17h2.14v-1.976h-2.14zm2.14 2.303h2.139v-2.14h-2.14zm4.443 2.14h2.14v2.14H52.5l.097 2.22 2.222.098v2.125h1.974v-2.14h2.304v2.14h-2.139v2.14h4.279v-4.28h-2.14v-2.14h-4.443V61.4h-2.14v-2.304h2.305v2.14h1.974v-4.28h-4.279v2.14H50.21v-2.14h-1.975zm10.861-2.14h2.14v-2.14h-2.14zm4.444 0h2.14v-2.14h-2.14zM17.46 65.68h4.443v-2.304H17.46zm8.832-2.194c-.06.06-.11.579-.11 1.152v1.042h-2.14v4.28h-2.139v-2.14h-4.449l.088 8.804 2.057.098v1.96h-2.14v2.303h8.888v-2.14h4.279v2.14h2.304v-4.443h-6.748v2.14h-4.279v-2.14h-2.14V74.4h4.444v-4.278h2.14v-4.444h2.14v-2.304h-1.043c-.573 0-1.092.05-1.152.11m52.47 6.555 2.222.098v-6.763h-2.31zM32.93 65.68h1.974v-2.14H32.93zm30.61 4.278h6.418V63.54H63.54zM.015 80.984H15.32V65.68H.015zm50.36-13.165h2.139v-2.14h-2.14zm15.304 0h2.14v-2.14h-2.14zm6.583 0h2.14v-2.14h-2.14zM2.32 78.68h10.866L13.1 67.9l-10.78-.086zm50.304-10.752c-.06.06-.11.542-.11 1.07v.96h2.14v-2.14h-.96c-.528 0-1.01.05-1.07.11m-48.255 2.24c-.045.117-.061 1.616-.036 3.333l.044 3.122h6.583l.09-6.665h-3.3c-2.531 0-3.32.05-3.381.21m50.45 2.094h-2.304v2.14h2.303v4.278h1.975v-8.557h-1.974zm17.444-1.152v.987h2.14v-1.974h-2.14zm-24.027 5.43h1.974v-4.278h-1.974zM61.4 74.402h1.975v-2.139H61.4zm-21.97 2.222h2.14l.097-2.222h-2.334zm-4.454.133c-.045.119-.062 1.1-.036 2.18l.047 1.966 6.665.09V78.68h-4.444v-2.14h-1.074c-.734 0-1.102.07-1.158.216m15.398 1.924h2.14v-1.974h-2.14z" fill="#EEF0F2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M.015 15.32H15.32V.015H.015zM19.764 4.458h-2.14V17.46h2.14zh4.279V2.154h2.304V17.46h8.738l-.098-2.058-2.222-.097v-2.124h2.304v2.14h2.14v2.139h4.443v2.32l2.057-.099.097-2.221h2.125v2.304h-2.14v2.139h-2.304v-2.14h-1.975v2.14H35.07v-2.14h2.14v-2.139h-2.14v2.14h-8.722v2.139h2.14v2.14h2.139v-2.14h2.318l-.097 2.222-2.221.097v2.124h-2.14v-2.139h-2.14v2.14h-2.139v2.139h2.14v2.14h4.279v2.124l2.221.097.097 2.222h-2.318v2.14h2.304v2.139h4.278v2.14h2.14v-4.28H35.07v-8.722h4.443v4.279h1.96l.098-2.057 2.221-.098v6.598h6.583v2.304h-2.14v2.14h-2.319l.098 2.057 2.222.097v2.125h-6.583v2.139h2.14v4.443h-2.14v2.14h2.14v-2.14h2.139v2.304h-2.14v1.975h2.14v2.304h-2.14v-2.124l-2.221-.097-.098-2.058h-1.96v4.28h2.14v2.13l-4.361.091-.098 2.057h4.459v2.304h2.14v2.14h2.139v-4.28h-2.14v-2.303h4.27l.091-4.361 2.222-.098v-1.945l-2.222-.097-.097-2.222h2.32v-2.139h-2.32l.097-2.222 4.361-.092v-2.13h-2.139v-4.443h4.279v-1.975h-2.14v-2.304h2.14v-2.14h4.443v2.14h-4.278v2.14h6.418v-2.14h4.443v-2.14h2.14v2.14h2.14v-2.124l2.22-.098.098-2.221h2.124v-2.14h-4.443v-2.14h-2.14v-2.139H65.68v2.14h2.14v4.443h-2.14v2.14h-2.304v-6.583h-2.14v-4.279h-4.278v2.14h-2.304v-4.444H48.07V15.32h-2.14v-2.14h-2.139v2.14h-2.304v-2.14h-1.975v2.14h-2.304v-2.14h2.14V6.599h-2.14v-2.14h-2.13l-.091-4.36h-4.28v4.278l2.223.097v2.125h2.139v4.443h-2.304V6.598h-2.14v2.14h-2.139V.014h-8.722zM46.04.125c-.06.06-.11.541-.11 1.07v.96h2.14V.014h-.96c-.529 0-1.01.05-1.07.11m6.473 2.03h2.139V.014h-2.14zm6.582 0h2.14V.014h-2.14zM65.68 15.32h15.305V.015H65.68zM2.264 2.264c-.06.06-.11 2.541-.11 5.513v5.404h11.027V2.154H7.778c-2.972 0-5.453.05-5.513.11M67.82 13.181h11.03l-.086-10.944L67.82 2.15zM43.79 4.458h2.14v2.14h-2.14v2.14h-2.14v2.139h4.265l.097 2.221 2.222.098v2.124h2.14v4.444h2.139V15.32h2.139v-4.279h-2.14v4.28h-2.139v-4.444h2.14v-4.28h2.139V4.459h-2.14V2.32h-2.139v2.14h2.14v2.139h-4.28v2.14H45.93v-2.14h2.14v-2.14h-2.14V2.32h-2.14zm17.527-.082 2.057.098V2.32H61.22zm-56.86 6.5h6.419V4.459H4.459zm35.054-4.278h1.975v-2.14h-1.975zm19.584 0h-4.278v4.279h1.959l.098-2.057 2.221-.098zh2.14v4.279h2.14v-4.28h-2.14V4.459h-2.14zm11.027 4.279h6.418V4.458h-6.418zM56.957 15.32h-2.14v2.14h4.28v4.443h4.278v-8.722h-2.14v-2.14h-4.278zm-35.054 0h2.14v-2.14h-2.14zm6.583 0h2.14v-2.14h-2.14zm30.61 0h2.14v-2.14h-2.14zM.016 21.903h2.303v2.14H6.6v-2.14H4.46v-2.14h6.583v2.14h2.139v2.14h6.583v-4.28h-2.14v2.14h-4.443v-2.14h2.14v-2.139H4.458v2.14H2.155v-2.14H.015zm21.887-2.14h2.14v-2.139h-2.14zm43.776 4.28h2.14v-2.14h4.443v2.14h2.14v-4.28h2.139v4.28h2.304v2.303H76.54v4.28h4.443v-8.723H78.68v-2.14h-2.14v-2.139H65.68zm-56.941 0h2.139v-2.14h-2.14zm13.165 0h2.14v-2.14h-2.14zm21.888.164h2.14v-2.304h-2.14zm-8.722.988v1.151h6.583v-2.303h-6.583zm15.305.987h-6.583v2.304h2.14v6.583h4.443v2.14h2.14v-2.14h-2.14v-2.14h6.583v-4.443h-2.304v2.14h-4.279v-2.14h2.14v-4.443h-2.14zM.015 25.195v.987h2.14v-1.975H.015zm6.583 3.29h2.14v4.28h2.139v-6.419h-2.14v-2.139H6.599zm4.444-2.303h2.139v-1.975h-2.14zm8.722 2.304h-2.14v2.14h-4.443v2.139h6.583zh2.14v2.14h2.139v-2.14h-2.14v-4.278h-2.14zm43.776-2.304h2.14v-1.975h-2.14zm6.583 2.32 2.057-.098.092-4.197h-2.15zm-56.942-.016h4.279v-2.14h-4.28zM.015 32.75l2.222.097.097 2.222H.015v2.14H2.32v4.443H.015v2.14H2.32v2.124l-2.221.097L0 48.055l2.237.097.092 4.361h2.13v-2.139h2.14v-2.14h-2.14v-8.886h2.14v2.14h2.139v-4.28h2.139v-2.14h-2.14V32.93H4.46v-4.443H.015zm59.081-2.125h2.14v-2.14h-2.14zm-34.889 2.14h1.975v-2.14h-1.975zm24.028 0h2.155l-.098-2.057-2.057-.098zm-37.193 2.32 2.057-.099.098-2.057h-2.155zm8.722 2.123h2.14v2.14h2.139v-2.14h-2.14v-2.14h2.14V32.93h-4.28zm59.08-2.124 2.058-.098L81 32.93h-2.155zm-65.663 2.124h2.14v2.304h-2.14v1.975h2.14v2.304h-4.28v2.125l-2.221.097-.09 6.5h2.137l.092-4.36 2.222-.098v-2.124h2.14v2.304h-2.14v2.139h2.14v2.14h-2.14v2.139h2.14v2.304h-2.14v2.14h2.14v2.139h-4.28v2.14h4.28v-2.14h4.443v-2.14h-2.32l.098-2.221h6.583l.097 2.221h-2.319v2.14h4.28V50.374h-4.28v-2.14h-2.14v-2.303h4.28v-2.14H17.46V35.07h-4.28zm13.166 0h2.14v-2.14h-2.14zm13.165 0h1.975v-2.14h-1.975zm34.89 0h-4.28v2.14h6.419v2.124l2.222.097.097 2.222h2.124v-4.264l-2.221-.097-.098-2.222h-2.124v-2.14H74.4zm-54.638 4.28h2.14v-1.976h-2.14zm4.443 0h4.28v2.303h-2.14v4.279h4.279v-8.558h-6.419zm19.584 0h2.14v-1.976h-2.14zm17.445 0h4.443v-1.976h-4.443zm6.583-.988v.987h2.14v-1.975h-2.14zm-32.75 5.43h2.14v2.305h-2.125l-.097-2.222-2.042-.098-.098 2.237-2.237.098.098 2.042 2.222.097v6.568h-4.444v4.279h2.13l.092 4.36 2.042.099.097-2.237 2.222-.098v-4.264h2.14v-2.14h-2.14v-2.303h2.14v-2.14h4.278v-2.139h-2.14v-4.443h2.14v-2.14h-4.279v-2.14H35.07zm21.888-2.139h-2.14v2.14h4.28v-2.14h2.139v4.444h-4.279v2.139h-2.14v2.14h4.28v-2.14h2.139v2.14h6.583v2.303h-4.28v1.975h2.14v2.304h-2.304v-2.14h-2.14v2.14h-2.139v-2.14h-2.139v4.28h-2.14v2.14h4.28v2.303h-2.14v2.14h2.14v-2.14h2.139v4.444h-4.279v8.722h-2.304v-4.443h-2.14v-2.14h2.14v-2.14h-2.14V67.82h2.14v-2.14h-2.14v-2.14h-2.139v2.14h-2.14v2.14h2.14v2.304H39.512v2.14h6.419V74.4h-2.14v2.14h2.14v2.124l2.221.098.098 2.221h19.569V76.54h-2.14v2.304h-6.583v-4.443h2.14v2.139h2.14V74.4h-2.14v-2.139h2.304v2.14h4.279v-2.14h2.304v2.14h2.14v2.139H74.4v2.14h2.14v-2.14H74.4v-4.279h2.14v-2.14H74.4v2.14h-2.139v-2.304h2.14v-2.14h2.139V65.68H74.4v-2.14h-2.124l-.097-2.221-6.5-.09v-2.132h2.139v-2.304h4.443v-1.96l-2.222-.097-.097-2.222h2.32v-2.139H74.4v-6.583h2.14v-2.14h-6.418v4.28h2.14v2.304h-6.584v2.139h-2.304v-4.443h4.444v-2.14h-6.583v-2.14h-4.279zm-50.359 2.14h2.14v-2.14h-2.14zm72.247 2.139H81l-.098-2.057-2.057-.098zm-26.25 2.222 2.058.098v-2.155h-2.155zm24.028 0 2.057.098v-2.155h-2.155zm-48.137 4.36h2.14v-4.278h-2.14zm50.359-2.139h2.14v-2.139h-2.14zM.015 63.375h2.133l.089-6.5 2.222-.098v-1.945l-2.222-.097-.097-2.222H.015zm17.527-8.64 2.222.097v-2.319h-2.32zm34.972 2.057h4.278v-1.959l-2.057-.098-.097-2.222h-2.124zm21.887-2.14h4.28v-2.139H74.4zM8.739 61.237h-4.28v2.14h4.28zh2.139v-6.419h-2.14zm50.358-4.444h2.14v-1.975h-2.14zM4.46 59.096H6.6v-2.14H4.46zm45.915 0h2.14v2.14h2.139v-2.14h-2.14v-2.14h-2.139zm21.888 0h2.14v2.14h2.139v-2.14h2.304v2.14h2.14v-4.28H76.54v2.14H74.4v-2.14h-2.139zm-24.027 4.28h2.155l-.098-2.058-2.057-.098zm15.215.207c-.045.117-.062 1.619-.037 3.336l.045 3.121h6.582v-6.583l-3.254-.044c-2.553-.035-3.272.001-3.336.17m-45.826 2.096h4.28v-2.14h-4.28zm8.723 0h2.14v-2.14h-2.14zm8.722 0h-2.14v4.28h2.14v-2.14h2.14v-4.28h-2.14zm43.776 4.28h2.14v-6.42h-2.14zM.015 80.983H15.32V65.68H.015zm24.192-11.026h1.975V65.68h-1.975zm15.305-2.14h1.975V65.68h-1.975zm10.862 0h2.14V65.68h-2.14zm15.305 0h2.14V65.68h-2.14zm6.583 0h2.14V65.68h-2.14zM2.237 78.764l10.944.086V67.82H2.151zm15.387-2.222h2.14v2.304h-2.14v2.14h8.558v-2.14h-4.279V76.54h-2.14V74.4h4.28v-4.278h-2.14v-2.304h-4.279zm10.862-4.279h-2.14v2.14h2.14zh2.14v2.14h6.582v-2.14h-4.443v-2.124l-2.057-.098-.097-2.221h-2.125zm26.332-2.304h1.974v-2.14h-1.974zm-50.36 6.583h6.419v-6.418H4.459zm43.612-.015 2.222.097.097 2.222h2.124V76.54h-2.139v-4.279H48.07zm-8.558.015h1.975V74.4h-1.975zm39.25 2.222-2.236.097.097 2.042 4.361.092V74.4h-2.13zm-52.415-.083h4.264l.097 2.222 2.057.098v-4.46h-6.418zm8.722 2.304h6.418v-2.14h-4.279v-2.303H35.07zM70.123 81l2.057-.098v-4.279l-2.057-.098zm-26.332-.016h2.14v-2.14h-2.14z" fill="#EEF0F2"/></svg>',
          imageLink:
            "https://thumb.tildacdn.com/tild3764-3535-4365-b636-376132373930/-/format/webp/cert16000.png",
        },
        "20000 рублей": {
          paymentLink:
            "https://c.cloudpayments.ru/payments/dac0c0ee44674e7d8f4e591c9131ff58",
          qr: '<svg xmlns="http://www.w3.org/2000/svg" width="100" viewBox="0 0 81 81" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M.016 15.308h15.306V0H.016zM19.602 4.264l-2.058.098-.086 13.25h2.308v-4.444h2.14v4.445h2.14v4.28h-4.444v4.279h-1.975v-4.28h-4.444v-2.14h2.14v-2.309l-10.946.087-.098 2.058H2.32v-2.14H.017v2.304h2.14v4.28H.015v2.304h2.13l.092 4.362 2.042.098.097 2.042 2.222.097V37.2h2.304v-4.28h2.14v-2.14h2.14v2.14h2.14v1.966l-4.362.092v4.444l2.222.098v1.96H8.919l-.098-2.058-2.222-.097v4.46H4.295v4.279H2.32v-6.42h2.146l-.089-6.666-2.057-.098v-2.124H.016V37.2h2.14v4.28H.015v6.748h2.14v2.14h2.139v2.14H.015v11.028H2.32v-6.584H6.6v2.14H4.28l.097 2.222 4.362.092v2.13h8.723v2.14h2.304v-2.304h-2.14v-1.975h6.42v1.975h-2.14v2.304h2.14v6.42h-2.14v-2.14h-2.14v-2.14h-2.31l.088 8.806h2.14l.097-2.222h4.265v2.14h-2.14v2.14h-4.444v2.304h6.748v-4.28h1.975v4.28h2.304V76.72l2.222-.098.098-2.222h6.404v-2.304h-2.14v-2.14h-2.14v-2.14h4.28v-2.14h-4.28v-2.14h6.42v4.28h2.304v-2.14h2.14v2.14h2.313l-.092-4.362-2.222-.097v-1.96h4.28v2.14h2.14v2.14h-2.14v2.14h2.14v2.139H39.351v2.304h6.584v2.14h-2.14v2.305h2.14v1.975h-2.14v2.304H46.1v-2.14h1.975v2.14h2.305v-2.14h2.14v2.14h8.887v-2.14h6.419V76.54h-4.28V74.4h4.28v-2.14h2.14v2.14h2.304v-4.28h2.14v2.155l2.222-.097v-2.14l-2.222-.097v-2.125h4.279V74.4h-4.28v2.14h-4.443v4.444h2.304v-2.14h2.14v2.14h6.583V65.676H74.41v-2.14h6.583v-6.754l-8.805.088-.092 4.362H70.13v-2.14h-2.304v-2.14h2.304v-2.14h2.14v-4.444h2.14v-4.264l2.222-.098.097-2.222h-2.32v-4.459l-2.221.097-.092 4.362H70.13V39.34h-2.304v4.444h-4.28v-2.14h2.14V37.2h6.584v-4.28h2.14v-2.304h-4.28v-2.14h2.14v-2.14h2.14v2.14h2.124l.097 2.222 2.058.098v1.96h-2.14v2.14h-2.14V37.2h2.14v4.444h2.14v2.14h2.304V39.34h-2.14V37.2h2.14v-6.584h-2.14v-2.14h2.14v-6.584h-2.125l-.097-2.222-2.042-.098-.097-2.042-10.946-.087v2.31h2.14v2.14h-2.14v2.139h-2.14v-2.14h-4.443v2.14h-2.304v2.14h-4.28v-1.96l2.222-.098.092-4.362h8.714v-6.584h-2.14v-2.14h2.14V6.584h-2.14v-2.14h2.14V2.14h-4.444V0h-2.32l.098 2.222 2.222.097v4.265h-4.459l.097 2.222 4.362.092V6.584h2.14v4.28h-2.14v2.304h-2.304v4.28h-2.14v2.14h-2.15l.093-4.198 2.23-.097-.09-4.347-2.223-.097V8.724h-2.14v-2.14h-2.124l-.097-2.222-2.058-.098V2.31l8.641-.088L54.84 0h-8.903v2.14h-2.14v2.304h2.14v2.14h-2.14v2.14h-2.304v2.304h4.444v2.14h-2.14v2.14h-2.14v-2.14h-2.14V6.584h2.156l-.098-2.222h-2.14l-.097 2.222h-2.124v6.584h-2.305v2.14h-1.975v-2.14H30.63v2.14h-2.14v-6.41l4.362-.092.092-4.362h2.13V2.14h-2.14V0H30.63v2.14h-2.14V0h-4.443v2.14h-2.14V0h-2.304zm46.084 11.044h15.307V0H65.686zM2.32 13.173l10.78-.087.087-10.782H2.32zM30.794 4.28h1.975V2.304h-1.975zm37.114 8.806 10.78.087V2.304H67.823zM4.37 4.487c-.046.118-.062 1.62-.038 3.337l.045 3.122 6.673.09-.09-6.674-3.254-.045c-2.553-.035-3.272.002-3.336.17m65.709-.101c-.062.062-.113 1.584-.113 3.381v3.268l6.666-.089V4.362l-3.22-.045c-1.771-.024-3.271.007-3.333.069M21.906 8.889h-2.14v1.975h2.14v2.304h2.14v-2.304h2.14v-1.96l-2.058-.098-.092-4.362h-2.13zm4.444-2.305h2.14v-2.14h-2.14zm19.75 4.28h1.975v-4.28H46.1zm2.14 2.304h2.14v2.14h2.14v-4.28h-4.28zm-24.03 2.14h1.975v-2.14H24.21zm13.003 0h2.14v-2.14h-2.14zm8.887 0h1.975v-2.14H46.1zm13.003 0h2.14v-2.14h-2.14zm-32.753 4.28h2.14v2.304h2.304v2.14h1.975v-4.28h-2.14v-2.14h-2.125l-.097-2.222-2.057-.098zm4.444-2.14h1.975v-2.14h-1.975zm17.446 4.444h1.975v-6.584H48.24zm-11.027-2.14h-2.14v2.14h4.264l.097-2.222 2.058-.098v-1.96h-4.28zm6.583-.164h2.14v-1.976h-2.14zm-2.14 2.304h2.14v2.14h2.14v-2.14h-2.14v-2.14h-2.14zm28.474 0h4.28v4.28h4.279v-1.976h-2.14v-4.444H70.13zm-65.67 4.28H6.6v-2.14h4.279v-2.14h-6.42zm19.75.164h-4.444v2.14h2.14v4.28h2.14v-4.28h2.124l.097-2.222 2.222-.097V24.21l-2.222-.097-.097-2.222h-1.96zm26.17-2.304h2.14v-2.14h-2.14zm-37.197 1.152v.988h2.14v-1.976h-2.14zm21.89 0v.988h6.419v-1.976h-6.42zm30.613.988h2.14v-1.976h-2.14zm4.444 0h1.975v-1.976H70.13zM6.6 28.476H4.46v2.14H6.6zh2.303v2.14h1.976v-4.28h-4.28zm8.805-.082 2.057.098v-2.156h-2.155zm15.306 2.304-4.361.092v1.966h6.419v-2.14h4.444v2.304h-4.28v1.96l2.058.098.097 2.222h4.249l.097-2.222h2.14l.098 2.222h-2.155v4.444h-2.32l.098 2.058 2.222.097v2.125h8.558v-2.14h-2.14v-2.14h-2.139v-2.319l2.222.097.098 2.058h1.96v-2.14h2.14V37.2h-6.42v-6.42h-2.14v2.14h-2.304v-4.444H32.77v-2.14h-1.966zm13.085-2.222H46.1v6.42h4.115V32.92h-2.14v-2.304h2.14v-2.14h2.304v-2.14h-8.723zm17.611 0h2.14v2.14h4.279v-2.14h-2.14v-2.14h-4.279zm6.501-.082 2.058.098v-2.156H67.81zm-54.725 2.222h2.14v-2.14h-2.14zm4.444 0h1.975v-2.14h-1.975zm37.197 0h1.975v-2.14h-1.975zm4.279 0h2.14v-2.14h-2.14zm-8.723 2.14h4.279V30.78h-4.28zm6.583 0h2.14V30.78h-2.14zm-2.14 2.14H56.8V32.92h-1.975zm8.724 2.304h2.14v-4.28h-2.14zm-39.337 0h4.28v2.305h-2.14v8.723h-2.14v2.15l-4.526-.092-.098-2.058h-2.124v-2.304h2.14v-4.28h-1.975v2.14h-2.305v-2.14h-2.14v2.14H6.6v2.125l2.222.097v2.14l-2.222.097v4.265H4.46v2.14H6.6v-2.14h2.125l.097-2.222 2.042-.098.098-2.042 4.361-.092v2.314h-4.279v2.14h4.28v2.305h-4.28v2.14h-2.14v2.14h4.28v2.14h2.14v-2.14h-2.14v-2.315l4.361.092.098 2.222h1.945l.097-2.222 2.222-.097v2.32h2.304v2.14h1.975v-4.28h-2.14v-2.134l-6.5-.089-.098-2.222H30.63v-2.14h-2.14v-2.304h2.14v-1.975h-2.14v-2.305h2.14v-2.32l2.222.098.09 6.502h1.952l.098-2.058 2.222-.097V43.8l-2.222-.097v-2.14l2.222-.097v-1.96H30.63V37.2h2.14v-2.14h-8.56zm26.17 0h2.14v-2.14h-2.14zm6.583 0h2.14v2.14h4.28V37.2h-4.28v-2.14h-2.14zm-43.78 2.14h2.14v2.14h2.139V37.2h-4.28zm6.583 2.14h2.14V37.2h-2.14zm32.863-4.17c-.06.06-.11.542-.11 1.07v.96h2.14V37.2h-.96c-.528 0-1.01.05-1.07.11m-2.25 4.17h2.14v-1.975h-2.14zm4.445.164h-2.305v2.14h-2.14v2.14h2.14v2.14h2.14v-4.28h2.125l.097-2.222 2.222-.097v-1.96h-4.28zm-32.918 6.42h2.14v-6.42h-2.14zm-8.723-1.975h2.14v-2.305h-2.14zm54.643 0h-4.28v6.42h2.14v-2.305h2.14v-2.14h4.28v-1.96l-2.058-.098-.097-2.222h-2.125zm4.444-.165h2.14v-2.14h-2.14zm-15.307 2.304h-2.14v2.14H52.52v-2.14h-4.28v1.96l2.057.098.098 2.222H48.24v2.14h4.28v-2.14h4.264l.097-2.222 2.222-.097v-2.125h2.14v-1.975h-4.28zm19.586 4.28h-2.14v2.305h6.584v-6.749H76.55zm-41.476 0h2.14v-4.28h-2.14zm4.444-2.32 2.057.098.098 2.222h2.124v2.14h2.14v-2.14h-2.14v-4.28h-4.28zm19.586 2.32h-2.14v2.14h2.14v2.14h2.14v-2.14h2.14v-2.14h-2.14v-2.14h-2.14zM30.71 56.87l-2.222.097v2.125h2.305v4.28h1.975V52.508h-1.966zm6.611-4.252c-.06.06-.11.579-.11 1.152v1.043h-2.14v1.975h2.14v2.304h-2.14v2.14h4.28v-2.14h2.14v-2.14h-2.14v-2.304h2.14v-2.14h-2.03c-1.117 0-2.08.05-2.14.11m30.614 0c-.06.06-.11.542-.11 1.07v.96h2.14v-2.14h-.96c-.528 0-1.01.05-1.07.11m-41.586 4.17h2.14v-1.975h-2.14zm15.307 0h2.14v-1.975h-2.14zm10.862.164H48.24v4.28h2.14v2.14h2.124l.098 2.222 2.222.097v2.11l-2.222.097-.093 4.198h2.15v-2.14h2.14v-2.14h2.304v2.14h2.14v-4.28h-2.14v-2.14h-4.444v-2.14h-2.14v-2.304h2.305v2.14h1.975v-4.28h-2.14v-2.14h-2.14zm11.028 0h-2.14v2.14h4.28v2.14h2.139v-2.14h-2.14v-2.304h2.14v-1.975h-4.28zm-19.75 2.14h2.139v-2.14h-2.14zm30.613 2.14h4.279v-2.14h-4.28zm-34.893 2.14h1.975v-1.975h-1.975zm32.753 0h2.14v-1.975h-2.14zm-45.92 8.724h2.14v-2.14h2.14v-4.28h-2.14v-2.14h-2.14zm37.197-2.14h6.419v-6.42h-6.42zM.016 80.984h15.306V65.676H.016zM50.38 67.816h2.14v-2.14h-2.14zm15.306 0h2.14v-2.14h-2.14zm6.584 0h2.14v-2.14h-2.14zM2.32 78.68h10.867L13.1 67.898l-10.78-.086zm2.048-8.513c-.044.116-.06 1.616-.036 3.333l.045 3.122h6.584l.089-6.666h-3.3c-2.531 0-3.32.05-3.382.21m52.595 1.929h2.14V70.12h-2.14zM28.49 74.4h-2.14v2.14h2.14zh2.14v-2.14h-2.14zm19.751 2.14h6.584v2.14H56.8v-6.42h-1.975v2.14h-4.609v-2.14H48.24zm13.167-2.14h1.975v-2.14h-1.975zm-21.972 2.222h2.14l.096-2.222h-2.334zm19.668 2.058h2.14V74.4h-2.14zm-24.127-1.915c-.047.124-.064.624-.036 1.111l.05.886 2.223.097v2.125h2.319l-.097-2.222-2.222-.097V76.54h-1.075c-.758 0-1.1.067-1.162.225M74.41 78.68h4.279v-1.975h-4.28zm-43.78 2.304h2.303V78.68H30.63z" fill="#EEF0F2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M.016 15.308h15.306V0H.016zm19.75-10.864h-2.14v13.004h2.14v-4.28h2.14v4.265l2.222.097.092 4.362h2.13v2.14h2.14v2.304h-2.14v2.14h-2.13l-.092 4.362-2.222.097v-4.459h-2.14v-2.14h-2.14v2.14h2.14v2.14h-2.304v-2.14h-2.14v-2.14h-2.14v-2.304h2.14v2.14h2.14v-4.28h-4.28v-2.14h2.14v-2.14H4.46v2.14H2.33l-.092 4.362-2.222.098v1.945l2.222.097.091 4.362h2.13v2.14H6.6V37.2h2.14v-4.444h2.14v-2.14H8.74v-2.14H6.6v-2.14H4.46v-4.444h6.599l-.097 2.222-4.362.092v1.956l4.362.092.092 4.362h2.13v2.14h2.14v2.304h-4.28v4.28h2.14V37.2h4.444v4.28h2.14V37.2h2.139v4.265l2.222.097.089 6.502h1.963l.087-8.642 2.222-.097V37.2h-4.443v-2.14h8.723v-2.133l-6.501-.089v-2.14l4.361-.091v-4.45l2.222.097.097 2.222h6.569v4.28h1.96l.097-2.058 2.222-.097v6.6h6.584v2.139h2.14V37.2h2.303v2.14h4.28V37.2h4.27l.091-4.362 2.222-.097v4.46h-2.124l-.098 2.221-4.361.092v2.13h-2.14v2.14h-2.14v4.28h1.96l.098-2.058 4.361-.092v2.314h-2.14v2.14h-2.139v2.14h2.14v-2.14h2.14v2.14h2.14v-6.584h4.443v-2.14h2.14v-4.28h-2.14v4.28h-4.459l.097-2.222 2.222-.097V37.2h6.584v-4.444h2.14v-2.14h-4.444v-2.14h-2.14v-2.14h-2.14v2.14h2.14v2.14h-4.444v-2.14h-2.14v-2.304h4.444v-1.96l-2.222-.098-.097-2.222h-4.264v2.305h-2.14v2.14H52.52v2.14h-2.14v2.139h4.28v-2.14h2.304v2.14h2.14v2.304h-2.14v2.14h2.14v2.14H56.8v-2.14h-2.14v-2.14h-4.28v2.14h-4.443v-6.584h-2.14v-2.304h8.723v-1.976h-2.14v-2.304h2.14v2.14h2.14v-4.28h-2.14v-4.444h2.14v-4.28h-2.14v4.28h-2.14v-2.14h-2.14v2.14h2.14v6.584h-2.305v-6.584h-2.14v-2.14h-2.139v2.14h-2.304v-2.14h-1.975v2.14h-2.304v-2.14h2.14V6.584h-2.14v6.584h-2.14v2.14h-2.125l-.097 2.222-2.237.098.097 2.042 2.232.098-.092 4.346h-2.14l-.097-2.222H28.49v-2.14h-2.304v-4.444h-2.14v-2.14h-2.14v-2.14h-2.139V8.724h2.14v-4.28h2.304v4.28h2.14v2.304h-2.14v2.14h2.14v2.14h2.14v2.14h2.14v-2.14h2.139v-2.14h-2.14v2.14h-2.14V8.724h4.28v-4.28h-2.14v-2.14h-2.14V0h-4.264l-.097 2.222-2.222.097V0h-2.14zM30.74.11c-.06.06-.11.541-.11 1.07v.96h2.14V0h-.96c-.529 0-1.01.05-1.07.11m15.307 0c-.06.06-.11.541-.11 1.07v.96h8.723V0h-4.252c-2.338 0-4.301.05-4.361.11m10.917 2.03h2.14V0h-2.14zm8.723 13.168h15.307V0H65.686zM2.266 2.25c-.061.06-.11 2.541-.11 5.514v5.404h11.027V2.14H7.779c-2.973 0-5.454.05-5.514.11m65.56 10.918h11.032L78.77 2.222l-10.945-.087zM32.933 4.46l2.058-.098.098-2.058h-2.156zm10.863-.016h2.14v2.14h-2.14v2.14h-2.14v2.14h4.28v-4.28h2.14v-2.14h-2.14v-2.14h-2.14zm15.307 2.14h-4.28v2.14h4.28zh2.14v4.28h2.14v-4.28h-2.14v-2.14h2.14v-2.14h-4.28zM4.46 10.864h6.419v-6.42h-6.42zm21.725-4.28h2.304v-2.14h-2.304zm13.332 0h1.975v-2.14h-1.975zm30.613 4.28h6.42v-6.42h-6.42zm-21.89 0h4.28v-2.14h-2.14v-2.14h-2.14zm-2.222 2.222 2.057.098v-2.156H45.92zm13.085.082h-2.14v4.445h-2.14v2.14h8.56v-6.585h-2.14v-2.14h-2.14zm0 2.14h2.14v-2.14h-2.14zm-21.89 4.444h-2.14v2.14h4.444v-2.14h1.975v2.14h2.304v2.305h2.14v-2.305h-2.14v-2.14h2.14v-2.304H43.81l-.097 2.222-2.057.098v-2.32h-4.444zM.098 19.67l2.057.098v-2.155H0zm65.588.082h2.14v2.14h-2.14v2.14h2.14v2.14h2.14v-2.14h2.304v2.14h2.14v-4.28h-4.444v-2.14h6.583v4.28h2.304v2.304H74.41v2.14h2.14v2.14h2.139v-2.14h2.304v-6.584H78.69v-2.14h-2.14v-2.14H65.686zm-45.92 6.42h4.28v-4.28h-4.28zm15.307-.988v1.152h6.584v-2.304h-6.584zm35.057 3.308 2.058-.098.097-2.058H70.13zM4.46 30.616H6.6v-2.14H4.46zm8.723 0h2.14v-2.14h-2.14zm45.92 0h2.14v-2.14h-2.14zm-26.17 2.14h4.28v-2.14h-4.28zm15.307 0h2.155l-.098-2.058-2.057-.098zm6.584 0h1.975v-2.14h-1.975zm23.947.082-2.222.097v2.125h-2.14v2.14h2.14v4.265l2.222.097.097 2.222h2.125V39.52l-2.222-.098-.097-2.222H81l-.09-6.502-2.041-.097zM.016 37.2H2.32v4.28h2.14v-6.42H2.155v-2.14H.015zm32.917-.015-2.222.097-.098 2.058h6.6v2.14h2.14V37.2h-4.28v-2.14h-2.14zm6.584.015h1.975v-2.14h-1.975zm10.863 0h2.14v-2.14h-2.14zM6.6 43.784H4.46v4.444H2.32v2.14h2.14v2.14H6.6v2.305H4.474l-.098-2.223-4.36-.09v10.873h2.132l.09-6.502 4.361-.092v2.314H4.46v2.14h4.28v2.14h8.723v-2.14h6.584v-2.14h-2.14v-2.14h-2.14v2.14h-2.304v-2.14h-4.28v2.14H8.74v-2.304h2.124l.098-2.058 4.361-.092v-2.13H10.88v-2.14H8.74v2.14H6.6v-4.444h2.14v-2.14H6.6zh6.584v2.14h2.14v-2.14h2.139v-2.14h-2.14v2.14h-2.14v-2.14H8.74v-2.14H6.6zm6.583-2.304h2.14v-1.975h-2.14zm30.613 0h2.14v-1.975h-2.14zm4.444.164h-2.32l.098 2.058 2.222.097v2.125h-8.888v-2.14h-2.14v-2.14h-2.14v2.14h2.14v2.14h-2.14v2.14h2.14v4.444h-2.14v-4.265l-2.221-.097-.09-6.502H30.63v2.14h-2.14v2.14h2.14v2.304h-2.14v2.14h2.14v2.14H17.627v2.133l6.5.09.099 2.057h1.944l.097-2.058 2.222-.097v2.155h2.14v-4.28h2.304v10.864h6.42v-2.14h-4.28v-2.14h2.14v-2.14h-2.14v-2.304h2.14v-2.14h4.279v-2.14h-2.14v-2.304h4.444v4.444h-2.14v2.14h2.14v-2.14h2.14v2.305h-2.14v1.975h2.14v2.304h-2.14v-2.14h-2.14v2.14h-2.14v2.14h2.14v2.304h-2.14v4.28h1.976v-2.14h2.304v2.14h2.14v-4.28h-2.14v-2.304h4.27l.092-4.362 4.361-.092v-1.956l-4.361-.092-.098-2.222h2.32v-2.14h-2.32l.098-2.222 4.361-.092v-2.13h-2.14v-2.14h2.14v-2.14h-2.14v-2.14H48.24zm4.28-.164h2.139v-1.975h-2.14zm19.75 2.304h-2.14v2.14h2.14v2.304h-4.444v2.14h-2.14v2.14h-2.14v2.14h4.28v-2.14h2.304v2.14h2.14v-4.28h2.14v-4.444h2.14v-2.14h-2.14v-4.28h-2.14zM.016 44.854v3.21h2.14v-6.42H.015zm19.75 1.07h-2.14v2.14h2.14v2.304h4.28v-2.14h-2.14v-6.584h-2.14zm52.504 0h2.14v-2.14h-2.14zm-61.227 4.444h4.28v-2.14h-4.28zm41.559-.082 2.057.098v-2.156h-2.155zm23.947 2.222h-2.14v2.14h6.584v-6.42H76.55zm-24.03 2.125 2.222.097.098 2.043 2.042.097.092 4.362h-2.15v2.14h4.28v2.304h2.14v4.445h-2.14v2.14h-2.14v6.584H54.66V76.54h-6.584v-4.28h2.305v2.14h4.279v-2.14h-2.14v-4.444h2.14v-2.14h-2.14v-2.14h-2.14v2.14h-2.14v2.14h2.14v2.305H39.517v2.14h6.419v2.14h-2.14v2.14h2.14v2.124l2.222.097.097 2.238 2.042-.098.098-2.222h2.124v2.304h8.724v-2.14h-2.14V74.4h2.14v4.28h6.583v-2.14h-4.444V74.4h-2.14v-2.14h2.305v2.14h4.279v-2.14h2.304v2.14h2.14v-4.444h2.14v-2.14h4.443V74.4H74.41v2.14h-4.28V81l2.058-.098.097-2.222h2.125v-2.14h4.458l-.097 2.222-4.361.092v2.13h6.583V65.676H74.41v-2.14h-2.125l-.097-2.222-2.222-.097v-2.125h-2.14v-2.14h-2.14v2.14h-4.444v-2.14h-2.14v-2.124l-2.221-.098-.097-2.222h-4.265zm-13.002 2.155h1.975v-1.975h-1.975zm21.725 0h2.14v-1.975h-2.14zm6.584 0h2.14v-1.975h-2.14zM26.35 61.232h-2.125l-.097 2.222-2.222.097v2.125h2.311l-.09 6.502-2.221.097v-2.154H19.78l-.097-2.222-2.057-.099v8.74h2.14V74.4h4.443v2.14h1.975V74.4h2.304v2.14h-2.14v4.444h2.14V76.54h2.14V74.4h6.584v-2.14h-2.14v-2.124l-2.222-.098-.097-2.222h4.459v-2.14h-4.444v-2.14h-2.14v-4.444h-2.14v-2.14h-2.14zm45.92 0h2.14v2.14h6.583v-6.42H72.27zm-59.087 0h2.14v-2.14h-2.14zm39.336 0h2.14v-2.14h-2.14zm13.167 0h2.14v-2.14h-2.14zm8.724 0h4.443v-2.14H74.41zm-26.17 2.14h2.155l-.098-2.058-2.057-.098zm-21.945.11c-.06.06-.11 2.06-.11 4.444v4.334h2.304v2.14h2.14v-2.14h-2.14v-2.14h2.14v-4.444h-2.14v-2.304h-1.042c-.573 0-1.092.05-1.152.11m37.162.097c-.045.118-.062 1.62-.038 3.337l.045 3.122h6.584v-6.584l-3.254-.044c-2.554-.035-3.273.001-3.337.17m-45.83 2.113 2.057-.098.098-2.057h-2.155zM.016 80.984h15.306V65.676H.016zM50.38 67.816h2.14v-2.14h-2.14zm15.306 0h2.14v-2.14h-2.14zm6.584 0h2.14v-2.14h-2.14zM2.238 78.762l10.945.087V67.816H2.15zm54.725-8.806h2.14v-2.14h-2.14zM4.46 76.54h6.419v-6.42h-6.42zm50.364-4.28h1.975v-2.14h-1.975zm19.586 0h2.14v-2.14h-2.14zm-34.893 4.28h1.975V74.4h-1.975zm-17.611 2.304h-4.28v2.14h6.42V76.54h-2.14zm13.167-.164h2.14v-2.14h-2.14zm-4.362 2.222L32.77 81v-2.156h-2.156zm6.502.082h2.14v-2.14h-2.14zm6.583 0h2.14v-2.14h-2.14z" fill="#EEF0F2"/></svg>',
          imageLink:
            "https://thumb.tildacdn.com/tild3235-6135-4138-b865-346162663830/-/format/webp/cert20000.png",
        },
      },
    },
  ],
  reviewsGallery: {
    summer: [
      "https://thumb.tildacdn.com/tild3564-3765-4235-a636-623162323762/-/format/webp/600A3825.png",
      "https://thumb.tildacdn.com/tild3762-6630-4139-a563-373839653165/-/format/webp/rom3.jpg",
      "https://thumb.tildacdn.com/tild3938-6531-4430-b532-646337666664/-/format/webp/kid1.jpg",
      "https://thumb.tildacdn.com/tild6366-3066-4538-b735-656366366266/-/format/webp/friends5.JPG",
    ],
    winter: [
      "https://thumb.tildacdn.com/tild3634-3464-4034-a138-373736306532/-/format/webp/1.jpg",
      "https://thumb.tildacdn.com/tild3261-3435-4138-a533-643166313830/-/format/webp/7.jpg",
      "https://thumb.tildacdn.com/tild3164-6438-4530-b061-653762623030/-/format/webp/about1.jpg",
      "https://thumb.tildacdn.com/tild3466-3738-4238-a662-613531393237/-/format/webp/20perc.jpg",
    ],
  },
  videos: {
    summer: {
      vertical: {
        cover:
          "https://thumb.tildacdn.com/tild3739-3438-4835-b765-663831646262/-/format/webp/m_preview.png",
        videoLink:
          "https://player.vimeo.com/video/998823331?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;loop=1&amp;autoplay=1&amp;quality=1080p",
      },
      horisontal: {
        cover:
          "https://thumb.tildacdn.com/tild6262-3330-4231-b630-646639343633/-/format/webp/pc_preview.png",
        videoLink:
          "https://player.vimeo.com/video/998820940?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;loop=1&amp;autoplay=1&amp;quality=1080p",
      },
    },
    winter: {
      vertical: {
        cover:
          "https://thumb.tildacdn.com/tild3739-3438-4835-b765-663831646262/-/format/webp/m_preview.png",
        videoLink:
          "https://player.vimeo.com/video/1029734153?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;loop=1&amp;autoplay=1&amp;quality=1080p",
      },
      horisontal: {
        cover:
          "https://thumb.tildacdn.com/tild6262-3330-4231-b630-646639343633/-/format/webp/pc_preview.png",
        videoLink:
          "https://player.vimeo.com/video/1029685351?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;loop=1&amp;autoplay=1&amp;quality=1080p",
      },
    },
  },
};

// Ниже список закрывающегося на зиму. article > title

const closedForSeason = {
  winter: [
    "Бассейн",
    "Велосипед",
    "Сплав на кайаках",
    "Пруд и Сап-борды",
    "Велосипед",
    "Malbec",
    "Riesling",
    "Merlot",
  ],
  summer: [
    "Лыжи",

    "Сплав на кайаках",
    "Пруд и Сап-борды",
  ],
};

const iconLinks = {
  houses: "https://api.iconify.design/hugeicons:home-13.svg",
  glamping: "https://api.iconify.design/hugeicons:tree-06.svg",
  nav: {
    left: "https://api.iconify.design/hugeicons:arrow-left-04.svg",
    right: "https://api.iconify.design/hugeicons:arrow-right-04.svg",
  },
};
