import React, { Component } from "react";
import ViewedGallery from "./ViewedGallery";
import StackedGallery from "./StackedGallery";
import "./gallery.css";
import _ from "lodash";
import { randomAngle } from "../../utils";

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stackedPolaroids: [
				{ name: "albumArt.jpg", angle: randomAngle() },
				{ name: "ethan_2.jpg", angle: randomAngle() },
				{ name: "horn.jpg", angle: randomAngle() },
				{ name: "living_room_1.jpg", angle: randomAngle() },
				{ name: "vocals.jpg", angle: randomAngle() },
				{ name: "danny_ethan.jpg", angle: randomAngle() }
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
