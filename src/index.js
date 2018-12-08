import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

const Fullpage = () => (
	<div className="app">
		<Header />
		<Gallery />
	</div>
);

ReactDOM.render(<Fullpage />, document.getElementById("root"));
