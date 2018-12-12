import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Intro from "./components/Intro";
import DependsOnYou from "./components/DependsOnYou";
import DramaQueen from "./components/DramaQueen";
import SoMuchOfYourself from "./components/SoMuchOfYourself";

const Fullpage = () => (
	<div className="app">
		<Header />
		<Gallery />
		<Intro />
		<DramaQueen />
		<DependsOnYou />
		<SoMuchOfYourself />
	</div>
);

ReactDOM.render(<Fullpage />, document.getElementById("root"));
