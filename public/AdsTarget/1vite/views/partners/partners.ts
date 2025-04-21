import { partners_list } from "./partners_list";
const partners_node: HTMLElement | null = document.getElementById("partners");

export function renderPartners(): void {
	if (!partners_node) {
		console.log("Partners node not found");
	} else {
		const list_wrapper = document.createElement("div");
		const list_node = document.createElement("div");

		partners_node.appendChild(list_wrapper);
		list_wrapper.appendChild(list_node);

		list_node.className =
			"grid! grid-flow-col! w-full! grid-rows-2! gap-8! max-w-6xl! mx-auto! overflow-x-auto! overflow-y-hidden! scrollbar! snap-x! static! rounded-xl! ";
		list_node.classList.add("xl:grid-rows-1!");

		list_wrapper.classList.add("relative!", "px-5!", "flex!", "flex-col!");

		const partners_items: Element[] = [];

		// Рендер партнеров + вешаем обсервер
		function render(): void {
			if (!list_node) return;

			// observer
			const partners_observer = new IntersectionObserver(
				visible_parnters => {
					visible_parnters.forEach(partner => {
						if (partner.isIntersecting) {
							partner.target.classList.remove(
								"opacity-10!",
								"-translate-y-2!",
								"grayscale!",
							);
							partner.target.classList.add(
								"opacity-100!",
								"translate-y-0!",
								"grayscale-0!",
							);
						} else {
							partner.target.classList.remove(
								"opacity-100!",
								"translate-y-0!",
								"grayscale-0!",
							);
							partner.target.classList.add(
								"opacity-10!",
								"-translate-y-2!",
								"grayscale!",
							);
						}
					});
				},
				{ root: list_node },
			);

			// Рендерим каждого партнера
			partners_list.forEach(p => {
				const el = document.createElement("a");
				el.href = p.link;
				el.target = "_blank";
				el.setAttribute("alt", `AdsTarget партнеры: ${p.name}`);
				el.className =
					" flex! items-center! justify-center! snap-center! transition-translate! duration-1000! hover:scale-110! ";

				const cover = document.createElement("img");
				cover.src = p.image;
				cover.className =
					" h-10! md:h-7! xl:h-10! w-fit! max-w-20! object-contain! ";

				el.append(cover);

				list_node.appendChild(el);
				partners_observer.observe(el);

				partners_items.push(el);
			});

			// рендерим навигацию
			render_nav_arrows();

			// Автоскроллинг
			let direction = 1;
			let auto_scrolling = setInterval(scrollClients, 3000);
			function scrollClients() {
				const maxScrollLeft = list_node.scrollWidth - list_node.clientWidth;

				// Прокрутка
				list_node.scrollBy({
					left: partners_items[0].clientWidth * direction,
					behavior: "smooth",
				});

				// Проверка на достижение края
				if (list_node.scrollLeft >= maxScrollLeft) {
					direction = -1; // меняем направление на влево
				} else if (list_node.scrollLeft <= 0) {
					direction = 1; // меняем направление на вправо
				}
			}
			list_wrapper.addEventListener("mouseover", () => {
				clearInterval(auto_scrolling);
			});
			list_wrapper.addEventListener("touchstart", () => {
				clearInterval(auto_scrolling);
			});
			list_wrapper.addEventListener("mouseleave", () => {
				auto_scrolling = setInterval(scrollClients, 3000);
			});
		}

		// Навигация стрелками
		function render_nav_arrows(): { prev: HTMLElement; next: HTMLElement } {
			const next_arrow = document.createElement("div");
			const prev_arrow = document.createElement("div");

			[prev_arrow, next_arrow].forEach(arrow => {
				arrow.className =
					" cursor-pointer! shadow-lg! w-7! aspect-1/1! transition-all! absolute! top-1/2! -translate-y-1/2! bg-cover! rounded-full! bg-pink! z-10! active:scale-90!";
			});

			next_arrow.className +=
				" bg-[url(https://api.iconify.design/material-symbols:arrow-right-alt-rounded.svg?color=white)]! hidden! md:block! right-2! xl:right-10!";

			prev_arrow.className +=
				" bg-[url(https://api.iconify.design/material-symbols:arrow-left-alt-rounded.svg?color=white)]! hidden! md:block! left-2! xl:left-10!";

			next_arrow.addEventListener("click", () => {
				list_node.scrollBy({
					left: list_node.clientWidth / 3,
					behavior: "smooth",
				});
			});
			prev_arrow.addEventListener("click", () => {
				list_node.scrollBy({
					left: -list_node.clientWidth / 3,
					behavior: "smooth",
				});
			});

			list_wrapper.prepend(prev_arrow);
			list_wrapper.appendChild(next_arrow);

			return { prev: prev_arrow, next: next_arrow };
		}

		render();
	}
}
