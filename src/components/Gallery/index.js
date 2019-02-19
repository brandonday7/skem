import React, { Component } from "react";
import _ from "lodash";
import ViewedGallery from "./ViewedGallery";
import StackedGallery from "./StackedGallery";
import "./gallery.css";
import { randomAngle } from "../../utils";

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stackedPolaroids: [
				{ name: "ethanSmall.jpg", angle: randomAngle() },
				{ name: "keysSmall.jpg", angle: randomAngle() },
				{ name: "hornSmall.jpg", angle: randomAngle() },
				{ name: "runawaySmall.jpg", angle: randomAngle() },
				{ name: "dpoySmall.jpg", angle: randomAngle() },
				{ name: "vocalsSmall.jpg", angle: randomAngle() },
				{ name: "shedSmall.jpg", angle: randomAngle() },
				{ name: "coverSmall.png", angle: randomAngle() }
			],
			viewedPolaroids: []
		};
	}

	viewPolaroid = name => {
		const { stackedPolaroids, viewedPolaroids } = this.state;
		const index = _.findIndex(stackedPolaroids, p => p.name === name);
		const image = stackedPolaroids[index];
		stackedPolaroids.splice(index, 1);
		this.setState({
			viewedPolaroids: [...viewedPolaroids, image],
			stackedPolaroids
		});
	};

	render() {
		const { viewedPolaroids, stackedPolaroids } = this.state;
		return (
			<div className="section gallery-container">
				<h1 className="heading">Gallery</h1>
				{stackedPolaroids.length ? (
					<StackedGallery
						untouched={!viewedPolaroids.length}
						polaroids={stackedPolaroids}
						view={this.viewPolaroid}
					/>
				) : (
					<ViewedGallery polaroids={viewedPolaroids} />
				)}
			</div>
		);
	}
}

export default Gallery;
