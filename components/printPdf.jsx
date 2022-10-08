import { puppeteer } from "puppeteer";
const fs = require("fs/promises");

export default async function printPDF() {
	const url = "http://localhost:3000/";
	const browser = await puppeteer.launch();

	const page = await browser.newPage();
	await page.goto(URL, { waitUntil: "networkidle0" });

	await page.screenshot({
		path: "screenshot.png",
		clip: { height: 10, width: 10 },
	});
	await page.pdf({ path: "page.pdf" });

	await browser.close();
}
