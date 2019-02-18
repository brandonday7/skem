import React from "react"
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Jukebox from "./components/Jukebox";
import "./index.css"

const Fullpage = () => (
	<div className="app">
		<Header />
		<Jukebox />
		<Gallery />
	</div>	
)

export default Fullpage