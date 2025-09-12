type House = {
  title: string;
  description: string | string[];
  images: {
    summer: string[];
    winter?: string[];
  };
  moduleLink?: string;
  params: {
    square: number;
    guests_count: number;
  };
};

export const houses: House[] = [
  // title: 'Валенсия',
  {
    title: 'Валенсия',
    description: [
      'Шестиместный уютный домик — Валенсия.',
      'В доме на 6-х человек с большим панорамными окнами есть 2 спальни, а также кухня-гостиная с раскладывающимся диваном.',
      'В домике есть оборудованная кухня с холодильником и микроволновкой, санузел с душем, терраса с мебелью и мангальной зоной.',
    ],
    images: {
      summer: [
        'https://thumb.tildacdn.com/tild3463-3464-4138-b262-653733383935/-/format/webp/Valency_4.jpeg.webp',
        'https://thumb.tildacdn.com/tild3765-6134-4735-a239-653235376466/-/format/webp/Valency_12.jpeg.webp',
        'https://thumb.tildacdn.com/tild6563-3035-4664-b635-383065376561/-/format/webp/Valency_3.jpeg.webp',
        'https://thumb.tildacdn.com/tild3234-3265-4131-b330-633063336333-/format/webp/Valency_1.jpeg.webp',
        'https://thumb.tildacdn.com/tild6365-3238-4561-b231-636666356531/-/format/webp/Valency_2.jpeg.webp',
        'https://thumb.tildacdn.com/tild3833-6566-4730-b462-313863333935/-/format/webp/Valency_5.jpeg.webp',
        'https://thumb.tildacdn.com/tild3464-6239-4234-b565-623131376238/-/format/webp/Valency_6.jpeg.webp',
        'https://thumb.tildacdn.com/tild3739-3639-4464-b536-396661353061/-/format/webp/Valency_7.jpeg.webp',
        'https://thumb.tildacdn.com/tild3765-6464-4064-b966-613234663865/-/format/webp/Valency_8.jpeg.webp',
        'https://thumb.tildacdn.com/tild3739-3361-4235-b063-313130363562/-/format/webp/Valency_9.jpeg.webp',
        'https://thumb.tildacdn.com/tild3633-3338-4366-b065-343633616633/-/format/webp/Valency_11.jpeg.webp',
        'https://thumb.tildacdn.com/tild6565-3766-4232-b538-393337363062/-/format/webp/Valency_13.jpeg.webp',
        'https://thumb.tildacdn.com/tild3866-3333-4239-b836-653262666238/-/format/webp/Valency_14.jpeg.webp',
        'https://thumb.tildacdn.com/tild3238-3064-4862-b838-613564653330/-/format/webp/Valency_15.jpeg.webp',
        'https://thumb.tildacdn.com/tild6433-3130-4062-b361-356339396236/-/format/webp/Valency_16.jpeg.webp',
        'https://thumb.tildacdn.com/tild3965-6561-4336-b264-373337666366/-/format/webp/Valency_17.jpeg.webp',
        'https://thumb.tildacdn.com/tild3030-3961-4233-b335-323861663965/-/format/webp/Valency_18.jpeg.webp',
        'https://thumb.tildacdn.com/tild3336-3135-4831-b336-366633653832/-/format/webp/Valency_21.jpeg.webp',
        'https://thumb.tildacdn.com/tild3937-3537-4336-b830-623266383030/-/format/webp/Valency_22.jpeg.webp',
        'https://thumb.tildacdn.com/tild6137-3630-4231-a332-373961623361/-/format/webp/Valency_23.jpeg.webp',
        'https://thumb.tildacdn.com/tild3532-3831-4933-a266-666237333839/-/format/webp/Valency_24.jpeg.webp',
        'https://thumb.tildacdn.com/tild6165-6238-4761-a666-303333316537/-/format/webp/Valency_25.jpeg.webp',
        'https://thumb.tildacdn.com/tild6233-6263-4032-b766-373039616631/-/format/webp/Valency_26.jpeg.webp',
        'https://thumb.tildacdn.com/tild6338-3035-4561-b163-316363383266/-/format/webp/Valency_28.jpeg.webp',
        'https://thumb.tildacdn.com/tild3135-3232-4532-b432-373963643932/-/format/webp/Valency_29.jpeg.webp',
        'https://thumb.tildacdn.com/tild3838-6364-4161-a437-373937393430/-/format/webp/Valency_30.jpeg.webp',
      ],
      winter: [],
    },
    params: {
      square: 63,
      guests_count: 6,
    },
  },
  // title: 'Мендоза',
  {
    title: 'Мендоза',
    description: [
      'Двухместный уютный домик — Мендоза, повышенной категории (зеркальный).',
      'В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.',
    ],
    images: {
      summer: [
        'https://thumb.tildacdn.com/tild6636-3830-4365-b361-393239396233/-/format/webp/KIR_3068.jpg.webp',
        'https://thumb.tildacdn.com/tild3734-3333-4335-b235-623766363464/-/format/webp/KIR_3234.jpg.webp',
        'https://thumb.tildacdn.com/tild6264-6533-4566-b038-333564646639/-/format/webp/KIR_3064.jpg.webp',
        'https://thumb.tildacdn.com/tild3139-3865-4464-a262-626639303062/-/format/webp/Mendoza_11.jpeg.webp',
        'https://thumb.tildacdn.com/tild6633-3266-4833-b062-323538313130/-/format/webp/DSC08079.jpg.webp',
        'https://thumb.tildacdn.com/tild3963-3437-4164-a136-353865343163/-/format/webp/DSC08081.jpg.webp',
        'https://thumb.tildacdn.com/tild6430-3862-4230-b666-363337623437/-/format/webp/Mendoza_26.jpeg.webp',
        'https://thumb.tildacdn.com/tild3866-3830-4665-b936-623536663465/-/format/webp/KIR_3274.jpg.webp',
      ],
      winter: [
        'https://thumb.tildacdn.com/tild3434-3939-4165-b831-616531373261/-/format/webp/DSC08076.jpg.webp',
        'https://thumb.tildacdn.com/tild6338-3131-4939-b866-303330343831/-/format/webp/DSC08073.jpg.webp',
        'https://thumb.tildacdn.com/tild3139-3865-4464-a262-626639303062/-/format/webp/Mendoza_11.jpeg.webp',
        'https://thumb.tildacdn.com/tild3431-3530-4030-b134-316561393735/-/format/webp/DSC08075.jpg.webp',
        'https://thumb.tildacdn.com/tild6666-6236-4632-b231-336333663637/-/format/webp/DSC08080.jpg.webp',
        'https://thumb.tildacdn.com/tild6430-3862-4230-b666-363337623437/-/format/webp/Mendoza_26.jpeg.webp',
        'https://thumb.tildacdn.com/tild6131-6266-4133-a561-326364366237/-/format/webp/DSC08083.jpg.webp',
        'https://thumb.tildacdn.com/tild3963-3437-4164-a136-353865343163/-/format/webp/DSC08081.jpg.webp',
      ],
    },
    params: {
      square: 15,
      guests_count: 2,
    },
  },
  // title: 'Прованс',
  {
    title: 'Прованс',
    description: [
      'Одномодульный уютный домик — Прованс.',
      'В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.',
    ],
    images: {
      summer: [
        'https://thumb.tildacdn.com/tild3961-6162-4533-b464-633961303838/-/format/webp/5ZN_1417-HDR.jpg.webp',
        'https://thumb.tildacdn.com/tild6539-3733-4133-b338-363831333233/-/format/webp/5ZN_1511-HDR.jpg.webp',
        'https://thumb.tildacdn.com/tild3733-3435-4230-a132-333036393337/-/format/webp/5ZN_1411-HDR.jpg.webp',
        'https://thumb.tildacdn.com/tild6133-3762-4538-b638-353632313137/-/format/webp/Provance_8.jpeg.webp',
        'https://thumb.tildacdn.com/tild6630-3732-4862-b233-313065643138/-/format/webp/Provance_9.jpeg.webp',
        'https://thumb.tildacdn.com/tild6366-3633-4335-b437-326239323838/-/format/webp/5ZN_1715.jpg.webp',
        'https://thumb.tildacdn.com/tild3764-3531-4639-a333-333031353131/-/format/webp/5ZN_1788.jpg.webp',
        'https://thumb.tildacdn.com/tild6363-3936-4236-b034-383535366336/-/format/webp/5ZN_1493.jpg.webp',
      ],
      winter: [
        'https://thumb.tildacdn.com/tild3536-3939-4135-b531-383261343631/-/format/webp/DSC08053.jpg.webp',
        'https://thumb.tildacdn.com/tild6237-6330-4237-b638-363134643663/-/format/webp/KIR_5466.jpg.webp',
        'https://thumb.tildacdn.com/tild6162-6139-4137-a530-323734376339/-/format/webp/KIR_5467.jpg.webp',
        'https://thumb.tildacdn.com/tild6165-6534-4762-a435-353333323732/-/format/webp/DSC08024.jpg.webp',
        'https://thumb.tildacdn.com/tild6133-3762-4538-b638-353632313137/-/format/webp/Provance_8.jpeg.webp',
        'https://thumb.tildacdn.com/tild6630-3732-4862-b233-313065643138/-/format/webp/Provance_9.jpeg.webp',
        'https://thumb.tildacdn.com/tild6130-6264-4466-a530-633237306130/-/format/webp/KIR_5468.jpg.webp',
        'https://thumb.tildacdn.com/tild3333-6337-4432-b966-613965626164/-/format/webp/KIR_5460.jpg.webp',
      ],
    },
    params: {
      square: 15,
      guests_count: 2,
    },
  },
  // title: 'Шампань',
  {
    title: 'Шампань',
    description: [
      'Четырехместный уютный домик — Шампань.',
      'В доме на 4-х человек с большим панорамными окнами есть 2 комнаты: в одной из них находится двуспальная кровать, а в другой раздвижной диван, а также кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.',
      'Домик оборудован электрическим конвектором.',
    ],
    images: {
      summer: [
        'https://thumb.tildacdn.com/tild3363-3663-4634-b264-613966303437/-/format/webp/5ZN_2532.jpg.webp',
        'https://thumb.tildacdn.com/tild3638-3838-4033-b430-323730366234/-/format/webp/5ZN_2536.jpg.webp',
        'https://thumb.tildacdn.com/tild6135-6462-4332-b337-306532633332/-/format/webp/5ZN_2546.jpg.webp',
        'https://thumb.tildacdn.com/tild3337-6137-4636-b763-376232353831/-/format/webp/5ZN_2570.jpg.webp',
        'https://thumb.tildacdn.com/tild6166-3664-4361-b836-366133353735/-/format/webp/5ZN_2576.jpg.webp',
        'https://thumb.tildacdn.com/tild3361-6266-4634-a239-306134396661/-/format/webp/5ZN_2592.jpg.webp',
        'https://thumb.tildacdn.com/tild3161-3362-4439-a236-316363366362/-/format/webp/5ZN_2613.jpg.webp',
        'https://thumb.tildacdn.com/tild3335-6365-4564-b639-333062663937/-/format/webp/5ZN_2626.jpg.webp',
      ],
      winter: [
        'https://thumb.tildacdn.com/tild3639-6639-4634-b939-323636636462/-/format/webp/KIR_5372.jpg.webp',
        'https://thumb.tildacdn.com/tild3036-3763-4339-a164-336534386630/-/format/webp/KIR_5368.jpg.webp',
        'https://thumb.tildacdn.com/tild3839-6262-4466-b461-343132316563/-/format/webp/5ZN_2613.jpg.webp',
        'https://thumb.tildacdn.com/tild3135-3734-4462-b331-633064306531/-/format/webp/DSC08003.jpg.webp',
        'https://thumb.tildacdn.com/tild6666-6138-4131-b333-343866313037/-/format/webp/5ZN_2532_1.jpg.webp',
        'https://thumb.tildacdn.com/tild6339-6133-4432-b335-396239393063/-/format/webp/5ZN_2536.jpg.webp',
        'https://thumb.tildacdn.com/tild6661-6336-4231-b266-626564666633/-/format/webp/5ZN_2592.jpg.webp',
        'https://thumb.tildacdn.com/tild3863-6533-4139-b866-653263333730/-/format/webp/5ZN_2626.jpg.webp',
      ],
    },
    params: {
      square: 22,
      guests_count: 2,
    },
  },
  // title: 'Бургундия',
  {
    title: 'Бургундия',
    description: [
      'Одномодульный уютный домик — Бургундия.',
      'В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.',
    ],
    images: {
      summer: [
        'https://thumb.tildacdn.com/tild3734-3737-4664-a534-386234386332/-/format/webp/Bourgogne_8.jpeg.webp',
        'https://thumb.tildacdn.com/tild3166-3130-4965-a432-373332373130/-/format/webp/5ZN_1819.jpg.webp',
        'https://thumb.tildacdn.com/tild6137-6264-4630-a133-623239656131/-/format/webp/5ZN_1573.jpg.webp',
        'https://thumb.tildacdn.com/tild6565-6365-4139-b133-336630323961/-/format/webp/5ZN_1925.jpg.webp',
        'https://thumb.tildacdn.com/tild3866-6263-4563-a435-353463663330/-/format/webp/5ZN_1953.jpg.webp',
        'https://thumb.tildacdn.com/tild3333-3630-4534-a562-383736616333/-/format/webp/5ZN_2095.jpg.webp',
        'https://thumb.tildacdn.com/tild6165-6263-4563-a361-303035613136/-/format/webp/5ZN_2421.jpg.webp',
      ],
      winter: [
        'https://thumb.tildacdn.com/tild3863-3632-4537-a534-613231373433/-/format/webp/20211212_160540.jpg.webp',
        'https://thumb.tildacdn.com/tild3037-6562-4636-a364-366138316134/-/format/webp/KIR_5752.jpg.webp',
        'https://thumb.tildacdn.com/tild6534-3135-4937-b635-633931353835/-/format/webp/KIR_5748.jpg.webp',
        'https://thumb.tildacdn.com/tild3066-3566-4338-b564-663832633966/-/format/webp/5ZN_2454.jpg.webp',
        'https://thumb.tildacdn.com/tild6439-6265-4239-b165-666465323063/-/format/webp/KIR_5746.jpg.webp',
      ],
    },
    params: {
      square: 15,
      guests_count: 2,
    },
  },
  // title: 'Рейнау',
  {
    title: 'Рейнау',
    description: [
      'Одномодульный уютный домик — Рейнау.',
      'В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.',
    ],
    images: {
      summer: [
        'https://thumb.tildacdn.com/tild6136-3837-4665-b735-616235316331/-/format/webp/5ZN_1605.jpg.webp',
        'https://thumb.tildacdn.com/tild3863-3566-4731-a434-373631393132/-/format/webp/Rheingau_7.jpeg.webp',
        'https://thumb.tildacdn.com/tild6161-3961-4332-b233-363866306266/-/format/webp/Rheingau_13.jpeg.webp',
        'https://thumb.tildacdn.com/tild3337-6634-4935-a163-326132616432/-/format/webp/5ZN_1606.jpg.webp',
        'https://thumb.tildacdn.com/tild3938-3132-4335-a635-653433656233/-/format/webp/5ZN_2441.jpg.webp',
        'https://thumb.tildacdn.com/tild6639-6664-4433-a439-356338656465/-/format/webp/5ZN_2466.jpg.webp',
        'https://thumb.tildacdn.com/tild6630-6538-4465-b762-313235653334/-/format/webp/Rheingau_11.jpeg.webp',
      ],
      winter: [
        'https://thumb.tildacdn.com/tild3331-6364-4131-b461-353238653931/-/format/webp/KIR_5644.jpg.webp',
        'https://thumb.tildacdn.com/tild6239-3765-4834-b164-636466393030/-/format/webp/5ZN_1520.jpg.webp',
        'https://thumb.tildacdn.com/tild6132-3632-4830-b431-333463616664/-/format/webp/5ZN_1558.jpg.webp',
        'https://thumb.tildacdn.com/tild3061-6132-4765-b932-623633623236/-/format/webp/KIR_5651.jpg.webp',
        'https://thumb.tildacdn.com/tild6138-3334-4963-a135-383633346564/-/format/webp/KIR_5652.jpg.webp',
        'https://thumb.tildacdn.com/tild6334-6362-4639-a535-643965366538/-/format/webp/KIR_5637_1.jpg.webp',
        'https://thumb.tildacdn.com/tild6161-3364-4030-b363-303931616664/-/format/webp/5ZN_2466.jpg.webp',
        'https://thumb.tildacdn.com/tild6335-6231-4134-b437-313832303765/-/format/webp/KIR_5636.jpg.webp',
        'https://thumb.tildacdn.com/tild6138-6164-4165-b436-376464383361/-/format/webp/KIR_5635.jpg.webp',
      ],
    },
    params: {
      square: 15,
      guests_count: 2,
    },
  },
  // title: 'Тоскана',
  {
    title: 'Тоскана',
    description: [
      'Одномодульный уютный домик — Тоскана.',
      'В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.',
    ],
    images: {
      summer: [
        'https://thumb.tildacdn.com/tild3532-3038-4362-a631-653933616333/-/format/webp/5ZN_2021.jpg.webp',
        'https://thumb.tildacdn.com/tild3235-6665-4132-b135-616635376331/-/format/webp/Toskana_10.jpeg.webp',
        'https://thumb.tildacdn.com/tild3838-3133-4439-b439-666230376436/-/format/webp/Toskana_7.jpeg.webp',
        'https://thumb.tildacdn.com/tild6538-3135-4635-a237-333839303363/-/format/webp/Toskana_8.jpeg.webp',
        'https://thumb.tildacdn.com/tild6231-3036-4036-b364-643730343736/-/format/webp/5ZN_1918-HDR.jpg.webp',
        'https://thumb.tildacdn.com/tild6637-3638-4539-a334-313234323162/-/format/webp/5ZN_2483.jpg.webp',
        'https://thumb.tildacdn.com/tild3837-6338-4530-b131-333937336535/-/format/webp/5ZN_2027.jpg.webp',
      ],
      winter: [
        'https://thumb.tildacdn.com/tild3939-3864-4263-a439-643564633439/-/format/webp/DSC08058.jpg.webp',
        'https://thumb.tildacdn.com/tild6265-6366-4566-a439-653930343434/-/format/webp/KIR_5601.jpg.webp',
        'https://thumb.tildacdn.com/tild6634-6161-4564-b237-623565383563/-/format/webp/DSC08015.jpg.webp',
        'https://thumb.tildacdn.com/tild3961-3836-4363-a635-316533303763/-/format/webp/5ZN_2483.jpg.webp',
        'https://thumb.tildacdn.com/tild3838-3262-4364-b632-646265303264/-/format/webp/DSC08020.jpg.webp',
        'https://thumb.tildacdn.com/tild6166-6138-4437-b433-323261366166/-/format/webp/KIR_5587.jpg.webp',
      ],
    },
    params: {
      square: 15,
      guests_count: 2,
    },
  },
  // title: 'Бордо',
  {
    title: 'Бордо',
    description: [
      'Одномодульный уютный домик — Бордо.',
      'В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.',
    ],
    images: {
      summer: [
        'https://thumb.tildacdn.com/tild6263-6436-4338-b365-633562613833/-/format/webp/Bordeaux_8.jpeg.webp',
        'https://thumb.tildacdn.com/tild3761-3038-4561-b531-343631323431/-/format/webp/Bordeaux_5.jpeg.webp',
        'https://thumb.tildacdn.com/tild3062-6437-4539-a431-303937616539/-/format/webp/5ZN_2444.jpg.webp',
        'https://thumb.tildacdn.com/tild6430-6236-4664-a236-346432656638/-/format/webp/5ZN_2078.jpg.webp',
        'https://thumb.tildacdn.com/tild6466-3461-4636-b330-356163653834/-/format/webp/5ZN_2117-HDR.jpg.webp',
        'https://thumb.tildacdn.com/tild6239-3635-4039-b737-363362653934/-/format/webp/5ZN_2128-HDR.jpg.webp',
      ],
      winter: [
        'https://thumb.tildacdn.com/tild3865-6539-4639-b834-623639646531/-/format/webp/IMG_3370.jpeg.webp',
        'https://thumb.tildacdn.com/tild6130-3333-4635-b734-643164666466/-/format/webp/DSC08015.jpg.webp',
        'https://thumb.tildacdn.com/tild6339-3366-4237-a233-656438663238/-/format/webp/DSC08011.jpg.webp',
        'https://thumb.tildacdn.com/tild6234-6432-4061-b432-613761393733/-/format/webp/KIR_5391.jpg.webp',
        'https://thumb.tildacdn.com/tild3534-3632-4039-b837-313362613363/-/format/webp/IMG_3371.jpeg.webp',
        'https://thumb.tildacdn.com/tild3739-6535-4065-a334-613531313434/-/format/webp/KIR_5431.jpg.webp',
        'https://thumb.tildacdn.com/tild3064-6364-4632-a563-343633353936/-/format/webp/KIR_5747.jpg.webp',
      ],
    },
    params: {
      square: 15,
      guests_count: 2,
    },
  },
  // title: 'Апулия',
  {
    title: 'Апулия',
    description: [
      'Двухместный уютный домик — Апулия, повышенной категории.',
      'В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.',
    ],
    images: {
      summer: [
        'https://thumb.tildacdn.com/tild3236-6666-4835-b131-633436663939/-/format/webp/IMG_1647.jpg.webp',
        'https://thumb.tildacdn.com/tild3032-3838-4362-b863-356233313433/-/format/webp/IMG_1660.jpg.webp',
        'https://thumb.tildacdn.com/tild3365-6239-4036-b664-653765363765/-/format/webp/Apulia_2.jpeg.webp',
        'https://thumb.tildacdn.com/tild6162-3664-4836-a132-626338663362/-/format/webp/Apulia_13.jpeg.webp',
        'https://thumb.tildacdn.com/tild3361-3231-4636-a236-613633383932/-/format/webp/Apulia_15.jpeg.webp',
        'https://thumb.tildacdn.com/tild6530-6437-4163-a139-326563313366/-/format/webp/Apulia_19.jpeg.webp',
        'https://thumb.tildacdn.com/tild3136-3132-4031-b664-636431653738/-/format/webp/Apulia_21.jpeg.webp',
        'https://thumb.tildacdn.com/tild3535-6439-4162-b530-353434623762/-/format/webp/IMG_1673.jpg.webp',
        'https://thumb.tildacdn.com/tild3035-6161-4361-b262-646630336538/-/format/webp/KIR_3061.jpg.webp',
        'https://thumb.tildacdn.com/tild3736-3764-4566-b664-666265663061/-/format/webp/IMG_1675.jpg.webp',
        'https://thumb.tildacdn.com/tild3430-6136-4831-a662-613432323963/-/format/webp/KIR_3062.jpg.webp',
      ],
      winter: [
        'https://thumb.tildacdn.com/tild6232-3666-4963-a464-363263633338/-/format/webp/DSC08067.jpg.webp',
        'https://thumb.tildacdn.com/tild6465-3862-4465-b535-373037333533/-/format/webp/DSC08063.jpg.webp',
        'https://thumb.tildacdn.com/tild3835-3136-4433-b362-663334383863/-/format/webp/DSC08039.jpg.webp',
        'https://thumb.tildacdn.com/tild6237-6433-4937-a633-343064323939/-/format/webp/DSC08040.jpg.webp',
        'https://thumb.tildacdn.com/tild3564-6562-4865-a566-333336393266/-/format/webp/DSC08068.jpg.webp',
        'https://thumb.tildacdn.com/tild6364-6236-4961-b836-376539613131/-/format/webp/KIR_3133.jpg.webp',
      ],
    },
    params: {
      square: 15,
      guests_count: 2,
    },
  },
  // title: 'Лаура',
  {
    title: 'Лаура',
    description: [
      'Двухместный уютный домик — Лаура, повышенной категории.',
      'В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.',
    ],
    images: {
      summer: [
        'https://thumb.tildacdn.com/tild3163-6164-4838-b635-323066326164/-/format/webp/KIR_3063.jpg.webp',
        'https://thumb.tildacdn.com/tild6437-3661-4033-b763-363636313739/-/format/webp/IMG_1666.jpg.webp',
        'https://thumb.tildacdn.com/tild3632-3033-4961-b537-616633393739/-/format/webp/Laura_1.jpeg.webp',
        'https://thumb.tildacdn.com/tild3630-6534-4339-a238-353834626631/-/format/webp/Laura_17.jpeg.webp',
        'https://thumb.tildacdn.com/tild6430-3635-4333-a438-353632326533/-/format/webp/Laura_7.jpeg.webp',
        'https://thumb.tildacdn.com/tild3733-6639-4062-a432-353437316663/-/format/webp/Laura_10.jpeg.webp',
        'https://thumb.tildacdn.com/tild6335-6433-4038-a531-333536363031/-/format/webp/Laura_13.jpeg.webp',
        'https://thumb.tildacdn.com/tild3031-3232-4431-b537-303731386566/-/format/webp/DSC04369.jpg.webp',
        'https://thumb.tildacdn.com/tild3463-6664-4334-a163-383962656332/-/format/webp/DSC08033.jpg.webp',
        'https://thumb.tildacdn.com/tild3764-6539-4062-b061-623632653833/-/format/webp/DSC04378.jpg.webp',
        'https://thumb.tildacdn.com/tild6230-3133-4035-b865-373233306530/-/format/webp/DSC08032.jpg.webp',
      ],
      winter: [
        'https://thumb.tildacdn.com/tild3730-6364-4461-b235-393839613434/-/format/webp/DSC08062.jpg.webp',
        'https://thumb.tildacdn.com/tild3463-6664-4334-a163-383962656332/-/format/webp/DSC08033.jpg.webp',
        'https://thumb.tildacdn.com/tild6230-3133-4035-b865-373233306530/-/format/webp/DSC08032.jpg.webp',
        'https://thumb.tildacdn.com/tild3137-6566-4265-a132-386464613535/-/format/webp/DSC08029.jpg.webp',
        'https://thumb.tildacdn.com/tild3935-3634-4331-b336-313333623539/-/format/webp/DSC08031.jpg.webp',
        'https://thumb.tildacdn.com/tild3163-6336-4334-b537-323534323865/-/format/webp/DSC08028.jpg.webp',
      ],
    },
    params: {
      square: 15,
      guests_count: 2,
    },
  },
  // title: 'Этна',
  {
    title: 'Этна',
    description: [
      'Двухместный уютный домик — Этна, повышенной категории.',
      'В доме с большим панорамным окном есть двуспальная кровать, кухня, холодильник и санузел с душем, есть терраса с мебелью и все принадлежности для барбекю.',
    ],
    images: {
      summer: [
        'https://thumb.tildacdn.com/tild3836-3937-4732-a536-626634396436/-/format/webp/Etna_33.jpeg.webp',
        'https://thumb.tildacdn.com/tild6132-6330-4630-b061-613733313137/-/format/webp/IMG_1679.jpg.webp',
        'https://thumb.tildacdn.com/tild3034-3139-4130-a230-396539373239/-/format/webp/IMG_1911.jpg.webp',
        'https://thumb.tildacdn.com/tild3436-3262-4361-a131-363833653831/-/format/webp/Etna_31.jpeg.webp',
        'https://thumb.tildacdn.com/tild3964-3736-4838-b835-303965353034/-/format/webp/Etna_34.jpeg.webp',
        'https://thumb.tildacdn.com/tild3137-3735-4266-b131-646637326335/-/format/webp/KIR_3098.jpg.webp',
        'https://thumb.tildacdn.com/tild3062-6432-4133-a562-383264363065/-/format/webp/KIR_3101.jpg.webp',
        'https://thumb.tildacdn.com/tild3133-6138-4436-a335-613266343636/-/format/webp/KIR_3102.jpg.webp',
      ],
      winter: [
        'https://thumb.tildacdn.com/tild3561-3366-4136-b430-376634626535/-/format/webp/DSC08065.jpg.webp',
        'https://thumb.tildacdn.com/tild3832-6465-4334-a162-333431326135/-/format/webp/DSC08035.jpg.webp',
        'https://thumb.tildacdn.com/tild3932-3036-4139-b235-333637656537/-/format/webp/DSC08037.jpg.webp',
        'https://thumb.tildacdn.com/tild6565-6465-4330-b134-616637343433/-/format/webp/KIR_3100.jpg.webp',
        'https://thumb.tildacdn.com/tild3537-3737-4564-a239-326537333662/-/format/webp/DSC08064.jpg.webp',
        'https://thumb.tildacdn.com/tild3066-3334-4537-b331-316336653164/-/format/webp/DSC08066.jpg.webp',
      ],
    },
    params: {
      square: 15,
      guests_count: 2,
    },
  },
];
