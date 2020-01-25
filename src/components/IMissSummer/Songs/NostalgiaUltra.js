import React from "react"
import styled from "styled-components"
import "../i-miss-summer.css"

import kids from "../../../images/ims-photos/kids.jpg"

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
	width: 25vw;
`

const StyledImgContainer = styled.div`
	margin: 0vw 0 0 5vw;
`

const NostalgiaUltra = () => (
	<StyledFullscreen>
		<div>
			<StyledTitle>Nostalgia Ultra</StyledTitle>	
			<StyledRow>	
				<div className="square">
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
				</div>
				<div className="square">
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
				</div>
				<StyledImgContainer>
					<StyledImage alt="days" src={kids} />
					<StyledImage alt="days" style={{transform: "translate(20vw, 15vw)"}} src={kids} />
				</StyledImgContainer>
			</StyledRow>
		</div>
	</StyledFullscreen>
)

export default NostalgiaUltra