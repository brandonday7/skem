import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

ReactDOM.render(
	<div>
		<Header />
		<Gallery />
	</div>,
	document.getElementById("root")
);
