import React from "react";
import "./gallery.css";

const Polaroid = ({ src, view, unviewed, angle }) => (
	<img
		onClick={() => view(src)}
		className={`${unviewed ? "unviewed" : ""} polaroid`}
		style={
			unviewed ? { transform: `rotate(${angle}deg)`, maxHeight: "50vh" } : {}
		}
		src={`https://s3.amazonaws.com/roseredbucket/${src}`}
		alt="Not Available"
	/>
);

export default Polaroid;
