import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import DependsOnYou from "./components/DependsOnYou";

const Fullpage = () => (
	<div className="app">
		<Header />
		<Gallery />
		<DependsOnYou />
	</div>
);

ReactDOM.render(<Fullpage />, document.getElementById("root"));
