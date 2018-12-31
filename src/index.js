import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Lyrics from "./components/Lyrics";

const Fullpage = () => (
	<div className="app">
		<Header />
		<Lyrics />
		<Gallery />
	</div>
);

ReactDOM.render(<Fullpage />, document.getElementById("root"));
