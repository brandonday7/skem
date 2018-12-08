import React, { Component } from "react";
import Polaroid from "./Polaroid";
import "./gallery.css";

class StackedGallery extends Component {
	render() {
		const { polaroids, view } = this.props;
		return (
			<div className="stack-container">
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
