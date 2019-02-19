import React from "react"
import styled, { keyframes } from "styled-components"

const fade = keyframes`
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
	font-size: ${({size}) => size}%;
	${({ blink }) => blink}
	animation: ${({ blink = true }) => blink && fade} 1.7s infinite;
	color: ${({color}) => color};
	text-decoration: none;
	&:visited {
		text-decoration: none;
	}

  @media (max-width: 700px) {
    font-size: 200%;
  }
`

const Instructions = ({ label, size = 200, ...props }) => (
	<StyledInstruction 
		{...props} 
		size={size}
	>
		{label}
	</StyledInstruction>
)

export default Instructions