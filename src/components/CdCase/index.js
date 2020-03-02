import React from "react"
import { Link } from 'react-router-dom';
import Platforms from "./Platforms"

import rryEp from "../../images/album-art/rryEp.jpg"
// import closeToYou from "../../images/album-art/closeToYou.jpg"
import iMissSummer from "../../images/album-art/ims.png"

import "../Header/header.css"
import "./cdCase.css"


const CdCase = () => (
	<div className="site-container black">				
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