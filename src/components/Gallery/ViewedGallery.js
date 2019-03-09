import React, { Component, Fragment } from "react";
import Polaroid from "./Polaroid";
import ReturnFooter from "./ReturnFooter"
import "./gallery.css";

class ViewedGallery extends Component {
	render() {
		const { polaroids, playReverse } = this.props;
		return (
			<Fragment>
			<div className="viewed-container">
				{polaroids.map((polaroid, index) => (
					<Polaroid key={index} src={polaroid.name} alt={polaroid.alt}/>
				))}
			</div>
			<ReturnFooter playReverse={playReverse}/>
			</Fragment>
		);
	}
}

export default ViewedGallery;
