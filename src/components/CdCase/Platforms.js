import React from "react"
import styled, { keyframes } from "styled-components"
import spotify from "../../images/spotify.png"
import apple from "../../images/appleMusic.png"
import bandcamp from "../../images/bandcamp.png"
import soundcloud from "../../images/soundcloud.png"
import youtube from "../../images/youtube.png"

const epAppleMusic = "https://itunes.apple.com/ca/album/rose-red-youth-ep/1458703611"
const epSpotify = "https://open.spotify.com/album/1d2uKzIftSCT0fZA7H6hbM?si=OKf467qCS3SijZJYiAhgkw"
const epBandcamp = "https://roseredyouth.bandcamp.com/releases"
const epSoundcloud = "https://soundcloud.com/roseredyouth/sets/rose-red-youth-ep"
const epYoutube = "https://www.youtube.com/watch?v=_dcZlkXmCFc&list=PLAg5H04gQ7hmN8-xVKBxK2TMF4LMFKCei&index=2&t=0s"

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
	width: 35px;
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
			href={epSoundcloud} 
			target="_blank"
			rel="noopener noreferrer nofollow"
		>
			<StyledImg src={soundcloud} alt="Soundcloud Logo"/>
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
