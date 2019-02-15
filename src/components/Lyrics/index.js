import React, { Component } from "react";
import Carousel from "../Carousel";
import DramaQueen from "../DramaQueen";
import DependsOnYou from "../DependsOnYou";
import SoMuchOfYourself from "../SoMuchOfYourself";
import "./carousel.css";

import styled from 'styled-components'

const StyledDiv = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({color}) => color};
`

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
