import React from "react";
import styled, { keyframes } from 'styled-components'
import Arrow from "./Arrow"

const right = keyframes`
	from {
		transform: translateX(100vw);
	}

	to {
		transform: translateX(0);
	}
`

const left = keyframes`
	from {
		transform: translateX(-100vw);
	}

	to {
		transform: translateX(0);
	}
`

const StyledCarousel = styled.div`
	min-height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
`

const StyledAnimation = styled.div`
	display: flex;
	animation: ${({ movement }) => {
		if (movement === "right") return right
		else if (movement === "left") return left
	}} 0.5s;
`

const Carousel = ({ children, move, movement, childIndex, prevChildIndex, nextChildIndex }) => (
	<StyledCarousel>
		<Arrow move={move} type="left" scale={-1}/>
			<StyledAnimation movement={movement}>
				{children[prevChildIndex()]}
				{children[childIndex]}
				{children[nextChildIndex()]}
			</StyledAnimation>
		<Arrow move={move} type="right" scale={1}/>
	</StyledCarousel>
)



export default Carousel;
