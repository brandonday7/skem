import React, { Component } from "react";
import ImageMapper from 'react-image-mapper';
import { buttonCoords } from "./buttonCoords.js"
import frontView from "../../images/frontView.png";
import pause from "../../images/pause.png";
import play from "../../images/play.png";
import next from "../../images/next.png";

import "./jukebox.css"

class ArcadeMachine extends Component {
	constructor(props) {
		super(props);
		this.state = {
			trackIndex: 0,
			height: window.innerHeight,
			playing: false,
			hovering: ""
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

	changeHover = name => this.setState({ hovering: name })

	myTurn = name => {
		if (name === this.state.hovering) return "button-hover"
			return "none"
	}

	render() {
		const { height, hovering } = this.state

		return (
			<div>
		    <ImageMapper 
		    	src={frontView} 
		    	map={buttonCoords} 
		    	height={0.95*height}
		    	// everything breaks without this function below, blame react-image-mapper
		    	onMouseMove={x => null}
		    	// onMouseEnter={evt => this.changeHover(evt.name)}
		    	// onMouseLeave={() => this.changeHover("")}
		    	onClick={evt => this.buttonClick(evt.name)}
		    	onImageMouseMove={evt => {
		    		const x = evt.clientX
		    		const y = evt.clientY
		    		if (357 <= x && x <= 378 && 543 <= y && y<= 565) {
		    			console.log('pause')
		    			this.changeHover("pause")
		    		} else if (hovering !== "") {
		    			console.log('none')
		    			this.changeHover("")
		    		}
		    	}}
		    />
	    	<img 
	    		src={pause} 
	    		alt="pause" 
	    		className={`pause ${this.myTurn("pause")}`}
	    	/>
	    </div>
		);
	}
}

export default ArcadeMachine;
