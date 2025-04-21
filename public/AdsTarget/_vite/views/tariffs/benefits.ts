type Benefit = {
	img: string;
	text: string;
};

const list: Benefit[] = [
	{
		text: "Закрепленный специалист, знакомый с вашим проектом",
		img: "https://img.freepik.com/free-photo/medium-length-shot-middle-aged-doctor-working-with-digital-tablet_1098-19299.jpg",
	},
	{
		text: "Оперативное (приоритетное) выполнение задач",
		img: "https://img.freepik.com/free-photo/medium-length-shot-middle-aged-doctor-working-with-digital-tablet_1098-19299.jpg",
	},
	{
		text: "Техническая поддержка сайта в случае любых сбоев",
		img: "https://img.freepik.com/free-photo/medium-length-shot-middle-aged-doctor-working-with-digital-tablet_1098-19299.jpg",
	},
	{
		text: "Возможность сэкономить при долгосрочной оплате",
		img: "https://img.freepik.com/free-photo/medium-length-shot-middle-aged-doctor-working-with-digital-tablet_1098-19299.jpg",
	},
	{
		text: "Прозрачное ценообразование и контроль времени через TimeCamp / Toggl",
		img: "https://img.freepik.com/free-photo/medium-length-shot-middle-aged-doctor-working-with-digital-tablet_1098-19299.jpg",
	},
];

const ul = document.getElementById("benefits-list") as HTMLUListElement;

export function renderBenefits() {
	if (ul) {
		ul.innerHTML = "";
		list.forEach(benefit => {
			const li = document.createElement("li");
			li.className =
				"border-l-pink flex flex-1/3 items-center rounded-lg border-l-4 border border-blue-100 bg-white!";
			li.innerHTML = `
        <img class="bg-blue aspect-square h-full w-20 rounded-md shadow-lg object-cover object-top" 
        src="${benefit.img}" alt="${benefit.text} | AdsTarget аутстаффинг" />
        <p class="px-4">${benefit.text}</p>
      `;
			ul.appendChild(li);
		});
	}
}
