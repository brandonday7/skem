import React, { Component } from "react";
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
				<Arrow move={this.move} type="left" scale={-1}/>
					<StyledAnimation movement={movement}>
						{children[this.prevChildIndex()]}
						{children[childIndex]}
						{children[this.nextChildIndex()]}
					</StyledAnimation>
				<Arrow move={this.move} type="right" scale={1}/>
			</StyledCarousel>
		);
	}
}

export default Carousel;
