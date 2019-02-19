import React, { Component } from "react";
import Polaroid from "./Polaroid";
import Instructions from "../Instructions"
import "./gallery.css";

class StackedGallery extends Component {
	render() {
		const { polaroids, view, untouched } = this.props;
		return (
			<div className="stack-container">
				{untouched && (
					<div className="view-instruction">
						<Instructions label="Click to view" color="white" size={250}/>
					</div>
				)}
				{polaroids.map((polaroid, index) => (
					<Polaroid
						unviewed={true}
						src={polaroid.name}
						angle={polaroid.angle}
						key={index}
						view={view}
					/>
				))}
			</div>
		);
	}
}

export default StackedGallery;
