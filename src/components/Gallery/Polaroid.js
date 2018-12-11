import React, { Component } from "react";
import "./gallery.css";

class Polaroid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			exiting: false
		};
	}

	animateAndView = () => {
		const { src, view } = this.props;
		setTimeout(() => view(src), 1000);
	};
	render() {
		const { src, unviewed, angle } = this.props;
		const { exiting } = this.state;
		return (
			<img
				onClick={() => {
					if (unviewed) {
						this.setState({ exiting: true }, () => this.animateAndView());
					}
				}}
				className={`${unviewed ? "unviewed" : ""} polaroid ${
					exiting ? "polaroid-exit" : ""
				}`}
				style={
					unviewed
						? { transform: `rotate(${angle}deg)`, maxHeight: "50vh" }
						: {}
				}
				src={`${process.env.REACT_APP_BUCKET}${src}`}
				alt="Not Available"
			/>
		);
	}
}

export default Polaroid;
