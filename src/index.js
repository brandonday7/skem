import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Jukebox from "./components/Jukebox";

const Fullpage = () => (
	<div className="app">
		<Header />
		<Jukebox />
		<Gallery />
	</div>
);

ReactDOM.render(<Fullpage />, document.getElementById("root"));
