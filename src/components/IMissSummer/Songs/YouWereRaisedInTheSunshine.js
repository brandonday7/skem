import React from "react";
import styled from "styled-components";
import "../i-miss-summer.css";

import ethanKids from "../../../images/ims-photos/ethan-ims.jpg";
import sunshine from "../../../images/ims-photos/sunshine.png";


const StyledFullscreen = styled.div`
	width: 100vw;
	min-height: 100vh;
	background-color: #e8e9eb;
	padding: 2em 3em;


  @media (max-width: 500px) {
		padding: 2em 1em;
  }	
`;

const StyledTitle = styled.h1`
	font-size: 300%;
	max-width: 90vw;
`

const StyledLine = styled.p`
	margin: 0;
	font-size: 120%;
`;

const StyledImgContainer = styled.div`
	margin-top: 2em;
	margin-left: 6em;

  @media (max-width: 900px) {
		margin-top: 1em;
		margin-left: 0;
  }	
`;

const StyledColumn = styled.div`
	display: flex;

  @media (max-width: 900px) {
		flex-direction: column;
  }
`;

const StyledBase = styled.img`
	position: absolute;

  @media (max-width: 900px) {
		position: inherit;
  }	
`;

const StyledFloater = styled.img`
	position: absolute;
	transform: translate(15em, 13em);

	  @media (max-width: 900px) {
		position: inherit;
		transform: translate(-2em, -2em);
  }	
`;


const YouWereRaisedInTheSunshine = () => (
	<StyledFullscreen>
	<StyledTitle>You Were Raised in the Sunshine</StyledTitle>	
		<StyledColumn>
		<div>
			<div className="row">	
				<div className="square">
					<StyledLine>Hold me honey, oh you're all mine</StyledLine>
					<StyledLine>Thinking of me, only sometimes</StyledLine>
					<StyledLine>You be brave on the front lines</StyledLine>
					<StyledLine>You were raised,</StyledLine>
					<StyledLine>Raised in the sunshine</StyledLine>
				</div>
			</div>
			</div>
			<StyledImgContainer>
				<StyledBase className="ims-image" alt="danny" src={sunshine} />
				<StyledFloater className="ims-image big" alt="ethan-kids" src={ethanKids} />
			</StyledImgContainer>
		</StyledColumn>
	</StyledFullscreen>
)

export default YouWereRaisedInTheSunshine