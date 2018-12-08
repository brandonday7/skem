import React, { Component } from "react";
import ViewedGallery from "./ViewedGallery";
import StackedGallery from "./StackedGallery";
import "./gallery.css";
import _ from "lodash";

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stackedPolaroids: [
				"albumArt.jpg",
				"ethan_2.jpg",
				"horn.jpg",
				"living_room_1.jpg",
				"vocals.jpg",
				"danny_ethan.jpg"
			],
			viewedPolaroids: []
		};
	}

	viewPolaroid = name => {
		const { stackedPolaroids, viewedPolaroids } = this.state;
		const index = _.findIndex(stackedPolaroids, pName => pName === name);
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
