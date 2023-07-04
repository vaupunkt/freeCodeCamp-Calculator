import { styled } from "styled-components";

const StyledInput = styled.input`
	grid-column: 1/4;
	border-radius: 10px;
	height: 3em;
	font-size: 1.5em;
	padding: 10px;
	text-align: right;
`;

export default function Display({ text }) {
	return <StyledInput id="display" value={text} readOnly></StyledInput>;
}
