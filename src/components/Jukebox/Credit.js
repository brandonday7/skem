import React from "react"

const Credit = ({ name, site }) => (
	<a 
		href={site} 
		target="_blank" 
		rel="noopener noreferrer"
		className="return-link">
		{name}
	</a>
)

export default Credit