import React, { Component } from "react";
import styled, { keyframes } from 'styled-components'

import next from "../../images/next.png"

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

const Left = styled.img`
	position: absolute;
	width: 50px;
	transform: translateX(-47.5vw) scaleX(-1);
	cursor: pointer;
	z-index: 2;
	&:hover {
		width: 55px;
	}
`

const Right = styled.img`
	position: absolute;
	width: 50px;
	transform: translateX(47.5vw);
	cursor: pointer;
	z-index: 2;
	&:hover {
		width: 55px;
	}
`

class Carousel extends Component {
	constructor(props) {
		super(props)
		this.state = {
			childIndex: 0,
			lastChildIndex: this.props.children.length - 1,
			movement: "none"
		}
	}

	reset = () => this.setState({ movement: "none" })
	wait = () => setTimeout(this.reset, 500)

	nextChildIndex = () => {
		const { childIndex, lastChildIndex } = this.state
		if (childIndex !== lastChildIndex) return childIndex + 1
		return 0		
	}

	prevChildIndex = () => {
		const { childIndex, lastChildIndex } = this.state 
		if (childIndex) return childIndex - 1
		return lastChildIndex
	}

	move = direction => {
		const { childIndex, lastChildIndex } = this.state
		let newChildIndex
		if (direction === "right") {
			newChildIndex = this.nextChildIndex()
		} else {
			newChildIndex = this.prevChildIndex()
		}
		this.setState({ childIndex: newChildIndex, movement: direction }, this.wait)
	}

	render() {
		const { children } = this.props
		const { childIndex, movement } = this.state
		return (
			<StyledCarousel>
				<Left src={next} onClick={() => this.move("left")} />
					<StyledAnimation movement={movement}>
						{children[this.prevChildIndex()]}
						{children[childIndex]}
						{children[this.nextChildIndex()]}
					</StyledAnimation>
				<Right src={next} onClick={() => this.move("right")} />
			</StyledCarousel>
		);
	}
}

export default Carousel;
