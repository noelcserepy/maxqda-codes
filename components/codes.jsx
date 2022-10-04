import PathRange from "../components/pathRange";

export default function Codes({ pageCodes: codes, pageNumber, linesPerPage }) {
	const vbHeight = 1000;
	const lineHeight = vbHeight / linesPerPage;
	const dots = [];
	for (let i = 0; i < linesPerPage; i++) {
		dots.push(
			<line
				key={i}
				x1={60}
				y1={5 + i * lineHeight}
				x2={61}
				y2={5 + i * lineHeight}
				stroke="black"
				strokeWidth={1}
			/>
		);
	}
	return (
		<div className={`w-full h-full`}>
			<svg
				viewBox={`0 ${lineHeight / 2} 400 ${vbHeight}`}
				className="w-full h-full absolute"
				preserveAspectRatio="xMaxYMin meet">
				<rect x={0} y={0} width="400" height={vbHeight} fill="red" />
				{codes.map((c, i) => {
					const start = (c.start - pageNumber * linesPerPage) * lineHeight;
					const end = (c.end - pageNumber * linesPerPage) * lineHeight;

					return (
						<PathRange
							key={`${i}${start}${end}`}
							start={start}
							end={end}
							layer={c.layer}
							color={c.color}
						/>
					);
				})}
				{dots}
			</svg>
		</div>
	);
}
