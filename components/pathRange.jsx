export default function PathRange({ start, end, layer, color }) {
	const x = 60 - layer * 10;
	return (
		<path
			stroke={color}
			d={`M ${x} ${start} h -2 V ${end} h 2`}
			fill="none"
			strokeWidth={1}
		/>
	);
}
