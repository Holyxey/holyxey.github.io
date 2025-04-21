import { Case } from "../cases/cases_types";
import openVideoPopup from "./video_popup";
import filtering from "./filtering";
import cases_json from "../cases/cases_list.json";

const cases_list = cases_json as Case[];

const cases_node: HTMLElement | null = document.getElementById("cases");

export function renderCases() {
	if (cases_node) {
		const category = cases_node.getAttribute(
			"data-category",
		)! as Case["category"];

		const maximum_items: string | null = cases_node.getAttribute("data-max");
		const show_button: string | null =
			cases_node.getAttribute("data-button-all");
		const filter_node: string | null = cases_node.getAttribute("data-filter");

		const cases_wrapper = document.createElement("section");
		const cases_ul = document.createElement("ul");

		cases_wrapper.classList.add("relative!");

		cases_wrapper.append(cases_ul);
		cases_node.append(cases_wrapper);

		cases_ul.classList.add(
			"relative!",
			"list-none!",
			"m-0!",
			"p-0!",
			"grid!",
			"grid-cols-1!",
			"gap-4!",
			"gap-y-8!",
			"text-balance!",

			"xl:px-0!",
		);
		cases_ul.classList.add("sm:grid-cols-2!");
		cases_ul.classList.add("md:grid-cols-3!", "gap-y-16!", "gap-8!");

		// Анимация кейса для мобильного экрана
		const stylesObserver = {
			cover: [
				"-rotate-x-5!",

				"scale-97",
				"object-center!",
				"rounded-3xl!",
				"shadow-md!",
				"shadow-blue-400!",
			],
			link: [
				"rotate-x-5!",
				"scale-110!",
				"-translate-y-5!",
				"bg-pink!",
				"shadow-none!",
			],
		};
		const mobile_observer = new IntersectionObserver(
			(elements, observer) => {
				if (window.innerWidth >= 600) observer.disconnect();

				elements.forEach(el => {
					const cover = el.target.querySelector("img")!;
					const button = el.target.querySelector("a")!;
					if (el.isIntersecting) {
						cover.classList.add(...stylesObserver.cover);
						button.classList.add(...stylesObserver.link);
					} else {
						cover.classList.remove(...stylesObserver.cover);
						button.classList.remove(...stylesObserver.link);
					}
				});
			},
			{
				threshold: 0.8,
			},
		);

		//
		const cases_to_render = cases_list.filter(c => c.category === category);

		function render_case(c: Case) {
			const fragment = document.createDocumentFragment();

			const li = document.createElement("li");
			const title = document.createElement("p");
			const descr = document.createElement("span");
			const cover = document.createElement("img");
			const gif = document.createElement("img");
			const link = document.createElement("a");

			const figure = document.createElement("figure");
			const figcaption = document.createElement("figcaption");

			//
			figure.classList.add("p-0!", "m-0!");
			const caseStyles = {
				case: [
					"group",
					"animate-show!",
					"flex!",
					"mt-auto!",
					"flex-col!",
					"relative!",
					"cursor-pointer!",
					"gap-2!",
					"transition-all!",
					"text-stone-800!",
					"perspective-normal!",

					"active:scale-90!",
				],
				descr: [
					"text-stone-600!",
					"text-sm!",
					"block!",

					"transition-all!",
					"duration-400!",
					"delay-100!",
					"group-hover:-translate-y-2",
					"group-hover:opacity-0!",
				],
				title: [
					"p-0!",
					"m-0!",
					"text-xl!",
					"line-clamp-2!",
					"font-medium!",

					"transition-all!",
					"duration-700!",
					"group-hover:-translate-y-4!",
				],
				cover: [
					"aspect-1/1!",
					"w-full!",
					"object-cover!",
					"object-top",
					"rounded!",
					"z-10!",

					"transition-all!",
					"delay-50!",
					"duration-700!",

					"group-hover:scale-110!",
					"group-hover:-rotate-x-2!",
					"group-hover:object-center!",
					"group-hover:rounded-4xl!",
					"group-hover:shadow-2xl!",
				],
				link: [
					"text-center!",
					"w-fit",
					"shadow-md!",
					"py-2!",
					"px-4!",
					"decoration-none!",
					"rounded-md!",
					"bg-stone-700!",
					"text-white!",
					"outline-2!",
					"z-20!",
					"no-underline!",

					"transition-all!",
					"delay-100!",
					"duration-800!",

					"group-hover:rotate-x-5!",
					"group-hover:scale-110!",
					"group-hover:-translate-y-5!",
					"group-hover:bg-pink!",
					"group-hover:shadow-none!",

					"hover:delay-0!",
					"hover:rotate-y-2!",
					"hover:bg-blue-600!",
					"hover:scale-110!",
				],
			};

			if (c.gif) {
				gif.src = c.gif;
				gif.onload = () => {
					li.addEventListener(
						"mouseover",
						() => (cover.src = c.gif || c.cover),
					);
					li.addEventListener("mouseleave", () => (cover.src = c.cover));
				};
			}

			li.classList.add(...caseStyles.case);
			li.setAttribute("data-category", c.category);

			descr.textContent = c.title;
			descr.classList.add(...caseStyles.descr);

			title.textContent = c.name;
			title.classList.add(...caseStyles.title);

			cover.src = c.cover;
			cover.loading = "lazy";
			cover.classList.add(...caseStyles.cover);

			link.href = c.link + "?utm_source=AdsTarget";
			link.textContent = c.link.startsWith("/") ? "Подробнее" : "Результат";
			link.target = "_blank";
			link.classList.add(...caseStyles.link);
			link.title = c.name;

			// videoproduction
			if (c.category === "videoproduction") {
				link.textContent = "Воспроизвести";
				link.removeAttribute("href");
				link.removeAttribute("target");
			}

			//
			figcaption.append(descr, title);
			li.append(figcaption, cover, link);
			li.appendChild(figure);
			fragment.appendChild(figure);
			cases_ul.append(li);

			//
			li.addEventListener("click", () => {
				if (c.category === "videoproduction") {
					openVideoPopup(c.link);
				} else link.click();
			});
			if (window.innerWidth < 600) mobile_observer.observe(li);
		}

		function render_show_button() {
			const button = document.createElement("a");

			button.href = "/cases";
			button.textContent = "Посмотреть все";
			button.classList.add(
				"sticky!",
				"block!",
				"font-geometria!",
				"bottom-2!",
				"left-4!",
				"right-4!",
				"mx-4!",
				"text-center!",
				"text-black!",
				"px-8!",
				"py-4!",
				"rounded-lg!",
				"z-30!",
				"bg-blue!",
				"no-underline!",
				"shadow-md!",
				"mt-8!",

				"md:static!",
				"md:w-fit!",
				"md:ml-auto!",
			);

			cases_wrapper.append(button);
		}

		if (category !== "all") {
			if (maximum_items) {
				for (let i = 0; i < Number(maximum_items); i++) {
					render_case(cases_to_render[i]);
				}
			} else cases_to_render.forEach(c => render_case(c));
		} else {
			if (maximum_items) {
				for (let i = 0; i < Number(maximum_items); i++) {
					render_case(cases_list[i]);
				}
			} else
				cases_list.forEach(c => {
					render_case(c);
				});
		}

		if (filter_node) filtering(cases_wrapper);
		if (show_button) render_show_button();
	}
}
