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
					coords: [0, 0, 0, 100, 100, 0]
				}
			]
		}

		return (
    <ImageMapper src={frontView} map={MAP_AREA} height={height}
    	onMouseMove={(x) => console.log(x)}
    	onClick={x => console.log(x)}
    />
		);
	}
}

export default ArcadeMachine;
