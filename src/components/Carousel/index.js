import React, { Component } from "react";
import styled, { keyframes } from 'styled-components'

import next from "../../images/next.png"

const StyledCarousel = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Left = styled.img`
	position: absolute;
	width: 60px;
	transform: translateX(-47.5vw) scaleX(-1);
	cursor: pointer;
`

const Right = styled.img`
	position: absolute;
	width: 60px;
	transform: translateX(47.5vw);
	cursor: pointer;
`

const enter = keyframes`
	from {
		transform: translateX(100vw);
	}

	to {
		transform: translateX(0);
	}
`


class Carousel extends Component {
	constructor(props) {
		super(props)
		this.state = {
			childIndex: 0,
			lastChildIndex: this.props.children.length - 1
		}
	}

	toTheLeft = () => {
		const { childIndex, lastChildIndex } = this.state
		if (childIndex !== lastChildIndex) {
			this.setState({ childIndex: childIndex + 1 })
		} else {
			this.setState({ childIndex: 0 })
		}
	}

	toTheRight = () => {
		const { childIndex, lastChildIndex } = this.state
		if (childIndex !== 0) {
			this.setState({ childIndex: childIndex - 1 })
		} else {
			this.setState({ childIndex: lastChildIndex })
		}
	}

	render() {
		const { children } = this.props
		const { childIndex } = this.state
		return (
			<StyledCarousel>
				<Left src={next} onClick={this.toTheLeft} />
					{children[childIndex]}
				<Right src={next} onClick={this.toTheRight} />
			</StyledCarousel>
		);
	}
}

export default Carousel;
