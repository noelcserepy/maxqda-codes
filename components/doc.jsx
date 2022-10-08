import getDocCodes from "../components/getPageCodes";
import React, { useEffect } from "react";
import Head from "next/head";

export default function Doc() {
	const docName = "SB_04";
	const docLines = require(`../data/${docName}.json`);
	const { docCodes, totalLayers } = getDocCodes(docName);

	const codeWidth = 20;

	return (
		<>
			<Head>
				<title>{docName}</title>
			</Head>

			<div className="flex justify-center items-start text-black font-sans text-xs p4 bg-slate-100">
				<div
					className="grid w-full h-full"
					style={{
						gridTemplateColumns: `repeat(6, ${codeWidth}px) repeat(10, 1fr)`,
					}}>
					{docCodes.map((c, i) => {
						return (
							<div
								className="w-2 relative "
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
							</div>
						);
					})}

					<div className="w-full col-start-[7] col-end-[8] bg-slate-300 border text-center">
						Zeile
					</div>
					<div className="w-full col-start-[8] col-end-[17] bg-slate-300 border text-center">
						Text
					</div>
					{docLines.map((l, i) => (
						<React.Fragment key={i}>
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
						</React.Fragment>
					))}
				</div>
			</div>
		</>
	);
}
