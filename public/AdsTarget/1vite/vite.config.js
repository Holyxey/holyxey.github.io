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
			output: {
				assetFileNames: "adstarget_vite.css",
				chunkFileNames: "adstarget_vite.js",
			},
			input: {
				main: resolve(__dirname, "/index.html"),
				partners: resolve(__dirname, "/views/partners/index.html"),
				staff: resolve(__dirname, "/views/staff/index.html"),
				cases: resolve(__dirname, "/views/cases/index.html"),
				tarifs: resolve(__dirname, "/views/tariffs/index.html"),
			},
		},
	},

	server: {
		// 	host: "0.0.0.0",
		port: "3000",
	},
});
