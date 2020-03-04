import React from "react"
import styled from "styled-components"
import "../i-miss-summer.css"

import days from "../../../images/ims-photos/days.jpg"
import ye from "../../../images/ims-photos/ye.png"

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
	width: 400px;

	@media (max-width: 750px) {
		transform: translate(-2em, 0em);
  }
`;

const StyledSecondaryImage = styled.img`
	transform: translate(-10em, 14em);
	width: 350px;
	
	@media (max-width: 1340px) {
		transform: translate(12em, -3em);
	}

	@media (max-width: 980px) {
		transform: translate(-3em, 4em);
	}
	
	@media (max-width: 750px) {
		transform: translate(5em, -2em);
  }
`;

const NostalgiaUltra = () => (
	<StyledFullscreen>
		<StyledTitle>Nostalgia Ultra</StyledTitle>	
		<StyledColumn>
			<StyledLyricsColumn>	
				<LyricsContainer>
					<StyledLine>Chlorine in our hair</StyledLine>
					<StyledLine>To snoring in our beds</StyledLine>
					<StyledLine>We had it made</StyledLine>
					<br />
					<StyledLine>Growing, going through pains</StyledLine>
					<StyledLine>Lauren moving away</StyledLine>
					<StyledLine>Or did you forget?</StyledLine>
					<br />
					<StyledLine>Four in the morning, that's ok</StyledLine>
					<StyledLine>If you got something to say</StyledLine>
					<StyledLine>I got a Mustang</StyledLine>
					<br />
					<StyledLine>Now go outside, oh no!</StyledLine>
					<br />
					<StyledLine>Driving home with</StyledLine>
					<StyledLine>Towers on my tongue</StyledLine>
					<StyledLine>So long, so anyway, so lifted up</StyledLine>
					<StyledLine>We were so loved</StyledLine>
					<StyledLine>Trying to go</StyledLine>
					<StyledLine>Faster on the run</StyledLine>
					<StyledLine>So long, so anyway... still catching up</StyledLine>
					<StyledLine>We were so wrong</StyledLine>
				</LyricsContainer>
				<LyricsContainer className="second-lyrics">
					<StyledLine>I was a loving son in the shade</StyledLine>
					<StyledLine>I was in touch with my faith</StyledLine>
					<StyledLine>It was a roadway</StyledLine>
					<br />
					<StyledLine>A sudden sunshine in the face</StyledLine>
					<StyledLine>Cause I'm running away</StyledLine>
					<StyledLine>Won't you validate me?</StyledLine>
					<br />
					<StyledLine>Fuzzy film pushing play</StyledLine>
					<StyledLine>When I saw what you made</StyledLine>
					<StyledLine>Maybe someday</StyledLine>
					<br />
					<StyledLine>Now go outside and grow your own!</StyledLine>
					<br />
					<StyledLine>Driving home with</StyledLine>
					<StyledLine>Towers on my tongue</StyledLine>
					<StyledLine>So long, so anyway, so lifted up</StyledLine>
					<StyledLine>We were so loved</StyledLine>
					<StyledLine>Trying to go</StyledLine>
					<StyledLine>Faster on the run</StyledLine>
					<StyledLine>So long, so anyway... still catching up</StyledLine>
					<StyledLine>We were so wrong</StyledLine>
				</LyricsContainer>
			</StyledLyricsColumn>
			<StyledImgContainer>
				<StyledPrimaryImage alt="days" src={days} />
				<StyledSecondaryImage alt="days" src={ye} />
			</StyledImgContainer>
		</StyledColumn>
	</StyledFullscreen>
)

export default NostalgiaUltra