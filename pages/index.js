import getDocCodes from "../components/getPageCodes";
import React from "react";

export default function Doc() {
	const docName = "SB_04";
	const docLines = require(`../data/${docName}.json`);
	const docCodes = getDocCodes(docName);
	const totalLayers = 6;
	return (
		<div className="w-[21cm] h-[29.7cm] bg-gray-100 flex justify-end items-start text-black font-sans text-xs mainPage p-6 break-after-page">
			<div className="grid grid-cols-20 w-full h-full">
				{docCodes.map((c, i) => {
					return (
						<div
							key={`${i}${c.start}${c.end}`}
							className={`row-start-[${c.start}] row-end-[${
								c.end
							}] col-start-[${totalLayers - c.layer - 2}] col-end-[${
								totalLayers - c.layer - 1
							}]`}>
							1
						</div>
						// return (
						// 	<div
						// 		key={`${i}${c.start}${c.end}`}
						// 		className={`[grid-row-start:_${c.start}] [grid-row-end:_${
						// 			c.end
						// 		}] [grid-column-start:_${totalLayers - c.layer - 2}]`}>
						// 		1
						// 	</div>
						// return (
						// 	<div
						// 		key={`${i}${c.start}${c.end}`}
						// 		className={`row-[${c.start}_/_span_${c.end - c.start}] col-[${
						// 			totalLayers - c.layer - 2
						// 		}_/_span_1]`}>
						// 		1
						// 	</div>
					);
				})}
				<div className="w-full col-start-6 col-end-7 bg-slate-300 border text-center">
					lines
				</div>
				<div className="w-full col-start-7 col-end-21 bg-slate-300 border text-center">
					Text
				</div>
				{docLines.map((l, i) => (
					<React.Fragment key={i}>
						<div className="w-full bg-slate-200 col-start-6 col-end-7 text-center">
							{l.line}
						</div>
						<div className="col-start-7 col-end-21">
							{l.text.split(" ").map((t, i) => {
								if (t[0] === "_" && t[t.length - 1] === "_") {
									return (
										<span key={t + i}>
											<span className="underline">
												{t.slice(1, t.length - 1)}
											</span>{" "}
										</span>
									);
								} else {
									return <span key={t + i}>{t + " "}</span>;
								}
							})}
						</div>
					</React.Fragment>
				))}
			</div>
		</div>
	);
}
