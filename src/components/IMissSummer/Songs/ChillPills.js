import React from "react"
import styled from "styled-components"
import "../i-miss-summer.css"

import rock from "../../../images/ims-photos/rock.png"
import drums from "../../../images/ims-photos/drums.jpg"

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
	width: 30vw;
`

const StyledImgContainer = styled.div`
	margin: 3vw 0 0 20vw;
`



const ChillPills = () => (
	<StyledFullscreen>
		<div>
			<StyledTitle>Chill Pills</StyledTitle>	
			<StyledRow>	
				<div className="square">
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
				</div>

				<div className="square">
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
				</div>
				<StyledImgContainer>
					<StyledImage alt="days" src={rock} />
					<StyledImage alt="days" style={{transform: "translate(-20vw, 10vw)"}} src={drums} />
				</StyledImgContainer>
			</StyledRow>
		</div>
	</StyledFullscreen>
)

export default ChillPills