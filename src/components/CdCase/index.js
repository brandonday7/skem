import React, { Component } from "react"
import styled, { keyframes } from "styled-components"
import Instructions from "../Instructions"
import Platforms from "./Platforms"
import "./cdCase.css"

const fadeAway = keyframes`
	from {
		opacity: 1;
	}
	to {
		opacity: 0
	}
`

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`

const StyledContainer = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #faf4f8;
`

const StlyedDiv = styled.div`
	overflow: hidden;
	width: 65vw;
	cursor: pointer;
	animation: ${({ fadeOut }) => fadeOut ? fadeAway : fadeIn} 0.8s;

  @media (max-width: 700px) {
		width: 100vw;
  }
`

const StyledInstruction = styled.div`
	cursor: pointer;
`

class CdCase extends Component {
	constructor(props) {
		super(props)
		this.state = {
			playing: false,
			fadeOut: false,
			loaded: false
		}
	}

	componentDidMount() {
		const vid = document.getElementById("cd-case-vid")
		vid.oncanplay = () => this.setState({ loaded: true })
		vid.onended = () => {
			if (this.props.reverse) {
				this.reset()
			}
		}
	}

	reset = () => {
		this.setState({ playing: false }, this.props.playForward)
	}

	play = () => { 
		if (!this.state.playing) {
			const vid = document.getElementById("cd-case-vid")
			vid.play()
			this.setState({ playing: true }, this.wait)
		}
	}
	wait = () => setTimeout(this.fade, 5000)
	fade = () => this.setState({ fadeOut: true }, this.redirect)
	redirect = () => setTimeout(() => {
		this.props.playReverse()
		this.props.history.push("/ep")
	}, 800)

	render() {
		const { playing, fadeOut, loaded } = this.state
		const { reverse } = this.props
		let cdVid = reverse ? "cdCroppedReverse.mp4" : "cdCropped.mp4"
		return (
			<StyledContainer>
				<StlyedDiv fadeOut={fadeOut} onClick={this.play}>
					<video
						id="cd-case-vid"
						className={`cd-vid ${!loaded ? "invisible" : ""}`} 
						alt="Rose Red Youth EP CD Case"
						autoPlay={reverse ? true : false}
						muted
						playsInline
						src={`${process.env.REACT_APP_BUCKET}${cdVid}`}
					/>
	      </StlyedDiv>
      	<StyledInstruction /* onClick={() => !reverse && this.play()} */>
	      	<Instructions 
	      		blink={false} 
	      		label="Coming soon" 
	      		color={!playing && !reverse ? "black" : "#faf4f8"}
	      	/>
	      </StyledInstruction>
    	  <Platforms />
      </StyledContainer>
		)
	}
}


export default CdCase