import React from "react"
import "./jukebox.css"

const PlatformLinks = () => (
	<div>
		<img 
			src={`${process.env.REACT_APP_BUCKET}itunesSmall.png`} 
			alt="Apple Music Logo"
			className="platform-link"
		/>
		<img 
			src={`${process.env.REACT_APP_BUCKET}spotifySmall.png`} 
			alt="Spotify Logo"
			className="platform-link"
		/>
	</div>
)

export default PlatformLinks