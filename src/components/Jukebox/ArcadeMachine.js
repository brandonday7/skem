import React, { Component } from "react";
import ImageMapper from 'react-image-mapper';
import Button from "./Button"

import { buttonCoords } from "./jukeboxHelpers.js"
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
			imgHeight: 0.95*window.innerHeight,
			playing: false,
			hovering: "none"
		};
	}

	newIndex = () => {
		const {trackIndex} = this.state
		if (trackIndex === 3) {
			return 0
		}
		return trackIndex + 1
	}

	play = () => this.setState({playing: true})
	pause = () => this.setState({playing: false})
	nextTrack = () => this.setState({ trackIndex: this.newIndex() })

	changeHover = name => {
		if (name !== this.state.hovering) this.setState({ hovering: name })
	}

	myTurn = name => {
		if (name === this.state.hovering) return "button-hover"
			return "none"
	}

	render() {
		const { imgHeight } = this.state
		const imgWidth = 0.678064516129032 * imgHeight
		return (
			<div>
		    <ImageMapper 
		    	src={frontView} 
		    	map={buttonCoords(imgWidth, imgHeight)} 
		    	height={imgHeight}
		    	width={0.678064516129032 * imgHeight}
		    	onMouseEnter={evt => this.changeHover(evt.name)}
					fillColor="rgba(255, 255, 255, 0)"
					strokeColor="rgba(255, 255, 255, 0)"
		    	// everything breaks without this function below, blame react-image-mapper
		    	onMouseMove={x => null}
		    />
	    	<Button 
	    		name="pause" 
	    		src={pause} 
	    		myTurn={this.myTurn} 
	    		onClick={this.pause}
	    	/>
	    	<Button 
	    		name="play" 
	    		src={play} 
	    		myTurn={this.myTurn} 
	    		onClick={this.play}
	    	/>
	    	<Button 
	    		name="next" 
	    		src={next} 
	    		myTurn={this.myTurn} 
	    		onClick={this.nextTrack}
	    	/>
	    </div>
		);
	}
}

export default ArcadeMachine;
