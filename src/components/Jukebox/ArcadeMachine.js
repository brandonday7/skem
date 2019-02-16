import React, { Component } from "react";
import ImageMapper from 'react-image-mapper';
import ControlButtons from "./ControlButtons"
import Player from "./Player"
import DisplayTrack from "./DisplayTrack"

import { buttonCoords, getMeTo } from "./jukeboxHelpers.js"
import frontView from "../../images/frontView.png";

import "./jukebox.css"

class ArcadeMachine extends Component {
	constructor(props) {
		super(props);
		this.state = {
			trackIndex: 0,
			imgHeight: 0.95*window.innerHeight,
			mobile: window.innerWidth < 500,
			playing: false,
			hovering: "none",
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

	// this solution is pretty insane...
	nextTrack = () => {
		const { move, childIndex } = this.props
		let times
		this.setState({ trackIndex: this.newIndex() }, () => {
			const { trackIndex } = this.state
			if (!trackIndex || trackIndex === 1) times = getMeTo("dq", childIndex)
			else if (trackIndex === 2) times = getMeTo("dpoy", childIndex)
			else times = getMeTo("smoy", childIndex)
			if (times === 1) {
				move("right")
			} if (times === 2) {
				move("right")
				setTimeout(() => move("right"), 100)
			}
		})		
	}

	changeHover = name => {
		if (name !== this.state.hovering) this.setState({ hovering: name })
	}

	myTurn = name => {
		if (name === this.state.hovering) return "button-hover"
			return "none"
	}

	mobileClick = area => {
		if (area === "pause") this.pause()
		else if (area === "play") this.play()
		else if (area === "next") this.nextTrack()
	}

	render() {
		const { imgHeight, trackIndex, playing, mobile } = this.state
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
					onClick={evt => {if (mobile) this.mobileClick(evt.name)}}
		    	// everything breaks without this function below, blame react-image-mapper
		    	onMouseMove={x => null}
		    />
	    	{!mobile && 
	    		<ControlButtons 
		    		pause={this.pause} 
		    		play={this.play} 
		    		nextTrack={this.nextTrack} 
		    		myTurn={this.myTurn}
	    		/>
	    	}
	    	<DisplayTrack trackIndex={trackIndex}/>
	    	<Player 
	    		trackIndex={trackIndex} 
	    		playing={playing} 
	    		nextTrack={this.nextTrack}
	    	/>
	    </div>
		);
	}
}

export default ArcadeMachine;
