import React from "react"
import styled from "styled-components"
import "../i-miss-summer.css"

import danny from "../../../images/ims-photos/danny.jpg"
import mixMaster from "../../../images/ims-photos/mixMaster.JPG"

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

const StyledLine = styled.p`
	margin: 0;
	font-size: 120%;
`

const StyledImgContainer = styled.div`
	margin: 13em 0 0 1em;
`



const Daisy = () => (
	<StyledFullscreen>
		<div>
			<StyledTitle>Daisy</StyledTitle>	
			<StyledRow>	
				<div className="square">
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
				</div>
				<div className="square second-square">
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
				</div>
				<StyledImgContainer>
					<img className="ims-image big" alt="days" src={mixMaster}/>
					<img className="ims-image" alt="days" style={{transform: "translate(10em, -15em)"}} src={danny} />
				</StyledImgContainer>
			</StyledRow>
		</div>
	</StyledFullscreen>
)

export default Daisy