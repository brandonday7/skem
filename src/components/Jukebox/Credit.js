import React from "react"
import "./jukebox.css"

const Credit = ({ name, site }) => (
	<a 
		href={site} 
		target="_blank" 
		rel="noopener noreferrer nofollow"
		className="return-link"
	>
		{name}
		<img 
			src={`${process.env.REACT_APP_BUCKET}Rose.png`} 
			className="rose-link"
			alt=""
		/>
	</a>
)

export default Credit