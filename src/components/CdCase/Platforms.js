import React from "react"
import styled, { keyframes } from "styled-components"
import spotify from "../../images/logos/spotify.png"
import apple from "../../images/logos/appleMusic.png"
import bandcamp from "../../images/logos/bandcamp.png"
// import soundcloud from "../../images/logos/soundcloud.png"
import youtube from "../../images/logos/youtube.png"

const epAppleMusic = "https://music.apple.com/ca/artist/rose-red-youth/1458640768"
const epSpotify = "https://open.spotify.com/artist/2GnSTnxs3NcFhxJNOrSb92?si=x0SHXrk1S2KqJ4Xm4d1iBQ"
const epBandcamp = "https://roseredyouth.bandcamp.com"
// const epSoundcloud = "https://soundcloud.com/roseredyouth"
const epYoutube = "https://www.youtube.com/channel/UCwOLyxcAVrRVY6DIb96TJmg"

const fade = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`


const StyledDiv = styled.div`
	position: fixed;
	bottom: 0;
	right: 0;
	display: flex;
	align-items: center;
	animation: ${fade} 0.8s;
`

const StyledImg = styled.img`
	width: 30px;
	margin: 0 1em 1em 0;
	cursor: pointer;
`

const Platforms = () => (
	<StyledDiv>
		<a
			href={epSpotify} 
			target="_blank"
			rel="noopener noreferrer nofollow"
		>
			<StyledImg src={spotify} alt="Spotify Logo"/>
		</a>
		<a 
			href={epAppleMusic} 
			target="_blank"
			rel="noopener noreferrer nofollow"
		>
			<StyledImg src={apple} alt="Apple Music Logo"/>
		</a>
		<a
			href={epYoutube} 
			target="_blank"
			rel="noopener noreferrer nofollow"
		>
			<StyledImg src={youtube} alt="YouTube Logo"/>
		</a>
		<a
			href={epBandcamp} 
			target="_blank"
			rel="noopener noreferrer nofollow"
		>
			<StyledImg src={bandcamp} alt="Bandcamp Logo"/>
		</a>
	</StyledDiv>
)

export default Platforms
