const getColor = c => {
	if (c.Code.slice(0, 5) === "Einsc") {
		return "#EFC917";
	}
	if (c.Code.slice(0, 5) === "Vom M") {
		return "#DC3C26";
	}
	if (c.Code.slice(0, 5) === "Auswi") {
		return "#0CBFCC";
	}
	if (c.Code.slice(0, 5) === "Ablau") {
		return "#2364A2";
	}
	if (c.Code.slice(0, 5) === "Manua") {
		return "#6DA529";
	}
	if (c.Code.slice(0, 5) === "Parti") {
		return "#CC7099";
	}
};

export default function getDocCodes(docName) {
	const allCodes = require("../data/CS.json");
	const docCodes = allCodes.filter(c => c["Dokumentname"] === docName && c);

	const layers = [];

	const getLayer = c => {
		const anfang = parseInt(c.Anfang);
		const ende = parseInt(c.Ende);

		if (layers.length === 0) {
			layers.push([[anfang, ende]]);
			return 0;
		}

		for (let i = 0; i < layers.length; i++) {
			let layerUp = false;

			for (let j = 0; j < layers[i].length; j++) {
				if (
					(anfang >= layers[i][j][0] && anfang <= layers[i][j][1] + 1) ||
					(ende >= layers[i][j][0] && ende <= layers[i][j][1])
				) {
					layerUp = true;
					if (layers.length === i + 1) {
						layers.push([[anfang, ende]]);
						return i + 1;
					}
					break;
				}
			}
			if (!layerUp) {
				layers[i].push([anfang, ende]);
				return i;
			}
		}
		return 0;
	};

	const processedCodes = docCodes.map(c => {
		return {
			color: getColor(c),
			layer: getLayer(c),
			start: parseInt(c.Anfang),
			end: parseInt(c.Ende),
		};
	});

	return { docCodes: processedCodes, totalLayers: layers.length };
}
