import { People, staff_list } from "./staff_list.ts";

const staff_node: HTMLElement | null = document.getElementById("staff");

export function renderStaff(): void {
	if (staff_node) {
		const staff_wrapper = document.createElement("section");
		const staff_grid = document.createElement("ul");
		staff_wrapper.append(staff_grid);
		staff_node.appendChild(staff_wrapper);
		//

		staff_wrapper.ariaLabel = "Команда AdsTarget";

		//

		staff_grid.classList.add(
			"grid!",
			"grid-flow-row!",
			"grid-cols-2!",
			"gap-4!",
			"m-0!",
			"p-0!",
			"transition-all!",
			"list-none!",
			"text-balance!",
		);
		staff_grid.classList.add("md:grid-cols-3!");
		staff_grid.classList.add("lg:grid-cols-4!");
		staff_grid.classList.add("xl:grid-cols-5!", "gap-x-8!");
		//

		function render_person(p: People): void {
			const fragment = document.createDocumentFragment();

			const wrap = document.createElement("li");
			const figure = document.createElement("figure");
			const figcaption = document.createElement("figcaption");
			const cover = document.createElement("img");
			const name = document.createElement("p");
			const descr = document.createElement("p");
			//

			figure.classList.add("p-0!", "m-0!");

			//
			cover.src = p.photos.md;
			cover.alt = `Сотрудники AdsTarget: ${p.name} - ${p.description}`;
			cover.loading = "lazy";
			name.innerText = p.name;
			descr.innerText = p.description;

			//

			wrap.classList.add("group");
			cover.className =
				"bg-blue! transition-all! duration-300! rounded-3xl! block! max-w-full! inset-shadow-sm! pointer-events-none!";
			cover.className += `group-hover:shadow-xl! group-hover:bg-blue-400! group-hover:-translate-y-2!`;
			wrap.onmouseover = () =>
				(cover.style.rotate =
					(Math.random() < 0.5 ? -1 : 1) * (Math.random() * 7) + "deg");
			wrap.onmouseleave = () => (cover.style.rotate = "0deg");

			name.className =
				"transition-all! duration-500! font-bold! text-xl! pt-2! m-0! text-stone-600! group-hover:-translate-y-2! ";

			descr.className =
				"transition-all! duration-400! text-stone-800! p-0! m-0! group-hover:-translate-y-3!";

			//
			wrap.append(figure);
			figcaption.append(name, descr);
			figure.append(cover, figcaption);
			fragment.appendChild(wrap);

			staff_grid.append(fragment);
		}
		//

		staff_list.forEach(s => render_person(s));
	}
}
