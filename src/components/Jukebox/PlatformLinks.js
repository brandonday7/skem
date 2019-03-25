import React from "react"
import "./jukebox.css"

const PlatformLinks = ({ link, platform="spotify" }) => (
		<a 
			href={link}
			target="_blank"
			rel="noopener noreferrer nofollow"
		>
			<img 
				src={`${process.env.REACT_APP_BUCKET}${platform}Small.png`} 
				alt="Streaming Logo"
				className="platform-link"
			/>
		</a>
)

export default PlatformLinks