import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Lyrics from "./components/Lyrics";

const Fullpage = () => (
	<div className="app">
		<Header />
		<Gallery />
		<Lyrics />
	</div>
);

ReactDOM.render(<Fullpage />, document.getElementById("root"));
