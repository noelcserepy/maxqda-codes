import Page from "../components/page";
import getDocCodes from "../components/getPageCodes";

export default function Doc() {
	const docName = "SB_04";
	const doc = require(`../data/${docName}.json`);
	const docCodes = getDocCodes(docName);

	const linesPerPage = 40;
	const pageProps = [];

	for (let i = 0; i < doc.length; i += linesPerPage) {
		const pageLines = doc.slice(i, i + linesPerPage);
		const pageLineNumbers = pageLines.map(l => l.line);

		const pageCodes = docCodes.filter(
			c => pageLineNumbers.includes(c.start) || pageLineNumbers.includes(c.end)
		);

		pageProps.push({
			pageLines,
			codeProps: {
				pageCodes,
				pageNumber: i / linesPerPage,
				linesPerPage,
			},
		});
	}

	return (
		<>
			{pageProps.map((p, i) => (
				<Page key={i} {...p} />
			))}
		</>
	);
}
