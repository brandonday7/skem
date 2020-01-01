import React, { Component } from "react"
import styled from "styled-components"
import "./i-miss-summer.css"

import YouWereRaisedInTheSunshine from "./Songs/YouWereRaisedInTheSunshine"
import NostalgiaUltra from "./Songs/NostalgiaUltra"
import UrOk from "./Songs/UrOk"
import Daisy from "./Songs/Daisy"
import ChillPills from "./Songs/ChillPills"

const StyledFullscreen = styled.div`
	width: 100vw;
	min-height: 100vh;
`

class Lyrics extends Component {
	
	render() {
		return (
			<StyledFullscreen>
				<YouWereRaisedInTheSunshine />
				<NostalgiaUltra />
				<UrOk />
				<Daisy />
				<ChillPills />
			</StyledFullscreen>
		)
	}
}

export default Lyrics