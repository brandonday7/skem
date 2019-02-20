import React from "react"
import styled, { keyframes } from "styled-components"

import dqTitle from "../../images/dqTitle.png"
import dpoyTitle from "../../images/dpoyTitle.png"
import smoyTitle from "../../images/smoyTitle.png"

const fade = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`

const StyledImage = styled.img`
	width: 130px;
	position: absolute;
	transform: translate(10.2em, -25em);
	z-index: 10;
	animation: ${fade} 0.7s;
`

const DisplayTrack = ({ trackIndex, playing }) => (
	<div>
		{trackIndex === 1 && <StyledImage src={dqTitle} />}
		{trackIndex === 2 && <StyledImage src={dpoyTitle} />}
		{trackIndex === 3 && <StyledImage src={smoyTitle} />}
	</div>
)

export default DisplayTrack