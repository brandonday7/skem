import React from "react"
import styled from "styled-components"
import "./i-miss-summer.css"

import IMissStatements from "./IMissStatements"
import Lyrics from "./Lyrics"
import VideoPanel from "./VideoPanel"

const Stack = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
`

const IMissSummer = ({ history }) => {
	return (
		<Stack className="i-miss-summer-container">
			<IMissStatements />		
			<Lyrics />
			<VideoPanel history={history} />
		</Stack>
	)
}

export default IMissSummer