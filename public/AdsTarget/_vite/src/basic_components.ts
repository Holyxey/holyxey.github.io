export function insert_header(
	node: HTMLElement,
	text: string,
	tag: "h1",
): void {
	const h = document.createElement(tag);
	h.innerText = text;

	h.className =
		"max-w-6xl! transition-all! mx-auto! pb-10! px-4! font-geometria! text-neutral-600! text-4xl! font-medium! md:text-5xl!";
	node.prepend(h);
}
