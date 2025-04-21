const popUpClass = [
	"fixed!",
	"top-0!",
	"left-0!",
	"w-full!",
	"h-full!",
	"bg-[#00000030]",
	"backdrop-blur-sm!",
	"z-50!",
	"flex!",
	"items-center!",
	"justify-center!",
];
const iframeClass = [
	"bg-stone-700!",
	"w-full!",
	"md:w-3/4!",
	"m-4!",
	"animate-show!",
	"aspect-video!",
	"border-none!",
	"rounded-xl!",
	"shadow-2xl!",
];

export default function openVideoPopup(src: string) {
	const videoPopupNode: HTMLDivElement = document.createElement("div");
	videoPopupNode.classList.add(...popUpClass);
	videoPopupNode.addEventListener("click", videoPopupNode.remove);

	const iframe = document.createElement("iframe");
	iframe.src = src;
	iframe.classList.add(...iframeClass);

	videoPopupNode.append(iframe);
	document.body.append(videoPopupNode);

	window.addEventListener("keydown", e => {
		if (e.key === "Escape") {
			videoPopupNode.remove();
		}
	});
}
