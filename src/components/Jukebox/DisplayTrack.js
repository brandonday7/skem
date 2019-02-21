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
	width: 20vh;
	height: auto;
	position: absolute;
	transform: translate(${({ width }) => 0.36*width}px, -${({ height }) => 0.62*height}px);
	z-index: 1;
	animation: ${fade} 0.7s;
`

const DisplayTrack = ({ trackIndex, playing, height, width }) => (
	<div>
		{trackIndex === 1 && (
			<StyledImage 
				height={height} 
				width={width} 
				src={`${process.env.REACT_APP_BUCKET}dqTitleSmall.png`} 
			/>)}
		{trackIndex === 2 && (
			<StyledImage 
				height={height} 
				width={width} 
				src={`${process.env.REACT_APP_BUCKET}dpoyTitleSmall.png`} 
			/>)}
		{trackIndex === 3 && (
			<StyledImage 
				height={height} 
				width={width} 
				src={`${process.env.REACT_APP_BUCKET}smoyTitleSmall.png`} 
			/>)}
	</div>
)

export default DisplayTrack