import React, { Component } from "react";
import Carousel from "../Carousel";
import DramaQueen from "../DramaQueen";
import DependsOnYou from "../DependsOnYou";
import SoMuchOfYourself from "../SoMuchOfYourself";

class Lyrics extends Component {
	render() {
		const { move, childIndex, movement, prevChildIndex, nextChildIndex } = this.props
		return (
				<Carousel 
					move={move} 
					movement={movement}
					childIndex={childIndex}
					prevChildIndex={prevChildIndex}
					nextChildIndex={nextChildIndex}
				>
					<DramaQueen />
					<DependsOnYou />
					<SoMuchOfYourself />
				</Carousel>
		);
	}
}

export default Lyrics;
