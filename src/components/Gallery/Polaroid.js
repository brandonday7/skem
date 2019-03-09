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
		setTimeout(() => view(src), 300);
	};
	render() {
		const { src, unviewed, angle, alt } = this.props;
		const { exiting } = this.state;
		return (
			<img
				onClick={() => {
					// !exiting so you can't exit 2 at once 
					if (unviewed && !exiting) {
						this.setState({ exiting: true }, () => this.animateAndView());
					}
				}}
				className={`${unviewed ? "unviewed" : "viewed"} polaroid ${
					exiting && "polaroid-exit"
				}`}
				style={
					unviewed
						? { transform: `rotate(${angle}deg)` }
						: {}
				}
				src={`${process.env.REACT_APP_BUCKET}${src}`}
				alt={alt}
			/>
		);
	}
}

export default Polaroid;
