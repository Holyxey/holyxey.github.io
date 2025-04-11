export type Tariff = {
	tag: "standart" | "extended" | "maximum";
	name: string;
	hours: number;
	cover: string;
	price: number;
	time_tracking?: boolean;
	time_transfering?: number;
};

const tariffs: Tariff[] = [
	{
		tag: "standart",
		name: "Стандарт",
		hours: 5,
		cover:
			"https://thumb.tildacdn.com/tild3431-6130-4366-b065-623133363635/-/format/webp/pexels-photo-1038001.jpeg",
		price: 15000,
		time_tracking: true,
	},
	{
		tag: "extended",
		name: "Расширенный",
		hours: 10,
		cover:
			"https://thumb.tildacdn.com/tild6536-3162-4262-b562-326632653335/-/format/webp/pexels-photo-2911521.jpeg",
		price: 27000,
		time_tracking: true,
		time_transfering: 2,
	},
	{
		tag: "maximum",
		name: "Максимум",
		hours: 30,
		cover:
			"https://thumb.tildacdn.com/tild6636-3031-4530-b533-666435666463/-/format/webp/sky-space-dark-galax.jpg",
		price: 75000,
		time_tracking: true,
		time_transfering: 5,
	},
];

export default tariffs;
