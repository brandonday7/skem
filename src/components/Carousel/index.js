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
	animation: ${({ movement }) => {
		if (movement === "right") return right
		else if (movement === "left") return left
	}} 0.5s;
`

const Left = styled.img`
	position: absolute;
	width: 60px;
	transform: translateX(-47.5vw) scaleX(-1);
	cursor: pointer;
	&:hover {
		width: 70px;
	}
`

const Right = styled.img`
	position: absolute;
	width: 60px;
	transform: translateX(47.5vw);
	cursor: pointer;
	&:hover {
		width: 70px;
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

	toTheRight = () => {
		const { childIndex, lastChildIndex } = this.state
		let newChildIndex
		if (childIndex !== lastChildIndex) {
			newChildIndex = childIndex + 1
		} else {
			newChildIndex = 0
		}
		this.setState({ childIndex: newChildIndex, movement: "right" }, this.wait)
	}

	toTheLeft = () => {
		const { childIndex, lastChildIndex } = this.state
		let newChildIndex
		if (childIndex !== 0) {
			newChildIndex = childIndex - 1
		} else {
			newChildIndex = lastChildIndex
		}
		this.setState({ childIndex: newChildIndex, movement: "left" }, this.wait)
	}

	render() {
		const { children } = this.props
		const { childIndex, movement } = this.state
		return (
			<StyledCarousel>
				<Left src={next} onClick={this.toTheLeft} />
					<StyledAnimation movement={movement}>
						{children[childIndex]}
					</StyledAnimation>
				<Right src={next} onClick={this.toTheRight} />
			</StyledCarousel>
		);
	}
}

export default Carousel;
