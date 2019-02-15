import React from "react"
import { buttonTranslations } from "./jukeboxHelpers.js"
import "./jukebox.css"

const Button = ({ name, src, myTurn, onClick }) => (
	<img 
		src={src} 
		alt={name}
		style={{
			transform: `translate(${buttonTranslations[name].x},${buttonTranslations[name].y})`,
			width: buttonTranslations[name].w
		}}
		className={myTurn(name)}
		onClick={onClick}
	/>
)

export default Button