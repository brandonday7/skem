import React from "react"
import { Link } from 'react-router-dom';
import Platforms from "./Platforms"
import styled from 'styled-components'

import rryEp from "../../images/album-art/rryEp.jpg"
import iMissSummer from "../../images/album-art/ims.png"

import "../Header/header.css"
import "./cdCase.css"

const StyledHeading = styled.p`
	font-size: 180%;
	text-decoration: none;
	font-family: "Roslindale";
	src: url("../../fonts/RoslindaleText-Regular.woff") format("woff");
	color: black;
	top: 0;
	right: 0;
	margin: 0.5em 0.5em;
	position: absolute;
	color: ${({ main }) => main ? '#888' : 'transparent'};
	transform: ${({ main }) => main ? 'translate(3px, -3px)' : 'none'};
	-webkit-text-stroke: 1.2px #888;
	
	&:hover {
		color: ${({ main }) => main ? '#AAA' : 'transparent'};
		-webkit-text-stroke: 1.2px #AAA;
		transition: 0.7s;
	}
`


const CdCase = () => (
	<div className="site-container black">	
		<Link to="/store">
			<div>
				<StyledHeading main>Store</StyledHeading>
				<StyledHeading>Store</StyledHeading>
			</div>
		</Link>
		<div className="artwork-container">
			<Link to="/imisssummer">
				<img alt="imisssummer" className="album-art" src={iMissSummer} />
			</Link>
			<Link to="/ep">
				<img alt="rry" className="album-art" src={rryEp} />
			</Link>
		</div>
		<Platforms />
	</div>
)


export default CdCase
