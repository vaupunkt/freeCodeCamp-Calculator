export default function CalculationButton({ button, handleCalculation }) {
	return (
		<>
			<button
				type="button"
				id={button.name}
				className={button.name}
				name={button.name}
				onClick={() => handleCalculation(button)}>
				{button.symbol}
			</button>
			<style jsx>{`
				button {
					border: none;
				}
				button:hover {
					background-color: lightblue;
				}
				button:active {
					box-shadow: 0px 0px 5px black inset;
				}
				.equals {
					grid-row: 3 / span 4;
					background-color: rgb(255, 165, 0);
				}

				.decimal {
					grid-row: 6/6;
					grid-column: 3/4;
				}
			`}</style>
		</>
	);
}
