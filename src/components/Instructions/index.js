import React from "react"
import styled, { keyframes } from "styled-components"

const blink = keyframes`
	0% {
		opacity: 1;
	}

	50% {
		opacity: 0;
	}

	100% {
		opacity: 1
	}
`

const StyledInstruction = styled.p`
	font-size: 200%;
	animation: ${blink} 1.5s infinite;
`

const Instructions = ({ label }) => (
	<StyledInstruction>{label}</StyledInstruction>
)

export default Instructions