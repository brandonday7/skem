import React from "react"
import { Link } from 'react-router-dom';
import Platforms from "./Platforms"
import styled from 'styled-components'

import rryEp from "../../images/album-art/rryEp.jpg"
import iMissSummer from "../../images/album-art/ims.png"

import "../Header/header.css"
import "./cdCase.css"

const StyledHeading = styled.p`
	font-size: 175%;
	text-decoration: none;
	font-family: "Roslindale";
	src: url("../../fonts/RoslindaleText-Regular.woff") format("woff");
	color: black;
	bottom: 0;
	left: 0;
	margin: 0.5em 0.5em;
	position: fixed;
	color: #d6a047;
	-webkit-text-stroke: 1px #c88246;
	
	&:hover {
		color: #df9211;
		transition: 0.5s;
	}
`


const CdCase = () => (
	<div className="site-container black">	
		{/* <Link to="/store">
			<StyledHeading>Store</StyledHeading>
		</Link> */}
		<div className="artwork-container">
			{/* <Link to="/imisssummer">
				<img alt="imisssummer" className="album-art" src={iMissSummer} />
			</Link> */}
			<Link to="/ep">
				<img alt="rry" className="album-art" src={rryEp} />
			</Link>
		</div>
		<Platforms />
	</div>
)


export default CdCase