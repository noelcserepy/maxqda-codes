import Row from "../components/row";
import Codes from "../components/codes";
import React from "react";

export default function Doc({ pageLines, codeProps }) {
	return (
		<div className="w-[21cm] h-[29.7cm] bg-gray-100 flex justify-end items-start text-black font-sans text-xs mainPage p-6 break-after-page">
			<div className="flex h-full w-full relative justify-start items-start">
				<Codes {...codeProps} />

				<table className="table-auto border-collapse w-5/6 h-full">
					<thead>
						<tr>
							<th className="bg-slate-300 border h-2">Line</th>
							<th className="bg-slate-300 border border-l-white h-2">Text</th>
						</tr>
					</thead>
					<tbody>
						{pageLines.map((l, i) => (
							<React.Fragment key={i}>
								{/* {l.text[1] === ":" && i !== 0 && (
										<Row line="&nbsp;" text="" />
									)} */}
								<Row line={l.line} text={l.text} />
							</React.Fragment>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
