export type Case = {
	name: string;
	cover: string;
	title: string;
	category: "all" | "target" | "webdev" | "content" | "avito";
	link: string;
};
export type CaseCategory = { tag: Case["category"]; title: string };
