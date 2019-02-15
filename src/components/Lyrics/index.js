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
				<StyledDiv color="#00b300">
					<p>HEY</p>
				</StyledDiv>
				<StyledDiv color="purple">
					<p>YO</p>
				</StyledDiv>
			</Carousel>
		);
	}
}

export default Lyrics;
