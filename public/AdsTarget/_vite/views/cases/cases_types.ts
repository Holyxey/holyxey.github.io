export type Case = {
	name: string;
	title: string;
	category: "all" | "target" | "webdev" | "content" | "avito" | "videoprodiction";
	link: string;
	cover: string;
	gif?: string;
};
export type CaseCategory = { tag: Case["category"]; title: string };
