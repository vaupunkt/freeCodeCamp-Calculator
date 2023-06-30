export default function CalculationButton({ id, symbol, name }) {
	return (
		<button type="button" id={id} name={name}>
			{symbol}
		</button>
	);
}
