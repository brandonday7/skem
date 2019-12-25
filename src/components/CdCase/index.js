import React from "react"
import { Link } from 'react-router-dom';
import Platforms from "./Platforms"

import rryEp from "../../images/rryEp.jpg"
// import closeToYou from "../../images/closeToYou.jpg"
import iMissSummer from "../../images/iMissSummer.png"

import "../Header/header.css"
import "./cdCase.css"


const CdCase = () => (
	<div class="site-container black">				
		<div className="artwork-container">
			<img className="album-art" src={iMissSummer} />
			<Link to="/ep">
				<img className="album-art" src={rryEp} />
			</Link>
		</div>
		<Platforms />
	</div>
)


export default CdCase