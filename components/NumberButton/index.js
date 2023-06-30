export default function NumberButton({ id, symbol, name }) {
	return (
		<button type="button" id={id} name={name}>
			{symbol}
		</button>
	);
}
