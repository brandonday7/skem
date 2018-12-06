import React, { Component } from "react";
import "./gallery.css";

class Gallery extends Component {
	render() {
		return (
			<div className="gallery-container">
				<h1 className="heading">Gallery</h1>
				<div className="image-container">
					<img
						className="gallery-image"
						src="https://s3.amazonaws.com/roseredbucket/albumArt.jpg"
						alt="Not Available"
					/>
					<img
						className="gallery-image"
						src="https://s3.amazonaws.com/roseredbucket/ethan_2.jpg"
						alt="Not Available"
					/>
					<img
						className="gallery-image"
						src="https://s3.amazonaws.com/roseredbucket/horn.jpg"
						alt="Not Available"
					/>
					<img
						className="gallery-image"
						src="https://s3.amazonaws.com/roseredbucket/living_room_1.jpg"
						alt="Not Available"
					/>
					<img
						className="gallery-image"
						src="https://s3.amazonaws.com/roseredbucket/vocals.jpg"
						alt="Not Available"
					/>
					<img
						className="gallery-image"
						src="https://s3.amazonaws.com/roseredbucket/danny_ethan.jpg"
						alt="Not Available"
					/>
				</div>
			</div>
		);
	}
}

export default Gallery;
