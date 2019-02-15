import React, { Component } from "react";
import Carousel from "../Carousel";
import DramaQueen from "../DramaQueen";
import DependsOnYou from "../DependsOnYou";
import SoMuchOfYourself from "../SoMuchOfYourself";
import "./carousel.css";

class Lyrics extends Component {
	render() {
		return (
			<Carousel>
				<DramaQueen />
				<DependsOnYou />
				<SoMuchOfYourself />
			</Carousel>
		);
	}
}

export default Lyrics;
