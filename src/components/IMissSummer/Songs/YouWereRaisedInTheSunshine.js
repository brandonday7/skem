import React from "react"
import styled from "styled-components"
import "../i-miss-summer.css"

import ethanKids from "../../../images/ims-photos/ethan-ims.jpg"
import sunshine from "../../../images/ims-photos/sunshine.png"


const StyledFullscreen = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #e8e9eb;
	padding: 2em 3em
`

const StyledTitle = styled.h1`
	font-size: 300%;
`

const StyledRow = styled.div`
	display: flex;
`

const StyledLine = styled.p`
	margin: 0;
	font-size: 120%;
`

const StyledImage = styled.img`
	position: absolute;
	width: 20vw;
`

const StyledImgContainer = styled.div`
	margin: 0vw 0 0 28vw;
`


const YouWereRaisedInTheSunshine = () => (
	<StyledFullscreen>
		<div>
			<StyledTitle>You Were Raised in the Sunshine</StyledTitle>	
			<StyledRow>	
				<div className="square">
					<StyledLine>Hold me honey, oh you're all mine</StyledLine>
					<StyledLine>Thinking of me, only sometimes</StyledLine>
					<StyledLine>You be brave on the front lines</StyledLine>
					<StyledLine>You were raised,</StyledLine>
					<StyledLine>Raised in the sunshine</StyledLine>
				</div>
				<StyledImgContainer>
					<StyledImage alt="days" src={sunshine} />
					<StyledImage alt="days" style={{transform: "translate(-25vw, 15vw)", width: "30vw"}} src={ethanKids} />
				</StyledImgContainer>
			</StyledRow>
		</div>
	</StyledFullscreen>
)

export default YouWereRaisedInTheSunshine