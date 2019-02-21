import React, { Component, Fragment } from "react";
import Polaroid from "./Polaroid";
import ReturnFooter from "./ReturnFooter"
import "./gallery.css";

class ViewedGallery extends Component {
	render() {
		const { polaroids, setReverse } = this.props;
		return (
			<Fragment>
			<div className="viewed-container">
				{polaroids.map((polaroid, index) => (
					<Polaroid key={index} src={polaroid.name} />
				))}
			</div>
			<ReturnFooter setReverse={setReverse}/>
			</Fragment>
		);
	}
}

export default ViewedGallery;
