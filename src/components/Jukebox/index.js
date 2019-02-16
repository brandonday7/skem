import React, { Component, Fragment } from "react";
import ArcadeMachine from "./ArcadeMachine";
import Acknowledgments from "./Acknowledgments";
import Lyrics from "../Lyrics"

import "./jukebox.css";
import "../DramaQueen/drama.css";

class Jukebox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			childIndex: 0,
			lastChildIndex: 0,
			movement: "none"
		}
	}

	componentDidMount() {
		const children = document.getElementsByClassName('carousel-child')
		this.setState({ lastChildIndex: children.length - 1 })
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
		const { childIndex, movement } = this.state
		return(
			<Fragment>
				<div className="intro-container">
					<div className="dq-lyrics-container">
						<ArcadeMachine move={this.move} childIndex={childIndex}/>
						<Acknowledgments />
					</div>
				</div>
				<Lyrics 
					move={this.move}
					movement={movement}
					childIndex={childIndex}
					prevChildIndex={this.prevChildIndex}
					nextChildIndex={this.nextChildIndex}
				/>
			</Fragment>
		)
	}
}

export default Jukebox;
