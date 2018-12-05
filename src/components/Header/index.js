import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./header.css";

class Header extends Component {
	render() {
		return (
			<div className="video-container">
				<video loop autoPlay muted>
					<source src="" type="video/mp4" />
				</video>
				<div className="absolute">
					<div className="title-container">
						<p className="header-title large">Rose Red Youth</p>
						<p className="header-title medium">Record_087</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
