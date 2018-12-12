import React, { Component } from "react";
import "./depends.css";
import { dependsLyrics } from "../../utils/lyrics.js";

class DependsOnYou extends Component {
	render() {
		return (
			<div className="depends-container">
				<h1 className="depends-heading">Depends on You</h1>
				<div className="lyrics-container">
					{dependsLyrics.split("").map((letter, index) => (
						<p className="lyrics">{letter}</p>
					))}
				</div>
			</div>
		);
	}
}

export default DependsOnYou;
