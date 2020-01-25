import React from "react"
import styled from "styled-components"
import "../i-miss-summer.css"

import ethanKids from "../../../images/ims-photos/ethan-ims.jpg"
import sunshine from "../../../images/ims-photos/sunshine.png"


const StyledFullscreen = styled.div`
	width: 100vw;
	min-height: 100vh;
	background-color: #e8e9eb;
	padding: 2em 3em
`

const StyledTitle = styled.h1`
	font-size: 300%;
	max-width: 90vw;
`

const StyledLine = styled.p`
	margin: 0;
	font-size: 120%;
`

const StyledImgContainer = styled.div`
	margin: 2vw 0 0 18vw;
`


const YouWereRaisedInTheSunshine = () => (
	<StyledFullscreen>
		<div>
			<StyledTitle>You Were Raised in the Sunshine</StyledTitle>	
			<div className="row">	
				<div className="square">
					<StyledLine>Hold me honey, oh you're all mine</StyledLine>
					<StyledLine>Thinking of me, only sometimes</StyledLine>
					<StyledLine>You be brave on the front lines</StyledLine>
					<StyledLine>You were raised,</StyledLine>
					<StyledLine>Raised in the sunshine</StyledLine>
				</div>
				<StyledImgContainer>
					<img className="ims-image" alt="days" src={sunshine} />
					<img className="ims-image" alt="days" style={{transform: "translate(-20em, 15em)", minWidth: "400px"}} src={ethanKids} />
				</StyledImgContainer>
			</div>
		</div>
	</StyledFullscreen>
)

export default YouWereRaisedInTheSunshine