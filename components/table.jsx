import getDocCodes from "../components/getPageCodes";
import React, { useEffect } from "react";
import Head from "next/head";

export default function Table() {
	const docName = "SB_04";
	const docLines = require(`../data/${docName}.json`);
	const { docCodes, totalLayers } = getDocCodes(docName);

	const codeWidth = 20;

	function css(element, style) {
		for (const property in style) element.style[property] = style[property];
	}

	useEffect(() => {
		const tbodyElement = document.querySelector("tbody");

		docLines.map((l, i) => {
			const rowElement = document.createElement("tr");

			const startCodes = docCodes.filter(c => c.start === parseInt(l.line));

			[...Array(6)].map((_, j) => {
				const cellElement = document.createElement("td");
				const divElement = document.createElement("div");
				for (const c of startCodes) {
					if (c.layer === j) {
						cellElement.rowSpan = `${c.end - c.start}`;
						divElement.style.border = `2px solid ${c.color}`;
						divElement.style.width = `100%`;
						divElement.style.height = `100%`;

						divElement.style.borderRight = "none";

						cellElement.appendChild(divElement);
						rowElement.appendChild(cellElement);
					}
				}
				rowElement.appendChild(cellElement);
			});

			const line = document.createElement("td");
			line.textContent = l.line;
			rowElement.appendChild(line);

			const text = document.createElement("td");
			text.textContent = l.text;
			rowElement.appendChild(text);

			//     <div className="w-full bg-slate-200 col-start-[7] col-end-[8] text-center">
			//       {l.line}
			//     </div>
			//     <div className="col-start-[8] col-end-[17] pl-2">
			//       {l.text.split(" ").map((t, i) => {
			//         if (t[0] === "_" && t[t.length - 1] === "_") {
			//           return (
			//             <span key={t + i}>
			//               <span className="underline">
			//                 {t.slice(1, t.length - 1)}
			//               </span>{" "}
			//             </span>
			//           );
			//         } else {
			//           return <span key={t + i}>{t + " "}</span>;
			//         }
			//       })}
			//     </div>

			// })}

			tbodyElement.appendChild(rowElement);
		});
	});

	return (
		<>
			<Head>
				<title>{docName}</title>
			</Head>
			<div className="flex justify-center items-start text-black font-sans text-xs p4 bg-slate-100">
				<table className="border-collapse">
					<thead>
						<tr>
							<th colSpan={6} className="bg-slate-300 border text-center">
								Codes
							</th>
							<th className="bg-slate-300 border text-center">Zeile</th>
							<th className="bg-slate-300 border text-center">Text</th>
						</tr>
					</thead>
					<tbody></tbody>
					{/* <thead>
						<tr>
							<th className=" bg-slate-300 border text-center">Zeile</th>
							<th className=" bg-slate-300 border text-center">Text</th>
						</tr>
					</thead>
					<tbody>
						{docLines.map((l, i) => {
							const startCodes = docCodes.filter(
								c => c.start === parseInt(l.line)
							);

              return (
							<tr key={i}>
								{[...Array(6)].map((_, j) => {
                  if 
									return <td></td>;
								})}

								<div className="w-full bg-slate-200 col-start-[7] col-end-[8] text-center">
									{l.line}
								</div>
								<div className="col-start-[8] col-end-[17] pl-2">
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
							</tr>;
						})}
						{docCodes.map((c, i) => {
							return (
								<tr
									className="w-2 relative"
									key={`${i}${c.start}${c.end}`}
									style={{
										gridRow: `${c.start} / ${c.end + 1}`,
										gridColumn: `${6 - c.layer} / span 1`,
										border: `2px solid ${c.color}`,
										borderRight: "none",
									}}>
									<div
										className="absolute -left-[1px] top-1/2 border-2 rounded-full -translate-x-1/2 -translate-y-1/2 bg-white w-2 h-2"
										style={{ border: `2px solid ${c.color}` }}
									/>
								</tr>
							);
						})}
						<tr>
							<td></td>
						</tr>
					</tbody> */}
				</table>
			</div>
		</>
	);
}
