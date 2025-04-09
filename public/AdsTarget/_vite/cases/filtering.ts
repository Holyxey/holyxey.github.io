import { Case, CaseCategory } from "../cases/cases_types";
import cases_json from "../cases/cases_list.json";
import categories_json from "../cases/cases_categories.json";

const cases_list = cases_json as Case[];
const categories = categories_json as CaseCategory[];

const filter_node_styles = [
	"grid!",
	"grid-flow-row!",
	"grid-cols-2!",
	"gap-1!",
	"px-2!",
	"py-8!",
	"max-w-6xl!",
	"mx-auto!",
	"bottom-2!",
	"z-20!",

	"md:px-0!",
	"md:grid-cols-3!",
	"xl:grid-cols-4!",
];
const filter_button_styles = [
	"block!",
	"bg-pink!",
	"border-2!",
	"border-white!",
	"transition-all!",
	"px-4!",
	"py-2!",
	"font-geometria!",
	"rounded-lg!",
	"text-md!",
	"text-balance!",
	"text-white!",
	"cursor-pointer!",

	"hover:shadow-md!",
	"hover:-translate-y-1!",

	"active:scale-90!",
];
//

function render_button(label: string, action: () => void): HTMLElement {
	const button = document.createElement("span");
	button.textContent = label;
	button.addEventListener("click", action);

	return button;
}

function filter_by_category(cat: string, cases_node: HTMLElement) {
	const items = cases_node.querySelectorAll("li")!;
	if (cat === "all") {
		items.forEach(item => item.classList.remove("hidden!"));
	} else {
		items.forEach(item => {
			if (item.getAttribute("data-category") === cat)
				item.classList.remove("hidden!");
			else item.classList.add("hidden!");
		});
	}
	cases_node.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function (cases_node: HTMLElement) {
	const filter_node = document.createElement("div");
	filter_node.classList.add(...filter_node_styles);

	const categories_list = new Set([...cases_list.map(c => c.category)]);

	categories_list.forEach(c => {
		const cat_name = categories.find(f => f.tag === c)!;
		const button = render_button(cat_name.title, () =>
			filter_by_category(c, cases_node),
		);
		button.classList.add(...filter_button_styles);

		filter_node.prepend(button);
	});

	const button_all = render_button("Все кейсы", () =>
		filter_by_category("all", cases_node),
	);
	button_all.classList.add(...filter_button_styles);
	button_all.classList.remove("bg-pink!");
	button_all.classList.add(
		"col-start-1!",
		"col-span-2!",
		"bg-blue!",
		"md:col-span-3!",
		"xl:col-span-4!",
	);
	filter_node.prepend(button_all);

	cases_node.prepend(filter_node);
}
