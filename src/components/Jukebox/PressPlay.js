import React from "react"
import styled from "styled-components"
import Instructions from "../Instructions"

const StyledDiv = styled.div`
	position: absolute;
	transform: translate(9.6em, -24em);
	z-index: 1;
`

const PressPlay = () => (
	<StyledDiv>
		<Instructions label="PRESS PLAY" color="white" size={150}/>
	</StyledDiv>
)

export default PressPlay