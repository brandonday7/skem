import React from "react";
import "./gallery.css";

const Polaroid = ({ src, view }) => (
	<img
		onClick={() => view(src)}
		className="polaroid"
		src={`https://s3.amazonaws.com/roseredbucket/${src}`}
		alt="Not Available"
	/>
);

export default Polaroid;
