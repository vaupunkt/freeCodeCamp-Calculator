export default function ClearButton({ handleCalculation }) {
	return (
		<button
			type="button"
			name="clear"
			id="clear"
			onClick={() => handleCalculation({ name: "clear" })}>
			Clear
		</button>
	);
}
