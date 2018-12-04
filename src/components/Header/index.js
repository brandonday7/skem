import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./header.css";

class Header extends Component {
	render() {
		return (
			<div className="header-container">
				<ReactPlayer
					url="https://s3.us-east-2.amazonaws.com/autzu-team/drums.mp4"
					playing
					muted
					loop
					width="100vw"
					height="100vh"
				/>
				<div className="absolute">
					<div className="title-container">
						<p className="header-title large">SKEM</p>
						<p className="header-title medium">Record_087</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
