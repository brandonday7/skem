import React from "react"
import "./jukebox.css"

const Button = ({ name, src, myTurn, onClick }) => (
	<img 
		src={src} 
		alt={name}
		className={`${name} ${myTurn(name)}`}
		onClick={onClick}
	/>
)

export default Button