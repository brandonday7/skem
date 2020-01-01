import React from "react"
import styled from "styled-components"
import "./i-miss-summer.css"

import IMissStatements from "./IMissStatements"
import Lyrics from "./Lyrics"

const Stack = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #121212;
`

const IMissSummer = () => {
	return (
		<Stack className="i-miss-summer-container">
			<IMissStatements />		
			<Lyrics />
		</Stack>
	)
}

export default IMissSummer