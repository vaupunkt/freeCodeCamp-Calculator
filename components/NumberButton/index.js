export default function NumberButton({ button, handleCalculation }) {
	return (
		<>
			<button
				type="button"
				id={button.name}
				name={button.name}
				className={button.name}
				onClick={() => handleCalculation(button)}>
				{button.symbol}
			</button>
			<style jsx>{`
				button {
					height: 4em;
					border: none;
					background-color: lightskyblue;
				}
				button:hover {
					background-color: lightblue;
				}
				button:active {
					box-shadow: 0px 0px 5px black inset;
				}
				.nine {
					grid-column: 3/4;
					grid-row: 3/3
				}
				.eight {
					grid-column 2/3;
					grid-row: 3/3
				}
				.seven {
					grid-column: 1/2;
					grid-row: 3/3
				}
				.six {
					grid-column: 3/4;
					grid-row: 4/4
				}
				.five {
					grid-column: 2/3;
					grid-row: 4/4
				}
				.four {
					grid-column: 1/2;
					grid-row: 4/4
				}
				.three
				{
					grid-column: 3/4;
					grid-row: 5/5
				}
				.two
				{
					grid-column: 2/3;
					grid-row: 5/5
				}
				.one
				{
					grid-column: 1/2;
					grid-row: 5/5
				}
				.zero
				{
					grid-column: 2/3;
					grid-row: 6/6
				}
			`}</style>
		</>
	);
}
