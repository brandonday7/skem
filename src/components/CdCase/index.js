import React from "react"
import { Link } from 'react-router-dom';
import Platforms from "./Platforms"
import styled from 'styled-components'

import rryEp from "../../images/album-art/rryEp.jpg"
import iMissSummer from "../../images/album-art/ims.png"

import "../Header/header.css"
import "./cdCase.css"

const StyledHeading = styled.h2`
	text-decoration: none;
	font-family: "Anton";
	color: black;
	top: 0;
	right: 0;
	margin: 0.5em 1em;
	position: fixed;
`


const CdCase = () => (
	<div className="site-container black">	
		<Link to="/store">
			<StyledHeading>STORE</StyledHeading>
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