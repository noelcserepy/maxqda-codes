export default function Row({ line, text }) {
	const textSegments = text.split(" ");

	return (
		<tr key={`${line}`} className="h-2">
			<td className="bg-slate-200 text-center h-2">{line}</td>
			<td className="h-2 pl-2">
				{textSegments.map((t, i) => {
					if (t[0] === "_" && t[t.length - 1] === "_") {
						return (
							<span key={t + i}>
								<span className="underline">{t.slice(1, t.length - 1)}</span>{" "}
							</span>
						);
					} else {
						return <span key={t + i}>{t + " "}</span>;
					}
				})}
			</td>
		</tr>
	);
}
