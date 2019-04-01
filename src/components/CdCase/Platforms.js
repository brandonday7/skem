import React from "react"
import styled, { keyframes } from "styled-components"
import spotify from "../../images/spotify.png"
import apple from "../../images/appleMusic.png"
import bandcamp from "../../images/bandcamp.png"
// import instagram from "../../images/instagram.png"

const epAppleMusic = ""
const epSpotify = ""
const epBandcamp = ""
// const instagramProf = "https://www.instagram.com/roseredyouthband/"

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
			href={epAppleMusic} 
			target="_blank"
			rel="noopener noreferrer nofollow"
		>
			<StyledImg src={apple} alt="Apple Music Logo"/>
		</a>
		<a
			href={epSpotify} 
			target="_blank"
			rel="noopener noreferrer nofollow"
		>
			<StyledImg src={spotify} alt="Spotify Logo"/>
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
