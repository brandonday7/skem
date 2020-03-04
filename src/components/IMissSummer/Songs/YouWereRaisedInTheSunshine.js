import React from "react";
import styled from "styled-components";
import "../i-miss-summer.css";

import ethanKids from "../../../images/ims-photos/ethan-ims.jpg";
import sunshine from "../../../images/ims-photos/sunshine.png";


const StyledFullscreen = styled.div`
	width: 100vw;
	background-color: #e8e9eb;
	padding: 2em 2em;
`;

const StyledTitle = styled.h1`
	font-size: 300%;
	max-width: 90vw;
`

const LyricsContainer = styled.div`
	min-width: 280px;
`

const StyledLine = styled.p`
	margin: 0;
	font-size: 120%;
`;

const StyledColumn = styled.div`
	display: flex;

	@media (max-width: 980px) {
		flex-direction: column;
	}
`;

const StyledImgContainer = styled.div`
	margin-top: 2em;
	min-height: 500px;

  @media (max-width: 700px) {
		display: flex;
		flex-direction: column;
  }	
`;

const StyledPrimaryImage = styled.img`
	width: 300px;
`;

const StyledSecondaryImage = styled.img`
	transform: translate(-3em, 4em);
	width: 400px;
	
	@media (max-width: 700px) {
		transform: translate(-2em, -2em);
  }
`;


const YouWereRaisedInTheSunshine = () => (
	<StyledFullscreen>
	<StyledTitle>You Were Raised in the Sunshine</StyledTitle>	
		<StyledColumn>
				<LyricsContainer>
					<StyledLine>Hold me honey, oh you're all mine</StyledLine>
					<StyledLine>Thinking of me, only sometimes</StyledLine>
					<StyledLine>You be brave on the front lines</StyledLine>
					<StyledLine>You were raised,</StyledLine>
					<StyledLine>Raised in the sunshine</StyledLine>
				</LyricsContainer>
			<StyledImgContainer>
				<StyledPrimaryImage alt="danny" src={sunshine} />
				<StyledSecondaryImage alt="ethan-kids" src={ethanKids} />
			</StyledImgContainer>
		</StyledColumn>
	</StyledFullscreen>
)

export default YouWereRaisedInTheSunshine