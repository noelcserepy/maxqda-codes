const puppeteer = require("puppeteer");

export default async function takeScreenshot(req, res) {
	try {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.setViewport({ width: 1280, height: 800 });
		await page.goto("http://localhost:3000/");
		await page.screenshot({ path: "nytimes.png", fullPage: true });
		await browser.close();
		res.status(200).json({ path: "nytimes.png", fullPage: true });
	} catch {
		res.status(500);
	}
}
