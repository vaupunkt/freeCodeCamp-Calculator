import NumberButton from "../../components/NumberButton";
import CalculationButton from "../../components/CalculationButton";
import Display from "../../components/Display";
import styled from "styled-components";
import { useState } from "react";
import buttons from "../../utils/buttons";

const StyledCalculator = styled.section`
	display: grid;
	grid-template-rows: auto 3em 3em 3em;
	grid-template-columns: repeat(4, 6em);
	margin: auto;
	width: 400px;
`;

export default function Calculator() {
	const [calculation, setCalculation] = useState("0");
	const [lastButton, setLastButton] = useState({
		name: "lastButton",
		type: "lastButton",
		symbol: "",
	});
	const [currentNumber, setCurrentNumber] = useState("");

	function handleCalculation(button) {
		if (button.name === "clear") {
			setCalculation("0");
			setLastButton("");
			setCurrentNumber("");
			return;
		}
		if (
			(lastButton.name === "equals" && button.type === "number") ||
			(lastButton.name === undefined && button.type === "number")
		) {
			setCalculation(button.symbol);
			setCurrentNumber(button.symbol);
			setLastButton(button);
			return;
		}
		if (calculation === "0" && button.name === "zero") {
			setCalculation("0");
			setCurrentNumber("");
			setLastButton(button);
			return;
		}
		if (
			calculation === "0" &&
			button.type === "symbol" &&
			button.name !== "decimal"
		) {
			setCalculation(calculation + button.symbol);
			setCurrentNumber(calculation + button.symbol);
			setLastButton(button);
			return;
		}
		if (calculation === "0" && button.type === "number") {
			setCalculation(button.symbol);
			setCurrentNumber(button.symbol);
			setLastButton(button);
			return;
		}
		if (button.name === "equals") {
			const equal = safeEval(calculation);
			if (equal === Infinity) {
				setCalculation("ERROR");
			} else {
				setCalculation(equal);
			}
			setLastButton("");
			setCurrentNumber("");
			return;
		}
		if (
			lastButton.name === "subtract" &&
			button.type === "symbol" &&
			(calculation[calculation.length - 2] === "*" ||
				calculation[calculation.length - 2] === "/" ||
				calculation[calculation.length - 2] === "+" ||
				calculation[calculation.length - 2] === "-")
		) {
			setCalculation(calculation.slice(0, -2) + button.symbol);
			setLastButton(button);
			setCurrentNumber("");
			return;
		}

		if (calculation === "0" && button.type === "symbol") {
			setCalculation("0" + button.symbol);
			setCurrentNumber("");
			setLastButton(button);
			return;
		}
		if (
			lastButton.type === "symbol" &&
			button.type === "symbol" &&
			button.name !== "subtract"
		) {
			setCalculation(calculation.slice(0, -1) + button.symbol);
			setLastButton(button);
			setCurrentNumber("");
			console.log("You cannot enter two operators consecutively");
			return;
		}
		if (button.name === "decimal" && currentNumber.includes(".")) {
			console.log("You cannot enter two decimals in one number");
			return;
		}
		if (button.type === "number") {
			setCurrentNumber(currentNumber + button.symbol);
		} else if (button.name === "decimal" && !currentNumber.includes(".")) {
			setCurrentNumber(currentNumber + button.symbol);
		} else if (button.type === "symbol" && button.name !== "decimal") {
			setCurrentNumber("");
		}
		setCalculation(calculation + button.symbol);
		setLastButton(button);
	}

	const symbols = buttons.filter((button) => button.type === "symbol");
	const numbers = buttons.filter((button) => button.type === "number");
	return (
		<StyledCalculator>
			<Display text={calculation}></Display>
			{symbols.map((symbol) => {
				return (
					<CalculationButton
						key={symbol.name}
						button={symbol}
						handleCalculation={handleCalculation}
					/>
				);
			})}
			{numbers.map((number) => {
				return (
					<NumberButton
						key={number.name}
						button={number}
						handleCalculation={handleCalculation}
					/>
				);
			})}
		</StyledCalculator>
	);
}

// Definiere die Funktion safeEval, die einen Rechenausdruck sicher auswertet
function safeEval(str) {
	// Überprüfe, ob der Rechenausdruck gültig ist
	const valid = /^-?\d+(?:\.\d+)?([+\-*/]-?\d+(?:\.\d+)?)*$/g.test(str);
	// Wenn ja, werte ihn aus und gib das Ergebnis zurück
	if (valid) {
		// Wandle das Ergebnis in eine Zeichenkette mit vier Dezimalstellen um
		let result = String(Function(`return (${str})`)().toFixed(4));
		// Wandle die Zeichenkette in eine Zahl um und entferne alle unnötigen Nachkommastellen
		result = parseFloat(result);
		// Wandle die Zahl wieder in eine Zeichenkette um und gib sie zurück
		return String(result);
	}
	// Wenn nein, gib einen Fehler zurück
	else {
		return "ERROR";
	}
}
