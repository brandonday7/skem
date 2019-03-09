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
				{ name: "ethanSmall.jpg", angle: randomAngle(), alt: "Ethan Gans Rose Red Youth" },
				{ name: "keysSmall.jpg", angle: randomAngle(), alt: "Nicholas Vereshchak Rose Red Youth" },
				{ name: "hornSmall.jpg", angle: randomAngle(), alt: "Ryan Garbett Rose Red Youth" },
				{ name: "runawaySmall.jpg", angle: randomAngle(), alt: "Danny Paulson Rose Red Youth" },
				{ name: "dpoySmall.jpg", angle: randomAngle(), alt: "Depends on You Rose Red Youth" },
				{ name: "vocalsSmall.jpg", angle: randomAngle(), alt: "Brandon Day Rose Red Youth" },
				{ name: "shedSmall.jpg", angle: randomAngle(), alt: "Drama Queen Rose Red Youth" },
				{ name: "coverSmall.png", angle: randomAngle(), alt: "Rose Red Youth EP" }
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
		const { playReverse } = this.props
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
					<ViewedGallery polaroids={viewedPolaroids} playReverse={playReverse}/>
				)}
			</div>
		);
	}
}

export default Gallery;
