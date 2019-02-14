import React, { Component } from "react";
import ImageMapper from 'react-image-mapper';
import frontView from "../../images/frontView.png";
import { buttonCoords } from "./buttonCoords.js"

class ArcadeMachine extends Component {
	constructor(props) {
		super(props);
		this.state = {
			trackIndex: 0,
			height: window.innerHeight,
			playing: false
		};
	}

	newIndex = () => {
		const {trackIndex} = this.state
		if (trackIndex === 3) {
			return 0
		}
		return trackIndex + 1
	}

	buttonClick = button => {
		if (button === "play") {
			this.setState({ playing: true })
		} else if (button === "pause") {
			this.setState({ playing: false })
		} else if (button === "next") {
			this.setState({trackIndex: this.newIndex()})
		}
	}

	render() {
		const { height } = this.state

		return (
	    <ImageMapper 
	    	src={frontView} 
	    	map={buttonCoords} 
	    	height={0.95*height}
	    	onMouseMove={x => null}
	    	onClick={evt => this.buttonClick(evt.name)}
	    />
		);
	}
}

export default ArcadeMachine;
