import React from "react"
import styled, { keyframes } from "styled-components"

import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Jukebox from "./components/Jukebox";
import "./index.css"

const fade = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`

const StyledDiv = styled.div`	
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	animation: ${fade} 2s;
`


const Fullpage = ({ setReverse }) => (
	<StyledDiv>
		<Header />
		<Jukebox />
		<Gallery setReverse={setReverse}/>
	</StyledDiv>	
)

export default Fullpage