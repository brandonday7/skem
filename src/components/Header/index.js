import React, { Component } from "react";
import "./header.css";

class Header extends Component {
	render() {
		return (
			<div className="video-container">
				<video className="video" loop autoPlay muted playsinline>
					<source
						src={`${process.env.REACT_APP_BUCKET}steady.mp4`}
						type="video/mp4"
					/>
				</video>
				<div className="absolute">
					<div className="title-container">
						<h1 className="header-title">Rose Red Youth</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
