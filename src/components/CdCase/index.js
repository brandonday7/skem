import React from "react"
import { Link } from 'react-router-dom';
import Platforms from "./Platforms"

import rryEp from "../../images/album-art/rryEp.jpg"
// import closeToYou from "../../images/album-art/closeToYou.jpg"
import iMissSummer from "../../images/album-art/iMissSummer.png"

import "../Header/header.css"
import "./cdCase.css"


const CdCase = () => (
	<div class="site-container black">				
		<div className="artwork-container">
			<img alt="imisssummer" className="album-art" src={iMissSummer} />
			<Link to="/ep">
				<img alt="rry" className="album-art" src={rryEp} />
			</Link>
		</div>
		<Platforms />
	</div>
)


export default CdCase