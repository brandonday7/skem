import React from "react"
import styled, { keyframes, css } from "styled-components"

const fade = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`

const blink = keyframes`
	0% {
		opacity: 0;
	}

	50% {
		opacity: 1;
	}

	100% {
		opacity: 0;
	}
`

const StyledImage = styled.img`
	width: 20vh;
	height: auto;
	position: absolute;
	transform: translate(${({ width }) => 0.36*width}px, -${({ height }) => 0.63*height}px);
	z-index: 1;
	animation: ${({ blinking }) => {
		if (blinking) {
			return css`${blink} 2.5s infinite`
		} else {
			return css`${fade} 0.7s`
		}
	}}
`

const DisplayTrack = ({ trackIndex, playing, height, width }) => (
	<div>
		{!playing && (
			<StyledImage 
				blinking
				height={height} 
				width={width} 
				src={`${process.env.REACT_APP_BUCKET}pressPlayTextSmall.png`} 
			/>)}
		{!trackIndex && playing && (
			<StyledImage 
				height={height} 
				width={width} 
				src={`${process.env.REACT_APP_BUCKET}introTitleSmall.png`} 
			/>)}
		{trackIndex === 1 && playing && (
			<StyledImage 
				height={height} 
				width={width} 
				src={`${process.env.REACT_APP_BUCKET}dqTitleSmall.png`} 
			/>)}
		{trackIndex === 2 && playing && (
			<StyledImage 
				height={height} 
				width={width} 
				src={`${process.env.REACT_APP_BUCKET}dpoyTitleSmall.png`} 
			/>)}
		{trackIndex === 3 && playing && (
			<StyledImage 
				height={height} 
				width={width} 
				src={`${process.env.REACT_APP_BUCKET}smoyTitleSmall.png`} 
			/>)}
		</div>
)

export default DisplayTrack