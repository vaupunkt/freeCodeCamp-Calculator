import NumberButton from "../../components/NumberButton";
import CalculationButton from "../../components/CalculationButton";
import Display from "../../components/Display";
import ClearButton from "../ClearButton";

export default function Calculator() {
	const buttons = [
		{ name: "equals", symbol: "=", type: "symbol" },
		{ name: "add", symbol: "+", type: "symbol" },
		{ name: "subtract", symbol: "-", type: "symbol" },
		{ name: "multiply", symbol: "*", type: "symbol" },
		{ name: "divide", symbol: "/", type: "symbol" },
		{ name: "decimal", symbol: ".", type: "symbol" },
		{ name: "zero", symbol: "0", type: "number" },
		{ name: "one", symbol: "1", type: "number" },
		{ name: "two", symbol: "2", type: "number" },
		{ name: "three", symbol: "3", type: "number" },
		{ name: "four", symbol: "4", type: "number" },
		{ name: "five", symbol: "5", type: "number" },
		{ name: "six", symbol: "6", type: "number" },
		{ name: "seven", symbol: "7", type: "number" },
		{ name: "eight", symbol: "8", type: "number" },
		{ name: "nine", symbol: "9", type: "number" },
	];

	const symbols = buttons.filter((button) => button.type === "symbol");
	const numbers = buttons.filter((button) => button.type === "number");
	return (
		<>
			{symbols.map((symbol) => {
				return (
					<CalculationButton
						key={symbol.name}
						id={symbol.name}
						symbol={symbol.symbol}
						name={symbol.name}
					/>
				);
			})}
			{numbers.map((number) => {
				return (
					<NumberButton
						key={number.name}
						id={number.name}
						symbol={number.symbol}
						name={number.name}
					/>
				);
			})}
			<ClearButton></ClearButton>
			<Display></Display>
		</>
	);
}
