import React from "react"
import styled from "styled-components"
import "./i-miss-summer.css"

import IMissStatements from "./IMissStatements"

const Stack = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #121212;
`

const IMissSummer = () => {
	return (
		<Stack>
			<IMissStatements />			
		</Stack>
	)
}

export default IMissSummer