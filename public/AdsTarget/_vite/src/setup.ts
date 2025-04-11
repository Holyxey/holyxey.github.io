function setupHTMLParams() {
	const d = document.documentElement;

	d.classList.add("font-geometria");
	d.setAttribute("lang", "ru");
}
// const insertLinks = () => {
// 	if (location.hostname !== "localhost") return;
// 	const routes = [
// 		{
// 			href: "/index.html",
// 			label: "Главная",
// 		},
// 		{
// 			href: "/views/partners/index.html",
// 			label: "Партнеры",
// 		},
// 		{
// 			href: "/views/staff/index.html",
// 			label: "Команда",
// 		},
// 		{
// 			href: "/views/cases/index.html",
// 			label: "Кейсы",
// 		},
// 		{
// 			href: "/views/tariffs/index.html",
// 			label: "Тарифы",
// 		},
// 	];
// 	document.body.insertAdjacentHTML(
// 		"afterbegin",
// 		`
// 		<ul class="section sticky top-1 m-0 flex h-0 list-none gap-4 p-0 z-20">
// 		${routes
// 			.map(
// 				route => `
// 					<li>
// 						<a class="text-gray-900 no-underline hover:underline" href="${route.href}">${route.label}</a>
// 					</li>
// 				`,
// 			)
// 			.join("")}
// 		</ul>
// 		`,
// 	);
// };

export { setupHTMLParams };

document.addEventListener("DOMContentLoaded", () => {
	setupHTMLParams();
	// insertLinks();
});
