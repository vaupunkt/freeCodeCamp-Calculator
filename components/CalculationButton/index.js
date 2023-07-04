export default function CalculationButton({ button, handleCalculation }) {
	return (
		<button
			type="button"
			id={button.name}
			name={button.name}
			onClick={() => handleCalculation(button)}>
			{button.symbol}
		</button>
	);
}
