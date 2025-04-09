import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	base: "./",
	plugins: [tailwindcss()],

	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				partners: resolve(__dirname, "partners/index.html"),
				staff: resolve(__dirname, "staff/index.html"),
				cases: resolve(__dirname, "cases/index.html"),
				tarifs: resolve(__dirname, "tarifs/index.html"),
				contacts: resolve(__dirname, "contacts/index.html"),
			},
		},
	},

	// server: {
	// 	host: "0.0.0.0",
	// 	port: "3030",
	// },
});
