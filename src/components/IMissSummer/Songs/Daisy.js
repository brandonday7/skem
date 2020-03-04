import React from "react"
import styled from "styled-components"
import "../i-miss-summer.css"

import danny from "../../../images/ims-photos/danny.jpg"
import mixMaster from "../../../images/ims-photos/mixMaster.JPG"

const StyledFullscreen = styled.div`
	width: 100vw;
	background-color: #e8e9eb;
	padding: 2em 2em;
`

const StyledTitle = styled.h1`
	font-size: 300%;
	max-width: 90vw;
`

const StyledColumn = styled.div`
	display: flex;

  @media (max-width: 980px) {
		flex-direction: column;
  }
`;

const StyledLyricsColumn = styled.div`
	display: flex;
	margin-right: 6em;

  @media (max-width: 600px) {
		flex-direction: column;
  }
`;

const LyricsContainer = styled.div`
	min-width: 300px;
`

const StyledLine = styled.p`
	margin: 0;
	font-size: 120%;
`

const StyledImgContainer = styled.div`
	margin-top: 2em;

  @media (max-width: 750px) {
		display: flex;
		flex-direction: column;
  }	
`;

const StyledPrimaryImage = styled.img`
	transform: translate(3em, 0em);
	width: 350px;

	@media (max-width: 750px) {
		transform: translate(-2em, 0em);
  }
`;

const StyledSecondaryImage = styled.img`
	transform: translate(-3em, -3em);
	width: 400px;
	
	@media (max-width: 1255px) {
		transform: translate(-2em, -1em);
	}

	@media (max-width: 980px) {
		transform: translate(-3em, 4em);
	}
	
	@media (max-width: 750px) {
		transform: translate(3em, -4em);
  }
`;


const Daisy = () => (
	<StyledFullscreen>
		<StyledTitle>Daisy</StyledTitle>
		<StyledColumn>
			<StyledLyricsColumn>
				<LyricsContainer>
					<StyledLine>Look alive, feeling dead</StyledLine>
					<StyledLine>Before sunrise, no I don't mind if the lights go red</StyledLine>
					<StyledLine>I fell asleep in the front seat</StyledLine>
					<StyledLine>In my longsleeve I was breathing</StyledLine>
					<StyledLine>Break in the seasons, I'm leaving</StyledLine>
					<br />
					<StyledLine>It would have been a long time in the sunshine</StyledLine>
					<br />
					<StyledLine>You've never woken me up</StyledLine>
					<StyledLine>Been hiding</StyledLine>
					<StyledLine>Undercovers like it's almost summer</StyledLine>
					<StyledLine>She's asking,</StyledLine>
					<StyledLine>"What's got you choking this up?"</StyledLine>
					<StyledLine>I'm an American movie scene but I'm not so young</StyledLine>
					<StyledLine>Ain't that close to love!</StyledLine>
					<StyledLine>Same as it ever was</StyledLine>
					<StyledLine>We're so hard to get</StyledLine>
					<StyledLine>Take it and post it up</StyledLine>
					<StyledLine>Just to see if you notice us</StyledLine>
					<StyledLine>I'm on again</StyledLine>
				</LyricsContainer>
				<LyricsContainer className="second-lyrics">
					<StyledLine>Looking back at it blinking</StyledLine>
					<StyledLine>So dazedly, unattainably</StyledLine>
					<StyledLine>It's a shame but we're sinking!</StyledLine>
					<StyledLine>Fell asleep watching movies</StyledLine>
					<StyledLine>It was hell but it was easy, to me</StyledLine>
					<StyledLine>All you ruin me</StyledLine>
					<br />
					<StyledLine>It could have been a long time in the sunshine</StyledLine>
					<br />
					<StyledLine>You've never woken me up</StyledLine>
					<StyledLine>Been hiding</StyledLine>
					<StyledLine>Undercovers like it's almost summer</StyledLine>
					<StyledLine>She's asking,</StyledLine>
					<StyledLine>"What's got you choking this up?"</StyledLine>
					<StyledLine>I'm an American movie scene but I'm not so young</StyledLine>
					<StyledLine>Ain't that close to love!</StyledLine>
					<StyledLine>Same as it ever was</StyledLine>
					<StyledLine>We're so hard to get</StyledLine>
					<StyledLine>Take it and post it up</StyledLine>
					<StyledLine>Just to see if you notice us</StyledLine>
					<StyledLine>I'm on again</StyledLine>
				</LyricsContainer>
			</StyledLyricsColumn>
			<StyledImgContainer>
				<StyledPrimaryImage alt="days" src={danny} />
				<StyledSecondaryImage alt="days" src={mixMaster} />
			</StyledImgContainer>
		</StyledColumn>
	</StyledFullscreen>
)

export default Daisy