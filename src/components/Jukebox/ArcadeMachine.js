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
				},
				{
					name: "pause", 
					shape: "poly", 
					coords: [255, 563, 276, 563, 276, 585, 255, 585]
				},
				{
					name: "next", 
					shape: "poly", 
					coords: [
						348, 565,
						362, 565,
						363, 559,
						385, 571,
						364, 585,
						363, 579,
						348, 579
					]
				}
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
