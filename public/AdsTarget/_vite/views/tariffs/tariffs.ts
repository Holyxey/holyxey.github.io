import tariffs from "./tariffs_list";

const tariffs_node = document.getElementById("tariffs") as HTMLDivElement;

export function renderTariffs() {
	if (tariffs_node) {
		const tariffs_container = document.createElement("div");
		tariffs_container.className = "group/container flex! gap-4! flex-wrap!";

		for (const t of tariffs) {
			const art = document.createElement("article");
			art.id = "tariff-" + t.tag.trim();
			art.className =
				"group/article bg-white! group-hover/container:grayscale-100! group-hover/container:hover:grayscale-0! flex-1! min-w-50! rounded-xl! shadow-md! flex! flex-col! text-stone-600!  cursor-pointer! transition-all! hover:scale-101! hover:shadow-xl! active:scale-98! active:shadow-none";
			art.onclick = () =>
				(art.querySelector("a") as HTMLAnchorElement)?.click();

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

				const title_name = document.createElement("h4");
				title_name.className = "m-0! p-0! text-xl! text-stone-900!";
				title_name.textContent = t.name;

				node.append(title_tag, title_name);

				return node;
			}

			// Conditions
			function setConditions() {
				const node = document.createElement("div");
				node.className =
					"p-4! mb-2! flex-1! flex! gap-2! flex-col! border-y! border-stone-200!";

				const hours = document.createElement("div");
				hours.innerHTML = `<p class="m-0! p-0!"><b>${t.hours} часов</b>/мес на задачи</p>`;

				const tracking = document.createElement("div");
				tracking.innerHTML = `<p class="m-0! p-0!"><b>Постоянный учет</b> времени</p>`;

				const time_transfering = document.createElement("div");
				time_transfering.innerHTML = `<p class="m-0! p-0!"><b>Перенос до ${t.time_transfering}</b> неиспользованных часов на следующий месяц</p>`;

				node.appendChild(hours);
				if (t.time_transfering) {
					node.appendChild(time_transfering);
				}
				node.appendChild(tracking);
				return node;
			}

			// Button
			function setButton() {
				const button = document.createElement("a");
				button.role = "button";
				button.href = "#popup:tariff-web";
				button.className =
					"relative! button group/button overflow-hidden! h-5! text-white! bg-pink! text-center! m-2! mt-auto!";

				const buttonTextHour = document.createElement("span");
				buttonTextHour.innerText = `${Intl.NumberFormat("ru-RU", {
					style: "currency",
					currency: "RUB",
					maximumFractionDigits: 0,
				}).format(t.price / t.hours)} / час`;

				const buttonTextMonth = document.createElement("span");
				buttonTextMonth.innerText = `${Intl.NumberFormat("ru-RU", {
					style: "currency",
					currency: "RUB",
					maximumFractionDigits: 0,
				}).format(t.price)} / месяц`;

				[buttonTextHour, buttonTextMonth].forEach(el =>
					el.classList.add(
						"absolute!",
						"-translate-x-1/2!",
						"left-1/2!",
						"transition-all!",
					),
				);
				buttonTextHour.classList.add(
					"top-1/2!",
					"translate-y-1/2!",
					"opacity-0!",
					"group-hover/article:opacity-100!",
					"group-hover/article:-translate-y-1/2!",
				);
				buttonTextMonth.classList.add(
					"bottom-1/2!",
					"translate-y-1/2!",
					"opacity-100!",
					"group-hover/article:opacity-0!",
					"group-hover/article:-translate-y-1/2!",
				);

				button.append(buttonTextHour, buttonTextMonth);
				return button;
			}

			// Additional hour price
			function setAdditionalHourPrice() {
				const span = document.createElement("div");
				span.className = "text-sm! opacity-50!";
				span.innerHTML = `<p class="m-0! p-2! text-center!"><b>
			${Intl.NumberFormat("ru-RU", {
				style: "currency",
				currency: "RUB",
				maximumFractionDigits: 0,
			}).format(t.additional_hour_price)}
			</b> за час сверх пакета</p>`;

				return span;
			}

			//
			art.append(
				setCover(),
				setTitles(),
				setConditions(),
				setButton(),
				setAdditionalHourPrice(),
			);

			//
			tariffs_container.appendChild(art);
		}

		tariffs_node.appendChild(tariffs_container);
	}
}
