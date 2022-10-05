import PathRange from "../components/pathRange";

export default function Codes({ codes }) {
	const vbHeight = 1000;
	const lineHeight = vbHeight;

	return (
		<svg
			viewBox={`0 ${lineHeight / 2} 400 ${vbHeight}`}
			className="w-full h-full"
			preserveAspectRatio="none">
			<rect x={0} y={0} width="400" height="100%" fill="red" />
			{codes.map((c, i) => {
				const start = c.start * lineHeight;
				const end = c.end * lineHeight;

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
		</svg>
	);
}
