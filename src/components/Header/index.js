import React, { Component } from "react";
import "./header.css";

class Header extends Component {
	render() {
		return (
			<div className="video-container">
				<video className="video" loop autoPlay muted>
					<source
						src={`${process.env.REACT_APP_BUCKET}steady.mp4`}
						type="video/mp4"
					/>
				</video>
				<div className="absolute">
					<div className="title-container">
						<p className="header-title large">Rose Red Youth</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
