import styled from "styled-components";

export default function NumberButton({ button, handleCalculation }) {
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
