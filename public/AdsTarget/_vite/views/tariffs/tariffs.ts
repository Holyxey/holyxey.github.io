import tariffs from "./tariffs_list";

const tariffs_node = document.getElementById("tariffs") as HTMLDivElement;

if (tariffs_node) {
	const header = document.createElement("h1");
	header.className = "text-h2";
	header.innerText = "Тарифы";
	tariffs_node.appendChild(header);

	const tariffs_container = document.createElement("div");
	tariffs_container.className = "group/container flex! gap-4! flex-wrap!";

	for (const t of tariffs) {
		const art = document.createElement("article");
		art.id = "tariff-" + t.tag.trim();
		art.className =
			"group/article bg-white! group-hover/container:opacity-50! group-hover/container:hover:opacity-100! flex-1! min-w-50! rounded-xl! shadow-md! flex! flex-col! text-stone-600!  cursor-pointer! transition-all! hover:scale-101! hover:shadow-xl! active:scale-98! active:shadow-none";
		art.onclick = () => (location.hash = "#popup:tariff-web");

		// Cover
		function setCover() {
			const cover = document.createElement("img");
			cover.src = t.cover;
			cover.role = "banner";
			cover.alt = `Обложка тарифа '${t.name}' услуги аренды сотрудника AdsTarget`;
			cover.className =
				"max-w-full! loading-lazy! max-h-20! object-cover! object-center! rounded-xl! transition-all! group-hover/article:-translate-y-1";

			return cover;
		}

		// Titles
		function setTitles() {
			const node = document.createElement("div");
			node.className = "py-2! px-4!";

			const title_tag = document.createElement("span");
			title_tag.className = "text-sm! opacity-50!";
			title_tag.textContent = "Тариф";

			const title_name = document.createElement("h3");
			title_name.className = "m-0! p-0!";
			title_name.textContent = t.name;

			node.append(title_tag, title_name);

			return node;
		}

		// Conditions
		function setConditions() {
			const node = document.createElement("div");
			node.className =
				"p-4! mb-2! flex-1! flex! gap-2! flex-col! border-y! border-neutral-200!";

			const hours = document.createElement("div");
			hours.innerHTML = `<p class="m-0! p-0!"><b>${t.hours} часов</b>/мес на задачи</p>`;

			const hour_cost = document.createElement("div");
			hour_cost.innerHTML = `<p class="m-0! p-0!"><b>
					${Intl.NumberFormat("ru-RU", {
						style: "currency",
						currency: "RUB",
						maximumFractionDigits: 0,
					}).format(t.price / t.hours)}
				</b> стоимость доп. часа</p>`;

			const tracking = document.createElement("div");
			tracking.innerHTML = `<p class="m-0! p-0!"><b>Постоянный учет</b> времени</p>`;

			const time_transfering = document.createElement("div");
			time_transfering.innerHTML = `<p class="m-0! p-0!"><b>Перенос до ${t.time_transfering}</b> неиспользованных часов на следующий месяц</p>`;

			node.appendChild(hours);
			node.appendChild(hour_cost);
			if (t.time_transfering) {
				node.appendChild(time_transfering);
			}
			node.appendChild(tracking);
			return node;
		}

		// Button
		function setButton() {
			const button = document.createElement("button");
			button.className =
				"button overflow-hidden text-white! bg-pink! text-center! h-12! m-2! mt-auto!";

			const buttonTextPrice = `От ${Intl.NumberFormat("ru-RU", {
				style: "currency",
				currency: "RUB",
				maximumFractionDigits: 0,
			}).format(t.price)}`;

			button.append(buttonTextPrice);
			return button;
		}

		//
		art.append(setCover(), setTitles(), setConditions(), setButton());

		//
		tariffs_container.appendChild(art);
	}

	tariffs_node.appendChild(tariffs_container);
}
