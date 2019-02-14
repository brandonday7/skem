import React, { Component } from "react";
import ImageMapper from 'react-image-mapper';
import frontView from "../../images/frontView.png";

class ArcadeMachine extends Component {
	constructor(props) {
		super(props);
		this.state = {
			trackIndex: 0,
			height: window.innerHeight
		};
	}
	render() {
		const { height } = this.state
		const MAP_AREA = {
			name: "buttons",
			areas: [
				{
					name: "play", 
					shape: "poly", 
					coords: [303, 559, 303, 586, 342, 574]
				}
				// {name: "pause", shape: "circle", coords: [406, 612, 100]}
			]
		}

		return (
    <ImageMapper src={frontView} map={MAP_AREA} height={0.95*height}
    	onMouseMove={x => null}
    	onImageMouseMove={evt => console.log(evt.clientX, evt.clientY)}
    />
		);
	}
}

export default ArcadeMachine;
