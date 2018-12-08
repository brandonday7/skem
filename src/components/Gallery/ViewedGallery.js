import React, { Component } from "react";
import Polaroid from "./Polaroid";
import "./gallery.css";

class ViewedGallery extends Component {
	render() {
		const { polaroids } = this.props;
		return (
			<div className="image-container">
				{polaroids.map((polaroid, index) => (
					<Polaroid key={index} src={polaroid} />
				))}
			</div>
		);
	}
}

export default ViewedGallery;
