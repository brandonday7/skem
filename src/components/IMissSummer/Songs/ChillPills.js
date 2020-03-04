import React from "react"
import styled from "styled-components"
import "../i-miss-summer.css"

import rock from "../../../images/ims-photos/rock.png"
import drums from "../../../images/ims-photos/drums.jpg"


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
	width: 350px;

	@media (max-width: 750px) {
		transform: translate(-2em, 0em);
  }
`;

const StyledSecondaryImage = styled.img`
	transform: translate(-2em, 5em);
	width: 400px;
	
	@media (max-width: 1470px) {
		transform: translate(10em, -3em);
	}

	@media (max-width: 1250px) {
		transform: translate(-5em, 6em);
	}
	
	@media (max-width: 750px) {
		transform: translate(3em, 0em);
	}
	
	@media (max-width: 400px) {
		transform: translate(3em, -1em);
  }
`;


const ChillPills = () => (
	<StyledFullscreen>
		<StyledTitle>Chill Pills</StyledTitle>
		<StyledColumn>
			<StyledLyricsColumn>
				<LyricsContainer>
					<StyledLine>You'd settle down if you tried</StyledLine>
					<StyledLine>I know your mouth pounds and your heart's dry</StyledLine>
					<StyledLine>And you've been keeping busy straightening</StyledLine>
					<StyledLine>That little tongue tie</StyledLine>
					<StyledLine>They say your're just fine</StyledLine>
					<br />
					<StyledLine>But I think you're dying</StyledLine>
					<StyledLine>I think you're choking on chill pills</StyledLine>
					<StyledLine>At night</StyledLine>
					<StyledLine>I think too much</StyledLine>
					<StyledLine>You're so absent-minded</StyledLine>
					<StyledLine>You take enough breaks to fix your face</StyledLine>
					<StyledLine>At night</StyledLine>
					<StyledLine>I think you're right</StyledLine>
					<StyledLine>You say you're unwinding</StyledLine>
					<StyledLine>You say you're just finding yourself</StyledLine>
					<StyledLine>And I,</StyledLine>
					<StyledLine>Feel afraid when it hurts to help</StyledLine>
					<StyledLine>What if you're lying?</StyledLine>
					<StyledLine>What if you're hiding</StyledLine>
					<StyledLine>From everybody else?</StyledLine>
				</LyricsContainer>
				<LyricsContainer className="second-lyrics">
					<StyledLine>You're scratching up at the sky</StyledLine>
					<StyledLine>You've been holding your breath for a long time</StyledLine>
					<StyledLine>You'd be making it all up if not for</StyledLine>
					<StyledLine>That little orange light</StyledLine>
					<StyledLine>They say you dress fine</StyledLine>
					<br />
					<StyledLine>But I think you're dying</StyledLine>
					<StyledLine>I think you're choking on chill pills</StyledLine>
					<StyledLine>At night</StyledLine>
					<StyledLine>I think too much</StyledLine>
					<StyledLine>You're so absent-minded</StyledLine>
					<StyledLine>You take enough breaks to fix your face</StyledLine>
					<StyledLine>At night</StyledLine>
					<StyledLine>I think you're right</StyledLine>
					<StyledLine>You say you're unwinding</StyledLine>
					<StyledLine>You say you're just finding yourself</StyledLine>
					<StyledLine>And I,</StyledLine>
					<StyledLine>Feel afraid when it hurts to help</StyledLine>
					<StyledLine>What if you're lying?</StyledLine>
					<StyledLine>What if you're hiding</StyledLine>
					<StyledLine>From everybody else?</StyledLine>
				</LyricsContainer>
			</StyledLyricsColumn>
			<StyledImgContainer>
				<StyledPrimaryImage alt="days" src={rock} />
				<StyledSecondaryImage alt="days" src={drums} />
			</StyledImgContainer>
		</StyledColumn>
	</StyledFullscreen>
)

export default ChillPills