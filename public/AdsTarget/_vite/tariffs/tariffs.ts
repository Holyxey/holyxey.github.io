import tariffs_list from "./tariffs.json";

const tariffs_node = document.getElementById("tariffs");

export type Tariff = {
	tag: string;
	name: string;
	hours: number;
	price: number;
	time_tracking: boolean;
	time_transfering?: number;
	hour_price?: number;
	addition_hour_price?: number;
};

if (tariffs_node) {
	const list = tariffs_list as Tariff[];

	// Генерация HTML для каждого тарифа
	list.forEach(tariff => {
		const tariffElement = document.createElement("div");
		tariffElement.className = "tariff-card border p-4 rounded shadow";

		tariffElement.innerHTML = `
            <h2 class="text-xl font-bold">${tariff.name}</h2>
            <p>Часы: ${tariff.hours}</p>
            <p>Цена: ${tariff.price} ₽</p>
            <p>Трекинг времени: ${tariff.time_tracking ? "Да" : "Нет"}</p>
            ${tariff.time_transfering ? `<p>Перенос времени: ${tariff.time_transfering} ч.</p>` : ""}
        `;

		tariffs_node.appendChild(tariffElement);
	});
}
