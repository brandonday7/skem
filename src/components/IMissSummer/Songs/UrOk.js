import React from "react"
import styled from "styled-components"
import "../i-miss-summer.css"

import urOk from "../../../images/ims-photos/ur-ok.JPG"
import nick from "../../../images/ims-photos/nick.jpg"


const StyledFullscreen = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #e8e9eb;
	padding: 2em 3em;
`

const StyledTitle = styled.h1`
	font-size: 300%;
	max-width: 90vw;
`

const StyledRow = styled.div`
	display: flex;
`

const StyledColumn = styled.div`
	display: flex;

  @media (max-width: 900px) {
		flex-direction: column;
  }
`;

const StyledLine = styled.p`
	margin: 0;
	font-size: 120%;
`

const StyledImgContainer = styled.div`
  @media (max-width: 900px) {
		margin-top: 1em;
		margin-left: 0;
  }	
`

const StyledBase = styled.img`
	position: absolute;

  @media (max-width: 900px) {
		position: inherit;
  }	
`;

const StyledFloater = styled.img`
	position: absolute;
	transform: translate(15em, 15em);

	  @media (max-width: 900px) {
		position: inherit;
		transform: translate(-2em, -2em);
  }	
`;


const UrOk = () => (
	<StyledFullscreen>
		<StyledTitle>Ur ok</StyledTitle>
		<StyledColumn>
			<StyledRow>
				<div className="square">
					<StyledLine>I'll jump</StyledLine>
					<StyledLine>But you first</StyledLine>
					<StyledLine>I'm scared</StyledLine>
					<StyledLine>But I swear nothing's worse</StyledLine>
					<StyledLine>I overshare</StyledLine>
					<StyledLine>There, there</StyledLine>
					<StyledLine>Got my things in your purse</StyledLine>
					<StyledLine>I know, I know</StyledLine>
					<StyledLine>I'm the worst</StyledLine>
					<br />
					<StyledLine>Ur ok, ok now</StyledLine>
					<StyledLine>Ur ok, ok now</StyledLine>
					<StyledLine>And you got nothing to say now</StyledLine>
					<StyledLine>Ur ok, ok now</StyledLine>
					<br />
					<StyledLine>Knuckles are bloody</StyledLine>
					<StyledLine>Can't cry but it hurts</StyledLine>
					<StyledLine>You're not like the boys</StyledLine>
					<StyledLine>Tell me I'm funny</StyledLine>
					<StyledLine>Me, I'm lovely</StyledLine>
					<StyledLine>Me, tell me what I deserve</StyledLine>
					<StyledLine>I felt it but I ain't heard</StyledLine>
					<StyledLine>We're so self-assured</StyledLine>
				</div>
				<div className="square second-square">
					<StyledLine>Ur ok, ok now</StyledLine>
					<StyledLine>Ur ok, ok now</StyledLine>
					<StyledLine>And you got nothing to say now</StyledLine>
					<StyledLine>It's not funny, ok now??</StyledLine>
					<StyledLine>Ur ok, ok now</StyledLine>
					<br />
					<StyledLine>You're enough</StyledLine>
					<StyledLine>Just knowing you showed up</StyledLine>
					<StyledLine>You burn like a sun</StyledLine>
					<StyledLine>Like that could be anyone</StyledLine>
					<StyledLine>I miss the bus</StyledLine>
					<StyledLine>Been busy growing up</StyledLine>
					<StyledLine>You and your shoes are undone</StyledLine>
					<StyledLine>Screaming I could be anyone</StyledLine>
					<StyledLine>Baby, I could be anyone</StyledLine>
					<br />
					<StyledLine>Ur ok, ok now</StyledLine>
					<StyledLine>Ur ok, ok now</StyledLine>
					<StyledLine>And you got nothing to say now</StyledLine>
					<StyledLine>It's not funny, ok now??</StyledLine>
					<StyledLine>I love you, ur ok now</StyledLine>
					<StyledLine>Ur ok, ok now</StyledLine>
				</div>
			</StyledRow>
			<StyledImgContainer>
				<StyledBase className="ims-image big" alt="days" src={nick} />
				<StyledFloater className="ims-image" alt="days" src={urOk} />
			</StyledImgContainer>
		</StyledColumn>
	</StyledFullscreen>
)

export default UrOk