const popUp = document.querySelector('[data-tooltip-hook="#popup:menu"]');

const popUpMutation = new MutationObserver(mutations => {
	const target = mutations[0].target as HTMLDivElement;
	const popUpSpcialsNode = document.querySelector(
		"#pop_socials",
	) as HTMLDivElement;

	if (!popUpSpcialsNode || !target) {
		console.log("popUpSpcialsNode not found");
		return;
	}

	if (target.style.display === "block") {
		console.log("show");

		popUpSpcialsNode.classList.add("bottom-2!");
		popUpSpcialsNode.classList.remove("-bottom-full!");
		popUpSpcialsNode.style.right = "";
	} else {
		console.log("hide");

		popUpSpcialsNode.classList.remove("bottom-2!");
		popUpSpcialsNode.classList.add("-bottom-full!");
		popUpSpcialsNode.style.right = "";
	}
});

const socialsList = [
	{
		icon: "https://static3.tildacdn.com/tild3863-6536-4334-b331-363331393239/vk.svg",
		href: "https://vk.com/adstarget",
		title: "VK",
	},
	{
		icon: "https://static3.tildacdn.com/tild6130-3863-4363-b764-646265393563/tg.svg",
		href: "https://t.me/adstarget",
		title: "Telegram",
	},
	{
		icon: "https://static3.tildacdn.com/tild6230-6163-4938-a239-613035356538/wa.svg",
		href: "https://wa.me/79533579900?text=Добрый день!",
		title: "WhatsApp",
	},
];

export function socialsNodeRender(): void {
	if (!popUp) return;

	const pop_socials = document.createElement("div");
	pop_socials.className =
		"fixed! w-full! -bottom-full! gap-2! z-9999999! flex! justify-center! items-center! transition-all! duration-700!";
	pop_socials.id = "pop_socials";

	for (let index = 0; index < socialsList.length; index++) {
		const soc = socialsList[index];
		pop_socials.innerHTML += `
		<a href="${soc.href}" rel="external" target="_blank"
			class="bg-pink! shadow-md! rounded-full! transition-all! hover:scale-110!">

      <img src="${soc.icon}" alt="${soc.title}" 
				class="h-8! w-8! p-2! block!" />

    </a>
		`;
	}

	document.body.appendChild(pop_socials);

	popUpMutation.observe(popUp, {
		attributes: true,
		attributeFilter: ["style"],
	});
}
