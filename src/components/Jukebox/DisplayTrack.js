import React from "react"
import styled, { keyframes } from "styled-components"

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
	transform: translate(10em, -25em);
	z-index: 10;
	animation: ${fade} 0.7s;

  @media (max-width: 700px) {
		transform: translate(40vw, -57vh);
  }
`

const DisplayTrack = ({ trackIndex, playing }) => (
	<div>
		{trackIndex === 1 && <StyledImage src={`${process.env.REACT_APP_BUCKET}dqTitle.png`} />}
		{trackIndex === 2 && <StyledImage src={`${process.env.REACT_APP_BUCKET}dpoyTitle.png`} />}
		{trackIndex === 3 && <StyledImage src={`${process.env.REACT_APP_BUCKET}smoyTitle.png`} />}
	</div>
)

export default DisplayTrack