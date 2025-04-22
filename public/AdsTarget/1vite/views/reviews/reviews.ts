type review = {
	name: string;
	company: {
		name: string;
		link?: string;
		position?: string;
	};
	avatar: string;
	content: string | string[];
};

const reviews: review[] = [
	// Денис Крейцберг
	{
		name: "Денис Крейцберг",
		company: {
			name: "Берг тур",
			link: "http://berg-tour.ru",
			position: "Генеральный директор",
		},
		avatar:
			"https://thumb.tildacdn.com/tild3461-3039-4932-b032-326238666436/-/format/webp/Screenshot_2022-08-2.png.webp",
		content:
			"Компания «Берг тур» благодарна за многолетнее сотрудничество., отличные результаты и качественную работу. Спасибо большое!",
	},
	// Алексей Варников
	{
		name: "Алексей Варников",
		company: {
			name: "HeadHunter",
			link: "https://hh.ru",
			position: "Руководитель направления массового подбора",
		},
		avatar:
			"https://thumb.tildacdn.com/tild3330-6265-4661-b234-326130383063/-/format/webp/z6SvuwFPyHDzd12pXhYl.jpeg.webp",
		content: [
			"Для нас с коллегами в hh.ru главным критерием было чтобы у подрядчика был опыт работы с HR тематикой и чтобы в перспективе мы могли перейти на работу по CPA модели, таких агентств России единицы.",
			"С первого же созвона мне понравился профессионализм, четкость и исполнительность. В условиях невероятной занятости с нашей стороны команда агентства сама проявляла инициативу и настойчивость в подготовке брифов и материалов, проводили все необходимые эксперименты и запуски в кратчайшие сроки.",
			"Всегда приятно работать с профессионалами, при любой возможности рекомендую коллег всем знакомым, кажется это лучший показатель качества. Спасибо команде за прекрасную работу, надеюсь на продолжение сотрудничества!",
		],
	},
	//Екатерина Агеева
	{
		name: "Екатерина Агеева",
		company: {
			name: "1715 Duplex Hotel",
			link: "https://1715hotel.ru",
			position: "Директор по развитию",
		},
		avatar:
			"https://thumb.tildacdn.com/tild3835-3234-4333-b433-333233393936/-/format/webp/2022-08-21_142619.jpg.webp",
		content: [
			"Благодарна команде за помощь в продвижении нашего отеля. Таргетинг – отличный инструмент для нераскрученного бизнеса.",
			"Благодаря совместной работе мы увеличили количество подписчиков, сформировали лояльную аудиторию в иг. Большим удивлением для нас было, когда гости бронировали отель непосредственно в переписке в иг. Нас стали замечать блогеры и предлагать сотрудничество. Объём бронирования увеличивался в период успешных кампаний.",
			"Поддержка соцсетей таргетингом – обязательный этап, который я рекомендую пройти. В этом отношении AdsTarget окажет профессиональную поддержку.",
		],
	},
	// Евгений Калатушкин
	{
		name: "Евгений Калатушкин",
		company: {
			name: "OSEO",
			link: "https://oseo.ru/",
			position: "Генеральный директор",
		},
		avatar:
			"https://thumb.tildacdn.com/tild3862-6333-4232-a136-653236356539/-/format/webp/uOc2OOiG5cU.jpg.webp",
		content: [
			"Более пяти лет работаем с AdsTarget. За это время сформировались крепкие дружеские отношения подкреплённые постоянными положительными эмоциями от сотрудничества.",
			"Более 100 успешно реализованных проектов, более 10 000 запущенных рекламных компаний, более 30 млн бюджета на рекламные компании. Спасибо большое. Рекомендую как лучшего Social Media Marketing Specialist!",
		],
	},
	// Samuel Gebries
	{
		name: "Samuel Gebries",
		company: {
			name: "Blue Sky Hotel",
			position: "CEO",
		},
		avatar:
			"https://thumb.tildacdn.com/tild3331-3432-4265-b834-653561396236/-/format/webp/photo_2023-05-01_2rr.jpg.webp",
		content: [
			"I want to share my experience working with the AdsTarget team. When we were looking for an agency to promote our hotel, our main goal was to find professionals with experience in the field.",
			"In the course of work, AdsTarget employees promptly answered all questions and offered various promotion strategies, as well as recommendations for improving performance. We also recieved mini reports every week, which allowed us to control the process and direction of advertising.",
		],
	},
	// Ярослав Золотарев
	{
		name: "Ярослав Золотарев",
		company: {
			name: "Курортный отель «Сосновый бор»",
			link: "https://sosnovyborhotel.ru/",
			position: "Генеральный директор",
		},
		avatar:
			"https://thumb.tildacdn.com/tild3133-3531-4534-b739-306137393733/-/format/webp/IMG_20230831_155100.jpg.webp",
		content: [
			"Благодарен команде AdsTarget за результативную поддержку продаж, сотрудничаем с компанией более 1 года. Команда всегда на связи, отвечает оперативно, предлагают свои решения.",
			"Очень удобно, что оказывается полный спектр услуг - реклама на разных площадках, подготовка посадочных страниц, ведение соц. сетей, создание контента. Спасибо команде AdsTarget!",
		],
	},
	
];
